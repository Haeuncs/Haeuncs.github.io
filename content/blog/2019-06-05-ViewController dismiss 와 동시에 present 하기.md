---
title: swift ViewController dismiss와 동시에 present 하기
date: 2019-06-05 00:00:00
categories:
  - Swift
tags:
  - Swift
  - 스위프트
  - Tip
---

개발을 하다보면 지금 뷰를 dismiss 하고 바로 present 하고 싶을 때가 있다.
처음에 생각했을 때는 self.dismiss 에 그냥 self.present 하면 되지 않나 생각했는데
생각해보면 dismiss가 완료되었을 때 self.present 를 하는 것이 앞뒤가 안맞다.
그리고 코드로 짜도 당연히 기대했던 것 처럼 안된다.

아래 코드처럼 작성해서 실행하면 기대했던 것 처럼 작동한다.

```Swift
weak var pvc = self.presentingViewController

self.dismiss(animated: true, completion: {
let vc = SecondController()
pvc?.present(vc, animated: true, completion: nil)
})

```

## Any question?🙋‍

코드에 문제가 있거나 어떤 질문이든 편하게 메일을 보내주세요!

Please email me with any questions or concerns! 😃<br/>
💌 : haeun.developer@gmail.com

```

```
