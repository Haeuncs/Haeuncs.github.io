---
title: Swift Zeplin Style Shadow 추가하기
date: 2019-08-05 00:00:00
categories:
  - Swift
tags:
  - Swift
  - 스위프트
  - Tip
---

디자이너가 디자인을 줄 때 Zeplin 을 사용하는데
extension으로 미리 만들어서 그림자가 필요할 때 마다
사용한다.

extension 으로 작성해서

```Swift
extension CALayer {
func zeplinStyleShadows(
color: UIColor = .black,
alpha: Float = 0.5,
x: CGFloat = 0,
y: CGFloat = 2,
blur: CGFloat = 4,
spread: CGFloat = 0)
{
shadowColor = color.cgColor
shadowOpacity = alpha
shadowOffset = CGSize(width: x, height: y)
 shadowRadius = blur / 2.0
if spread == 0 {
shadowPath = nil
} else {
let dx = -spread
let rect = bounds.insetBy(dx: dx, dy: dx)
shadowPath = UIBezierPath(rect: rect).cgPath
}
}
}

```

예로들어 버튼에 그림자를 줘야하면

```Swift

var pageChildCollectionViewToTopButton : UIButton = {
let button = UIButton()
button.isHidden = true
button.alpha = 0.9
button.layer.zeplinStyleShadows(color: .black, alpha: 0.16, x: 0, y: 24, blur: 36, spread: 0)
button.setImage(UIImage(named: "btnLegoTop"), for: .normal)
button.translatesAutoresizingMaskIntoConstraints = false
return button
}()

```

## Any question?🙋‍

코드에 문제가 있거나 어떤 질문이든 편하게 메일을 보내주세요!

Please email me with any questions or concerns! 😃<br/>
💌 : haeun.developer@gmail.com
