const s: String = "primitive";
const n: Number = 12;
const b: Boolean = true;

type A = typeof BigInt(11); // BigIntConstructor
const A = typeof BigInt(11); // var BigInt: BigIntConstructor(value: string | number | bigint | boolean) => bigint
