import { IProject } from '@vision/core';
import { RootState } from 'store';
import { useAppSelector } from 'store/hooks';

export const useAccountImages = ():string[] => {
  const projects = useAppSelector((state: RootState) => state?.projects?.list?.data);

  const thumbImages: string[] = projects?.map((p: IProject) => p?.images?.thumbImage) as string[] || [];
  const coverImages: string[] = projects?.map((p: IProject) => p?.images?.coverImage) as string[] || [];
  // const otherImages: string[][] = projects?.map((p: IProject) => p.images?.slides) as string[][]

  return [
    ...thumbImages,
    ...coverImages,
    // ..._.flatten(otherImages)
  ];
};