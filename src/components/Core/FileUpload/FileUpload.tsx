import React, { ChangeEvent, useState } from 'react';
import './FileUpload.scss';
import { toSentenceCase } from '@vision/core';
import { useAppTheme } from 'hooks';
import FontAwesome from 'react-fontawesome';

import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';
import Typography from '../Typography/Typography';
import { log } from 'utils/logger';

interface FileUploadProps {
  type: 'json' | 'image' | 'video' | 'audio',
  onChange?: (file: any) => void
  previewStyle?: any
}

export const FileUpload: React.FC<FileUploadProps> = ({
  type,
  onChange,
  previewStyle,
}) => {
  const { theme } = useAppTheme();
  const [previewSrc, setPreviewSrc] = useState<string | null | undefined | ArrayBuffer>('');
  const [, setFileContent] = useState<any>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file) {
      log({ file });

      const reader = new FileReader();

      if (type === 'image') {
        reader.onloadend = () => {
          setPreviewSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
      }

      if (type === 'json') {
        reader.onload = (event) => {
          if (event.target && event.target.result) {
            try {
              const json = JSON.parse(event.target.result as string);
              setFileContent(json);
              onChange?.(json);
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          }
        };
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
        reader.readAsText(file);
      }
    }
  };

  const getAcceptExtensions = (type: 'json' | 'image' | 'video' | 'audio') => {
    switch (type) {
    case 'json':
      return '.json';
    case 'image':
      return '.jpg, .jpeg, .png';
    case 'audio':
      return '.mp3 .wav';
    case 'video':
      return '.mp4 .m4a';
    }
  };

  return (
    <div className="w-full p-0 my-2 flex flex-col items-center justify-center">
      <label className="upload">
        <div className="w-full h-full mt-0 flex flex-row items-center justify-center">
          <Typography align="center">
            <FontAwesome name="upload" />&nbsp;&nbsp;Upload {toSentenceCase(type)} ...
          </Typography>
        </div>

        <input
          id="upload-file"
          type="file"
          accept={getAcceptExtensions(type)}
          onChange={handleChange} className="m-0 my-0 h-0 w-full"
        />
        <br />

        {['audio', 'image'].includes(type) && (
          <>
            {previewSrc ? (
              <img
                src={previewSrc as string}
                alt="preview"
                style={previewStyle || {}}
              />
            ) : (
              <div className="p-12 m-4 border border-layout-border rounded-lg">
                <Icon
                  name={type as IconName}
                  color={theme?.TEXT}
                />
              </div>
            )}
          </>
        )}
      </label>
    </div>
  );
};

export default FileUpload;