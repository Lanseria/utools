const dfs = (node: IObj, cb?: Fn) => {
  // console.log(node);
  if (cb) {
    cb(node);
  }
  if (node.children && node.children.length) {
    for (let i = 0; i < node.children.length; i++) {
      const m = node.children[i];
      dfs(m, cb);
    }
  }
};

/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @returns void
 */
const treeForeach = (node: IObj, cb: Fn) => {
  dfs(node, cb);
};

export { treeForeach };
