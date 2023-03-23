/**
 * number 인덱스 시그니처 보다는 Array, 튜플, ArrayLike 사용하기
 * - Array: 순서가 있는 원소의 모음 (ex) number[]
 * - 튜플: 원소의 수와 원소의 타입이 정확히 지정된 배열의 "타입" (ex) [string, number]
 * 
 * // JavaScript에서 Array index는 문자열로 변환되어 사용한다. -> Array가 Object 이기 때문 (key: string)
 * (ex) const arr = [1, 2];
 * arr[1] = 2; // 가능
 * arra['1'] = 2; // 가능
 * Object.keys(arr) = ['0', '1'];
 * 
 * Ts는 숫자 키를 허용하고, 문자열 키와 다른 것으로 인식함! (단, 런타임 동작과는 다름. 단순히 타입 오류를 잡기 위한 용도)
 */



{
  // lib.es5.d.ts 에서 추출
  // interface Array<T> {
  //   length: number;
  //   pop(): T | undefined;
  //   push(...items: T[]): number;
  //   concat(...items: ConcatArray<T>[]): T[];
  //   // 다른 메소드 생략
  //   [n: number]: T; // index는 number 로 선언
  // }

  type T = Array<T>;
  const xs = [1, 2, 3];
  const x0 = xs[0];  // OK
  const x1 = xs['1'];
            // ~~~ Element implicitly has an 'any' type
            //      because index expression is not of type 'number'

  // k 타입을 boolean으로 바꿔야 인덱스 타입으로 사용할 수 없다는 에러 발생..! 왜 string 은 에러를 뱉지 않는가??? 책에선 뱉는다고 했는데?!
  function get<T>(array: T[], k: string): T { 
    return array[k];
              // ~ Element implicitly has an 'any' type
              //   because index expression is not of type 'number'
  }


  // 길이를 가지는 배열과 비슷한 형태의 튜플을 사용하고 싶다면 ArrayLike 타입 사용하기
  function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
    if (i < xs.length) {
      return xs[i];
    }
    throw new Error(`Attempt to access ${i} which is past end of array.`)
  }

  const tupleLike: ArrayLike<string> = {
    '0': 'A',
    '1': 'B',
    length: 2,
  };  // OK

}
