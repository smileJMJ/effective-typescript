{
  // 상태 체크 함수 - 이전 버전
  async function checkedFetch(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (!response.ok) {
      // Converted to a rejected Promise in an async function
      throw new Error('Request failed: ' + response.status);
    }
    return response;
  }

  // 상태 체크 함수 - 함수표현식으로 변꼉 & 함수 전체에 타입(typeof fetch)을 적용함
  const checkedFech2: typeof fetch = sync(input, init) => {
    const response = await fetch(input, init);
    if (!response.ok) {
      // Converted to a rejected Promise in an async function
      throw new Error('Request failed: ' + response.status);
    }
    return response;
  };

}