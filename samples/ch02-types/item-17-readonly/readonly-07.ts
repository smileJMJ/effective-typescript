{
  // const + readonly 일 때
  const ro: readonly number[] = [];
  ro = [1]; // 할당 불가능
  ro.push(2); // 배열 요소 변경 불가능

  // let + readonly 일 때
  let roo: readonly number[] = [];
  roo = [1]; // 할당 가능
  ro.push(2); // 배열 요소 불가능  
}