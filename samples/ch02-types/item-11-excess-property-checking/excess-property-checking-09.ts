/*
  잉여속성체크 X인 경우 (3) 인덱스 시그니처를 사용함 -> TS가 어떤 속성이 들어올지를 예상할 수 있음
*/

{
  // (1) 타입을 인덱스 시그니처로만 정의했을 때
  interface Options0 {
    [opt: string]: number;
  }

  const key: number = 0;
  const o0: Options0 = {a: 1};
  const o00: Options0 = {[key]: true}; // key, value 타입 둘다 체크 해줌
  const o000: Options0 = {}; // 아무 속성이 없어도 타입에러 발생하지 않음

  
  // (2) 타입을 인덱스 시그니처, 선택적 속성으로 정의했을 때
  interface Options {
    darkMode?: boolean;
    [otherOptions: string]: unknown;
  }
  const o: Options = { darkmode: true };  // OK
  const ot: Options = { a: null }; // darkmode는 없지만 정상임! (darkmode는 있어도 되고 없어도 되고)
  const ott: Options = {}; // 아무 속성이 없어도 타입에러 발생하지 않음


  // (3) 타입을 인덱스 시그니처, 고정 속성으로 정의했을 때
  interface Options2 {
    darkMode: boolean;
    [otherOptions: string]: unknown;
  }
  const oo: Options2 = { darkMode: true };
  const ooo: Options2 = { a: null }; // Property 'darkMode' is missing in type '{ a: null; }' but required in type 'Options2'.
  const oooo: Options2 = {}; // 아무 속성이 없으면 타입에러 발생함
  
  /*
    (참고) https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
    인덱스 시그니처의 밸류 타입을 number 등 boolean(darkMode의 밸류 타입) 이외의 타입을 지정하면 darkMode 밸류에서 에러 발생함 
    (darkMode도 인덱스된 값 중 하나이기 때문(obj.property === obj['property']))
  */
}