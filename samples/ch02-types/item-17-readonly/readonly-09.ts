{
   /**
    * object array일 때, readonly를 사용하더라도 객체 자체는 readonly가 아님
    * - readonly 는 얕게(shallow) 동작함
    */
   const dates: readonly Date[] = [new Date()];
   dates.push(new Date());
      // ~~~~ Property 'push' does not exist on type 'readonly Date[]'
   dates[0].setFullYear(2037);  // OK

   
   
   /*
      Readonly 제너릭
      type Readonly<T> = {
         readonly [P in keyof T]: T[P];
      };
   */
   interface Outer {
      inner: {
        x: number;
      }
    }
    const o: Readonly<Outer> = { inner: { x: 0 }}; // inner 에 readonly가 적용되는 것이며, x에는 readonly가 적용되지 않음
    o.inner = { x: 1 };
    // ~~~~ Cannot assign to 'inner' because it is a read-only property
    o.inner.x = 1;  // OK



    /*
        인덱스 시그니처에 readonly 적용
    */
   
   let obj: {readonly [k: string]: number} = {};
   // Or Readonly<{[k: string]: number}
   obj.hi = 45;
   //  ~~ Index signature in type ... only permits reading
   obj = {...obj, hi: 12};  // OK
   obj = {...obj, bye: 34};  // OK
}
