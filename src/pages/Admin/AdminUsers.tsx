import { IUser, IWorkspace } from '@vision/core';
import { Accordion, CompanyIcon, Typography } from 'components/Core';
import RoundAvatar from 'components/Core/Avatar/Avatar';
import { useApiUsers } from 'features/user/useApiUsers';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import { setWorkspaceData } from 'features/workspaces/workspacesSlice';
import { useAppTheme, useAppUser } from 'hooks';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';

export const AdminUsers: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { name: themeName } = useAppTheme();
  const dispatch = useAppDispatch();
  const apiUsers = useApiUsers();
  const apiWorkspaces = useApiWorkspaces();
  const { setAppUser } = useAppUser();
  const navigate = useNavigate();

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

  return (
    <div ref={divRef} className={`w-full h-full relative px-2 pt-12 md:pt-2 overflow-y-auto ${themeName}`}>
      <Typography size="xl">Admin Users</Typography>

      <Accordion title="Features">
        <br />
        <ul>
          <li>Manage: Leads, Users, Admins</li>
          <li>Name, providers, subscription, etc.</li>
          <li>Filtering</li>
          <li>Creating new user</li>
          <li>API: Custom</li>
          <li>Customer Service (AI management, inbox integration etc)</li>
          <li>API: Integrations</li>
        </ul>
      </Accordion>

      <Accordion title="Users">
        <div className="absolute">
          <div className="flex flex-row flex-wrap">
            {
              apiUsers?.list?.data?.map((user: IUser) => (
                <div key={user?.email} className={`flex flex-row items-center p-2 m-2 pr-4 border border-layout-border hover:border-primary rounded-lg cursor-pointer ${user?.isAdmin ? 'bg-primary bg-opacity-40' : ''}`}
                  onClick={() => handleSetUser(user)}>
                  <div className="relative">
                    <RoundAvatar url={user?.image as string} />
                    {/* <CompanyIcon
                code={user?.authMethod?.toLowerCase()}
                imgStyle={{ width: '1.3rem', marginRight: '0.25rem', position: 'absolute', bottom: '0', left: '2.5rem' }}
              /> */}
                  </div>
                  <div className="mr-4" />
                  <CompanyIcon
                    code={user?.authMethod?.toLowerCase()}
                    imgStyle={{ marginRight: '0.25rem', width: '1.3rem' }}
                  />
                  <div className="mr-4" />
                  <div className="flex flex-row items-center">
                    <div>{user?.email}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Accordion>

      <Accordion title="Leads">
        <div />
      </Accordion>
    </div>
  );
};

export default AdminUsers;