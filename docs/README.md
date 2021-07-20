# utools

另类的 JavaScript 工具库

## treeForeach 树遍历

```ts
import { treeForeach } from "@lanseria/utools";
/**
 *
 * @param node A Node width children
 * @param cb A Function
 * @param isRecursive is Recursive
 * @returns void
 */
treeForeach(
  node,
  (n) => {
    console.log(n);
  },
  true
);
```
