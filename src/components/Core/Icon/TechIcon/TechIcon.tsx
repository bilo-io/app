import React from 'react';

// https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white
const baseUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';

export const TechIcon: React.FC<{
  code: string,
  size?: number;
}> = ({
  code,
  size = 32,
}) => {
  const url = `${baseUrl}/${code as string}/${code as string}-original.svg`;

  const darkCompanyIcons:string[] = [
    'unity',
    'unrealengine',
  ];

  const isDarkBranding = darkCompanyIcons.includes(code as string);

  return (
    <div style={{


      backgroundColor: isDarkBranding
        ? '#FFF'
        : 'transparent',


      borderRadius: isDarkBranding
        ? '50%'
        : '0',


      height: `${size}px`,


      marginLeft: '12px',


      marginTop: isDarkBranding ? '-6px' : 0,


      padding: isDarkBranding
        ? '3px'
        : '0px',


      paddingTop: isDarkBranding
        ? '6px'
        : 0,
      // width: '2rem',
      // height: '2rem',
      width: `${size}px`,
    }}>
      <img src={url} alt={code}
        width={`${(isDarkBranding ? size - 6 : size)}px`}
        height={`${(isDarkBranding ? size - 6 : size)}px`}
        style={{

        }} />
    </div>
  );
};

export default TechIcon;
