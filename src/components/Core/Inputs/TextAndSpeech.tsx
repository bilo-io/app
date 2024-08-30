import React, { ChangeEvent } from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Speech from '../Speech/Speech';

interface TextAndSpeechProps {
  id?: string,
  ref?: any,
  element: 'input' | 'textarea',
  value: string,
  onChangeText: ((value: string) => void) | ((event: ChangeEvent<HTMLInputElement>) => void),
  onChangeRecording: Function,
  limit?: number,
  className?: string,
  style?: any,
  /** TODO: implement this specifically for the  */
  autoFocus?: boolean,
  /** TODO: implemented the functionality for this, specifically when a multi-line recording happens if possible */
  scrollToBottom?: boolean
}

export const TextAndSpeech: React.FC<TextAndSpeechProps> = ({
  id,
  ref,
  element,
  value,
  onChangeText,
  onChangeRecording,
  limit,
  style,
  className,
}) => (
  <div className="w-full flex flex-col items-center">
    {element === 'input' ? (
      <Input
        id={id}
        ref={ref}
        value={value}
        onChange={onChangeText}
        limit={limit}
        style={style}
        className={className}
      />
    ) : null}

    {element === 'textarea' ? (
      <TextArea
        ref={ref}
        value={value}
        onChange={onChangeText}
        limit={limit}
        style={style}
        className={className}
      />
    ) : null}

    <Speech
      onChange={(text: string): void => {
        onChangeRecording(text);
      }}
    />
  </div>
);

export default TextAndSpeech;