/*
  - 잉여속성체크는 조건에 따라 동작하지 않는 한계가 있음 (타입명시 변수 + 객체 리터럴 할당)
  - 잉여속성체크와 할당가능검사(구조적 타이핑)와는 별도의 과정임
  - 잉여속성체크 하지 않음(타입명시 변수 + 객체 리터럴 할당) -> 구조적 타이핑 관점에서 타입 체크함 (일반적인 타입체크방법)
*/

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

// 타입을 명시하지 않은 변수에 객체 리터럴 할당 -> 잉여속성체크 X -> 구조적 타이핑 관점에서 타입 체크함
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};

// 타입을 명시한 않은 변수에 객체 변수 할당 -> 잉여속성체크 X -> 구조적 타이핑 관점에서 타입 체크함
const r: Room = obj;  // OK
