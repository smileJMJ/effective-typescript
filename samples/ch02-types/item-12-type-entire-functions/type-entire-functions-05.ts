/**
 * 시그니처가 일치하는 다른 함수가 있을 때, 함수 표현식에 타입을 적용해볼만 하다.
 * 
 */
// fetch 타입 선언(lib.dom.d.ts)
declare function fetch(
    input: RequestInfo, init?: RequestInit
): Promise<Response>;

{
    // fetch의 타입은 Promise<Response>
    const response = fetch('/quote?by=Mark+Twain');  

    // fetch를 이용한 함수가 있을 때
    async function getQuote() {
        const response = await fetch('/quote?by=Mark+Twain');
        const quote = await response.json(); // API 호출이 정상적이지 않으면 응답은 JSON이 아닌 오류메시지(string)를 같은 Promise 반환됨
        return quote;
    }
}

