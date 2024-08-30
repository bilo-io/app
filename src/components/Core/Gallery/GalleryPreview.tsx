/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IGallery } from '@vision/core';
import { IProjectResource, IResource } from '@vision/core/lib/models/resource';
import { Async, Button, Icon, IconName, Spinner, Typography, createDefaultGallery } from 'components/Core';
import { useAppTheme, useHover, useProjectId, useTranslations } from 'hooks';
import useDevice from 'hooks/use-device';
import _ from 'lodash';
import { AsyncData, SliceType } from 'models/store';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { log } from 'utils/logger';

interface GalleryPreviewProps {
  id: SliceType,
  title?: string;
  loading: boolean;
  gallery?: IGallery;
  galleries: IGallery[] | null;
  renderItem: (item: IResource, i?: number) => React.ReactElement
  onClickTitle?: () => void;
  onClickItem?: (item: any) => void;
  onRefresh?: () => void;

}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({
  galleries,
  id,
  loading,
  onClickTitle,
  onRefresh,
  renderItem,
  title,
}) => {
  const { theme } = useAppTheme();
  const device = useDevice();
  const displayedItems = device === 'mobile' ? 4 : 7;
  const { isHovered, onHoverStart, onHoverEnd } = useHover();
  // @ts-ignore
  const itemsToRender = _.flatten(galleries?.map((gallery) => gallery.media));
  const itemCountTotal = itemsToRender?.length || 0;
  const remainingItems = itemCountTotal - displayedItems;

  return (
    <div className="px-2 py-2 rounded-lg bg-transparent" style={{
      background: `${theme?.BACKGROUND}33`,
      height: 'calc(100% - 0rem)',

    }}>
      {title && (
        <div className={`flex flex-row items-center p-1 pr-2 rounded-lg justify-between mb-2 ${onClickTitle && 'cursor-pointer'}`} onClick={(): void | undefined => onClickTitle?.()}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
          style={{
            backgroundColor: isHovered ? `${theme?.PRIMARY}33` : `${theme?.BACKGROUND}11`,
          }}
        >
          {/* @ts-ignore */}
          <div className="flex flex-row items-center">
            <div className="mx-2">
              <Icon
                name={id as IconName}
                color={theme?.PRIMARY}
                imageClass='ml-0 mr-2'
                size={28}
              />
            </div>
            <Typography size="xl" color={onClickTitle ? theme?.PRIMARY : theme?.TEXT}>{title}</Typography>
          </div>
          <FontAwesome name="link" style={{ color: theme?.PRIMARY }} className="mr-2" />

        </div>
      )}
      {
        // @ts-ignore
        itemCountTotal === 0 ? (
          <div className="w-full absolute -ml-2 h-fit items-end flex flex-row justify-center mt-32">
            <Button
              className="mx-auto z-10"
              onClick={(): void => onClickTitle?.()}
              style={{
                backgroundColor: theme?.PRIMARY,
              }}
            >{title}&nbsp;→
            </Button>
          </div>
        ) : (
          null
        )
      }
      <Async
        margin={''}
        onRefresh={(): void => onRefresh?.()}
        isLoading={loading}
        loader={
          <Spinner color={theme?.PRIMARY} />
        }>
        <div className="flex h-fit mb-2 flex-row flex-wrap w-full relative px-4">
          {
            // @ts-ignore
            itemsToRender.slice(0, displayedItems)?.map(
              (item: any, i: number) => (
                <div key={i} className="w-fit h-fit mb-2 p-0 hover:text-primary">
                  {renderItem(item, i)}
                </div>
              ),
            )
          }
        </div>
      </Async>
      {/* Remaining Items */}
      <div className="absolute w-full bottom-0 flex items-center justify-center">
        {
          remainingItems > 0 ? (
            <div
              className="absolute bottom-2 flex flex-row items-center justify-center w-fit px-4 border rounded-full h-8 cursor-pointer"
              onClick={(): void => onClickTitle?.()}
              style={{
                borderColor: theme?.PRIMARY,
              }}
            >
              <FontAwesome
                name="ellipsis"
                className="mr-4"
                style={{
                  color: theme?.PRIMARY,
                  fontSize: '1rem',
                  // marginTop: '1.7rem'
                }}
              />
              <Typography color={theme?.PRIMARY}>{'View more'}&nbsp;&nbsp;(<strong>{remainingItems}</strong>)</Typography>
              <div className="w-2" />
            </div>
          ) : (
            null
          )}
      </div>
    </div>
  );
};

