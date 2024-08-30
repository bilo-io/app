import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Circle, Layer, Rect, Stage, Text } from 'react-konva';

import { Shape } from './Canvas.utils';

interface CanvasProps {
    shapes: Shape[];
    onShapeAdd?: (shape: Shape) => void;
    onShapeRemove?: (shapeId: string) => void;
}

const Canvas: React.FC<CanvasProps> = ({ shapes, onShapeAdd, onShapeRemove }) => {
  const handleShapeAdd = (type: 'Rect' | 'Circle' | 'Text' | 'Image') => {
    // const image = new window.Image();
    // image.src = "https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff"
    // image.addEventListener('load', (data) => { console.log(data) });

    const newShape: Shape = {
      id: String(Date.now()),
      properties: {
        fill: 'red',
        height: 100,
        radius: 50,
        text: 'Sample Text',
        width: 100,
        x: 20,
        y: 20,
        // image: {
        // image
        // Provide the image URL here
        // },
      },
      type,
    };

    if (onShapeAdd) {
      onShapeAdd(newShape);
    }
  };

  const renderShape = (shape: Shape, i: number) => {
    const { id, type, properties } = shape;

    switch (type) {
    case 'Rect':
      return <Rect key={id} {...properties} />;
    case 'Circle':
      return <Circle key={id} {...properties} />;
    case 'Text':
      return <Text key={id} {...properties} />;
      // case 'Image':
      //     return <Image key={id} image={properties.image} {...properties} />;

    default: return null;
    }
  };

  return (
    <div>
      <button onClick={() => handleShapeAdd('Rect')}><FontAwesome name="square" /></button>
      <button onClick={() => handleShapeAdd('Circle')}><FontAwesome name="circle" /></button>
      <button onClick={() => handleShapeAdd('Text')}>Add Text</button>
      <button onClick={() => handleShapeAdd('Image')}><FontAwesome name="image" /></button>

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapes.map((shape, i) => renderShape(shape, i))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
