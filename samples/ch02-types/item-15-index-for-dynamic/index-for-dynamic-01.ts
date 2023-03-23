/**
 * 동적 데이터에 인덱스 시그니처 사용하기
 * - 인덱스 시그니처: [key: keyType]: valueType
 * - 키 타입은 string | number | symbol
 * - 런타임 때까지 객체의 속성을 알 수 없을 경우에만 인덱스 시그니처를 사용하도록 하자
 * - 안전한 접근을 위해 인덱스 시그니처 값 타입에 undefined 를 추가하는 것을 고려해야 함
 */

{
  // 인덱스 시그니처 표현 -> [property: string]: string
  type Rocket = {[property: string]: string};

  const rocket2: Rocket = {
    name: 'Falcon 9',
    variant: 'v1.0',
    thrust: '4,940 kN',
  };  // OK

  // 어떤 타입에 가능한 필드가 제한되어 있는 경우엔 선택적 필드 | 유니온 타입을 사용하자.
  interface Row1 { [column: string]: number }  // 너무 광범위함
  interface Row2 { a: number; b?: number; c?: number; d?: number }  // 최선
  type Row3 = // 가장 정확하지만 사용하기 번거로움
      | { a: number; }
      | { a: number; b: number; }
      | { a: number; b: number; c: number;  }
      | { a: number; b: number; c: number; d: number };


  /**
   * 타입이 너무 광범위할 때, 인덱스 시그니처를 대신할 대안 - 1. Record<Keys, Type>
   * 속성 키가 Keys이고 속성 값이 Type인 객체 유형을 구성합니다. 이 유틸리티는 유형의 속성을 다른 유형에 매핑하는 데 사용할 수 있습니다.
   * type Record<K extends string | number | symbol, T> = { [P in K]: T; }
   */
  type Vec3D = Record<'x' | 'y' | 'z', number>;

  /**
   * 타입이 너무 광범위할 때, 인덱스 시그니처를 대신할 대안 - 2. 매핑된 타입 사용하기
   */
  type Vec3D1 = {[k in 'x' | 'y' | 'z']: number};

  // Same as above
  type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string : number};
}
