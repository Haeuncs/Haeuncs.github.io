---
title: Reference Type VS Value Type, Class VS Struct
date: 2020-05-02 00:00:00
description: Swift 에서 Reference Type VS Value Type 를 알아보자 💃🏻
tags: ["swift잡학사전", "swift"]
---

# Reference Type VS Value Type

- value type을 전달할 경우, 해당 변수는 데이터의 복사값을 생성합니다.
- reference type을 전달할 경우, 해당 변수는 메모리에 있는 원래의 데이터를 가리킵니다.

Reference Type

    - Class
    - Closure
    - function

Value Type

    - Struct
    - enum
    - Array
    - String
    - Dictionary
    - int

스위프트 표준 라이브러리에 포함되어 있는 기본 타입은 모두 구조체로 구현되어 있음 ⇒ 모두 값 타입

---

### Class와 struct의 차이는 무엇인가요?

[Value and Reference Types - Swift Blog](https://developer.apple.com/swift/blog/?id=10)

- 언제 어느 것을 사용해야하는지 몇가지 예를 들기

  상속 → 클래스, 타입캐스팅 → 클래스의 인스턴스에서만, deinitializer 사용은 클래스

- 메모리 (Stack, Heap) 에 유지되는 방법

<br/>

---

### Class

Reference Type (참조)

Class 는 heap 영역에, 그 인스턴스의 **주소값**은 Stack 영역에 쌓임

더는 참조할 필요가 없을 때 메모리에서 해제 (=소멸)되기 직전 deinit 메서드가 호출된다.

런타임에 할당되고 **레퍼런스 카운팅**을 통해 참조 해제 관리

```swift
// Reference type example
class C {
	var data: Int = -1
}
var x = C()
var y = x						// x is copied to y
x.data = 42						// changes the instance referred to by x (and y)
println("\(x.data), \(y.data)")
// prints "42, 42"
```

<br/>

### Struct

Value Type (값)

Struct 는 **값 타입**이기 때문에 인스턴스를 생성할 때, 인스턴스를 새로 다른 공간에 **새롭게 복사한 인자**를 전달

그렇기 때문에 **Stack** 에 쌓인다

컴파일 시간에 컴파일러가 언제 메모리를 할당 및 해제해야 하는지 알고 있다.

```swift
// Value type example
struct S {
	var data: Int = -1
}
var a = S()
var b = a						// a is copied to b
a.data = 42						// Changes a, not b
println("\(a.data), \(b.data)")
// prints "42, -1"
```
<br/>

---

### 예시

Class 에 인스턴스를 만들고 변수의 값을 바꾸면 → 해당 인스턴스의 값이 변경

Struct 에 인스턴스를 만들고 변수의 값을 바꾸면 → 해당 인스턴스 값이 변경되지 않음

⇒ 구조체와 클래스의 차이는 상수를 처리하는 방식, 구조체 자체가 상수임으로 변수의 값을 바꿀 수 없다.

Class 를 let 상수로 선언해도 내부 프로퍼티의 값을 변경할 수 있음

**Struct 는 안됨**
<br/>
<br/>

---

## 구조체와 클래스의 **공통점**

- 값을 저장하기 위한 프로퍼티 정의
- 기능 실행을 위한 메서드 정의
- 서브스크립트 문법을 통해 클래스 혹은 구조체가 갖는 값(프로퍼티)에 접근할 수 있다.
- 초기화될 떄 상태를 지정하기 위해 이니셜라이즈를 정을할 수 있음
- 기능 추가를 위해 extension으로 확장 가능
- 특정 기능을 실행하기 위해 특정 프로토콜 준수 가능
<br/>

## **언제 구조체를 사용?**

- 연관된 간단한 값의 집합을 **캡슐화** 하는 것만이 목적일 때
- 값을 참조보다는 **복사**하는 것이 합당할 때
- 구조체에 저장된 프로퍼티의 값이 **값 타입**일 때
- 다른 타입으로부터 **상속받거나** 자신을 **상속할** 필요가 없을 때
