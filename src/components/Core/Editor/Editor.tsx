import { useAppTheme } from 'hooks';
import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';

import { EDITOR_JS_TOOLS, getStyles } from './Editor.utils';

import './Editor.style.scss';
import { API, BlockMutationEvent, OutputData } from '@editorjs/editorjs';

const ReactEditorJS = createReactEditorJS();

interface EditorProps {
    data: any,
    onChange?: (obj: OutputData) => void;
}

export const Editor: React.FC<EditorProps> = ({
  data,
  onChange,
}) => {
  // #region HOOKS
  const ref = useRef(null);
  const { theme } = useAppTheme();
  const styles = getStyles(theme);
  //#endregion

  // #region HANDLERS
  const handleInitialize = useCallback((instance: any) => {
    ref.current = instance;
  }, []);

  const handleChange = async (api: API, event: BlockMutationEvent | BlockMutationEvent[]) => {
    // @ts-ignore
    const outputData = await ref.current.dangerouslyLowLevelInstance?.save();

    onChange?.(outputData);
  };
  //#endregion

  return (
    <div
      className="editor-container"
      style={{
        backgroundColor: 'transparent', //theme?.PANEL_BACKGROUND_LIGHT,
        color: theme?.TEXT,
      }}>
      <ReactEditorJS
        autofocus
        // @ts-ignore
        instanceRef={(instance) => (instanceRef.current = instance)}
        css={styles}
        tools={EDITOR_JS_TOOLS}
        defaultValue={data}
        onInitialize={handleInitialize}
        onChange={(api: API, event: BlockMutationEvent | BlockMutationEvent[]) => {
          handleChange(api, event);
        }}
      />
    </div>
  );
};

export default Editor;