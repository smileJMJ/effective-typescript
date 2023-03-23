/**
 * 타입 중복 줄이기 - (3) 인터섹션 사용
 * - 이미 존재하는 타입을 확장할 때, (일반적이진 않지만) 인터섹션 연산자를 사용할 수 있음
 * - 유니온 타입(확장할 수 없음)에 속성을 추가하려고 할 때 유용함!
 */

{
  // intersection
  interface Person {
    firstName: string;
    lastName: string;
  }
  type PersonWithBirthDate = Person & { birth: Date };

  
  // union type and intersection
  type Dog = {
    name: string;
  }
  type PersonDog = (Person | Dog) & {age: number};
  const pd: PersonDog = {firstName: 'first', lastName: 'last', age: 1};
  const pd2: PersonDog = {name: 'name', age: 1};
}
