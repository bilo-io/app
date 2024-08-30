import translations, { SupportedLanguages } from 'data/translations';

import useAppLanguage from './use-app-language';

// Define type for translations object
type TranslationsType = typeof translations;

// Define interface for translations
// interface Translations {
//     t: ITranslation; // Full ITranslation object
//     tView: string | any; // Specific translation string or value based on path
//     tAuth: ITranslation,
//     tFeatures: string | any; // Specific translation string or value based on path
//     tCore: {
//         create?: string;
//         search?: string;
//         searchResource?: (resource: string) => string;
//     } | undefined;
//     // Add more fields as needed based on your translation structure
// }

// Define function to safely access nested properties with dot notation
const getObjectPath = (obj: any, path?: string) => {
  if (!path) return obj;
  const keys = path.split('.');
  return keys.reduce((accumulator, currentValue) => accumulator?.[currentValue], obj);
};

// Export useTranslations hook
export const useTranslations = (path?: string) => {
  const { language } = useAppLanguage();

  // Ensure we have a valid language and translation object
  const t: TranslationsType[SupportedLanguages] | undefined = language && translations[language];

  // Use getObjectPath function to get nested translation value based on path
  const translation = getObjectPath(t, path);

  // Ensure commonMessages exist and provide type safety
  const commonMessages = t?.common;

  const result = {
    t: translations[language],

    tAuth: translations[language].auth,

    // Return specific translation based on path
    tCore: commonMessages,

    tFeatures: translations[language].features,
    // Return the entire ITranslation object
    tView: translation || path,
    // Add more fields as needed based on your translation structure
  };

  return result;
};
