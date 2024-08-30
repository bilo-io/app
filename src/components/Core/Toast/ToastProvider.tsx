// ToastManager.tsx
import { isMobile } from 'hooks/use-device';
import React, { createContext, useCallback, useContext, useState } from 'react';

import Toast from './Toast';

interface ToastOptions {
    type: 'info' | 'primary' | 'success' | 'warning' | 'error';
    body: React.ReactElement | string;
    duration?: number;
}

interface ToastContextProps {
    addToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export interface ToastProviderProps {
    children: React.ReactElement | React.ReactElement[]
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<{ id: number; options: ToastOptions }[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, options }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-20 mb-1.5 md:bottom-2 right-2 z-50 space-y-2" style={{
        height: 'auto',
        width: isMobile() ? 'calc(100% - 1rem)' : '20rem'
      }}>
        {toasts.map(({ id, options }) => (
          <Toast
            key={id}
            id={id}
            type={options.type}
            body={options.body}
            duration={options.duration || 6000}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
