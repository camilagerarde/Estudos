import { Printed } from "./Printed";
import { Equal } from "./Equal";

export interface MyObject<T> extends Printed, Equal<T> { }