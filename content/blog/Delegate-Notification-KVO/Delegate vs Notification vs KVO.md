---
title: Swift 에서 객체간 통신 방법들
date: 2020-05-07 00:00:00
description: Delegate vs Notification vs KVO
tags: swift잡학사전, swift
---
# Delegate vs Notification vs KVO

왜 Swift 에는 이러한 세가지 패턴들이 있을까요?

바로 특정 이벤트가 발생했을 때 다른 객체(혹은 다수의 객체들)에게 알려주고 싶을 때 사용합니다. 

즉 객체 간 소통이 필요할 때 사용합니다.

쉽게 예시를 들어봅시다.

로그인한 유저가 로그아웃을 하면 그에 따라 다른 화면에서 이벤트 발생을 받아 그에 따른 화면 처리를 할 때 사용할 수 있습니다.

## Delegate

프로토콜을 정의하여 사용합니다.

> 프로토콜은 특정 작업이나 기능에 맞게 메서드, 속성과 같은 요구 사항들의 청사진(blueprint)를 정의하고 이러한 요구 사항들을 실제로 구현하기 위해서 class, struct, enum 에서 프로토콜을 따라 구현

### 장점

- 재사용할 수 있는 코드를 작성할 수 있음
- 객체와 객체간의 연결로 추적이 쉽다

### 단점

- MVC 의 단점인 massive view controller 가 되기 쉽다. (코드가 많다)
- delegate 사용을 위해서 구현해야하는 코드가 많다.
- 다수의 객체들에게 이벤트를 호출하는 방식이 비효율적임
- delegate 프로퍼티 선언 시 참조 순환을 막기 위해 weak으로 선언해야 함

### Notification

NotificationCenter 을 사용하여 구독한 객체들에게 이벤트 발생을 알린다.

```swift
extension NSNotification.Name {
  static let genderChanged = Notification.Name("genderChanged")
}

NotificationCenter.default.addObserver(self, selector: #selector(reloadGender), name: .genderChanged, object: nil)

// post 되면 addObserver한 모든 객체의 이벤트가 발생
let notiCenter = NotificationCenter.default
notiCenter.post(name: .genderChanged, object: nil)
```

### 장점

- 옵저버에 추가한 다수의 객체들에게 동시에 이벤트를 발생을 알릴 수 있음
- 짧은 코드로 실행시킬 수 있음

### 단점

- 이벤트가 발생했다는 것만 알 수 있고 별도의 값을 전달 받지는 않음
- 많은 NotificationCenter 사용 시 코드의 흐름을 읽기 어려움

### KVO

값의 변화를 감지할 때 사용한다. 예로들어 collectionView의 contentsize 의 값 변화를 감지할 때 사용한다. 이러한 애플 API 내의 변화를 감지할 때 사용한다.

```swift
private var observer: NSKeyValueObservation?

deinit {
    observer?.invalidate()
}

observer = collectionView.observe(\.contentSize, option: [.new]) { [weak self] (collect, size) in
      print(size)
    }
  }

```

Custom KVO 방식은 아래를 참조하여 작성하면 된다.

[What is key-value observing?](https://www.hackingwithswift.com/example-code/language/what-is-key-value-observing)

## 정리

- KVO: 한 객체가 다른 객체의 프로퍼티를 관찰하여 변경 사항을 찾을 수 있는 패턴
    - **프로퍼티의 상태에 반응**하기 때문에 ***프로퍼티의 변화를 감지할 때 사용***
- Notification: **다수의 객체에게 동시에 이벤트 발생**을 알릴 수 있다.
    - 다수의 객체가 이벤트 발생을 받고 뷰를 변경하는 경우에서 사용할 수 있다.
    - **1:다**
- Delegate: 재사용할 수 있는 프로토콜을 사용하고 프로토콜에 따른 코드를 작성함으로써 읽기 쉬운 코드를 작성할 수 있다.
    - **객체간 1:1**


<br/>
<br/>

---
<br/>
<br/>

정리를 하면서 느끼는 점은 ***참 설명하기 어렵다*** 이다. 

실제 프로젝트를 진행하다 보면 어느 부분에서 이 방식을 써야지 하고 생각하고 느끼게 된다.(가끔 이 판단이 틀릴 때도 있다. 그때는 리팩토링..)

다른 개발자분들은 어떻게 생각하시는지 모르지만 개인적으로는 세가지 패턴 모두 정말 다른 방식이라고 생각을 해서 객체 간 통신이라는 공통점이 있지만 다 같이 정리하는게 이상한 기분이 든다.

예전에 오픈소스를 보다가 데이터 리로딩이 필요한 경우를 Notification으로 쓴 코드를 봤는데 뭔가 신기했다. 사람마다 다 생각하는게 다르다는 걸 느꼈던 경험이 있다 🙂

때에 따라 최적의 방식을 사용하면 될 것 같다.
<br/>
<br/>
