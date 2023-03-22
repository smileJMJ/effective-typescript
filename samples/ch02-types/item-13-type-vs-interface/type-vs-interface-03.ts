/**
 * 명명된 타입(named type)을 정의하는 방법: type(타입 별칭(alias)) / interface
 * 대부분의 경우은 type을 사용해도, interface를 사용해도 됨
 * 대신 차이를 알고, 타입 정의  시 일관성을 유지할 수 있도록 하자 
 * 
 */

{
  // type
  type TState = {
    name: string;
    capital: string;
  }

  // interface
  interface IState {
    name: string;
    capital: string;
  }
  
}