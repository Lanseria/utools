function isObject(obj: INode) {
  return typeof obj === "object" && obj !== null;
}

const treeClone = (tree: INode, hash = new WeakMap()) => {
  if (hash.has(tree)) {
    return hash.get(tree);
  }
  const obj: INode = Array.isArray(tree) ? [] : {};
  hash.set(tree, obj);
  for (let key in tree) {
    obj[key] = isObject(tree[key]) ? treeClone(tree[key], hash) : tree[key];
  }

  return obj;
};

export { treeClone };
