import { setAppLanguage } from 'features/app/appSlice';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { SupportedLanguages } from '../data/translations';


export const useAppLanguage = (): {
  language: SupportedLanguages,
  setLanguage: (data: SupportedLanguages) => void
} => {

  const dispatch = useAppDispatch();

  const language = useAppSelector((state: RootState) => state.app.language);

  const setLanguage = (data: SupportedLanguages) => {
    dispatch(setAppLanguage(data));
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return {
    language,
    setLanguage,
  };
};

export default useAppLanguage;
