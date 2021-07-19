/**
 * 使用递归的方式
 * @param node
 * @param cb
 */
const dfs = (node: INode, cb: Fn) => {
  cb && cb(node);
  if (node.children && node.children.length) {
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
  let stack: INode[] = [];
  let nodes: INode[] = [];
  if (node) {
    // 推入当前处理的node
    stack.push(node);
    while (stack.length) {
      let item = stack.pop();
      cb && cb(node);
      if (item?.children) {
        let children = item.children;
        nodes.push(item);
        // node = [] stack = [parent]
        // node = [parent] stack = [child3,child2,child1]
        // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
        // node = [parent, child1-1] stack = [child3,child2,child1-2]
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i]);
        }
      }
    }
  }
};

/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @param isRecursive is Recursive
 * @returns void
 */
const treeForeach = (node: INode, cb: Fn, isRecursive = false) => {
  if (isRecursive) {
    dfs(node, cb);
  } else {
    dfsStack(node, cb);
  }
};

export { treeForeach };
