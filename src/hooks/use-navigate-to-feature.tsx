import { IProject, IWorkspace } from '@vision/core';
import { Typography } from 'components/Core';
import { useToast } from 'components/Core/Toast/ToastProvider';
import useApiProjects from 'features/projects/useApiProjects';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import { SliceType } from 'models/store';
import { useNavigate } from 'react-router-dom';

import { useAppTheme } from './use-app-theme';
import { useTranslations } from './use-translations';

export const useNavigateToFeature = (page?: SliceType, version?: '1'): {
  navToFeature: (page?: SliceType, version?: '1' | '2', id?: string) => void
} => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { t } = useTranslations();
  const { theme } = useAppTheme();

  const workspace = useApiWorkspaces().item?.data as IWorkspace;
  const project = useApiProjects().item?.data as IProject;

  const navToFeature = (page?: SliceType, version?: '1' | '2', id?: string):void => {
    const path = `/v${version}/${page}${id ? `/${id}` : ''}`;

    setTimeout(() => {
      console.log({
        projectId: project?.id,
        workspaceId: workspace?.id,
      });
      if (!workspace?.id) {
        addToast({
          body: (
            <div className="flex flex-row">
              {/* <Typography>{t.common?.warning}</Typography> */}
              <Typography color={theme?.TEXT}>{t.common?.warningRequireWorkspace}</Typography>
            </div>
          ),
          type: 'primary',
        });
        navigate('/v1/workspaces');
      } else if (!project?.id) {
        addToast({
          body: (
            <div className="flex flex-row">
              {/* <Typography>{t.common?.warning}</Typography> */}
              <Typography color={theme?.TEXT}>{t.common?.warningRequireProject}</Typography>
            </div>
          ),
          type: 'primary',
        });
        navigate('/v1/projects');
      } else if (!!project?.id && !!workspace?.id) {
        navigate(path);
      } else {
        addToast({
          body: (
            <div>
              <Typography>Unexpected error</Typography>
            </div>
          ),
          type: 'error'
        });
      }
    }, 200);
  };

  return {
    navToFeature
  };
};