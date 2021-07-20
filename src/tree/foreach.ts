/**
 * 使用递归的方式
 * @param node
 * @param cb
 */
const dfs = (node: INode, cb: Fn) => {
  cb && cb(node);
  if (node.children && node.children.length) {
    // for (let i = node.children.length - 1; i >= 0; i--) {
    //   const m = node.children[i];
    //   dfs(m, cb);
    // }
    for (let i = 0; i < node.children.length; i++) {
      const m = node.children[i];
      dfs(m, cb);
    }
  }
};

/**
 * 使用非递归的方式
 * @param node
 * @param cb
 * @returns
 */
const dfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  const nodes: INode[] = [];
  if (node) {
    // 推入当前处理的node
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.pop() as INode;
      /**
       * 操作 item
       */
      cb && cb(item);
      nodes.push(item);

      if (item?.children && item.children.length) {
        const children = item.children;
        // for (let i = 0; i < children.length; i++) {
        //   stack.push(children[i]);
        // }
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
};

const bfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  const nodes: INode[] = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.shift() as INode;
      /**
       * 操作 item
       */
      cb && cb(item);
      nodes.push(item);

      if (item?.children && item.children.length) {
        const children = item.children;
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
    }
  }
};
const enum ForeachType {
  Bfs,
  DfsRecursive,
  DfsNonRecursive,
}
/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @param isRecursive is Recursive
 * @returns void
 */
const treeForeach = (
  node: INode,
  cb: Fn,
  foreachType = ForeachType.DfsRecursive
) => {
  switch (foreachType) {
    case ForeachType.DfsRecursive:
      dfs(node, cb);
      break;
    case ForeachType.DfsNonRecursive:
      dfsStack(node, cb);
      break;
    case ForeachType.Bfs:
      bfsStack(node, cb);
      break;

    default:
      dfs(node, cb);
      break;
  }
};

export { ForeachType, treeForeach };
