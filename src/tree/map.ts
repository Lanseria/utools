import { cloneDeep } from "lodash-es";
import { ForeachType, treeForeach } from "./foreach";

const treeMap = (
  node: INode,
  cb: Fn,
  foreachType: ForeachType = ForeachType.DfsRecursive
) => {
  const cloneNode = cloneDeep(node);
  treeForeach(cloneNode, cb, foreachType);
  return cloneNode;
};

export { treeMap };
