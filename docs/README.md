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
