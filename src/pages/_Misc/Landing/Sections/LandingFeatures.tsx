import { Button, Typography } from 'components/Core';
import Section from 'components/Domain/Landing/Section';
import { useAppLanguage, useAppTheme, useTranslations } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ISection, sections } from '../Landing.utils';

export const LandingFeatures: React.FC = () => {
  const { theme, name: themeName } = useAppTheme();
  const navigate = useNavigate();
  const { language } = useAppLanguage();
  const { t } = useTranslations();

  const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
  const section = landingSections?.find((s: ISection) => s.type === 'features') as ISection;

  return (
    <Section
      isCentered
      // isSecondary
      // variant={themeName}
    >
      <div className='h-12' />
      <div className='mt-0'>
        <Typography
          size="2xl">{section?.titles}</Typography>
      </div>
      <div className="w-full mx-auto pb-10 flex flex-col items-center">
        <div className="w-full h-fit py-8 flex flex-col md:flex-row items-center justify-between">
          {
            section?.items?.map((item: {
              image: string,
              name: string,
              text: string
            }) => (
              <div key={item.name} className="w-128 m-0 flex flex-col items-center justify-center">
                <img
                  src={item?.image}
                  className="w-48 h-auto hover:w-96 transition-all duration-700 ease-in-out"
                  alt="user"
                />
                <Typography
                  align="center" className='text-center my-6 w-80' size="lg">
                  {item.name}
                </Typography>
                <Typography size="md" align="center" className='w-64 text-justify'
                >{item.text}</Typography>
              </div>
            ))
          }
        </div>
        <Button style={{
          backgroundColor: theme?.PRIMARY
        }} onClick={() => navigate('/features')} size="lg">
          <Typography size="md" color={'#FFF'}>{t.landing.allFeatures}</Typography>
        </Button>
      </div>
    </Section>
  );
};

export default LandingFeatures;