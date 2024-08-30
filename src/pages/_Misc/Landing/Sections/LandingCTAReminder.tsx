import React from 'react';
import { Button, Typography } from 'components/Core';
import RandomBackground from 'components/Core/Random/RandomBackground';
import TypingAnimation from 'components/Core/TypingAnimation/TypingAnimation';
import Section from 'components/Domain/Landing/Section';
import { useAppLanguage, useAppTheme, useTranslations } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { ISection, sections } from '../Landing.utils';

export const LandingCTAReminder: React.FC = () => {
  const { name: themeName, theme } = useAppTheme();
  const { t } = useTranslations();
  const navigate = useNavigate();
  const { language } = useAppLanguage();

  const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
  const section = landingSections?.find((s: ISection) => s.type === 'cta-reminder') as ISection;

  return (
    <div>
      <RandomBackground hasBlur>
        <Section isCentered>

          <div className="flex flex-col items-center justify-center p-12 py-40">
            <div className="pt-12">
              <Typography size="2xl">
                <TypingAnimation texts={section.titles} />
              </Typography>
            </div>
            <br />
            <Typography>
              {section.description}
            </Typography>
            <br />
            <Button
              size="lg"
              backgroundColor={theme?.PRIMARY}
              className="mx-auto"
              onClick={section?.cta?.onClick}>
              <Typography size="md" color={'#FFF'}>{t.common.getStarted}</Typography>
            </Button>
          </div>
        </Section>
      </RandomBackground>
    </div>
  );
};

export default LandingCTAReminder;