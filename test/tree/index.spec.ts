import { treeForeach } from "../../src/tree/index";
import { data1 } from "./mock";

test("treeForeach List.length", () => {
  const list: IObj[] = [];
  treeForeach(data1[0], (n) => {
    list.push(n);
  });
  expect(list.length).toBe(10);
});

test("treeForeach TreeList.length", () => {
  const treeList: IObj[] = [];
  data1.map((m) => {
    treeForeach(m, (n) => {
      treeList.push(n);
    });
  });
  expect(treeList.length).toBe(20);
});
