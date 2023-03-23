/**
 * 타입 중복 줄이기 - (1) 타입에 이름 붙이기 
 */

{
  // 타입 반복 등장!
  function distance(a: {x: number, y: number}, b: {x: number, y: number}) { // Duplicate function implementation.
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
  
  // 타입에 이름 붙이기 - 1
  interface Point2D {
    x: number;
    y: number;
  }
  function distanceNew(a: Point2D, b: Point2D) { /* ... */ }



  // 타입에 이름 붙이기 - 2
  interface Options {}
  
  // 타입 반복
  function get(url: string, opts: Options): Promise<Response> { /* COMPRESS */ return Promise.resolve(new Response()); /* END */ }
  function post(url: string, opts: Options): Promise<Response> { /* COMPRESS */ return Promise.resolve(new Response()); /* END */ }

  // 타입 정리 - 함수 타입
  type HTTPFunction = (url: string, options: Options) => Promise<Response>;
  const get: HTTPFunction = (url, options) => { /* COMPRESS */ return Promise.resolve(new Response()); /* END */ };
  const post: HTTPFunction = (url, options) => { /* COMPRESS */ return Promise.resolve(new Response()); /* END */ };
}