/*
  - Options 타입의 범위는 매우 넓기 때문에 순수한 구조적 타입 체커로는 Option에서 의도와 다른 코드를 알아내기가 어렵다.
  - 따라서, 구조적 타입 시스템을 유지하면서(타입 안의 속성을 체크하면서) 객체 리터럴에 알 수 없는 속성을 허용하지 않기로 함 
    -> "엄격한 객체 리터럴 체크"라고도 불림 
*/

{
  interface Options {
    title: string;
    darkMode?: boolean;
  }

  // Options 타입의 범위가 넓은 이유 - Options의 속성들만 갖고 있는 모든 타입이 할당 가능 (구조적 타입)
  const o1: Options = document;  // OK - document.title 이 있기 때문
  const o2: Options = new HTMLAnchorElement;  // OK - HTMLAnchorElement extends HTMLElement (HTMLElement안에 title이 있음)


  // 잉여속성체크가 필요한 이유 - 의도와 다른 이름의 속성값이 들어오는 것을 잡기 위해
  function createWindow(options: Options) {
    if (options.darkMode) {
    }
    // ...
  }
  createWindow({
    title: 'Spider Solitaire',
    darkmode: true
  // ~~~~~~~~~~~~~ Object literal may only specify known properties, but
  //               'darkmode' does not exist in type 'Options'.
  //               Did you mean to write 'darkMode'?
  });

  

}