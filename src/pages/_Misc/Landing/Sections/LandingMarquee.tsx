import { Marquee } from 'components/Core';
import Section from 'components/Domain/Landing/Section';
import { useAppLanguage, useAppTheme } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ISection, sections } from '../Landing.utils';

export const LandingMarquee: React.FC = () => {
  const { theme, name: themeName } = useAppTheme();
  const navigate = useNavigate();
  const { language } = useAppLanguage();

  const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
  const section = landingSections?.find((s: ISection) => s.type === 'marquee') as ISection;

  return (
    <Section
      isSecondary
      variant={themeName}>
      <div key={'section-container-marquee'}
        className={'pt-12 mb-12 w-full flex flex-row items-center justify-center'}>
        <Marquee>
          <div className="w-full h-full flex flex-row items-center justify-center m-auto">
            {section?.items?.map((item: any, marqueeItemIndex: number) => (
              <div key={marqueeItemIndex} className="px-10 min-w-80 text-2xl">
                {/* <Typography size="xl" className="mr-80" align="left"> */}
                {item?.text}
                {/* </Typography> */}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </Section>
  );
};

export default LandingMarquee;