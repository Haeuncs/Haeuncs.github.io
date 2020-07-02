---

title: UITextView textAlignment center bug fix!

date: 2020-07-02 00:00:00

description: UITextView의 기본 버그... 고치기 위한 여정

tags: Swift

---

# 1. 서론

Swift 를 개발하면서 TextView의 textAlignment를 center로 사용해본 적이 없었기 때문에 이 버그를 이번에 처음 봤습니다.

이슈 ticket을 받고 디버그를 찍어보고, playground 에서 demo 프로젝트를 만들면서 이 버그가 기본 버그라는 것을 알게 되었습니다.

버그는 쉽게 볼 수 있습니다.

```swift
  
import UIKit
import PlaygroundSupport

class MyViewController : UIViewController {
    override func loadView() {
        let view = UIView()
        view.backgroundColor = .white

        let label = UITextView()
        label.frame = CGRect(x: 150, y: 200, width: 200, height: 200)
        label.textAlignment = .center
        label.textColor = .black
        label.backgroundColor = .brown
        
        view.addSubview(label)


        self.view = view
    }
}


```

기본 UITextView의 이미지처럼 2줄의 텍스트를 입력하고 1줄에서 줄바꿈을 하면?! 이렇게 cursor 위치가 center 가 아닌 left로 이동합니다.


# 2. 버그 해결하기


이 버그를 구글링을 하다보면 가장 유명한 (애초에 버그 report가 몇 개 없음) [stackoverflow](https://stackoverflow.com/questions/26524431/uitextview-alignment-caret-goes-left/53295470#53295470)와 같은 해결 방법이 나옵니다.

해결 방법은 앞서 설명한 버그를 실행시키는 경우를 대비하여 작성된 코드인데 현재 상태를 판단해서 중앙으로 cursor 를 위치하게 하는 코드입니다.

이 fix 의 문제는 ```NSLocationInRange(NSMaxRange(rangeOfCharAfterCaret), fullRange)``` 를 사용해서 판단하는데 허점이 있습니다.

아래와 같이 입력해보면?

```swift
some text(new \n)\n
```

여러 줄의 텍스트 사이에 줄바꿈을 하는 것이 아닌 끝 줄에서 버그를 발생시키면 다시 버그가 발생됩니다. 

그래서 경우의 수를 하나 더 추가해서 해결합니다.

```swift
        let isEndOfString = NSMaxRange(rangeOfCharAfterCaret) >= NSMaxRange(fullRange) &&
            text.substring(with: rangeOfCharBeforeCaret) == "\n"
        
```

# 3. 전체 소스 코드

전체 코드는 [Gist](https://gist.github.com/Haeuncs/197e8dc11fad49528ed638526cc7beca)에 올려두었습니다. 😮

