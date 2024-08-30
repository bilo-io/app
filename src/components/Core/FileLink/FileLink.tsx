import { useAppTheme } from 'hooks';
import React, { useState } from 'react';

import Icon, { IconName } from '../Icon/CustomIcon/CustomIcon';

interface FileLinkProps {
  type?: IconName
}

export const FileLink: React.FC<FileLinkProps> = ({
  type,
}) => {
  const { theme } = useAppTheme();
  const [previewUrl, setPreviewUrl] = useState<string | null | undefined | ArrayBuffer>('');

  return (
    <div className="h-full w-full p-4 flex flex-col justify-between">
      <input
        type="text"
        onChange={(e) => setPreviewUrl(e.target.value)}
        className="w-full my-3"
        placeholder="url to resource ..."
      />
      <br />
      {previewUrl ? <img
        src={previewUrl as string}
        alt="preview"
        className="w-96"
      /> : <div className="p-12 m-4 border border-layout-border rounded-lg cursor-not-allowed">
        <div className="p-12 m-4 border border-layout-border rounded-lg">
          {type && (<Icon
            name={type as IconName}
            color={theme?.TEXT}
          />)}
        </div>
      </div>}
    </div>
  );
};

export default FileLink;