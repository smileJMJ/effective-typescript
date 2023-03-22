{
  interface Options {
    title: string;
    darkMode?: boolean;
  }

  // 타입을 명시한 변수에 할당하는 값이 "객체 리터럴"임 -> 잉여속성체크 O
  const o: Options = { darkmode: true, title: 'Ski Free' };
                    // ~~~~~~~~ 'darkmode' does not exist in type 'Options'...
  

  // 잉여속성체크 X인 경우 (1) 타입을 명시한 변수에 할당하는 값이 "변수"임 (객체 리터럴이 아님)             
  const intermediate = { darkmode: true, title: 'Ski Free' };
  const o2: Options = intermediate;  // OK



  // 잉여속성체크 X인 경우 (2) 타입 단언문을 사용함 (타입 단언문 사용 시 타입체크를 하지 않음)
  const o3 = { darkmode: true, title: 'Ski Free' } as Options;  // OK


  // 잉여속성체크 X인 경우 (3) 인덱스 시그니처를 사용함 -> TS가 어떤 속성이 들어올지를 예상할 수 있음
  // 예제는 다음 파일에서
}