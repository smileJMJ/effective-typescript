/**
 * 변경 관련된 오류 방지를 위해 readonly 사용하기
 * - JS / TS는 암묵적으로 함수가 매개변수를 변경하지 않는다고 가정하지만, 명시적으로 표현하자~!
 * - 함수가 매개변수를 변경하지 않을 시, readonly로 선언하는 것이 좋다 => 넓은 타입 호출 / 의도치 않은 변경 방지
 */

{
  // readonly는 array / tuple literal type에 사용 가능
  let a: readonly number = 3; // 'readonly' type modifier is only permitted on array and tuple literal types.
  let aa: readonly number[] = [1, 2];
  let aaa: readonly [number, string] = [1, 'a'];
  let aaaa: readonly ArrayLike<number> = [1, 2];
  let aaaaa: readonly {[key: number]: number} = {0: 1, 1: 2};


  /**
   * readonly number[]는 배열 요소 쓰기 불가능, length 변경 불가능, 배열을 변경하는 메소드(ex. pop) 를 호출할 수 없음
   * -> number[]보다 큰 타입 (number[]는 readonly number[]의 서브타입임)
   * -> readonly number[]에 number[] 할당 가능, 반대는 불가능!
   */
  const a: number[] = [1, 2, 3];
  const b: readonly number[] = a; // readonly number[]에 number[] 할당 가능
  const c: number[] = b; // number[]에 readonly number[] 할당 불가능 (readonly number[]가 더 큰 타입임)
    // ~ Type 'readonly number[]' is 'readonly' and cannot be
    //   assigned to the mutable type 'number[]'
    

  // arr를 readonly number[] 로 설정
  function arraySum2(arr: readonly number[]) {
    let sum = 0, num;
    while ((num = arr.pop()) !== undefined) {
                   // ~~~ 'pop' does not exist on type 'readonly number[]'
      sum += num;
    }
    return sum;
  }

  // readonly number[]로 매개변수 지정하여, 함수 내부에서는 arr을 변경하지 않도록 함
  function arraySum3(arr: readonly number[]) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return sum;
  }
}
