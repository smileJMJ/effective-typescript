/**
 * 함수 선언문: function 정의부만 있음, 별도의 할당 코드가 X (함수 문장)
 * 함수 표현식: 정의한 function을 별도의 변수에 할당하는 것
 * 
 */

{
    // 함수 선언문
    function rollDice1(sides: number): number { /* COMPRESS */ return 0; /* END */ }  // Statement
    
    // 함수 표현식
    const rollDice2 = function(sides: number): number { /* COMPRESS */ return 0; /* END */ };  // Expression
    const rollDice3 = (sides: number): number => { /* COMPRESS */ return 0; /* END */ };  // Also expression

}
