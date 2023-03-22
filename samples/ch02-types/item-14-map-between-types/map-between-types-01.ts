/**
 * 타입 연산과 제너릭 사용으로 반복 줄이기
 * - 코드를 반복하지 말자 DRY(don't repeat yourself) 원칙
 * - 타입 중복을 줄여야한다.
 */

{
  // 타입 중복 코드
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface PersonWithBirthDate {
    firstName: string;
    lastName: string;
    birth: Date;
  }
}
