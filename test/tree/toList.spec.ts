import { treeToList } from "@lanseria/utools";
import { data2 } from "../mock";

describe("Tree To List 树转为数组操作", () => {
  it("普通测试", () => {
    const list = treeToList(data2);
    expect(list).toMatchSnapshot();
  });
});
