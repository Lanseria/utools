import { intersection, keys, pick } from "lodash-es";

function isObject(obj: INode, isReal = false) {
  if (isReal) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  } else {
    return typeof obj === "object" && obj !== null;
  }
}
/**
 * 拷贝树或者数组, 简单普通类型情况
 * @param tree 树或者树数组
 * @param hash 唯一Hash
 * @returns selft
 */
const treeClone = (tree: INode, hash = new WeakMap()): INode => {
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

/**
 * 拷贝树或者数组, 简单普通类型情况
 * @param tree 树或者树数组
 * @param hash 唯一Hash
 * @returns selft
 */
const treeCloneById = (
  tree: INode,
  hash = new WeakMap(),
  i = { idx: 0 }
): INode => {
  if (hash.has(tree)) {
    return hash.get(tree);
  }
  const obj: INode = Array.isArray(tree) ? [] : {};
  hash.set(tree, obj);
  for (let key in tree) {
    if (isObject(tree[key])) {
      obj[key] = treeCloneById(tree[key], hash, i);
    } else {
      obj["id"] = i.idx++;
      obj[key] = tree[key];
    }
  }

  return obj;
};

/**
 * 覆盖对象属性
 * @param distObject 初始化对象
 * @param srcObject 传递过来新对象
 */
const mergeProperties = <T>(distObject: T, srcObject: IObj) => {
  const distPropList = keys(distObject);
  const srcPropList = keys(srcObject);
  const propList = intersection(distPropList, srcPropList);
  return {
    ...distObject,
    ...pick(srcObject, propList),
  };
};

export { treeClone, treeCloneById, mergeProperties };
