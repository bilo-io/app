import { Accordion, Typography } from 'components/Core';
import Section from 'components/Domain/Landing/Section';
import { useAppLanguage, useAppTheme } from 'hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ISection, sections, } from '../Landing.utils';

export const LandingFAQs: React.FC = () => {
  const { name: themeName, theme } = useAppTheme();
  const navigate = useNavigate();
  const { language } = useAppLanguage();

  const landingSections: ISection[] = sections(themeName, theme, navigate, language, []);
  const section = landingSections?.find((s: ISection) => s.type === 'faq');

  return (
    <Section isCentered>
      <div className="py-28">
        <Typography size="2xl">FAQs</Typography>
        <br />
        <br />
        <br />
        {section?.items?.map((faq: { question: string, answer: string }) => (
          <div key={faq.question} style={{
            color: theme?.TEXT
          }}>
            <Accordion title={
              <Typography color={theme?.TEXT}>
                {faq.question}
              </Typography>
            } openIcon='minus' closedIcon='plus'>
              <div className="pb-12">
                <Typography color={theme?.TEXT}>
                  {faq.answer}
                </Typography>
              </div>
            </Accordion>
            <hr />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LandingFAQs;