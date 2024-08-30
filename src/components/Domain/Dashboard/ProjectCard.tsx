import { IProject } from '@vision/core';
import { Icon, Typography } from 'components/Core';
import { useAppTheme, useHover, useTranslations } from 'hooks';
import { isMobile } from 'hooks/use-device';
import React from 'react';
import FontAwesome from 'react-fontawesome';

interface ProjectCardProps {
  hasBorder?: boolean,
  onClick?: () => void,
  onEdit?: () => void,
  onDelete?: () => void,
  style?: React.CSSProperties | undefined
  project: IProject,
  appIcon?: string | any,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  hasBorder,
  onClick,
  onEdit,
  onDelete,
  style,
  project,
  appIcon
}) => {
  const { theme, name: themeName } = useAppTheme();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF44', color: theme?.TEXT,
        width: isMobile() ? '20rem!important' : '30rem!important'
      }}
      className="w-44 md:w-64 h-28 md:h-44 flex-none card card-1 mx-2 my-2 rounded-lg cursor-pointer flex flex-col items-center justify-center"
      onClick={() => {
        onClick?.();
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden" style={{
        background: `url(${project?.images?.thumbImage || appIcon})`,
        backgroundPosition: project?.images?.thumbAlign || 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className={'absolute w-full h-full bg-opacity-60 hover:bg-opacity-0 transition-all duration-500 ease-in-out'}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          style={{
            backgroundColor: isHovered ? '#00000000' : `${theme?.BACKGROUND}AA`,
          }}
        />
        {project?.images?.titleImage
          ? (
            <img src={project?.images.titleImage} className="w-4/6 m-auto h-auto" alt={''} />
          ) : (
            <Typography
              className="absolute left-0 top-4 z-100 w-full"
              variant={themeName}
              weight="600"
              align="center"
              size='lg'
            >
              {project?.name}
            </Typography>
          )
        }

      </div>
      <div className="absolute right-2 bottom-2 flex flex-row">
        <div className="p-2 hover:bg-primary cursor-pointer rounded-full mb-1" onClick={(e) => {
          onEdit?.();
          e.stopPropagation();
        }}>
          <Icon name="edit" color={theme?.TEXT_LIGHT} />
        </div>
        <div className="p-2 hover:bg-red-900 cursor-pointer rounded-full" onClick={(e) => {
          onDelete?.();
          e.stopPropagation();
        }}>
          <Icon name="delete" color={theme?.ERROR} />
        </div>
      </div>
    </div>
  );
};


export const AddProject = ({
  onClick,
}: {
  onClick: Function
}) => {
  const { theme } = useAppTheme();
  const { t } = useTranslations();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();

  return (
    <div className="w-44 md:w-64 h-28 md:h-44 flex-none mx-2 my-2 rounded-lg cursor-pointer bg-opacity-40 flex flex-col items-center justify-center border"
      onClick={() => onClick()}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: isHovered ? `${theme?.PRIMARY}33` : `${theme?.BACKGROUND}99`,
        border: `1px solid ${theme?.PRIMARY}`,
        borderColor: isHovered ? `${theme?.PRIMARY}` : `${theme?.PRIMARY}AA`,
        color: theme?.PRIMARY
      }}
    >
      <Typography className="-mt-2.5 mb-1" color={theme?.PRIMARY} style={{
        textShadow: `0px 0px 5px ${theme?.BACKGROUND}66`,
      }}>
        {t.projects.addProject}
      </Typography>
      <FontAwesome name="plus" className="mr-0 text-2xl text-inherit" />
    </div>
  );
};

export default ProjectCard;