import { Typography } from 'components/Core';
import Section from 'components/Domain/Landing/Section';
import { useAppLanguage, useAppTheme } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ISection, sections } from '../Landing.utils';

export const LandingBenefits: React.FC = () => {
  const { theme, name: themeName } = useAppTheme();
  const navigate = useNavigate();
  const { language } = useAppLanguage();

  const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
  const section = landingSections?.find((s: ISection) => s.type === 'benefits') as ISection;

  return (
    <Section isCentered>

      <div className='mt-12'>
        <Typography size="2xl">{section?.titles}</Typography>
      </div>
      <div className="w-full h-fit py-8 flex flex-col md:flex-row items-center justify-between">
        {
          section?.items?.map((item: {
            image: string,
            name: string,
            text: string
          }) => (
            <div key={`${item.name}`} className="w-80 m-8 flex flex-col items-center justify-center">
              <img
                src={item?.image}
                className="w-24 h-auto"
                alt="user"
              />
              <Typography align="center" className='text-center my-6 w-64' size="lg">
                {item.name}
              </Typography>
              <Typography size="md" align="center" className="text-justify">{item.text}</Typography>
            </div>
          ))
        }
      </div>
    </Section>
  );
};

export default LandingBenefits;