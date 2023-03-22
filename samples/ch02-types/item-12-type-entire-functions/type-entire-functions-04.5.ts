/**
 * 라이브러리는 공통 함수 시그니처를 타입으로 제공하기도 함
 * (ex) React의 이벤트 객체 타입인 MouseEvent 대신 함수 전체에 적용할 수 있는 MouseEventHandler 타입도 제공함 
 *
*/
{
    // React - MouseEvent
    interface MouseEvent extends UIEvent {
        readonly altKey: boolean;
        readonly button: number;
        readonly buttons: number;
        readonly clientX: number;
        readonly clientY: number;
        readonly ctrlKey: boolean;
        readonly metaKey: boolean;
        readonly movementX: number;
        readonly movementY: number;
        readonly offsetX: number;
        readonly offsetY: number;
        readonly pageX: number;
        readonly pageY: number;
        readonly relatedTarget: EventTarget | null;
        readonly screenX: number;
        readonly screenY: number;
        readonly shiftKey: boolean;
        readonly x: number;
        readonly y: number;
        getModifierState(keyArg: string): boolean;
        /** @deprecated */
        initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
    }

    // React - MouseEventHandler
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];


}
