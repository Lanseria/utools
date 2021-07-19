import { treeForeach } from "@lanseria/utools";
import { data1 } from "./mock";

describe("Tree Foreach 树循环", () => {
  describe("Dfs 深度遍历", () => {
    describe("Recursive 递归式", () => {
      test("List.length", () => {
        const list: INode[] = [];
        treeForeach(
          data1[0],
          (n) => {
            list.push(n);
          },
          true
        );
        expect(list.length).toBe(10);
      });

      test("TreeList.length", () => {
        const treeList: INode[] = [];
        data1.map((m) => {
          treeForeach(
            m,
            (n) => {
              treeList.push(n);
            },
            true
          );
        });
        expect(treeList.length).toBe(20);
      });
    });

    describe("Non-Recursive 非递归式", () => {
      test("List.length", () => {
        const list: INode[] = [];
        treeForeach(data1[0], (n) => {
          list.push(n);
        });
        expect(list.length).toBe(10);
      });

      test("TreeList.length", () => {
        const treeList: INode[] = [];
        data1.map((m) => {
          treeForeach(m, (n) => {
            treeList.push(n);
          });
        });
        expect(treeList.length).toBe(20);
      });
    });
  });
});
