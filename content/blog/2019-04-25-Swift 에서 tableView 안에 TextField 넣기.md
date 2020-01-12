---
title: Swift 에서 tableView 안에 TextField 넣기
date: 2019-04-25 00:00:00
categories:
  - Swift
tags:
  - Swift
  - 스위프트
---

## 만약에..

만약 사용자에게 TextField 로 데이터를 입력 받는데, 스크롤을 하게 되면 어떻게 될까요?

TextField 내용이 섞여서 보여질 것 입니다.

![](/image/190425/img1.png) ![](/image/190425/img2.png)
![](/image/190425/img3.png)

## Why ?

천천히 생각하면 해결 할 수 있습니다 !

Swift 에서 tableView 를 표시 할 때 보통 이렇게 작성합니다.

````Swift

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell")! as! tableCell
            return cell
        }

        ```

dequeueReusableCell 를 사용해서 tableView를 표시를 하는데, 말 그대로 cell 을 재사용합니다.

만약 100개의 셀이 있다면 그 셀을 모두 저장하는 것은 비효율적이기 때문입니다.

그렇기 때문에 지금 문제가 발생합니다. 이전에 작성된 textField 가 다시 사용되기 때문에 앞서작성한 textField 가 그대로 남기 때문입니다 !

### 해결 방법

1. 테이블 뷰에 어떤 cell에 textField가 선택되는지
2. 그 textField 에 입력되는 값을 저장

1번과 2번을 해결하기 위해서

```Swift

    protocol selectDelegate {
    		// 현재 선택된 cell 과 입력된 str
        func sendCell(currentCell:tableCell, str : String)
    }
    ```

tableView를 표시하는 class 에 delegate를 작성합니다.

```Swift

    func sendCell(currentCell: tableCell, str: String) {
    				// 현재 선택된 cell 가 어디에 있는 index 였는지 찾고,
    				// 배열을 만들어 그 index에 입력된 str을 넣습니다.
            if let index = table.indexPath(for: currentCell) {
                arr[index.row] = str
            }
        }
        ```

그 다음 tableCell 글래스에

delegate 와 textField가 수정될 때를 추적해서 delegate로 보냅니다.
```Swift

    class tableCell : UITableViewCell {

        var delegate : selectDelegate?

        override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            textField.addTarget(self, action: #selector(textSelect), for: UIControl.Event.editingChanged)
    	}
    		@objc func textSelect() {
    		        delegate?.sendCell(currentCell: self, str: textField.text ?? "")
    		    }
    		}
        ```

그리고 cellForRowAt 에서 delegate와 textField를 채워주는 코드를 작성합니다.

```Swift

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell")! as! tableCell
            cell.delegate = self
            cell.textField.text = arr[indexPath.row]
            return cell
        }
        ```

### 해결 !

![](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)

## 전체 코드

```Swift

    //
    //  ViewController.swift
    //  testProject
    //
    //  Created by LEE HAEUN on 2019. 4. 24..
    //  Copyright © 2019년 LEE HAEUN. All rights reserved.
    //

    // 사용자에게 입력 받은 text를 바로바로 저장해야 지워지지 않습니다.
    import UIKit

    protocol selectDelegate {
        func sendCell(currentCell:tableCell, str : String)
    }

    class ViewController: UIViewController, selectDelegate {
        var selectRow : Int?
        var arr = [String](repeating: "", count: 100)   // 이 예제에서 100개의 cell 만들었음

        override func viewDidLoad() {
            super.viewDidLoad()
            // Do any additional setup after loading the view, typically from a nib.
            table.delegate = self
            table.dataSource = self
            table.register(tableCell.self, forCellReuseIdentifier: "cell")

            view.addSubview(table)

            NSLayoutConstraint.activate([
                table.leadingAnchor.constraint(equalTo: view.leadingAnchor),
                table.trailingAnchor.constraint(equalTo: view.trailingAnchor),
                table.topAnchor.constraint(equalTo: view.topAnchor),
                table.bottomAnchor.constraint(equalTo: view.bottomAnchor)
                ])

        }

        let table : UITableView = {
            let table = UITableView()
            table.translatesAutoresizingMaskIntoConstraints = false
            return table
        }()

        func sendCell(currentCell: tableCell, str: String) {
            if let index = table.indexPath(for: currentCell) {
                arr[index.row] = str
            }
        }
    }

    extension ViewController : UITableViewDelegate, UITableViewDataSource {
        func tableView(_ tableView: UITableView, editingStyleForRowAt indexPath: IndexPath) -> UITableViewCell.EditingStyle {
            return .insert

        }

        func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            return arr.count
        }
        func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell")! as! tableCell
            cell.delegate = self
            cell.textField.text = arr[indexPath.row]
            return cell
        }
        func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
            return 50
        }
    }
    class tableCell : UITableViewCell {

        var delegate : selectDelegate?

        override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
            super.init(style: style, reuseIdentifier: reuseIdentifier)
            addSubview(textField)
            textField.addTarget(self, action: #selector(textSelect), for: UIControl.Event.editingChanged)

            NSLayoutConstraint.activate([
                textField.leadingAnchor.constraint(equalTo: leadingAnchor),
                textField.trailingAnchor.constraint(equalTo: trailingAnchor),
                textField.topAnchor.constraint(equalTo: topAnchor),
                textField.bottomAnchor.constraint(equalTo: bottomAnchor)
                ])

        }

        required init?(coder aDecoder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
        }
        override func layoutSubviews() {
            super.layoutSubviews()

        }

        @objc func textSelect() {
    //        print(stack.text)
            delegate?.sendCell(currentCell: self, str: textField.text ?? "")
        }
        let textField : UITextField = {
            let text = UITextField()
            text.translatesAutoresizingMaskIntoConstraints = false
            return text
        }()
    }

````

## Any question?🙋‍

코드에 문제가 있거나 어떤 질문이든 편하게 메일을 보내주세요!

Please email me with any questions or concerns! 😃<br/>
💌 : sch.haeun@gmail.com

```

```
