// Ref: https://reactflow.dev/docs/examples/overview/

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlowInstance,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from 'reactflow';

import CustomNode from './CustomNode';

import 'reactflow/dist/style.css';
import './overview.css';
import Button from '../Button/Button';

import { useAppTheme } from 'hooks';

interface NodeData {
    selects: { [handle: string]: string };
}

interface CustomNodeData {
    data: NodeData;
    type: string;
}

const nodeTypes: { [key: string]: typeof CustomNode } = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

const ReactFlowChart: React.FC<{
    data: {
        nodes: any[],
        edges: any[],
    }
}> = ({
  data,
}) => {
  // #region HOOKS
  const { theme } = useAppTheme();
  // #endregion

  // #region STATE
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(data?.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>(data?.edges);
  // const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState<any>(initialEdges);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const { setViewport } = useReactFlow();
  // #endregion

  // #region FUNCTIONS
  const onInit = (reactFlowInstance: ReactFlowInstance) => {
    setRfInstance(reactFlowInstance);
  };

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance?.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey) as string);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setNodes, setViewport]);

  const onAdd = useCallback(() => {
    const newNode = {
      data: { label: 'Added node' },
      id: getNodeId(),
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
  // #endregion

  // We are using a bit of a shortcut here to adjust the edge type.
  // This could also be done with a custom edge, for example.
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const sourceNode = nodes.find((node) => node.type === 'custom') as CustomNodeData;
      const edgeType = sourceNode.data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (

    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />

      <Panel position="top-center" className='flex flex-rowmt-2'>
        <Button className="mr-2" backgroundColor={theme?.PRIMARY} onClick={onSave}>save</Button>
        <Button className="mr-2" backgroundColor={theme?.PRIMARY} onClick={onRestore}>restore</Button>
        <Button className="mr-2" backgroundColor={theme?.PRIMARY} onClick={onAdd}>add node</Button>
      </Panel>
    </ReactFlow>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export const FlowChart = ({ data }: {
    data: {
        nodes: any[],
        edges: any[]
    }
}) => (
  <ReactFlowProvider>
    <ReactFlowChart data={data} />
  </ReactFlowProvider >
);

export default FlowChart;
