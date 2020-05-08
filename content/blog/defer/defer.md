---
title: Swift의 Defer
date: 2020-05-04 00:00:00
description: Swift의 Defer란?
tags: swift잡학사전, swift
---

# defer


현재 scope를 벗어나는 경우 실행할 작업을 설정할 수 있는 키워드

- 예로들어 파일에 대한 엑세스를 처리할 때 범위 내에서 컨텍스트를 열고 닫는 것
- 또는 completion closure 의 콜백 결과 값이 리턴되도록 할 때 이 콜백을 트러거하는 것을 잊을 수 있기 때문에 유용함!

- 호출되는 순서

    defer로 작성한 코드는 스택에 쌓여 해당 스코프를 빠져나오는 시점에서 정의된 역순으로 실행

- 호출되지 않는 경우

    defer 블록이 읽히기 전에 종료가 된 경우 (throw, guard 로 탈출한 경우)
