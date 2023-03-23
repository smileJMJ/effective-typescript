/**
 * 타입 중복 줄이기 - (5) 값의 타입 정의 - typeof
 * (타입 관점) 값을 읽어서 "타입"을 반환(TS에서 타입 종류는 무수히 많음)
 * (값 관점) JS 런타임 타입을 가리키는 문자열 반환 (string, boolean, number, undefined, object, function)
 */

{
  const INIT_OPTIONS = {
    width: 640,
    height: 480,
    color: '#00FF00',
    label: 'VGA',
  };

  // interface로 Opions 정의했을 때
  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }

  // typeof 사용 시
  type Options2 = typeof INIT_OPTIONS;
}
