export const nodes = [
  {
    data: {
      label: 'Skill Tree',
    },
    id: '1',
    position: { x: 250, y: 0 },
    type: 'input',
  },
  {
    data: {
      label: 'Stealth',
    },
    id: '2',
    position: { x: 100, y: 100 },
  },
  {
    data: {
      label: 'Combat',
    },
    id: '3',
    position: { x: 250, y: 100 },
  },
  {
    data: {
      label: 'Parkour',
    },
    id: '4',
    position: { x: 400, y: 100 },
  },
  {
    data: {
      label: 'Stealth Skill 1',
    },
    id: '5',
    position: { x: 50, y: 200 },
  },
  {
    data: {
      label: 'Stealth Skill 2',
    },
    id: '6',
    position: { x: 150, y: 200 },
  },
  {
    data: {
      label: 'Combat Skill 1',
    },
    id: '7',
    position: { x: 200, y: 200 },
  },
  {
    data: {
      label: 'Combat Skill 2',
    },
    id: '8',
    position: { x: 300, y: 200 },
  },
  {
    data: {
      label: 'Parkour Skill 1',
    },
    id: '9',
    position: { x: 400, y: 200 },
  },
  {
    data: {
      label: 'Parkour Skill 2',
    },
    id: '10',
    position: { x: 500, y: 200 },
  },
];

export const edges = [
  { id: 'e1-2', label: 'Subtree', source: '1', target: '2' },
  { id: 'e1-3', label: 'Subtree', source: '1', target: '3' },
  { id: 'e1-4', label: 'Subtree', source: '1', target: '4' },
  { id: 'e2-5', label: 'Skill Link', source: '2', target: '5' },
  { id: 'e2-6', label: 'Skill Link', source: '2', target: '6' },
  { id: 'e3-7', label: 'Skill Link', source: '3', target: '7' },
  { id: 'e3-8', label: 'Skill Link', source: '3', target: '8' },
  { id: 'e4-9', label: 'Skill Link', source: '4', target: '9' },
  { id: 'e4-10', label: 'Skill Link', source: '4', target: '10' },
];
