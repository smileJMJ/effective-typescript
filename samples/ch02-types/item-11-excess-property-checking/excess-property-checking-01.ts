/*
  - 잉여속성체크(Excess Property Checks)
  (what) 타입이 명시된 변수에 객체 리터럴을 할당할 때 해당 타입의 속성이 있는지, 그 외의 속성은 없는지 확인함
  (why) 구조적 타입 시스템에서 발생할 수 있는 오류를 잡기 위해(TS는 의도와 다르게 작성된 코드를 찾으려고 함)
  - ts:checker.ts 
    - isPerformingExcessPropertyChecks 살펴보기 - 잉여속성체크(hasExcessProperties) 실행 조건
    - 이를 포함하는 isRelatedTo 함수(잉여속성체크 포함)는 값들의 관계를 확인하고자 할 때 주로 사용하는 듯함. 많이 실행 중
    - isSimpleTypeRelatedTo도 isRelatedTo 안에서 실행중인데, isSimpleTypeRelatedTo는 String, Number, Boolean 등 기본 타입인지 여부를 확인하는 함수인듯 함
  https://raw.githubusercontent.com/smileJMJ/TypeScript/main/src/compiler/checker.ts


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

  // 함수 매개변수도 동일함.
  function func(p: Room) {
    console.log(p);
  }

  func({
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
  });
}
