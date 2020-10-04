import React, { useRef, useState } from "react";
import styled from "styled-components";
import PortDevType from "../components/PortDevType";
import PortfolioModal from "../components/portfolioModal";
import media from "styled-media-query";

import "../../css/layout.css";
import "../../css/style.css";

const Portfolio = (props) => {
  const data1 = [
    {
      img: require("../../static/fitco@3x.png"),
      name: "Fitco",
      description:
        "사용자가 옷을 찍으면 그 옷의 사이즈를 측정하여 옷과 딱 맞는 사이즈의 옷을 알려주는 앱으로 앱스토어 메인의 '새로운 경험'에 노출되었습니다.",
      roleDescription:
        "iOS 개발자로 iOS 개발 및 앱의 메인 화면 ReactJS 웹 개발",
      technologiesDescription: "Swift, Lottie, Push Notifications",
      appStore: "https://apps.apple.com/kr/app/id1410654101",
      thumb: require("../../static/fitcoPng.png"),
      date: "2019-present",
    },
    {
      img: require("../../static/tribi@3x.png"),
      name: "트리비",
      description:
        "트리비는 여행 기록과 여행 비용을 한번에 기록할 수 있는 iOS앱입니다. 여행 중 방문하는 장소에 대한 길찾기, 메모 등을 쉽게 관리할 수 있습니다.",
      roleDescription: "1인 개발",
      technologiesDescription: "Swift, Realm, Google Maps API",
      appStore:
        "https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%AC%EB%B9%84/id1474451502",
      git: "https://github.com/Haeuncs/GOtravel",
      thumb: require("../../static/tribi@2x.png"),
      date: "2019",
    },
    {
      img: require("../../static/moody@3x.png"),
      name: "Moody",
      description:
        "하루 한번씩 내 감정과 일기를 작성하는 iOS 앱을 개발하였습니다.",
      roleDescription: "1인 개발",
      technologiesDescription: "Swift, Realm",
      appStore: "https://apps.apple.com/kr/app/moody/id1474469428?mt=8",
      git: "https://github.com/Haeuncs/MoodDiary",
      date: "2019",
    },
  ];
  const funProj1 = [
    {
      img: require("../../static/moody@3x.png"),
      name: "Moody 2",
      description:
        "Python의 Tensorflow 로 RNN 방식으로 네이버 영화평을 학습한 딥러닝 학습 모델을 사용하여 사용자의 감성 수치를 자동 측정해주는 iOS앱을 개발했습니다. python flask 로 api 를 만들었으며 aws 로 배포하여 앱에서 사용할 수 있도록 개발했습니다.",
      roleDescription: "1인 개발",
      technologiesDescription: "Swift, Realm, tensorflow, flask server, aws",
      git: "https://github.com/Haeuncs/MoodDiaryKorDeepLearning",
      thumb:
        "https://github.com/Haeuncs/MoodDiaryKorDeepLearning/raw/master/SystemArchitecture.png",
      date: "2019",
    },
    {
      name: "한글 손글씨 인식앱",
      description:
        "Python tensorflow 로 한글 이미지를 CNN 방식으로 학습한 결과 파일을 iOS로컬로 저장하여 사용자의 한글 손글씨를 인식하는 iOS앱을 개발했습니다.",
      roleDescription: "1인 개발",
      technologiesDescription: "Swift, Realm, tensorflow",
      git: "https://github.com/Haeuncs/HangulTensorflow",
      date: "2018",
    },
  ];
  const data2 = [
    {
      img: require("../../static/fitco@3x.png"),
      name: "Fitco",
      description:
        "온라인 스타일링 서비스의 스타일리스트를 위한 관리 페이지를 처음부터 배포까지 개발했습니다. ",
      roleDescription: "Web dev",
      technologiesDescription: "ReactJS, Redux, Lottie, styled-component",
      thumb: require("../../static/stylistWeb.png"),
      date: "2019",
    },
  ];
  const funProj2 = [
    {
      name: "얼굴 블러 처리",
      description:
        "얼굴을 인식하는 딥러닝 모델을 사용하여 사진을 올리면 그 사진에서 얼굴을 찾아 블러 처리 된 이미지로 반환하는 웹페이지를 개발했습니다.",
      roleDescription: "Web dev",
      technologiesDescription: "ReactJS",
      git: "https://github.com/Haeuncs/Face_Blur",
      date: "2019",
      thumb: require("../../static/faceblur.png"),
      demoUrl: "https://haeuncs.github.io/Face_Blur/",
    },
  ];

  const portfolioRef = useRef(null);
  const iOSAPPRef = useRef(null);
  const inAppStoreRef = useRef(null);
  const iOSFunRef = useRef(null);
  const reactJSRef = useRef(null);
  const reactJSProjRef = useRef(null);
  const reactFunRef = useRef(null);
  const eduRef = useRef(null);
  const aboutRef = useRef(null);
  const [showCate, setShowCate] = useState(false);
  const [showScreen, setShowScreen] = useState({
    url: null,
    show: false,
  });
  return (
    <div>
      <WrapperColumn>
        <div
          className="test"
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            // backgroundColor: "#e2a42e",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WrapperColumn
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <MyInfo>
                Hi. I'm Lee Haeun.<br></br>I like to develop and improve
                products with beautiful UI. <br></br>I'm trying to become a good
                developer.<br></br>
                📧 haeun.developer@gmail.com<br></br>
              </MyInfo>
            </h1>
          </WrapperColumn>
        </div>
        <WrapperRow>
          <WrapperColumn
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "600px",
            }}
          >
            <PortfolioSpan>WORK as iOS Developer👩‍🔧</PortfolioSpan>
            <table>
              <tbody>
                <tr>
                  <td>&nbsp;2020.05 ~ present</td>
                  <td>&nbsp;LINE</td>
                </tr>
                <tr>
                  <td>&nbsp;2019.05 ~ 2020.05</td>
                  <td>&nbsp;Startup</td>
                </tr>
              </tbody>
            </table>
            <PortfolioSpan>STUDY✍️</PortfolioSpan>
            <table>
              <tbody>
                <tr>
                  <td>&nbsp;2015 - 2020</td>
                  <td>&nbsp;Bachelor of Computer Science Engineering</td>
                </tr>
              </tbody>
            </table>
          </WrapperColumn>
        </WrapperRow>
      </WrapperColumn>
    </div>
  );
};
const MyInfo = styled.div`
  ${media.lessThan("medium")`
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  font-size: 1.4rem;
  `}
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  ${media.lessThan("medium")`
  margin-left: 16px;
  margin-right: 16px;
  `}
`;

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
// const TextSpan = styled.span`
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.17;
//   letter-spacing: normal;
//   text-align: left;
//   color: #1a1a1a;
// `

const PortfolioSpan = styled.span`
  /* width: 329px;
  height: 72px; */
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  /* text-align: left; */
`;
const DevType = styled.span`
  font-size: 30px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #e2a42e;
`;
const SubType = styled.span`
  font-size: 28px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #2e81e2;
  margin-bottom: 40px;
`;
const SubTitle = styled.span`
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #1a1a1a;
`;
const Spacing = styled.div`
  height: 16px;
`;

export default Portfolio;
