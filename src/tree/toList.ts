import { omit } from "lodash-es";
import { treeForeach } from "./foreach";

const treeToList = (node: INode) => {
  const list: IObj[] = [];
  treeForeach(node, (item: INode) => {
    const newItem = omit(item, "children");
    list.push(newItem);
  });
  return list;
};

export { treeToList };
