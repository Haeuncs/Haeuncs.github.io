---
title: TIL_02_Javascript Network 관리하는 팁.md
date: 2019-12-06 00:00:00
categories:
  - Reactjs
  - TIL
tags:
  - map
---

# 왜 관리하는 방식을 바꿨나?

개발하는 서비스에서 Network 통신 부분을 별도의 js 파일로 관리하여 호출하고 있다.
<br/>
하나의 네트워크 통신에 하나의 함수로 정의하고 있었기 때문에 코드가 한눈에 안들어온다는 문제가 있었다.
<br/>
과거에는 네트워크 호출하는게 몇개 없어서 불편하다고 생각도 못했는데 점점 증가하면서 가독성이 매우 떨어졌고 그래서 고쳐야겠다는 생각을 했다.
<br/>
그래서 어떻게 하면 네트워크를 간결하게 짤 수 있을까? 라는 생각에서 방법을 생각해봤다!
<br/>
<br/>

과거의 내 코드는 export 문은 이렇게 복잡했다.
<br/>

# 과거 코드

````JavaScript
export {
redirectOnError,
reqLogin,
getClientList,
getClientInfo,
getStylistInfo,
setStylistInfo,
getStyleBookState,
setStyleBookState,
netCompleteReport,
netTmpCompleteReport,
netCompleteReportNewVersion,
getTmpCompleteReport,
photoUpload,
stylistAdminPhotoUpload,
getAllReview,
getSearchItem,
getLikeItem,
addLikeItem,
deleteLikeItem
... 등등
};
```

<br/>

함수 개수도 너무 많고 함수명을 다 읽어야지만 그 함수의 의미를 파악할 수 있는 코드였다. 😟
<br/>

그래서 변경한 코드는 딕셔너리의 value 값에 네트워크 함수를 호출하고 반환하는 식으로 작성했다.
<br/>

# 변경 코드

```JavaScript

const Review = {
  get: () => {
    return basicGetResponse(serverUrl + '/styleManagement/review/', {});
  }
};

const Stylist = {
  get: () => {
    return basicGetResponse(serverUrl + '/styleManagement/myInfo/', {});
  },
    set: (stylistInfoData, styleBookState) => {
      return setStylistInfo(stylistInfoData, styleBookState);
  }
};

```

<br/>

```JavaScript

import \* as Network from '../src/api/network';

....

await Network.Like.get()
.then(res => {
    orderData(res.items);
  })
  .catch(() => {
    redirectOnError();
  });
}

```

호출하는 방식도 가독성이 좋고 이쁘게 되었다 🤠
````
