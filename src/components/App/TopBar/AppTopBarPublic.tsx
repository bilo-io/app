import { Button, LanguagePicker, ThemePicker } from 'components/Core';
import { useAppTheme, useTranslations } from 'hooks';
import React, { useEffect } from 'react';
// import { AppLogo } from '../AppLogo';
import { Link } from 'react-router-dom';
import { dispatchCustomEvent } from 'utils/events';

import AppGradientIcon from '../AppGradientIcon';

interface AppTopBarProps {
  isCentered?: boolean
}
export const AppTopBarPublic: React.FC<AppTopBarProps> = ({
  isCentered,
}) => {
  const { theme } = useAppTheme();
  const { t } = useTranslations();

  useEffect(() => {

  }, []);

  const handleToggleMenu = ():void => {
    dispatchCustomEvent('ui.toggleAppMenu');
  };

  return (
    <div className={'w-full h-12 items-center px-4 fixed top-0 left-0 z-100 flex flex-row'} style={{
      backdropFilter: 'blur(7px)',
      backgroundColor: `${theme?.APP_BACKGROUND}EE`,
      boxShadow: '0px 4px 10px 4px #00000044',
      color: theme?.TEXT,
      zIndex: 100,
    }}>
      <div
        className={`flex flex-row ${isCentered ? 'justify-center' : 'justify-between'}`} style={{
          margin: 'auto',
          maxWidth: '49rem',
          width: '49rem',
        }}>
        {isCentered ? (
          <div className='flex flex-row items-center justify-center'>
            <div className="mr-4 cursor-pointer" >
              <AppGradientIcon isRound size={20} onClick={handleToggleMenu} />
            </div>

            <div className="flex flex-row items-center">
              <Link to="/v2/dashboard">
                <Button style={{ backgroundColor: theme?.PRIMARY }}>
                  {t.common.getStarted}
                </Button>
              </Link>
              <div className="mx-2" />
              <ThemePicker flyoutDirection='bottom' />
            </div>
          </div>
        ) : (

          <>

            <div className="mr-4 cursor-pointer mt-1">
              <AppGradientIcon isRound size={20} onClick={handleToggleMenu} />
            </div>

            <div className="flex flex-row items-center">
              <Link to="/v2/dashboard">
                <Button variant="primary" style={{
                  backgroundColor: theme?.PRIMARY,
                }}>
                  {t.common.getStarted}
                </Button>
              </Link>
              <div className="mx-2" />
              <LanguagePicker
                isCustom
                flyoutDirection='bottom'
                showLabel={false}
                showLabelDropdown={false}
              />
              <div className="mx-2" />
              <ThemePicker flyoutDirection='bottom' />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// const HighlightedLink = ({ label, to }: { label: string, to: string }) => {
//   const location = useLocation();
//   const activePath = location.pathname?.split('/').slice(0, 3).join('/')

//   return (
//     <Link
//       to={to}
//       className={`mx-4 ${to === activePath ? 'text-primary' : ''}`}>
//       {label}
//     </Link>
//   )
// }

export default AppTopBarPublic;