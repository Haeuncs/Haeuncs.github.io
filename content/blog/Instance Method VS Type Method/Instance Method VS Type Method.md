---
title: Swift의 Instance Method VS Type Method
date: 2020-05-07 00:00:00
description: Instance Method, Type Method 단어는 생소하지만 모두가 알고 있는.. 그리고 쓰고 있는 그것!
tags: swift잡학사전, swift
---

# Instance Method VS Type Method

**Instance method**

특정 클래스, 구조체 또는 열거형의 인스턴스에 속하는 **함수**

**구조체**에서는 해당 인스턴스 메소드 안에서 **프로퍼티를 수정할 수 없어**요. ⇒ **mutating** 키워드로 해결 (mutating은 아래 설명)


**Type method(static)**

타입 자체에서 호출되는 메소드

클래스의 인스턴스를 생성하지 않고 바로 **타입을 통해서 메소드를 호출**할 수 있다.

func 키워드 앞에 **static** 키워드를 작성하여 타입 메소드를 나타내자

**class** 키워드를 사용하면 하위 클래스가 슈퍼 클래스의 해당 메소드를 **재정의** 할 수 있도록 허용

---

### mutating 키워드는 무엇을 의미하는가?

swift 의 class 는 참조 유형, struct 와 enum 은 값 유형

The properties of value types cannot be modified within its instance methods by default.

기본적으로 인스턴스 메소드 내에서 값 타입의 속성을 수정할 수 없음.

**값 타입의 속성을 수정하려면 인스턴스 메소드에서 mutating 키워드를 사용한다.**

<br/>

이해하기 쉬운 코드는 아래를 참조🙂

[Swift: Understanding Mutating Functions in Two Minutes](https://medium.com/the-andela-way/swift-understanding-mutating-functions-in-two-minutes-d9e363904e3a)