export const GalleryPreviewWithImage = <T,>({
  list,
  slice,
  navToFeature,
  handleRefresh,
  onClickResource,
}: {
  list: AsyncData<(T & IProjectResource)[]>,
  slice: SliceType,
  navToFeature: (page?: SliceType, version?: '1' | '2', id?: string) => void,
  handleRefresh: (feature: SliceType) => void,
  onClickResource?: (slice: SliceType, item: IResource) => void
}): React.ReactElement => {
  const { t } = useTranslations();
  const projectId = useProjectId();

  return (
    <GalleryPreview
      id={slice}
      // @ts-ignore
      title={t.features[slice]}
      onClickTitle={(): void => navToFeature(slice, '1')}
      onRefresh={(): void => handleRefresh(slice)}
      // @ts-ignore
      galleries={createDefaultGallery(t.features[slice], list?.data || [], projectId as string)}
      loading={list.loading}
      renderItem={(item: any): React.ReactElement => (
        <GalleryImageView
          key={`${slice}-${item?.id}`}
          slice={slice}
          item={item}
          navToFeature={navToFeature}
          onClick={onClickResource}
        />
      )}
    />
  );
};

export const GalleryPreviewWithIcon = <T,>({
  list,
  slice,
  navToFeature,
  handleRefresh,
  onClickResource,
}: {
  list: AsyncData<(T & IProjectResource)[]>,
  slice: SliceType,
  navToFeature: (page?: SliceType, version?: '1' | '2', id?: string) => void,
  handleRefresh: (feature: SliceType) => void,
  onClickResource?: (slice: SliceType, item: IResource) => void
}): React.ReactElement => {
  const { t } = useTranslations();
  const projectId = useProjectId();

  return (
    <GalleryPreview
      id={slice}
      // @ts-ignore
      title={t.features[slice]}
      onClickTitle={(): void => navToFeature(slice, '1')}
      onRefresh={(): void => handleRefresh(slice)}
      // @ts-ignore
      galleries={createDefaultGallery(t.features[slice], list?.data || [], projectId as string)}
      loading={list.loading}
      renderItem={(item: any): React.ReactElement => (
        <GalleryIconView
          key={`${slice}-${item?.id}`}
          slice={slice}
          item={item}
          navToFeature={navToFeature}
          onClick={onClickResource}
        />
      )}
    />

  );
};


const GalleryImageView = ({
  item,
  slice,
  onClick,
  navToFeature,
}: {
  slice: SliceType,
  item: IProjectResource,
  onClick?: (slice: SliceType, item: IResource) => void,
  navToFeature: (page?: SliceType, version?: '1' | '2', id?: string) => void,
}): React.ReactElement => {
  const { theme } = useAppTheme();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();

  return (
    <div
      onClick={
        onClick
          ? (): void => onClick?.(slice, item)
          : (): void => navToFeature(slice, '1', item?.id as string)
      }
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="w-16 h-16 md:w-20 md:h-20 lg:h-24 xl:h-28 rounded-lg flex flex-row items-center mr-4 cursor-pointer border-4 border-transparent"
      style={{
        // @ts-ignore
        backgroundImage: `url(${item?.images?.[0]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderColor: isHovered ? theme?.PRIMARY : `${theme?.TEXT}66`
      }}
    />
  );
};

const GalleryIconView = ({
  item,
  slice,
  onClick,
  navToFeature,
}: {
  slice: SliceType,
  item: IProjectResource,
  onClick?: (slice: SliceType, item: IResource) => void,
  navToFeature: (page?: SliceType, version?: '1' | '2', id?: string) => void,
}): React.ReactElement => {
  const { theme } = useAppTheme();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();

  return (
    <div
      className="flex flex-row items-center w-fit mr-4 cursor-pointer"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={
        onClick
          ? (): void => onClick?.(slice, item)
          : (): void => navToFeature(slice, '1', item?.id as string)
      }
    >

      <div className="mr-2">
        <Icon color={isHovered ? theme?.PRIMARY : theme?.TEXT} name={slice as IconName} size={24} />
      </div>
      <Typography size={'md'} color={isHovered ? theme?.PRIMARY : theme?.TEXT}>{item?.name}</Typography>
    </div>
  );
};