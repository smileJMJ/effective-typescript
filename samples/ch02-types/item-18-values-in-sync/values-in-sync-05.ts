/**
 * 매핑된 타입을 사용하여 값을 동기화하기
 * => A 객체가 가진 속성을 B 객체가 똑같이 가지게 할 때 유용함!
 */

interface ScatterProps {
  // The data
  xs: number[];
  ys: number[];

  // Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;

  // Events
  onClick: (x: number, y: number, index: number) => void;
}

const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

function shouldUpdate(
  oldProps: ScatterProps,
  newProps: ScatterProps
) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) { // onClick의 핸들러는 새로 업데이트 할 필요가 없어서 onClick 제외하기 위한 플래그 생성
      return true;
    }
  }
  return false;
}
