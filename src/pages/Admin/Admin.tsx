import { IUser, IWorkspace } from '@vision/core';
import SEO from 'components/App/SEO';
import { Accordion, Button, Modal, ProgressBar, Spinner, Typography } from 'components/Core';
import { useToast } from 'components/Core/Toast/ToastProvider';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import { setWorkspaceData } from 'features/workspaces/workspacesSlice';
import { useAppTheme, useAppUser } from 'hooks';
import React, { useRef, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { detectEnv, isLocal } from 'utils/environment';
import { backupDB, initDB, restoreDB } from 'utils/firebase';
import { log } from 'utils/logger';

const collections = [
  'app',
  'features',
  'users',
  'workspaces',
  'projects',
  'locations',
  'characters',
  'creatures',
  'objects',
  'transports',
  'controls',
  'documents',
  'graphs',
  'dialogues',
  'segments',
];

const env = detectEnv();

export const Admin: React.FC = () => {
  const animInterval = 500;

  const divRef = useRef<HTMLDivElement>(null);
  const { theme, name: themeName } = useAppTheme();
  const dispatch = useAppDispatch();
  const apiWorkspaces = useApiWorkspaces();
  const { setAppUser } = useAppUser();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [isShowingModal, setIsShowingModal] = useState<boolean>(false);
  const [dbUpdate, setDbUpdate] = useState<{
    progress: number,
    action: 'init' | 'backup' | 'restore' | '',
    loading: boolean,
    collection: string,
    collections: string[]
  }>({
    action: '',
    collection: '',
    collections: [],
    loading: false,
    progress: 0
  });

  // #region HELPERS
  const getDbActionLabel = (): string => {
    switch (dbUpdate.action) {
      case 'init': return 'Initialising DB';
      case 'backup': return 'Backing up DB';
      case 'restore': return 'Restoring DB';
      default: return '';
    }
  };
  // #endregion

  // #region HANDLERS
  const handleSetUser = (user: IUser) => {
    // alert(`Log in as "${user?.name}"`)
    // @ts-ignore
    // apiUsers.set({ user })
    setAppUser(user);
    const workspace = apiWorkspaces?.list?.data?.find((value: IWorkspace) => value?.owner === user?.email);
    dispatch(setWorkspaceData(workspace));
    setTimeout(() => {
      navigate('/v1/projects');
    });
  };

  const handleDBProgress = (arg: {
    progress: number,
    collection: string
  }): void => {
    setDbUpdate((prev) => ({
      ...prev,
      // action: dbUpdate.action,
      collection: arg.collection,
      collections: [...prev.collections, arg.collection],
      progress: arg.progress,
    }));
  };

  const handleInitDB = (): void => {
    setIsShowingModal(true);
    setDbUpdate({
      action: 'init',
      collection: '',
      collections: [],
      loading: true,
      progress: 0,
    });

    addToast({
      body: <div>
        <Typography>
          Initialising Firestore DB
        </Typography>
      </div>,
      type: 'primary'
    });

    initDB(collections).then(() => {
      addToast({
        body: 'Database initialised',
        type: 'success',
      });
    }).catch((error) => {
      addToast({
        body: <div>
          <Typography>Failed to init DB initialised</Typography>
          <br />
          <Typography>
            <pre>
              <code>
                {JSON.stringify(error, null, 2)}
              </code>
            </pre>
          </Typography>
        </div>,
        type: 'error',
      });
    }).finally(() => {
      setIsShowingModal(false);
      setDbUpdate({
        action: '',
        collection: '',
        collections: [],
        loading: false,
        progress: 0,
      });
    });

  };

  const handleBackupDB = async (): Promise<void> => {
    setIsShowingModal(true);
    setDbUpdate({
      action: 'backup',
      collection: '',
      collections: [],
      loading: true,
      progress: 0,
    });

    try {
      const backupData = await backupDB(collections, handleDBProgress);


      // Get current date and time
      const dateTime = new Date().toISOString().replace(/[:.]/g, '-');
      const envName = detectEnv().envName;
      const filename = `Vision_DB_Backup_${envName}_${dateTime}.json`;

      // Create a blob of the backup data
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });

      // Create a link element
      const link = document.createElement('a');

      // Set the download attribute with the filename
      link.download = filename;

      // Create a URL for the blob and set it as the href attribute
      link.href = window.URL.createObjectURL(blob);

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      log.success('DB Backup: Success!');
      log(filename);
      // eslint-disable-next-line no-console
      console.log('=> data: \n', backupData);
      addToast({
        body: (
          <div>
            <Typography>DB Backup: Success</Typography>
          </div>
        ),
        type: 'success',
      });

    } catch (error) {
      log.error('DB Backup: Error');
      addToast({
        body: (
          <div>
            <Typography>DB Backup: Error</Typography>
            <br />
            <Typography>
              <pre>
                <code>{JSON.stringify(error, null, 2)}</code>
              </pre>
            </Typography>
          </div>
        ),
        type: 'error',
      });
    } finally {
      setIsShowingModal(false);
      setDbUpdate({
        action: '',
        collection: '',
        collections: [],
        loading: false,
        progress: 0,
      });
    }
  };

  // Example usage for restoreDB
  const handleRestoreDBFromFile = async (): Promise<void> => {
    // Create an input element for file upload
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    // Add an event listener to handle file selection
    input.addEventListener('change', async (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];

        // Read the file as text
        const reader = new FileReader();
        reader.onload = async () => {
          if (reader.result) {
            try {
              setIsShowingModal(true);
              setDbUpdate({
                action: 'restore',
                collection: '',
                collections: [],
                loading: true,
                progress: 0,
              });

              // Parse the JSON data from the file
              const backupData = JSON.parse(reader.result as string);

              // Restore the database using the parsed data
              await restoreDB(backupData);

              addToast({
                body: (
                  <div>
                    <Typography>DB Restore: Success</Typography>
                  </div>
                ),
                type: 'success',
              });

              console.log('Database restored successfully');
            } catch (error) {
              log.error('DB Restore: Error');
              addToast({
                body: (
                  <div>
                    <Typography>DB Restore: Error</Typography>
                    <br />
                    <Typography>
                      <pre>
                        <code>{JSON.stringify(error, null, 2)}</code>
                      </pre>
                    </Typography>
                  </div>
                ),
                type: 'error',
              });
              console.error('Error restoring database:', error);
            } finally {
              setIsShowingModal(false);
              setDbUpdate({
                action: '',
                collection: '',
                collections: [],
                loading: false,
                progress: 0,
              });
            }
          }
        };

        // Read the file
        reader.readAsText(file);
      }
    });

    // Programmatically trigger the file picker
    input.click();
  };
  // #endregion

  return (
    <div ref={divRef} className={`w-full h-full relative pt-12 md:pt-2 overflow-y-auto ${themeName}`}
      style={{
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${''})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
      {/* <BlurLayer theme={theme} /> */}

      <SEO
        data={{
          description: 'An overview of all your project elements',
          keywords: ['vision', 'ai', 'generate', 'games', 'design', 'projects'],
          title: 'Vision | Dashboard'
        }}
      />

      <div className="h-0 w-full" />
      <div className="px-4 hidden md:block">
        <Typography size="xl">Vision Admin</Typography>
      </div>

      <hr className="" />

      <Accordion
        isOpenDefault
        title={(
          <div className="flex flex-row items-center">
            <FontAwesome name="cogs" className="mr-2" />
            <Typography>Overview</Typography>
          </div>
        )}>
        <div className="p-4">
          <div>
            <Typography className="mr-2" size="lg">
              Environment:
            </Typography>
            <Typography weight="700" size="lg">
              {env.envName}
            </Typography>
          </div>

          <hr className="my-4 w-80" />

          <div>
            <Typography className="mr-2" size="md">
              APP URL:
            </Typography>
            <Typography weight="700" size="md" color={theme?.PRIMARY}>
              <a href={env.serverUrl} target='_blank' rel="noreferrer">
                {env.serverUrl}
              </a>
            </Typography>
          </div>

          <hr className="my-4 w-80" />

          <div>
            <Typography className="mr-2" size="md">
              API URL:
            </Typography>
            <Typography weight="700" size="md" color={theme?.PRIMARY}>
              <a href={env.siteUrl} target='_blank' rel="noreferrer">
                {env.siteUrl}
              </a>
            </Typography>
          </div>

          <hr className="my-4 w-80" />

          <div>
            <Typography className="mr-2" size="md">
              AUTH:
            </Typography>
            <Typography weight="700" size="md" color={theme?.PRIMARY}>
              <a href={env.serverUrl} target='_blank' rel="noreferrer">
                {env.firebase.authDomain}
              </a>
            </Typography>
          </div>
        </div>
      </Accordion>

      <hr />

      <Accordion isOpenDefault={isLocal} title={
        <div className="flex flex-row items-center">
          <FontAwesome name="database" className="mr-2" />
          <Typography>Database</Typography>
        </div>}>
        <div className='flex items-center justify-center'>
          {dbUpdate.loading && isShowingModal ? (
            <Modal isCloseButtonInverted isOpen onClose={() => setIsShowingModal(false)}>
              <div className="p-2.5 w-full" style={{
                backgroundColor: theme?.PRIMARY,
              }}>
                <Typography color={'#FFF'}>
                  {getDbActionLabel()}
                </Typography>
              </div>
              <div className='m-4 w-64'>
                <Spinner color={theme?.PRIMARY} />

                <ProgressBar interval={animInterval} value={dbUpdate.progress} />

                <hr className="mt-4" />
                <Accordion title={'Details'} isOpenDefault>
                  <div className="p-4">
                    <div className="my-2">
                      <Typography>
                        processing: <Typography color={theme?.PRIMARY}>
                          {dbUpdate.collection}
                        </Typography>
                      </Typography>
                    </div>

                    <br />

                    <div className="flex flex-col">
                      {collections.map((collection: string) => {
                        const hasCompleted = dbUpdate.collections.includes(collection);

                        return (
                          <div key={collection} className="flex flex-row items-center">
                            <FontAwesome name={hasCompleted ? 'check-circle' : 'circle'}
                              style={{ color: hasCompleted ? theme?.PRIMARY : theme?.TEXT_LIGHT }} />
                            <div className="ml-4">
                              <Typography color={hasCompleted ? theme?.PRIMARY : theme?.TEXT_LIGHT}>
                                {collection}
                              </Typography>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Accordion>
              </div>
            </Modal>
          ) : dbUpdate.loading && !isShowingModal ? (
            <div>
                <div className="p-2.5 w-full" style={{
                  backgroundColor: theme?.PRIMARY,
                }}>
                  <Typography color={'#FFF'}>
                    {getDbActionLabel()}
                  </Typography>
                </div>
                <ProgressBar interval={animInterval} value={dbUpdate.progress} />
            </div>
          ) : (
                <div className="w-full p-4 mt-6 flex flex-col md:flex-col space-x-0 space-y-4">
                  <div>
                    <Typography weight="700" size="lg">
                      Initialise DB
                    </Typography>
                    <br />
                    <Typography>
                      This should only be done when creating a new environment, to initialise the DB with all collections.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleInitDB} isDisabled>
                      Initialise DB
                    </Button>
                  </div>

                  <hr className="mb-4" />

                  <div>
                    <Typography weight="700" size="lg">
                      Backup DB
                    </Typography>
                    <br />
                    <Typography>
                      This will create a timestamped backup of the current database, and download it as a <code style={{ color: theme?.PRIMARY }}>.json</code> file.
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleBackupDB}>
                      Backup DB
                    </Button>
                  </div>

                  <hr className="mb-4" />

                  <div>
                    <Typography weight="700" size="lg">
                      Restore DB
                    </Typography>
                    <br />
                    <Typography>
                      This option should be used to upload an arbitrary database (a <code style={{ color: theme?.PRIMARY }}>.json</code> file) to the current environment.
                    </Typography>
                    <br />
                    <br />
                    <div style={{
                      backgroundColor: `${theme?.ERROR}44`,
                      border: `1px solid ${theme?.ERROR}`
                    }} className="p-4 rounded-lg bg-opacity-10 my-2">
                      <Typography>
                        <strong>NB:</strong> Please make sure to back up the current database, before restoring one from a <code style={{ color: theme?.PRIMARY }}>.json</code> file.
                      </Typography>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Button onClick={handleRestoreDBFromFile}
                      backgroundColor={theme?.ERROR}
                      style={{
                        backgroundColor: theme?.ERROR
                      }}>
                      Restore DB
                    </Button>
                  </div>

                  <hr className="mb-4" />
                </div>
          )}
        </div>
      </Accordion>

    </div>
  );
};

export default Admin;