import React from 'react';

import { IColorVariant } from '../types';

import './button.css';
import { useAppTheme } from 'hooks';

import Spinner from '../Spinner/Spinner';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: IColorVariant; // 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  children?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional `style` overrides
   */
  style?: any,
  /**
 * Optional `className` overrides
 */
  className?: string;
  /**
 * Optionally set to button being disabled
 */
  isDisabled?: boolean;
  /**
 * Optionally show a loading state
 */
  isLoading?: boolean;

  /**
   * Optionally only color the text and outline of the button
   */
  isOutline?: any,
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined,
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  backgroundColor,
  children,
  className,
  style,
  isDisabled,
  isLoading,
  isOutline,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${variant}`;
  const { theme } = useAppTheme();

  const secondaryStyle = {
    backgroundColor: theme?.TEXT,
    color: theme?.BACKGROUND,
    opacity: 1,
  };

  const color = variant === 'primary'
    ? theme?.PRIMARY
    : variant === 'success'
      ? theme?.WARNING
      : variant === 'warning'
        ? theme?.WARNING
        : variant === 'error'
          ? theme?.ERROR
          : theme?.TEXT;


  const outlineStyle = isOutline ? {
    background: 'transparent',
    border: `1px solid ${color}`,
    color,
  } : {};

  return (
    <button
      disabled={isDisabled}
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={['storybook-button', `storybook-button--${size}`, mode, className].join(' ') + ` flex flex-row items-center ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        backgroundColor,
        opacity: isDisabled ? 0.5 : style?.opacity || 1,
        ...(
          variant === 'secondary'
            ? secondaryStyle
            : {}
        ),
        ...(outlineStyle),
        ...(
          variant === 'primary' && !isOutline
            ? { background: backgroundColor || `linear-gradient(180deg, ${theme?.PRIMARY} 30%, ${theme?.SECONDARY} 80%)` }
            : ''
        ),
        ...style,
      }}

      onClick={() => isDisabled ? null : onClick?.()}
      {...props}
    >
      {isLoading ? (
        <Spinner color={'#FFF'} />
      ) :
        children
      }
    </button>
  );
};

export default Button;
