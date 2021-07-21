# utools

另类的 JavaScript 工具库

## tree 树类

### treeForeach 树遍历

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

### treeMap 树 Map

```ts
import { treeMap } from "@lanseria/utools";

const newData = treeMap(node, (item: INode) => {
  item.id = item.name;
  delete item.name;
  // DO NOT Delete children
});
console.log(JSON.stringify(newData));
```

### treeToList 树转为数组

```ts
import { treeToList } from "@lanseria/utools";

const list = treeToList(data2);

console.log(JSON.stringify(newData));
```

## utils 工具类

### mergeProperties 对象属性覆盖

```ts
import { mergeProperties } from "@lanseria/utools";

const mV = mergeProperties(oldV, newV);

console.log(JSON.stringify(mV));
```

### treeClone 拷贝

> 简单的类型深拷贝

### treeCloneById 拷贝并赋值唯一 ID

> 简单的类型深拷贝

```ts
import { treeCloneById } from "@lanseria/utools";

const idList = treeCloneById(data2);

console.log(JSON.stringify(idList));
```
