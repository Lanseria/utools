import { treeMap } from "@lanseria/utools";
import { isEqualWith } from "lodash-es";
import { data1 } from "./mock";

describe("Tree Map 树循环操作", () => {
  it("更换属性名", () => {
    const newData = treeMap(data1[0], (item: INode) => {
      item.id = item.name;
      delete item.name;
    });
    const res = isEqualWith(data1[0], newData, (objValue, othValue) => {
      if (objValue.name == othValue.id) {
        return true;
      }
    });
    expect(res).toBe(true);
  });
});
