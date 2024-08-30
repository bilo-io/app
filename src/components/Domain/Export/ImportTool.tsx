
import { ICharacter, IControls, IDialogue, IDocument, IGraph, ILocation, toSentenceCase } from '@vision/core';
import { FileUpload } from 'components/Core';
import Markdown from 'components/Core/Markdown/Markdown';
import { useAppTheme } from 'hooks';
import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';

import {
  ISupportedExportType,
  shapeOfICharacter,
  shapeOfIControls,
  shapeOfIDialogue,
  shapeOfIDocument,
  shapeOfIGraph,
  shapeOfILocation,

} from './utils';

interface ImportToolProps {
  onChange: (value: any) => void,
  showData?: boolean,
  type: ISupportedExportType,
  data?:
  IDocument |
  ILocation |
  IControls |
  ICharacter |
  IDialogue |
  IGraph |
  { [key in string]: string},
}

export const ImportTool: React.FC<ImportToolProps> = ({
  // data,
  showData,
  type,
  onChange,
}) => {
  const { name: themeName } = useAppTheme();

  const [data, setData] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getShapeOfType = (type: ISupportedExportType) => {
    switch (type) {
    case 'project': return {};
    case 'character': return shapeOfICharacter;
    case 'dialogue': return shapeOfIDialogue;
    case 'document': return shapeOfIDocument;
    case 'controls': return shapeOfIControls;
    case 'location': return shapeOfILocation;
    case 'graph': return shapeOfIGraph;
    default: return {};
    }
  };

  const handleChange = (file: any) => {
    try {

      const copyiedFile = file;
      delete copyiedFile['id'];
      delete copyiedFile['ref'];

      onChange?.(copyiedFile);
      setData(copyiedFile);
    } catch (e) {
      console.error('Error opening file', e);
    }
  };

  const handleClear = () => {
    setData(null);
    onChange?.(null);
  };

  return (
    <div className="w-full">
      <FileUpload type={'json'} onChange={handleChange} />

      <pre className="flex flex-row justify-between">
        {showData && toSentenceCase(type)}
        {data ? <FontAwesome name="close" onClick={handleClear} /> : null}
      </pre>

      <pre className="w-full h-fit overflow-hidden">
        {
          !!data && showData ?
            (
              <>
                <Markdown
                  content={JSON.stringify(data, null, 2)}
                  themeName={themeName}
                />
              </>
            ) : (
              <>
                {/* <Markdown
                    content={JSON.stringify(getShapeOfType(type), null, 2)}
                    themeName={themeName}
                  /> */}
              </>
            )
        }
      </pre>
    </div>
  );
};

export default ImportTool;