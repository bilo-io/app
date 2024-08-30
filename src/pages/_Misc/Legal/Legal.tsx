/* eslint-disable no-return-assign */
import { AppTopBarPublic, SplitView } from 'components/App';
import { GalleryExplorer, Icon, Spinner, Typography, createDefaultGallery } from 'components/Core';
import Markdown from 'components/Core/Markdown/Markdown';
import TableOfContents from 'components/Core/TableOfContents/TableOfContents';
import { useAppTheme, usePageId } from 'hooks';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { documents } from './Legal.content';


export const Legal = (): React.ReactElement => {
  // #region HOOKS
  const navigate = useNavigate();
  const { name: themeName, theme } = useAppTheme();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null } | any | any[]>([]);
  const id = usePageId();
  // #endregion

  // #region STORE
  // #endregion

  // #region STATE
  const [activeItem, setActiveItem] = useState<{
    id: string,
    name: string;
    data: any[]
  } | null>(documents[0]);
  // const [activeItem, setActiveItem] = useState<ICharacter | null>(null)
  const [, setIsEditing] = useState<boolean>(false);
  // #endregion

  // #region HANDLERS
  const handleScrollTo = (ref: HTMLElement | null): void => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSetItem = (characterRef: any | null): void => {
    const character = _.clone(characterRef) as any;

    setActiveItem(null);
    setTimeout(() => {
      setIsEditing(true);
      setActiveItem(character);
      // setBreadcrumb(getCharacterName(character as ICharacter) as string)
      if (character === null) {
        navigate('/legal');
      } else {
        navigate(`/legal/${character?.id}`);
      }
    }, 10);
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (id && documents?.length > 0) {
      const matchedItem = documents?.find?.((c: any) => c?.id === id);

      const arg = _.clone(matchedItem) as any;
      handleSetItem(arg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // When the component mounts or when the sections array changes,
    // update the sectionRefs with new sectionIds
    activeItem?.data?.forEach?.((section: any) => {
      sectionRefs.current[section.name] = null;
    });


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // #endregion

  return (
    <>
      <AppTopBarPublic isCentered />
      <div className={'w-full h-full'}>
        <SplitView
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
          slice={'legal'}
          isShowingItem={!!activeItem}
          exploreView={(
            <GalleryExplorer<any>
              icon='legal'
              // loading={loading}
              // error={error}
              data={createDefaultGallery('Legal', documents || [], '')}
              // onRefresh={handleFetch}
              onSetItem={handleSetItem}
              heading={{ description: '', title: 'Documents' }}
              renderItem={(item: any) => (
                <div className="flex items-center">
                  <Icon
                    name="legal"
                    size={24}
                    imageClass={'mr-3'}
                    color={`${activeItem?.id === item.id
                      ? theme?.PRIMARY
                      : theme?.TEXT + '44'}`
                    }
                  />
                  <Typography color={activeItem?.id === item.id ? theme?.PRIMARY : ''}>
                    {item.name}
                  </Typography>
                </div>
              )}
            />
          )}
          contentView={(
            <div className={`page page-content ${themeName}`}>
              {activeItem?.data?.map((s: any) => (
                <div
                  key={s.name}
                  className="pb-12 pt-0 px-4"
                  style={{
                    backgroundColor: theme?.APP_BACKGROUND
                  }}
                  ref={
                    (element: HTMLElement | null) => sectionRefs.current[s.name] = element
                  }>
                  <Markdown content={s.data} themeName={themeName} />
                  <hr style={{ marginBottom: '2rem', marginTop: '2rem', opacity: 0.33 }} />
                </div>
              ))}
            </div>
          )}
          controlView={(
            <div className="p-4 h-full" style={{
              backgroundColor: theme?.BACKGROUND
            }}>
              <TableOfContents
                sections={activeItem?.data as any[]}
                onClick={(section: any) => {
                  handleScrollTo(sectionRefs.current[section.name]);
                }}
              />
            </div>
          )}
          emptyView={(
            <div className="w-full h-full flex items-center justify-center">
              <Spinner color={theme?.PRIMARY} />
            </div>
          )}
          isShowingControls={!!activeItem}
        />
      </div>
    </>
  );
};

export default Legal;
