type ProtocolNode = {
  name: string;
  epoch: string;
  children?: ProtocolNode[];
};

export default function RemixTree({ root }: { root: ProtocolNode }) {
  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Remix Lineage</h2>
      <TreeNode node={root} depth={0} />
    </div>
  );
}

function TreeNode({ node, depth }: { node: ProtocolNode; depth: number }) {
  return (
    <div className="ml-4 border-l border-gray-600 pl-4">
      <p className="text-sm">
        <span className="font-bold">{node.name}</span> <span className="text-gray-400">({node.epoch})</span>
      </p>
      {node.children?.map((child, i) => (
        <TreeNode key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}
