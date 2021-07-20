# utools

另类的 JavaScript 工具库

## treeForeach 树遍历

```ts
import { treeForeach, ForeachType } from "@lanseria/utools";
/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @param foreachType foreach type
 * @returns void
 */
treeForeach(
  node,
  (n) => {
    console.log(n);
  },
  ForeachType.Bfs
);
```

## treeMap 树 Map

```ts
import { treeMap } from "@lanseria/utools";

const newData = treeMap(node, (item: INode) => {
  item.id = item.name;
  delete item.name;
  // DO NOT Delete children
});
console.log(JSON.stringify(newData));
```
