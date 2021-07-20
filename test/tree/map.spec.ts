import { treeMap } from "@lanseria/utools";
import { data1 } from "./mock";

describe("Tree Map 树循环操作", () => {
  it("添加属性", () => {
    const newData = treeMap(data1[0], (item: INode) => {
      item.id = item.name;
      delete item.name;
    });
    console.log(JSON.stringify(newData));
  });
});
