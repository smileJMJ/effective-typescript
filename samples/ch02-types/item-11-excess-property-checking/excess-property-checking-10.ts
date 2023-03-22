/*
  모든 속성이 선택적 속성인 타입 => "약한 타입" 일 땐, 
  값 타입(opts 추론 타입)과 선언 타입(LineChartOptions)에 공통된 속성이 있는지 확인하는 별도의 체크를 수행함
  => 객체 리터럴을 바로 할당해도, 변수에 객체리터럴을 할당해서 그 변수를 할당해도 해당 타입의 속성이 하나라도 없으면 다 타입 에러를 내버림
  => 객체 안에 아예 값이 없던지, 있을 거면 선택적 속성값을 하나라도 갖고 있던지!!!!
*/

{
  interface LineChartOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean;
  }

  // logScale
  const opts = { logScale: true };
  const o: LineChartOptions = opts;
     // ~ Type '{ logScale: boolean; }' has no properties in common
     //   with type 'LineChartOptions'
  
  
  // LineChartOptions에는 없는 완전 새로운 값
  const obj = { today: true };
  const oo: LineChartOptions = { today: true };
  const ooObj: LineChartOptions = obj; // 변수를 할당해도 안됨!
  const a1: LineChartOptions = {};
  const a2: LineChartOptions = { logscale: true };
  const a3: LineChartOptions = { logscale: true, invertedYAxis: true };
  const a4: LineChartOptions = { logscale: true, invertedYAxis: true, areaChart: true };
  const a5: LineChartOptions = { logscale: true, today: true }; // 선택 속성이 아닌 값이 있으면 에러뱉을거야~!

}