import React from 'react';

const getImage = ({
  width = 320,
  height = 240,
  backgroundColor = 'ffffff',
  textColor = '888888',
  extension = 'jpg',
}: {
  width: number,
  height: number,
  backgroundColor: string,
  textColor: string,
  extension: string,
}): string => (`https://dummyimage.com/${width}x${height}}/${backgroundColor}/${textColor}.${extension}`
);

export function Placeholder({
  width,
  height,
  text,
  backgroundColor,
  textColor,
  extension,
  isRound,
}: {
  width: number,
  height: number,
  text?: string,
  backgroundColor: string,
  textColor: string,
  extension: string,
  isRound?: string,
}): React.ReactElement {
  return (
    <div className="card-1 m-auto" style={{ borderRadius: isRound ? '50%' : '0', height: `${height}px`, maxWidth: '100%', width: `${width}px` }}>
      <img
        style={{ height: 'auto', width: '100%' }}
        src={getImage({ backgroundColor, extension, height, textColor, width })}
        alt="placeholder"
      />
    </div>
  );
}

export default Placeholder;
