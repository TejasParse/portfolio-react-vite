import React from 'react';
import { Position, Handle } from '@xyflow/react';

export function IconNode({ data }) {

  return (
    <div
      className={`w-10 h-10 bg-white p-0.5 shadow-lg hover:shadow-xl rounded-full`}
    >
      <img src={data.img_url} alt="" className="w-full rounded-full" />
      {data.bottom && (
        <Handle
          type="target"
          position={Position.Bottom}
          className={`w-2 h-2 bg-gray-400`}
        />
      )}
      {data.right && (
        <Handle
          type="target"
          position={Position.Right}
          className={`w-2 h-2 bg-gray-400`}
        />
      )}
      {data.left && (
        <Handle
          type="target"
          position={Position.Left}
          className={`w-2 h-2 bg-gray-400`}
        />
      )}
      {data.top && (
        <Handle
          type="target"
          position={Position.Top}
          className={`w-2 h-2 bg-gray-400`}
        />
      )}
    </div>
  );
}