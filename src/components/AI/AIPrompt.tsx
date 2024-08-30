import { toSentenceCase } from '@vision/core';
import { Button, TextAndSpeech } from 'components/Core';
import { useAppTheme } from 'hooks';
import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';

interface AIPromptProps {
  title?: string,
  onSend: (query: string) => void;
  className?: string,
}

export const AIPrompt: React.FC<AIPromptProps> = ({
  title,
  onSend,
  className,
}) => {
  const { theme } = useAppTheme();
  const [query, setQuery] = useState<string>('');

  return (
    <div className={`h-full flex flex-col justify-between ${className}`}>
      <div>
        <div className="p-3 border-b border-layout-border">
          {title}
        </div>

        <div className="p-4">
          <TextAndSpeech
            autoFocus
            element="textarea"
            value={query}
            onChangeText={setQuery}
            onChangeRecording={(text: string) => setQuery((prev) => prev + toSentenceCase(text) + '. ')}
            className='w-full min-h-12  h-12 max-h-32'
            limit={300}
          />
        </div>
      </div>
      <div className="p-4 pb-0 md:pb-0">
        <Button
          className="w-full flex justify-center"
          backgroundColor={theme?.PRIMARY}
          onClick={() => onSend?.(query)}
        >
          Vision A.I. &nbsp;&nbsp;<FontAwesome name="paper-plane" />
        </Button>
      </div>
    </div>
  );
};

export default AIPrompt;