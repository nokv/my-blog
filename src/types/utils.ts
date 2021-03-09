export type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;
export type Dictionary<T> = { [key: string]: T };
export type ErrorHandler = (err: Error) => void;
