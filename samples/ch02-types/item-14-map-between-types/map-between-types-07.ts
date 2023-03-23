/**
 * 타입 중복 줄이기 - (2) 인터페이스 확장
 * - 두 인터페이스가 필드의 부분집합을 공유하면, 공통 필드만 골라서 기반 클래스로 분리할 수 있음
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


  // 인터페이스 확장
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface PersonWithBirthDate extends Person {
    birth: Date;
  }
}
