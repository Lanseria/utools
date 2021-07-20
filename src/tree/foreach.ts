/**
 * 使用递归的方式
 * @param node
 * @param cb
 */
const dfs = (item: INode, cb: Fn) => {
  cb && cb(item);
  if (item.children && item.children.length) {
    // for (let i = item.children.length - 1; i >= 0; i--) {
    //   const m = item.children[i];
    //   dfs(m, cb);
    // }
    for (let i = 0; i < item.children.length; i++) {
      const m = item.children[i];
      dfs(m, cb);
    }
  }
};

/**
 * 使用非递归的方式
 * @param node
 * @param cb
 */
const dfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  // const nodes: INode[] = [];
  if (node) {
    // 推入当前处理的node
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.pop() as INode;
      if (item?.children && item.children.length) {
        const children = item.children;
        // for (let i = 0; i < children.length; i++) {
        //   stack.push(children[i]);
        // }
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
      /**
       * 操作 item
       */
      cb && cb(item);
      // nodes.push(item);
    }
  }
};
/**
 * Bfs 遍历方式
 * @param node
 * @param cb
 */
const bfsStack = (node: INode, cb: Fn) => {
  const stack: INode[] = [];
  // const nodes: INode[] = [];
  if (node) {
    stack.push(node);
    while (stack.length) {
      const item: INode = stack.shift() as INode;
      if (item?.children && item.children.length) {
        const children = item.children;
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }
      /**
       * 操作 item
       */
      cb && cb(item);
      // nodes.push(item)
    }
  }
};

/**
 * 遍历方式
 */
const enum ForeachType {
  Bfs,
  DfsRecursive,
  DfsNonRecursive,
}

/**
 * 树遍历函数
 * @param node A Node width children 一个节点
 * @param cb A Function 遍历到每个节点执行函数
 * @param foreachType foreach type 遍历方式
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
