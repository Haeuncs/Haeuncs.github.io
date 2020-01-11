---
title: SwiftUI Animation 을 가지고 놀아보자 🤠
date: 2019-12-10 00:00:00
categories:
  - Swift
  - SwiftUI
tags:
  - Swift
  - SwiftUI
---


새로바뀐 SwiftUI 에서는 어떻게 Animation이 작동할까요?!
기존 Swift 에서 Animation을 그릴 때는 UIView.animate or animateKeyframes 을 사용했었습니다.

SwiftUI 는 [Animation (Apple 공식 문서)](https://developer.apple.com/documentation/swiftui/animation) Structure 을 사용하여 애니메이션을 정의합니다.


공식 문서를 보면 Method 가 나와있는데 Swift 에서 animate하나로 정의 하던 option 이나 delay 가 각각의 Method 로 나눠졌습니다.

이제 이 animation을 가지고 만들어봅시다 😲

# Goal💡
> Naver Clova 앱의 사용자에게 마이크 입력값을 받는 뷰에 나타나는 애니메이션과 비슷하게 만들어 봅니다.


<img src="/image/191210/2.gif">



제가 봤을 때는 Spring 애니메이션을 적용한 거 같아서 Spring으로 애니메이션을 구현해봤습니다.

먼저 4개의 Rectangle 이 움직이는 애니메이션을 만들어 봅시다.

{% highlight Swift linenos %}
// 1
ZStack{
  // 2
  Circle()
    .frame(width: 110,height:110)
    .foregroundColor(Color.custom.theme)
    .onAppear {
  self.pulse.toggle()
  }
  // 3
  HStack{
    ForEach(0...3, id: \.self ){_ in
    //4
      Rectangle().frame(width: 5, height: 15, alignment: .center)
        .cornerRadius(2)
        .scaleEffect(x: 1, y: self.pulse ? 1 : self.randomFloat())
        .animation(Animation.spring(dampingFraction: 0.4)
          .speed(self.randomDouble())
          .repeatForever(autoreverses: true)
      )
    }
  }
  .foregroundColor(.white)
}
{% endhighlight %}

1: ZStack으로 뷰가 layering 되도록 해준 후<br/>
2: Circle() 으로 기본 타원을 그립니다.<br/>
3: 그 다음 HStack 으로 Horizontal Stack 을 만들어 ForEach로 loop되도록 한 후<br/>
4: Rectangle() 을 그리는데 scaleEffect로 x는 그대로인 상태이고 pulse boolean 변수가 true일 때 랜덤 Float 크기 만큼 변하게 작성하여 y축으로만 커지도록 작성합니다.<br/>
그 다음 animation 은 Spring 으로, speed 는 랜덤값으로 그리고 계속 반복할 수 있도록 repeat 을 작성해줍니다.<br/>



결과


<img src="/image/191210/3.gif">

같은 방법으로 중앙 버튼 외곽에 나타나는 배경 애니메이션도 추가해봅시다.


{% highlight Swift linenos %}

ZStack {
  VStack{
    Circle()
      .frame(width: 110,height:110).foregroundColor(Color(#colorLiteral(red: 0.3490196078, green: 0.7725490196, blue: 0.537254902, alpha: 0.2390113902)))
      .scaleEffect(pulse ? 1: randomPulse())
      .animation(Animation.spring(dampingFraction: 0.7)
        .delay(0.2)
        .repeatForever(autoreverses: true)
    )
  }
  VStack{
    Circle()
      .frame(width: 110,height:110).foregroundColor(Color(#colorLiteral(red: 0.3490196078, green: 0.7725490196, blue: 0.537254902, alpha: 0.1419392523)))
      .scaleEffect(pulse ? 1: randomPulse())
      .animation(Animation.spring(dampingFraction: 0.7)
        .repeatForever(autoreverses: true)
    )
  }
  
  Button(action: {
    
  }){
    ZStack{
      Circle()
        .frame(width: 110,height:110)
        .foregroundColor(Color.custom.theme)
        .onAppear {
          self.pulse.toggle()
      }
      HStack{
        ForEach(0...3, id: \.self ){_ in
          Rectangle().frame(width: 5, height: 15, alignment: .center)
            .cornerRadius(2)
            .scaleEffect(x: 1, y: self.pulse ? 1 : self.randomFloat())
            .animation(Animation.spring(dampingFraction: 0.4)
              .speed(self.randomDouble())
              .repeatForever(autoreverses: true)
          )
        }
      }
      .foregroundColor(.white)
    }
  }
  
}

{% endhighlight %}

최종 결과

<img src="/image/191210/4.gif">



## Any question?🙋‍

코드에 문제가 있거나 어떤 질문이든 편하게 메일을 보내주세요!

Please email me with any questions or concerns! 😃<br/>
💌 : haeun.developer@gmail.com
