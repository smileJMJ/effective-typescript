/*
  - 잉여속성체크는 조건에 따라 동작하지 않는 한계가 있음 (타입명시 변수 + 객체 리터럴 할당일 때 동작함)
  - 잉여속성체크와 할당가능검사(구조적 타이핑)와는 별도의 과정임
  - 잉여속성체크 하지 않음(타입명시 변수 + 객체 리터럴 할당) -> 구조적 타이핑 관점에서 타입 체크함 (일반적인 타입체크방법)
*/

{
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
  
  const r: Room = obj;  // OK

  // 함수 매개변수도 동일함.
  function func(p: Room) {
    console.log(p);
  }

  // 타입을 지정하지 않은 변수에 할당한 객체를 넣으면 에러 발생하지 않음
  const noTypeP = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
  };

  func(noTypeP); // 이 때는 기본 할당 확인(구조적 타이핑 관점)으로 타입 체크함
}
