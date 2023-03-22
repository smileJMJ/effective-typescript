/**
 * type / interface 비슷한 점
 */
{
  type TState = {
    name: string;
    capital: string;
  }

  interface IState {
    name: string;
    capital: string;
  }

  /**
   * (1) 상태에는 차이가 없다 -> 잉여 속성 체크 등 동일한 오류가 발생한다.
   */
  const wyoming: TState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500000
    // ~~~~~~~~~~~~~~~~~~ Type ... is not assignable to type 'TState'
    //                    Object literal may only specify known properties, and
    //                    'population' does not exist in type 'TState'
  };

  const iWm: IState = {
    name: 'Wyoming',
    capital: 'Cheyenne',
    population: 500000
  //   Type '{ name: string; capital: string; population: number; }' is not assignable to type 'IState'.
  //    Object literal may only specify known properties, and 'population' does not exist in type 'IState'.
  };
  
  
  /**
   * (2) 인덱스 시그니처는 type / interface 둘 다 사용이 가능하다.
   */
  type TDict = { [key: string]: string };
  interface IDict {
    [key: string]: string;
  }
  

  /**
   * (3) 함수 타입도 둘 다 정의할 수 있다.
   * - 단순한 함수 타입에는 타입 별칭(alias)가 더 나은 선택
   * - 함수 타입에 추가적인 속성이 있다면 type / interface 둘 다 괜찮음
   */

  // 단순한 함수 타입
  type TFn = (x: number) => string;
  interface IFn {
    (x: number): string;
  }

  const toStrT: TFn = x => '' + x;  // OK
  const toStrI: IFn = x => '' + x;  // OK

  // 함수 및 추가 속성이 있을 때
  type TFnWithProperties = {
    (x: number): number;
    prop: string;
  }
  interface IFnWithProperties {
    (x: number): number;
    prop: string;
  }


  /**
   * (4) 둘 다 제네릭이 가능함
   */
  type TPair<T> = {
    first: T;
    second: T;
  }
  interface IPair<T> {
    first: T;
    second: T;
  }


  /**
   * (5) interface extends type (인터페이스는 타입을 확장 가능),
   *      type = type & interface (타입은 인터페이스를 확장 가능)
   * - 인터페이스는 유니온 타입 같은 복잡한 타입을 확장하지 못함
   * - 복잡한 타입을 확장하고 싶다면 "타입과 &" 사용해야 함 
   */
  interface IStateWithPop extends TState {
    population: number;
  }
  type TStateWithPop = IState & { population: number; };


  /**
   * (6) 클래스를 구현(implements)할 때, 둘 다 사용 가능
   * implements
   * - 미리 추상화된 인터페이스를 채택하여 사용하는 것
   * - 추상화 된 메소드, 프로퍼티를 반드시 구현해야 함
   * extends
   * - 상속받고자 하는 부모 클래스 명시
   * - 부모 클래스의 프로퍼티, 메소드를 따로 구현하지 않아도 인스턴스에서 자유롭게 사용 가능 함
   */
  class StateT implements TState {
    name: string = '';
    capital: string = '';
  }
  class StateI implements IState {
    name: string = '';
    capital: string = '';
  }
}