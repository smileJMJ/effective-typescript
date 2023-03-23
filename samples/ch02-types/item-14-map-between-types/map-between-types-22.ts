/**
 * 타입 중복 줄이기 - (6) 함수나 메서드의 반환값에 명명된 타입 만들기 => ReturnType<>
 */

{

  function getUserInfo(userId: string) {
    // COMPRESS
    const name = 'Bob';
    const age = 12;
    const height = 48;
    const weight = 70;
    const favoriteColor = 'blue';
    // END
    return {
      userId,
      name,
      age,
      height,
      weight,
      favoriteColor,
    };
  }
  
  /**
   * ReturnType
   * type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any // T가 R을 반환하는 함수 타입으로 추론되면 R을 반환하겠다
   */
  type UserInfo = ReturnType<typeof getUserInfo>; // 제네릭으로 함수의 타입이 들어감


}