/**
 * TS에서는 "함수 표현식" 을 사용하는 것이 좋다
 * => 함수의 매개변수/반환값까지 함수 전체를 타입으로 선언하여 "재활용"하기 좋음
 * => 불필요한 코드 반복을 줄임
 *
*/

{
    // 함수의 매개변수/반환값까지 함수 전체를 타입으로 선언하여 "재활용"하기 좋음
    type DiceRollFn = (sides: number) => number;
    const rollDice: DiceRollFn = sides => { /* COMPRESS */ return 0; /* END */ };
    const rollDiceRandom: DiceRollFn = sides => { /* COMPRESS */ return sides * Math.random(); /* END */ };

    // 불필요한 코드 반복을 줄임
    function add(a: number, b: number) { return a + b; }
    function sub(a: number, b: number) { return a - b; }
    function mul(a: number, b: number) { return a * b; }
    function div(a: number, b: number) { return a / b; }

    type BinaryFn = (a: number, b: number) => number;
    const addNew: BinaryFn = (a, b) => a + b;
    const subNew: BinaryFn = (a, b) => a - b;
    const mulNew: BinaryFn = (a, b) => a * b;
    const divNew: BinaryFn = (a, b) => a / b;
}