# 내용

(1) commonJS 패턴으로 (module.exports) 로 작성해도 .d.ts 구문은 ESM 구문처럼 보임
```
// ts 
const maxInterval = 12;
function getArrayLength(arr) {
  return arr.length;
}
module.exports = {
  getArrayLength,
  maxInterval,
};

// .d.ts
export function getArrayLength(arr: any[]): number;
export const maxInterval: 12;
```

<br/>

(2) Default Exports 
- .d.ts 에서 ``export default``를 사용하려면 ``esModuleInterop: true``를 사용해야 함
- ``esModuleInterop: false``이면 ``export =`` 구문으로 표기됨


※ export
    - js 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용함  
    - named export, default export 두 종류가 있음
    - named export는 모듈 하나에 이름이 있는 여러 값들을 내보낼 수 있으나, import 할 때 동일한 이름으로 가져와야 함
    - default export는 모듈 하나에 하나의 값만 내보낼 수 있고, import 할 때 어떤 이름으로도 가져올 수 있음


```
//========named export============
// 먼저 선언한 식별자 내보내기
export { myFunction, myVariable };

// 각각의 식별자 내보내기
// (변수, 상수, 함수, 클래스)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };

//========default export===========
// 먼저 선언한 식별자 내보내기
export { myFunction as default };

// 각각의 식별자 내보내기
export default function () { ... };
export default class { ... }

```

<br/>
<br/>

※ commonjs - default export 구문을 .d.ts 로 보면
```
// ts - 원시값
module.exports = /hello( world)?/;

// .d.ts
declare const _exports: RegExp;
export = _exports;
```
```
// ts - 원시값
module.exports = 3.142;

// .d.ts
declare const _exports: number;
export = _exports;
```
```
// ts - 함수
function getArrayLength(arr) {
  return arr.length;
} 
getArrayLength.maxInterval = 12;
module.exports = getArrayLength;

// .d.ts
export = getArrayLength;
declare function getArrayLength(arr: any): any;
declare namespace getArrayLength {
    const maxInterval: number;
}
```



<br/>
<br/>
<br/>




# 참고
(1) module의 d.ts 내용
https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

(2) export 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export

(3) Modules (읽어보기)
https://www.typescriptlang.org/docs/handbook/modules.html

