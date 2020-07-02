---
title: No account with App Store connect access have been found for team 오류를 해결해보자
date: 2020-05-20 00:00:00
description: XCode → Archive → 앱스토어로 업로드 할 때 발생하는 문제 해결하기
tags: XCode버그
---

XCode → Archive → 앱스토어로 업로드 할 때 발생하는 문제

### 지금까지 알려진 해결 방법들

1. 클린 빌드 하고 다시 시도
2. `rm -fr ~/Library/Developer/Xcode/DerivedData/` 로 data 삭제 하고 다시 시도
3. Xcode → Preference 에서 Account 삭제하고 다시 로그인 하고 다시 시도
4. 맥 껏다 키고 다시 시도

### *다 해도 다 안됨 🤯*

원인은 회사 랜 문제였음.. 핸드폰 핫스팟 연결해서 시도하니 바로 됨 ^^..🤪

인터넷 문제인지 빠르게 확인하는 방법은 App Store 에서 transporter 깔아서 로그인 시도해보면 됨

로그인 시도 시 오류나면 여러분도 방화벽 문제(?)일 확률 99%임
