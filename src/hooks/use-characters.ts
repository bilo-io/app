import { ICharacter } from '@vision/core';
import { AsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppSelector } from 'store/hooks';

export const useCharacters = ({
  projectId
}: {
    projectId: string
}): {
    data: ICharacter[],
    loading: boolean,
    error: any
} => {
  const characters: AsyncData<ICharacter[]> = useAppSelector((state: RootState) => state.characters.list);

  // const characters = galleries?.data?.map((g: any) => g) || [[]];

  // @ts-ignore
  return characters;
};