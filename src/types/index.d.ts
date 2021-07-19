interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

interface IObj<T = any> {
  [key: string]: T;
  [key: number]: T;
}

interface INode extends IObj {
  children?: INode[];
}
