import React from "react";
import Utterances from "../components/Utterances";
import Layout from "../components/layout";
import styled from "styled-components";
import media from "styled-media-query";

const GuestBookWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan("medium")`
  height: initial;
  overflow: initial;
`}
`;
const GuestBook = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <GuestBookWrapper>
        <div
          style={{
            color: "#07de44",
            fontSize: "5rem",
            textShadow: "10px 10px 10px #f50ff5",
          }}
        >
          GUEST BOOK
        </div>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          술 한잔 마셨습니다... 블로그 글이 별로라고 생각하셔도 좋습니다. 하지만
          제 마음 하나만 기억해주세요. 진심을 다해 전합니다. 글이 별로 일 수
          있습니다. 5분이나 고민하고 개발했습니다... 최선을 다했고 열심히
          했습니다. 저의 진심이 느껴지길 바랍니다 고맙습니다... - by 블로그 쥔장
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Utterances repo="Haeuncs/Haeuncs.github.io" theme="github-light" />
        </div>
      </GuestBookWrapper>
    </Layout>
  );
};

export default GuestBook;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
