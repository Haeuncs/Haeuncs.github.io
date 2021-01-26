import React from "react";
import "../../css/global.css";

const LifeArchiveProject = ({ data, location }) => {
  return (
    <div className="flex">
      <diV>내 인생 아카이브 프로젝트</diV>
      <diV>기록을 안하면 잊혀지는게 아쉬워 시작하는 프로젝트</diV>
      <diV>매일의 기억을 저장하는 공간</diV>
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
