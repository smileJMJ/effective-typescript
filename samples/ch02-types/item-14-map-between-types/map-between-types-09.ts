/**
 * 타입 중복 줄이기 - (4) 인덱싱 + 매핑
 * - 속성의 중복을 줄이는 데에 유용함
 * - keyof
 * - Pick, Partial
 */
{
  // 중복 코드
  // State는 전체 앱의 상태, TopNavState는 상단 네비 상태 표현
  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }
  interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
  }

  // State는 유지하고, TopNavState를 State의 부분집합으로 정의 -> 전체 앱의 상태를 하나의 인터페이스로 유지하기 위해 (State의 타입 변경이 있을 때 TopNavState도 변경됨)
  
  // 1. State를 인덱싱 
  type TopNavState1 = {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
  };

  // 2. 매핑 -> 배열을 루프도는 것과 같음 => Pick!!!
  type TopNavState2 = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
  };


  /**
   * Pick -> 선택한 속성 키 값에 해당하는 value만 타입에 포함됨
   * Type에서 속성 키(문자열 리터럴 또는 문자열 리터럴의 합집합) 집합을 선택하여 유형을 구성합니다.
   * type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
   * keyof: 타입을 받아서 속성 타입의 유니온을 반환함
   */
  type TopNavState3 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

  interface SaveAction {
    type: 'save';
    // ...
  }
  interface LoadAction {
    type: 'load';
    // ...
  }
  type Action = SaveAction | LoadAction;
  type ActionType = 'save' | 'load';  // (기존) 타입의 반복!!

  // 타입 인덱싱과 Pick 의 타입 차이
  type ActionTypeMap = Action['type'];  // Action 타입 인덱싱(value type만 가져와서 유니온) - "save" | "load"
  type ActionRec = Pick<Action, 'type'>;  // Pick은 인터페이스 구조로 - {type: "save" | "load"}


  /**
   * 선택적 속성의 인덱싱 + 매핑
   */
  interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
  }
  interface OptionsUpdate { // Options와 대부분 동일하며, 선택적 속성으로 사용하고자 할 때
    width?: number;
    height?: number;
    color?: string;
    label?: string;
  }

  // 인덱싱 + 매핑 + keyof
  type OptionsUpdateMap = {[k in keyof Options]?: Options[k]};

  // Partial -> 모든 속성들이 선택 속성으로 바뀐 타입으로 반환
  // Type의 모든 속성이 optional로 설정된 형식을 구성합니다. 이 유틸리티는 주어진 유형의 모든 하위 집합을 나타내는 유형을 반환합니다.
  type OptionPartial = Partial<Options>;
  
}
