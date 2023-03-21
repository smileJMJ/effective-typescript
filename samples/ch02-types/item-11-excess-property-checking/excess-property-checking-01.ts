/*
  - 잉여속성체크(Excess Property Checks)
  타입이 명시된 변수에 객체 리터럴을 할당할 때 해당 타입의 속성이 있는지, 그 외의 속성은 없는지 확인함
  - ts:checker.ts (hasExcessProperties, 20655 살펴보기)

*/

{
  interface Room {
    numDoors: number;
    ceilingHeightFt: number;
  }

  // 타입을 명시한 변수에 객체 리터럴 할당함 -> 잉여속성체크 O
  const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
  //                    and 'elephant' does not exist in type 'Room'
  };
}
