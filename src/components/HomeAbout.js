import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import HomeAboutFooter from "./HomeAboutFooter";

export default class HomeAbout extends Component {
  render() {
    return (
      <>
        <div />
        <div className="w-full flex flex-col justify-center m-10">
          <div
            style={{
              fontSize: "5rem",
            }}
          >
            ARCHIVE
            <br />
            {new Date().getFullYear()}
          </div>
          <div className="text-20">アーカイブ</div>
          <div
            style={{
              fontSize: "0.6rem",
            }}
          >
            그냥 내가 쓰고 싶은거 쓰는 그런 곳, 별 의미 없음
          </div>
          <div className="text-20 font-900">
            이 블로그를 만든 人間은 누구인가?
          </div>
          <div
            className="font-500"
            style={{
              fontSize: "0.8rem",
            }}
          >
            대학교 연구실(부원이었지만 연구는 안함)에 우연히 만난 맥북을
            시작으로 iOS 개발을 시작하여
            <br />
            재미삼아 여러가지 앱을 만들어보다보다보다보니
            <br />
            지금은 iOS 개발자로 일하고 있는 사람입니다.
            <br />
            <div className="flex items-end">
              제 꿈은{" "}
              <div
                className="text-900 text-15 emphasis"
                style={{ color: "#f50ff5" }}
              >
                재미있는 사람
              </div>
              이 되는 것 입니다.
            </div>
          </div>
        </div>
        <HomeAboutFooter />
      </>
    );
  }
}
