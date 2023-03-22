/**
 * type / interface 차이점
 */

{
    /**
     * (1) 유니온 타입은 있으나, 유니온 인터페이스는 없다.
     */
    type AorB = 'a' | 'b'; // (O)
    interface IAorB = {a: 'a'} | {b: 'b'} // (X)

    // 인터페이스에서 유니온 타입 확장이 필요할 때 - 인덱스 시그니처의 밸류 타입으로 유니온 타입 정의
    type Input = { /* ... */ };
    type Output = { /* ... */ };
    interface VariableMap {
        [name: string]: Input | Output;
    }

    // type 키워드는 interface보다 쓰임새가 많다
    // 유니온 타입 & name 속성을 붙인 타입 - 인터페이스로는 정의 불가능
    type NamedVariable = (Input | Output) & { name: string };


    /**
     * (2) type을 이용해 튜플, 배열 타입 정의 가능, interface는 비스무리하게 가능
     * - 단, 인터페이스로 구현 시 튜플에서 사용 가능한 concat등 메소드를 이용할 수 없음
     * - 튜플은 type으로 구현하는 것이 낫다.
     */
    type Pair = [number, number];
    type StringList = string[];
    type NamedNums = [string, ...number[]];
    interface Tuple {
        0: number;
        1: number;
        length: 2;
      }
    
    const tt: Pair = [10, 20]; // OK
    const t: Tuple = [10, 20];  // OK



    /**
     * (3) 인터페이스는 타입에는 없는 기능들이 있다.
     * - 보강(argument)이 가능 => 선언 병합(declaration merging)
     * (선언 병합: 컴파일러가 같은 이름으로 선언된 두 개의 개별적인 선언을 하나의 정의롭 병합하는 것)
     * - 타입 선언 파일을 작성할 때, 선언 병합을 지원하기 위해 반드시 인터페이스를 사용해야 함
     *  프로퍼티가 추가되는 것을 원하지 않는다면 타입을 써야함
     * (ex) ts는 여러 버전의 자바스크립트 표준 라이브러리에서 여러 타입을 모아 병합함
     * Array 인터페이스는 lib.es5.d.ts에 있고 기본적으로 이를 사용함.
     * tsconfig.json의 lib에 ES2015를 추가하면 lib.es2015.d.ts에 선언된 Array 인터페이스를 병합하여 사용함
     */
    interface IState {
        name: string;
        capital: string;
    }
    interface IState {
        population: number;
    }
    const wyoming: IState = {
        name: 'Wyoming',
        capital: 'Cheyenne',
        population: 500_000
    };  // OK


    /**
     * 복잡한 타입이라면 타입 별칭(Type alias) 사용하기!
     * 간단한 객체타입이라면 일관성과 보강 관점에서 고려해보기
     * 프로젝트 내부에서만(클라이언트) 사용하는 코드는 선언 병합 발생하지 않도록 설계 필요 -> 타입으로 정의
     * 프로젝트 외부와 영향도 있는 타입은(ex. API, 라이브러리 등) 선언 병합을 사용하도록 -> 인터페이스로 정의
     */
}
