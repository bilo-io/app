import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

// eslint-disable-next-line react/display-name
export const ColorSelectorNode: React.FC<any> = memo(({ data, isConnectable }: any) => (
  <div>
    <Handle
      type="target"
      position={Position.Left}
      style={{ background: '#555' }}
      onConnect={(params) => console.log('handle onConnect', params)}
      isConnectable={isConnectable}
    />
    <div>
                Custom Color Picker Node: <strong>{data.color}</strong>
    </div>
    <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
    <Handle
      type="source"
      position={Position.Right}
      id="a"
      style={{ background: '#555', top: 10 }}
      isConnectable={isConnectable}
    />
    <Handle
      type="source"
      position={Position.Right}
      id="b"
      style={{ background: '#555', bottom: 10, top: 'auto' }}
      isConnectable={isConnectable}
    />
  </div>
));

export default ColorSelectorNode;