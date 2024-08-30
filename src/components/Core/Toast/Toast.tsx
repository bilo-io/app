/* eslint-disable @typescript-eslint/ban-ts-comment */
// Toast.tsx
import React, { useEffect, useState } from 'react';
import './Toast.scss';
import { useAppTheme } from 'hooks';

type ToastType = 'info' | 'primary' | 'success' | 'warning' | 'error';

interface ToastProps {
    id: number;
    type: ToastType;
    body: React.ReactElement | string;
    duration: number;
    onClose: (id: number) => void;
}


const Toast: React.FC<ToastProps> = ({ id, type, body, duration, onClose }) => {
  const { theme } = useAppTheme();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), duration - 300);
    const removeToast = setTimeout(() => onClose(id), duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeToast);
    };
  }, [id, duration, onClose]);

  return (
    <div
      className={`p-4 mb-2 rounded-lg shadow-lg ${isExiting ? 'toast-exit' : 'toast-enter'
      }`}
      style={{
        // @ts-ignore
        backgroundColor: type === 'info' ? theme?.TEXT : theme?.[type?.toUpperCase?.()],
        // @ts-ignore
        boxShadow: `0px 6px 16px 2px ${type === 'info' ? theme?.BACKGROUND : theme?.[type?.toUpperCase()]}AA`,

        color: type === 'info' ? theme?.BACKGROUND : '#FFF'

      }}
    >
      {body}
    </div >
  );
};

export default Toast;
