/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AppGradientIcon } from 'components/App';
import { Accordion, Button, Typography } from 'components/Core';
import { useAppTheme, useTranslations } from 'hooks';
import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryFallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorBoundaryFallback: React.FC<ErrorBoundaryFallbackProps> = ({ error, resetError }) => {
  const navigate = useNavigate();
  const { theme } = useAppTheme();
  const { t } = useTranslations();

  const handleNavigateToApp = (): void => {
    navigate('/v2/dashboard');
    setTimeout(() => {
      window.location.reload();
    });
  };

  return (
    <div className="page w-full h-full flex flex-col items-center justify-center p-4"
      style={{
        background: theme?.BACKGROUND,
        color: theme?.TEXT,
      }}>
      <div className="mb-4 flex flex-col items-center justify-center">
        <AppGradientIcon size={42} />
        <Typography color={theme?.PRIMARY}
          size="2xl" weight="500" className="mb-0 mt-4">
          Vision Error
        </Typography>
      </div>
      <Typography size="xl" weight="500" className="mb-4">
        {t.common.errorSummary}
      </Typography>

      <div className="mb-0 w-full text-center">
        <Typography color={theme?.TEXT}>
          page:&nbsp;
          <Typography color={theme?.PRIMARY}>{window.location.pathname}</Typography>
        </Typography>
      </div>

      <div className="mt-10 fixed bottom-24 w-full left-0 px-4">
        <div className="w-fit mx-auto flex flex-row space-x-4">
          <Button
            size="lg"
            isOutline
            onClick={handleNavigateToApp}
          >
            {t.features.dashboard}
          </Button>
          <Button
            size="lg"
            style={{
              backgroundColor: 'transparent',
            }}
            onClick={resetError}
          >
          Reload
          </Button>
        </div>
      </div>

      <div style={{
        background: `${theme?.PRIMARY}22`,
        marginBottom: '4rem',
        marginTop: '2rem',
        maxHeight: '16rem',
        maxWidth: 'calc(100% - 2rem)',
        minWidth: '26rem',
        width: 'fit-content',
      }}>

        <Accordion title={
          <Typography color={theme?.PRIMARY}>StackTrace</Typography>
        }>
          <pre className="p-4 rounded shadow-md mb-4 text-left w-full overflow-auto max-w-lg"
            style={{
              backgroundColor: `${theme?.BACKGROUND}88`,
              color: theme?.ERROR,

            }}>
            <div>
              {`${error.name}: ${error.message}`}
              <div>
                {error.stack}
              </div>
              {JSON.stringify(error, null, 2)}
            </div>
          </pre>
        </Accordion>
      </div>
    </div>
  );
};

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error): void => {
    setHasError(true);
    setError(error);
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error);
  };

  const resetError = (): void => {
    setHasError(false);
    setError(null);
  };

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent): void => {
      handleError(event.reason);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError && error) {
    return <ErrorBoundaryFallback
      error={error}
      resetError={resetError}
    />;
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
};

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  onError: (error: Error) => void;
}

class ErrorBoundaryWrapper extends React.Component<ErrorBoundaryWrapperProps> {
  componentDidCatch(error: Error) {
    const { onError } = this.props || {};
    onError?.(error);
  }

  render() {
    const { children } = this.props || {};
    return children;
  }
}

export default ErrorBoundary;
