/* eslint-disable react/prop-types */
// #region Modules
import React, { useEffect } from 'react';

import Button from '../Button/Button';
// import { noop } from 'utils/misc'
// #endregion Modules

// #region Components
// import ErrorBoundary from '../ErrorBoundary'
// #endregion

// #region Assets & Data
// #endregion

// import './Async.scss'
interface AsyncProps {
  onMount?: Function,
  margin: string | number,
  isLoading?: boolean,
  children: React.ReactElement | React.ReactElement,
  loader?: React.ReactElement | string | null,
  onRefresh?: Function,

}

export const Async: React.FC<AsyncProps> = ({
  onMount = () => { },
  margin = '0rem',
  isLoading,
  children,
  loader,
  onRefresh,
}) => {
  useEffect(() => {
    onMount?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <ErrorBoundary> */}
      {isLoading
        ? loader || (
          <div
            style={{
              margin: 'auto',
              marginBottom: margin,
              marginTop: margin,
            }}
          >
            <div className="loader" />
          </div>
        )
        : children || (
          <Button
            onClick={() => onRefresh?.()}>
            Refresh
          </Button>
        )}
      {/* </ErrorBoundary> */}

    </>
  );
};

export default Async;
