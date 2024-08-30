//@ts-ignore
import CheckList from '@editorjs/checklist';
//@ts-ignore
import Code from '@editorjs/code';
//@ts-ignore
//@ts-ignore
import Delimiter from '@editorjs/delimiter';
//@ts-ignore
import Embed from '@editorjs/embed';
//@ts-ignore
import Header from '@editorjs/header';
//@ts-ignore
import Image from '@editorjs/image';
//@ts-ignore
import InlineCode from '@editorjs/inline-code';
//@ts-ignore
import LinkTool from '@editorjs/link';
//@ts-ignore
import List from '@editorjs/list';
//@ts-ignore
import Marker from '@editorjs/marker';
//@ts-ignore
import Paragraph from '@editorjs/paragraph';
//@ts-ignore
import Quote from '@editorjs/quote';
//@ts-ignore
import Raw from '@editorjs/raw';
//@ts-ignore
import SimpleImage from '@editorjs/simple-image';
//@ts-ignore
import Table from '@editorjs/table';
//@ts-ignore
import Warning from '@editorjs/warning';
//@ts-ignore


import { ITheme } from 'styles/themes';

export const EDITOR_JS_TOOLS = {
  checklist: CheckList,
  code: Code,
  delimiter: Delimiter,
  embed: Embed,
  header: Header,
  image: Image,
  inlineCode: InlineCode,
  linkTool: LinkTool,
  list: List,
  marker: Marker,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  quote: Quote,
  raw: Raw,
  simpleImage: SimpleImage,
  table: Table,
  warning: Warning,
};

export const getStyles = (theme: ITheme) => ({
  container: {
    margin: '0 auto',
    maxWidth: '800px',
    width: '100%',
  },
  header: {
    color: theme?.TEXT,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  paragraph: {
    color: theme?.TEXT,
    fontSize: '16px',
    lineHeight: '1.5', // Use the theme variable for text color
  },
});