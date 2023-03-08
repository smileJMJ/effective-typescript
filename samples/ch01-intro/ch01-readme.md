# 다른 책(책 제목 기입하기)
## 타입(type)
### 타입의 유래
- 컴퓨터는 0, 1 두 값으로 데이터를 저장함
- 컴퓨터가 값을 정확하게 해석하고 연산할 수 있도록 하기 위해 타입이 생겨남   
(ex) 6은 정수, 6.0은 부동소수점 실수인데 타입 명시해주지 않으면 컴퓨터가 연산할 때 잘못된 값으로 반환할 수 있음

<br/>
<br/>
<br/>

## 정적 타이핑

<br/>
<br/>
<br/>

## 동적 타이핑

<br/>
<br/>
<br/>

# TypeScript   

<br/>
<br/>
<br/>

## 덕 타이핑(duck typing) = 구조적 타이핑(structural typing) 
<br/>

#### Q. "타입스크립트는 결국 정적으로 타입을 검사하고 싶어 사용하는 것이 아닌가? 그런데 덕 타이핑은 어떻게 보면 동적인 성향이 강하지 않나? 라는 의문이 들었다(발췌)" (내가 궁금하던 것!!!)

- 구조적 타이핑(Structural Typing, 정적 타이핑)과 덕 타이핑(Duck Typing, 동적 타이핑)은 비슷하지만 다르다!!!
- TypeScript는 구조적 타이핑 언어
- (구조적 타이핑) 타입 구조에 따라 타입 호환성/동등성을 결정하는 정적 타이핑 시스템
- (덕 타이핑) 런타임 중에 접근되는 타입 구조의 일부분에 의해 타입 호환성이 결정되는 동적 타이핑 시스템

<br/>

### 덕 타이핑 
```
컴퓨터 프로그래밍 분야에서 덕 타이핑(duck typing)은 동적 타이핑의 한 종류로, 객체의 변수 및 메소드의 집합이 객체의 타입을 결정하는 것을 말한다. 클래스 상속이나 인터페이스 구현으로 타입을 구분하는 대신, 덕 타이핑은 객체가 어떤 타입에 걸맞은 변수와 메소드를 지니면 객체를 해당 타입에 속하는 것으로 간주한다. 
[발췌 - 위키피디아]
```
- 객체의 타입이 중요한 것이 아니다. 객체가 가진 형태[속성(property) + 메소드] 가 중요하다.   
- 컴퓨터 입장에선 기대하는(호출하는) 동작(속성+메소드)을 잘 실행하면 된다!
- 타입 안정성 보다는 편리함/유연함에 이점이 있다.

```
객체의 타입을 다른 타입 객체와의 명시적인 관계를 비교하는 것이 아니라, 그 객체의 메서드나 속성들을 비교함으로써 판별하는 파이썬적인 프로그래밍 스타일이다. (“오리처럼 보이고, 오리처럼 운다면 오리임에 틀림없다.”) 특정 타입 대신 인터페이스를 강조함으로써, 잘 디자인된 코드는 다형적 대체를 허용함으로써 유연성을 향상시킬 수 있다. 덕 타이핑을 이용하면 type()이나 isinstance()를 이용한 테스트를 하지 않는다. 대신, 대개 hasattr() 테스트를 이용하거나, 혹은 EAFP (Easier to ask forgiveness than permission; 하고 나서 용서를 비는 것이 하기 전에 허락을 구하는 것보다 쉽다) 프로그래밍 기법을 이용한다.
[발췌] 파이썬 튜토리얼 용어 항목
```
- 다형적 대체를 허용함으로써 유연성을 향상시킬 수 있다.

<br/>

```
interface Quackable {
	quack(): void
}

// implements/extends로 구현 -> 명시적 타입 선언
class Duck implements Quackable {
    quack() {
        console.log('Quack');
    }
}

// Duck Typing
class Person {
    quack() {
        console.log('Quack');
    }
}

function inTheForest(quackable: Quackable): void {
    quackable.quack();
}

inTheForest(new Duck()); // OK
inTheForest(new Person()); // OK
```

<br/>



<br/>


# 

<br/>
<br/>
<br/>

## 참고글
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://mygumi.tistory.com/367
- https://velog.io/@thms200/Typescript-Duck-Typing-%EB%8D%95%ED%83%80%EC%9D%B4%ED%95%91
- https://devopedia.org/duck-typing
- https://en.wikipedia.org/wiki/Duck_typing
- https://www.koffeinfrei.org/2012/03/19/static-vs-dynamic-vs-strong-vs-weak-vs-duck-typing/
- https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts 
-
