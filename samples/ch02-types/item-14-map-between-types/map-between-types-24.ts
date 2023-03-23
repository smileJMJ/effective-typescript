/**
 * 타입 중복 줄이기 - (7) 제네릭
 * - 제네릭은 타입을 위한 함수와 같음
 * - 제네릭에서 extends를 이용해 매개변수를 제한함(제네릭 매개변수가 특정 타입을 확장함) (ex) <T extends Name>
 */

{
  interface Name {
    first: string;
    last: string;
  }
  type DancingDuo<T extends Name> = [T, T];
  
  // 제네릭 매개변수의 타입에 만족하는 타입을 넣어줬을 때
  const couple1: DancingDuo<Name> = [
    {first: 'Fred', last: 'Astaire'},
    {first: 'Ginger', last: 'Rogers'}
  ];  // OK
  
  // 제네릭 매개변수의 타입과 다른 타입을 넣었을 때
  const couple2: DancingDuo<{first: string}> = [
                         // ~~~~~~~~~~~~~~~
                         // Property 'last' is missing in type
                         // '{ first: string; }' but required in type 'Name'
    {first: 'Sonny'},
    {first: 'Cher'}
  ];
  
  // Pick 매개변수에 잘못된 키 값을 넣으면 타입 에러 발생
  type FirstMiddle = Pick<Name, 'first' | 'middle'>;
                             // ~~~~~~~~~~~~~~~~~~
                             // Type '"middle"' is not assignable
                             // to type '"first" | "last"'
}
