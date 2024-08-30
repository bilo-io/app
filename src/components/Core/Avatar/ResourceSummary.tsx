import { ICharacter, IControls, ICreature, IDialogue, IDocument, IGraph, ILocation, IObject, ITransport } from '@vision/core';
import { IResource } from '@vision/core/lib/models/resource';
import { SliceType } from 'models/store';
import React from 'react';
import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';
import Typography from '../Typography/Typography';
import { useAppTheme } from 'hooks';

interface ResourceSummaryProps {
  type: SliceType | IconName,
  item: IResource,
  size?: number
}

export const ResourceSummary: React.FC<ResourceSummaryProps> = ({
  type,
  item,
  size = 32
}) => {
  const { theme } = useAppTheme();

  const getGraphic = (type: SliceType | IconName, item: IResource): React.ReactElement | null => {
    let image: string;
    switch (type) {
      case 'character':
      case 'characters':
        image = (item as ICharacter)?.images?.[0] as string;
        return <img
          alt="character"
          className="rounded-full m-2"
          src={image}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
        />;

      case 'creature':
      case 'creatures':
        image = (item as ICreature)?.images?.[0] as string;
        return <img
          alt="creature"
          className="rounded-full m-2"
          src={image}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
        />;

      case 'location':
      case 'locations':
        image = (item as ILocation)?.images?.[0] as string;
        return <img
          alt="location"
          className="rounded-full m-2"
          src={image}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
        />;

      case 'object':
      case 'objects':
        image = (item as IObject)?.images?.[0] as string;
        return <img
          alt="object"
          className="rounded-full m-2"
          src={image}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
        />;

      case 'transport':
      case 'transports':
        image = (item as ITransport)?.images?.[0] as string;
        return <img
          alt="transport"
          className="rounded-full m-2"
          src={image}
          style={{
            height: `${size}px`,
            width: `${size}px`,
          }}
        />;


      case 'control':
      case 'controls':
      case 'dialogue':
      case 'dialogues':
      case 'document':
      case 'documents':
      case 'graph':
      case 'graphs':
      case 'segment':
      case 'segments':
        return <Icon size={size} name={type as IconName} />;

      default: return null;
    }
  };

  const getDescription = (type: SliceType | IconName, item: IResource): string => {
    switch (type) {
      case 'character':
      case 'characters':
        return (item as ICharacter)?.background?.occupation || '';

      case 'location':
      case 'locations':
        return (item as ILocation)?.lore || '';

      case 'document':
      case 'documents':
        return (item as IDocument)?.userPrompt || '';

      case 'dialogue':
      case 'dialogues':
        return (item as IDialogue)?.dateUpdated?.toLocaleString?.() || '';

      case 'graph':
      case 'graphs':
        return (item as IGraph)?.dateUpdated?.toLocaleString?.() || '';

      case 'control':
      case 'controls':
        return (item as IControls)?.dateUpdated?.toLocaleString?.() || '';

      default: return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className={'w-fit h-fit rounded-full'}>
        {getGraphic(type, item)}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Typography align='center' color={theme?.PRIMARY} size="xl">
          {item?.name}
        </Typography>


        <Typography align='center' color={theme?.TEXT_LIGHT} size="lg"
          className='flex flex-row items-center'>
          (
          <Icon name="folder" color={theme?.TEXT_LIGHT} />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          &nbsp;{item?.galleryId as string || ''}
          )
        </Typography>

        <hr className="w-full my-2 mb-4" />
        <Typography align='center' size="md">
          {getDescription(type, item)}
        </Typography>
      </div>
      <hr className="w-full my-2 mb-4" />
    </div>
  );
};

export default ResourceSummary;