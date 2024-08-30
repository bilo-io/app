/* eslint-disable array-callback-return */
import { AppTopBarPublic } from 'components/App';
import { Footer } from 'components/App/Footer/Footer';
import { useAppTheme } from 'hooks';
import React, { useEffect } from 'react';


import LandingBenefits from './Sections/LandingBenefits';
import LandingCTAReminder from './Sections/LandingCTAReminder';
import LandingEarlyAccess from './Sections/LandingEaryAccess';
import LandingFAQs from './Sections/LandingFAQs';
import LandingFeatures from './Sections/LandingFeatures';
import LandingHeader from './Sections/LandingHeader';
import LandingMarquee from './Sections/LandingMarquee';
import LandingTestimonials from './Sections/LandingTestimonials';
import { redirect, useNavigate } from 'react-router-dom';

export const Landing: React.FC = () => {
  // #region HOOKS
  const { name: themeName } = useAppTheme();
  const navigate = useNavigate();
  // #endregion

  useEffect(() => {
    redirect('/v1/places');
  });

  return (
    <div className={`page ${themeName} text-center pt-12`} style={{}}>

      <AppTopBarPublic />

      <LandingHeader />
      <LandingBenefits />
      <LandingMarquee />
      <LandingFeatures />
      <LandingCTAReminder />
      <LandingTestimonials />
      <LandingFAQs />
      <LandingEarlyAccess />

      <Footer />

    </div>
  );
};

export default Landing;