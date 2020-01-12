---
title: Swift 로 TableView(혹은 CollectionView) auto Height 만들기
date: 2019-04-22 00:00:00
categories:
  - Swift
tags:
  - Swift
  - 스위프트
---

# Auto Height 의 필요성

- 부제, UILabel에 layer.cornerRadius를 주고 싶을 때

TableView의 Label이 각각 다른 Height 을 가지고 있을 때, 자동으로 Height 을 계산하여 표시를 해줘야 잘리지 않고 잘 나오게 됩니다.

## Demo 프로그램

<img src="../assets/image/190422/img01.png" width="600" />

테이블 셀에 Label이 있고 테이블 셀을 선택하게 되면 Label 길이가 바뀌는 프로그램입니다.

테이블 셀을 autoLayout으로 하고, tableView height을 automaticDimension 으로 해주면 됩니다.

````Swift

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
            return UITableView.automaticDimension
        }
        ```

거의 안되는 이유는 cell 의 autolayout 때문입니다. 주의하시고 autolayout top,leading,trailing, bottom 잘 작성하시면 됩니다.

## 전체 코드 (programmatically)

```Swift

    //
    //  ViewController.swift
    //  Test
    //
    //  Created by OOPSLA on 21/04/2019.
    //  Copyright © 2019 haeun. All rights reserved.
    //

    import UIKit

    class ViewController: UIViewController {
        override func viewWillAppear(_ animated: Bool) {
            super.viewWillAppear(animated)
            view.addSubview(table)
            table.register(tableViewCell.self, forCellReuseIdentifier: "cell")
            table.delegate = self
            table.dataSource = self
            NSLayoutConstraint.activate([
                table.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 0),
                table.leadingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.leadingAnchor, constant: 0),
                table.trailingAnchor.constraint(equalTo: view.safeAreaLayoutGuide.trailingAnchor, constant: 0),
                table.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: 0),

                ])
        }
        let table : UITableView = {
            let view = UITableView()
            view.translatesAutoresizingMaskIntoConstraints = false
            return view
        }()
    }
    extension ViewController : UITableViewDelegate {

        func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
            return 10
        }

        func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
            let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! tableViewCell
            return cell
        }

    }
    extension ViewController : UITableViewDataSource {
        func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
            let cell = tableView.cellForRow(at: indexPath) as! tableViewCell
            cell.label.text = "터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게터치시 텍스트 길게"
            tableView.reloadData()
        }
        func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
            return UITableView.automaticDimension
        }
    }
    class tableViewCell : UITableViewCell {
        override func layoutSubviews() {
            super.layoutSubviews()
            addSubview(view)
            view.addSubview(label)

            NSLayoutConstraint.activate([
                view.topAnchor.constraint(equalTo: self.topAnchor, constant: 10),
                view.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 10),
                view.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -10),
                view.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -10),

                label.topAnchor.constraint(equalTo: view.topAnchor, constant: 10),
                label.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 10),
                label.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -10),
                label.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: -10),
                ])
        }
        let view : UIView = {
            let view = UIView()
            view.translatesAutoresizingMaskIntoConstraints = false
            view.backgroundColor = .gray
            view.layer.cornerRadius = 12
            return view
        }()
        let label : UILabel = {
            let label = UILabel()
            label.translatesAutoresizingMaskIntoConstraints = false
            label.text = "첫 번째 텍스트는 짧게"
            label.numberOfLines = 0
    //        label.backgroundColor = .gray
            return label
        }()
    }
    ```
````
