---
title: iOS 와 javascript 연동하기
date: 2019-09-20 00:00:00
categories:
  - Swift
tags:
  - Swift
  - 스위프트
  - Tip
---

Web 화면을 iOS앱에서 마치 앱처럼 보여주는 앱들이 많아졌고 저 또한 기존 앱의 화면을 web으로 바꾸는 작업을 했고 방법을 공유합니다 👻

# Java Script → iOS로 이벤트 전달

````JavaScript

    window.webkit.messageHandlers.여기에Swift에서 인식할 이름을 써주세요.postMessage()

```

onClick 이벤트 로 이렇게 호출하면 iOS 상으로 message를 받을 수 있다.

javascript 에서 post Message로 String 타입과 JSON 타입 2개를 보낸다면

예로들어,
```JavaScript

    const scriptHandler = item => {
      console.log(item);
      try {
        const itemJson = JSON.stringify(item);
        window.webkit.messageHandlers.여기에Swift에서 인식할 이름을 써주세요.postMessage({
          type: "recommendItem",
          value: itemJson
        });
      } catch (error) {
        alert(error);
      }
    };

```

이런 식으로 iOS로 보낼 수 있습니다.

WKWebView 를 설정할 때 있는 configuration 이 java script 와 연결을 도와준다.
```Swift

    let contentController = WKUserContentController()
    contentController.add(self, name: "여기에Swift에서 인식할 이름을 써주세요")
    let configuration = WKWebViewConfiguration()
    configuration.userContentController = contentController

    self.webView = WKWebView(frame:view.bounds, configuration: configuration)

```

그 다음 js 에서 message를 보낼때 마다 받을 수 있도록

`WKScriptMessageHandler` 프로토콜을 작성한다.
```Swift

    extension HomeViewController: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if let json = message.body as? [String:Any] , let jsonType = json["type"] as? String{
          switch jsonType {
          case "recommendItem":
    				// 여기서 해야할 것들 정의 :)
          default:
            return
          }
        }

    }

```

끝 !

## Any question?🙋‍

코드에 문제가 있거나 어떤 질문이든 편하게 메일을 보내주세요!

Please email me with any questions or concerns! 😃<br/>
💌 : haeun.developer@gmail.com
````
