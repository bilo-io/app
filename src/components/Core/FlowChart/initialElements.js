import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    data: {
      label: 'Input Node',
    },
    id: '1',
    position: { x: 250, y: 0 },
    type: 'input',
  },
  {
    data: {
      label: 'Default Node',
    },
    id: '2',
    position: { x: 100, y: 100 },
  },
  {
    data: {
      label: 'Output Node',
    },
    id: '3',
    position: { x: 400, y: 100 },
    type: 'output',
  },
  {
    data: {
      selects: {
        'handle-0': 'smoothstep',
        'handle-1': 'smoothstep',
      },
    },
    id: '4',
    position: { x: 100, y: 200 },
    type: 'custom',
  },
  {
    className: 'circle',
    data: {
      label: 'custom style',
    },
    id: '5',
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    style: {
      background: '#2B6CB0',
      color: 'white',
    },
    targetPosition: Position.Left,
    type: 'output',
  },
  {
    data: {
      label: 'Node',
    },
    id: '6',
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    style: {
      background: '#63B3ED',
      color: 'white',
      width: 100,
    },
    targetPosition: Position.Left,
    type: 'output',
  },
  {
    className: 'annotation',
    data: {
      label: (
        <>
                    On the bottom left you see the<strong>Controls</ strong > and the bottom right the{' '}
          <strong> MiniMap </strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: false,
    id: '7',
    position: { x: 150, y: 400 },
    selectable: false,
    type: 'default',
  },
];

export const edges = [
  { id: 'e1-2', label: 'this is an edge label', source: '1', target: '2' },
  { animated: true, id: 'e1-3', source: '1', target: '3' },
  {
    data: {
      selectIndex: 0,
    },
    id: 'e4-5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    source: '4',
    sourceHandle: 'handle-0',
    target: '5',
    type: 'smoothstep',
  },
  {
    data: {
      selectIndex: 1,
    },
    id: 'e4-6',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    source: '4',
    sourceHandle: 'handle-1',
    target: '6',
    type: 'smoothstep',
  },
];
