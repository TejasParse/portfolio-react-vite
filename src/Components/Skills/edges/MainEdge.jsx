import { BaseEdge, getStraightPath } from '@xyflow/react';
 
export function MainEdge({ id, sourceX, sourceY, targetX, targetY, source, target }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // Determine if this is a connection between main category nodes
  const isMainToMain = source && target && 
    (source.includes('languages') || source.includes('web-dev') || source.includes('databases') || source.includes('data-ml') || source.includes('cloud-devops')) &&
    (target.includes('languages') || target.includes('web-dev') || target.includes('databases') || target.includes('data-ml') || target.includes('cloud-devops'));
 
  return (
    <>
      <BaseEdge 
        id={id} 
        path={edgePath} 
        style={{ 
          stroke: isMainToMain ? '#3b82f6' : '#6b7280', 
          strokeWidth: isMainToMain ? 3 : 2,
        }}
      />
    </>
  );
}