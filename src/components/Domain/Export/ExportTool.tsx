import { ICharacter, IControls, IDialogue, IDocument, IGraph, ILocation } from '@vision/core';
import { Button, Typography } from 'components/Core';
import Markdown from 'components/Core/Markdown/Markdown';
import { useAppTheme, useProject } from 'hooks';
import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import FontAwesome from 'react-fontawesome';

import { ISupportedExportType } from './utils';

export const ExportTool = ({
  data,
  type,
  componentRef,
}: {
  data: IDocument |
  ILocation |
  IControls |
  ICharacter |
  IDialogue |
  IGraph,
  type: ISupportedExportType,
  componentRef: any
  }) => {
  const { name: themeName } = useAppTheme();
  const project = useProject();

  const handleExportJSON = (filename: string, jsonData: IDocument |
    ILocation |
    IControls |
    ICharacter |
    IDialogue |
    IGraph) => {
    const fileData = JSON.stringify(jsonData, null, 2); // Convert JSON data to string
    const blob = new Blob([fileData], { type: 'application/json' }); // Create a Blob from the JSON string
    const url = URL.createObjectURL(blob); // Create a URL for the Blob

    const link = document.createElement('a'); // Create a link element
    link.href = url; // Set the href to the Blob URL
    link.download = `${filename}.json`; // Set the download attribute with the filename

    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document

    URL.revokeObjectURL(url); // Revoke the Blob URL
  };

  const handleExportPDF = async (filename: string) => {
    // const element = componentRef.current;
    // const canvas = await html2canvas(element);
    // const imgData = canvas.toDataURL('image/png');
    // const pdf = new jsPDF({
    //   orientation: 'portrait',
    //   unit: 'mm',
    //   format: 'a4',
    // });

    // const imgProps = pdf.getImageProperties(imgData);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    // pdf.save(`${filename}.pdf`);
  };


  const handleClick = (exportType: 'pdf' | 'json') => () => {
    // @ts-ignore
    const fileName = `${project?.id}_${type}_${data?.galleryId ? data?.galleryId + '_' : ''}${(type === 'character' ? data?.name?.firstName : data?.name) || data?.id || `export_${new Date().toISOString()}`}`;

    if (exportType === 'json') {
      handleExportJSON(fileName, data);
    }

    if (exportType === 'pdf') {
      handleExportPDF(fileName);
    }
  };


  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="w-full flex flex-row items-center justify-left p-2">
        <Button
          variant={'primary'}
          onClick={handleClick('json')}
          className='flex flex-row items-start justify-center mr-2'
        >
          <FontAwesome name="download" className='mr-4' />
          <Typography color={'#FFF'}>.json</Typography>
        </Button>

        <Button
          variant={'error'}
          onClick={handleClick('pdf')}
          className='flex flex-row items-center justify-center'
        >
          <FontAwesome name="file" className='mr-4' />
          <Typography color={'#FFF'}>.pdf</Typography>
        </Button>
      </div>

      <pre className="w-full h-fit overflow-hidden">
        <Markdown
          content={JSON.stringify(data, null, 2)}
          themeName={themeName}
        />
      </pre>

    </div>
  );
};