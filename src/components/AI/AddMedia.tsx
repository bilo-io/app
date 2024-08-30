import React from 'react';

import { toSentenceCase } from '@vision/core';
import AIPrompt from 'components/AI/AIPrompt';
import { Button, FileLink, FileUpload, Icon, IconName, Tab, Tabs, Typography } from 'components/Core';
import { useAppTheme } from 'hooks';

interface AddMediaProps {
  type: 'audio' | 'image' | 'video',
  isMulti?: boolean,
  value?: any | any[],
  onChange?: (data: any | any[]) => void,
}

export const AddMedia: React.FC<AddMediaProps> = ({
  type,
  onChange,
}) => {
  const { theme, name: themeName } = useAppTheme();

  const tabData: (Tab & { key: string })[] = [
    {
      id: 0,
      key: 'Upload',
      label: (
        <div className="flex flex-row items-center">
          <div className="ml-4 mr-4 whitespace-nowrap overflow-hidden">
            {'Upload'}
          </div>
        </div>
      ),
      view: (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-row items-center justify-center mx-8 px-16 py-6 border-b border-layout-border">
            <Icon name={type as IconName} color={theme?.TEXT} />
            &nbsp;
            &nbsp;
            <Typography>Upload {type}s from one of your files on your computer</Typography>
          </div>
          {/* <div className="h-full flex flex-col justify-between border-dashed border-white rounded-lg p-4 mx-0 md:mx-24"> */}
          <FileUpload type="image" />
          <div className="w-full p-4 pb-0 md:pb-0">
            <Button
              className="w-full flex justify-center"
              backgroundColor={theme?.PRIMARY}
              onClick={() => { }}
            >
                Upload {toSentenceCase(type)}
            </Button>
          </div>
          {/* </div> */}
        </div>
      ),
    },
    {
      id: 1,
      key: 'AI',
      label: (
        <div className="flex flex-row items-center">
          <div className="ml-4 mr-4 whitespace-nowrap overflow-hidden">
            {'AI'}
          </div>
        </div>
      ),
      view: (
        <div className="w-full h-full flex flex-col items-center justify-center"
          style={{
            maxWidth: '100%',
          }}>
          <div className="flex flex-row items-center mb-0 mt-6">
            <Icon name={type as IconName} color={theme?.TEXT} />
            &nbsp;
            &nbsp;
            <Typography>Use AI to generate content like {type}s</Typography>
          </div>
          <AIPrompt onSend={
            (query: string) => {
              onChange?.(query);
            }}
          />
        </div>
      ),
    },
    {
      id: 2,
      key: 'URL',
      label: (
        <div className="flex flex-row items-center">
          <div className="ml-4 mr-4 whitespace-nowrap overflow-hidden">
            {'URL'}
          </div>
        </div>
      ),
      view: (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-row items-center justify-center mx-8 px-16 py-6 border-b border-layout-border">
            <Icon name={type as IconName} color={theme?.TEXT} />
            &nbsp;
            &nbsp;
            <Typography>Paste the URL for the relevant {type} you want to link to</Typography>
          </div>
          <FileLink />
          <div className="w-full p-4 pb-0 md:pb-0">
            <Button
              className="w-full flex justify-center"
              backgroundColor={theme?.PRIMARY}
              onClick={(): void => { }}
            >
              Link {toSentenceCase(type)}
            </Button>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full h-full" style={{
      maxWidth: '100%',
    }}>
      <div className="flex flex-row p-3 items-center border-b border-layout-border">
        <Icon name={type as IconName} color={theme?.TEXT} />
        &nbsp;
        &nbsp;
        <Typography variant={themeName}>Add {type}</Typography>
      </div>
      <div style={{ minHeight: '12rem' }}>
        <Tabs
          data={tabData}
          onChangeTab={(): void => { }}
        />
      </div>
    </div>
  );
};

export default AddMedia;