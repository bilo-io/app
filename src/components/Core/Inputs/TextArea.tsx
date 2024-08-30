import { useAppTheme } from 'hooks';
import React from 'react';

interface TextAreaProps {
  value: string,
  onChange: Function,
  id?: string,
  limit?: number,
  style?: any,
  className?: string,
  ref?: any,
  name?: string,
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  id,
  limit,
  style,
  type,
  className,
  name,
  ...rest
}: any) => {
  const { theme } = useAppTheme();
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newText = event.target.value;

    if (limit) {
      if (newText.length <= limit) {
        onChange(newText);
      }
    } else {
      onChange(newText);
    }
  };

  return (
    <div className="w-full">
      <textarea
        id={id}
        type={type}
        value={value}
        onChange={handleTextChange}
        style={{ ...style, borderColor: theme?.TEXT, color: theme?.TEXT }}
        className={className}
        name={name}
        {...rest}
      />
      {
        limit ? (
          <div className="-mt-2">
            {value?.length || 0} / {limit}
          </div>
        ) : null
      }
    </div>
  );
};

export default TextArea;
