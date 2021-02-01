import React from "react";
import "../../css/global.css";

const LifeArchiveProject = ({ data, location }) => {
  return (
    <div
      className="flex flex-col text-28 font-900 text-white"
      style={{ backgroundColor: "#000" }}
    >
      <diV>내 인생 아카이브 프로젝트</diV>
      <diV>기록을 안하면 잊혀지는게 아쉬워 시작하는 프로젝트</diV>
      <diV>매일의 기억을 저장하는 공간</diV>
      <div>나 자신, 그 자체를 사랑하자</div>
    </div>
  );
};

export default LifeArchiveProject;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
