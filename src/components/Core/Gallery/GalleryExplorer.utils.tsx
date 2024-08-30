import { IGallery } from '@vision/core';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const createDefaultGallery = <T,>(galleryType: string, data: T[] | null, projectId: string): IGallery[] => {
  if (data === null || data === undefined) return [];

  const mappedData = data?.map?.((item: T) => ({
    ...item,
    // @ts-ignore
    galleryId: item?.galleryId || 'Default',
  }));
  const groupedData = _.groupBy(mappedData
  // @ts-ignore
    ?.sort((a: T, b: T) => a?.name > b?.name ? 1 : a?.name < b?.name ? -1 : 0),
  'galleryId');
  const galleryKeys = Object.keys(groupedData).sort();
  // @ts-ignore
  const galleries: IGallery[] = galleryKeys?.map((key) => ({
    id: key,
    media: groupedData[key],

    name: key,

    // @ts-ignore
    projectId: groupedData[key]?.projectId,
    type: 'Character',
  }));

  return galleries as IGallery[];
};