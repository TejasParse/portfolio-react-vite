import React from 'react';
import { Position, Handle } from '@xyflow/react';

export function CategoryNode({ data }) {
  const isMain = data.isMain;
  
  return (
    <div 
      className={`bg-white border-2 rounded-lg shadow-lg p-2 text-center transition-all duration-300 hover:shadow-xl ${
        isMain 
          ? 'border-blue-500 bg-blue-50' 
          : 'border-gray-300 rounded-full'
      }`}
    >
      <div className={`font-semibold ${isMain ? 'text-blue-800 text-sm' : 'text-gray-700 text-xs'}`}>
        {data.label}
      </div>
      <Handle 
        type="source" 
        position={Position.Right} 
        className={`w-2 h-2 ${isMain ? 'bg-blue-500' : 'bg-gray-400'}`}
        id="right"
      />
      <Handle 
        type="source" 
        position={Position.Left} 
        className={`w-2 h-2 ${isMain ? 'bg-blue-500' : 'bg-gray-400'}`}
        id="left"
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className={`w-2 h-2 ${isMain ? 'bg-blue-500' : 'bg-gray-400'}`}
        id="bottom"
      />
      <Handle 
        type="source" 
        position={Position.Top} 
        className={`w-2 h-2 ${isMain ? 'bg-blue-500' : 'bg-gray-400'}`}
        id="top"
      />
    </div>
  );
}