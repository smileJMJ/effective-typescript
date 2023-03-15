type T = Exclude<string|Date, string|number>;  // Type is Date
type NonZeroNums = Exclude<number, 0>;  // Type is still just number


type TN = (string|Date) extends (string|number) ? never : string|Date; // string | Date
// 왜 T(Date)와 TN(string|Date)의 값은 다른가요??

type nz = number extends 0 ? never : number; // number - NonZeroNums와 동일함