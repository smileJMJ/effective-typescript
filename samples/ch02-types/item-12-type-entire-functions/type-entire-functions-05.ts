/**
 * 시그니처가 일치하는 다른 함수가 있을 때, 함수 표현식에 타입을 적용해볼만 하다.
 * 
 */
declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}

interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}

interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string | URL, status?: number): Response;
};

{
    // fetch의 타입은 Promise<Response>
    const response = fetch('/quote?by=Mark+Twain');  

    // fetch를 이용한 함수가 있을 때
    async function getQuote() {
        const response = await fetch('/quote?by=Mark+Twain');
        const quote = await response.json();
        return quote;
    }
    // fetch 정상 호출되어 반환되는 예상 응답값
    // {
    //   "quote": "If you tell the truth, you don't have to remember anything.",
    //   "source": "notebook",
    //   "date": "1894"
    // }
}

