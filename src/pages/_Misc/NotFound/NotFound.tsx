import { Button } from 'components/Core';
import { useAppTheme, useAppUser } from 'hooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { ReactComponent as Img404 } from './404.svg';
import { ReactComponent as ImgNotFound } from './not-found.svg';


const NotFound: React.FC = () => {
  // #region HOOKS
  const navigate = useNavigate();
  const { name: themeName, theme } = useAppTheme();
  const { user: appUser } = useAppUser();
  // #endregion

  useEffect(() => {
    if (!window.location.pathname.includes('not-found')) {
      navigate('/not-found');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // https://cdn.dribbble.com/users/32512/screenshots/4943969/circle_ball_milkinside.gif
  const lightAnimation = 'https://i.pinimg.com/originals/1d/27/d1/1d27d1130a805798a18f63355b632042.gif';
  const darkAnimation = 'https://i.pinimg.com/originals/6f/10/1e/6f101e7e3fe0f99f2a7f29019180fe42.gif';
  return (
    <div className={`page ${themeName}`} style={{

      backgroundImage: `url(${themeName === 'light'
        ? lightAnimation
        : darkAnimation
      })`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center mb-12">
          <Img404 stroke={theme?.PRIMARY} />
          <br />
          <br />
          <ImgNotFound stroke={theme?.PRIMARY} />
        </div>
        {appUser?.email ? (
          <Button
            className='mt-8'
            // backgroundColor={theme?.PRIMARY}
            variant='primary'
            size={'lg'}
            onClick={() => navigate('/v2/dashboard')}>Go to Dashboard
          </Button>
        ) : (
          <Button
            className='mt-8'
            // backgroundColor={theme?.PRIMARY}
            variant='primary'
            size={'lg'}
            onClick={() => navigate('/')}>Go Home
          </Button>

        )}
      </div>
    </div>
  );
};

export default NotFound;