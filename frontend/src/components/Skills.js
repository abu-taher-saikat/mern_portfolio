import React, { useState } from 'react';
import './Skill.scss'

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import elements from './Flow/Edge';


const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const Skills = () => {
  return (
    <div>
        <div style={{ height: 600 }}>
          <ReactFlow 
            elements={elements} 
            onLoad={onLoad}
            zoomOnScroll={false}
            showFitView={false}
            showZoom={false}
          >
              <Controls />
              <Background />
          </ReactFlow>
        </div>
    </div>
  )
}

export default Skills


