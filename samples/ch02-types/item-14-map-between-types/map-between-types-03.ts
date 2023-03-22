/**
 * 타입 중복 줄이기 - (1) 타입에 이름 붙이기 
 */

{
  // 타입 반복 등장!
  function distance(a: {x: number, y: number}, b: {x: number, y: number}) { // Duplicate function implementation.
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }
  
  // 타입에 이름 붙이기
  interface Point2D {
    x: number;
    y: number;
  }
  function distanceNew(a: Point2D, b: Point2D) { /* ... */ }
}