import React from 'react';

import './TableOfContents.scss';
import Typography from '../Typography/Typography';

import { useAppTheme } from 'hooks';

interface Props {
    sections: any[];
    onClick?: (section: any) => void
}

export const TableOfContents: React.FC<Props> = ({ sections, onClick }) => {
  const { theme } = useAppTheme();

  const renderTableOfContents = (sections: any[]): React.ReactElement[] => sections?.map?.((section) => (
    <React.Fragment key={section.displayOrder}>
      <Typography className="toc-entry" size='sm' onClick={() => onClick?.(section)}>
        {section.name}
      </Typography>
      <br />
      {section?.children && (
        <>
          <Typography size='sm' style={{ marginLeft: '1.2rem' }}>
            {renderTableOfContents(section?.children)}
          </Typography>
          <br />
        </>
      )}
    </React.Fragment>
  ));

  return (
    <div className="w-full h-full">
      <h2>Contents</h2>
      <div className="flex flex-row items-start">
        <div className="flex flex-col border-l-2 pl-4" style={{
          borderColor: theme?.PRIMARY
        }}>
          {renderTableOfContents(sections)}
        </div>
      </div>
    </div>
  );
};


export default TableOfContents;