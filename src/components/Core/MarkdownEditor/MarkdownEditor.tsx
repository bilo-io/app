import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import MarkdownIt from 'markdown-it';
import MarkdownEditorToolbar from './MarkdownEditorToolbar';

// const md = new MarkdownIt(); // Initialize MarkdownIt

interface MarkdownEditorProps {
    initialValue: string;
    onChange: (newMarkdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState<string>(initialValue);

  // Handle changes in the editor and convert HTML to Markdown
  const handleChange = (content: string, _delta: any, _source: string, editor: any) => {
    const markdownText = editor.getText();
    setValue(content);
    onChange(markdownText);
  };

  return (
    <>
      <MarkdownEditorToolbar />
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{ toolbar: true }}
        formats={['bold', 'italic', 'underline', 'list', 'link']}
      />
    </>
  );
};

export default MarkdownEditor;
