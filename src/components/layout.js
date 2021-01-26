import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { Link, navigate } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import "../../css/layout.css";
import "../../css/marquee.css";
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  ${media.greaterThan("medium")`
  maxWidth: 300px
  paddingRight: 30px
  `};
`;

const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  ${media.lessThan("medium")`
    flex-direction: column;
    overflow: auto;
  `}
`;

const ArchiveWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: space-between;

  ${media.lessThan("medium")`
    width: 100%;
    overflow: initial;
    height: initial;
  `}
`;

const RightSideWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: space-between;

  ${media.lessThan("medium")`
    width: 100%;
    overflow: initial;
    height: initial;
  `}
`;

const Layout = (props) => {
  const testRef = useRef();
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const [showInfo, setShowInfo] = useState(true);
  const [offset, SetOffset] = useState(0);

  const myInfoHeightRef = useRef();

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <></>
      // <h3
      //   style={{
      //     fontFamily: `Montserrat, sans-serif`,
      //     marginTop: 0,
      //   }}
      // >
      //   <Link
      //     style={{
      //       boxShadow: `none`,
      //       textDecoration: `none`,
      //       color: `inherit`,
      //     }}
      //     to={`/`}
      //   >
      //     {title}
      //   </Link>
      // </h3>
    );
  }
  return (
    <div className="customBorder h-screen w-screen flex flex-col overflow-auto">
      <div
        className="customBorder w-full"
        style={{
          borderLeft: "none",
          borderRight: "none",
          height: "50px",
        }}
      >
        <Banner />
      </div>
      <BodyWrapper>
        <ArchiveWrapper>
          <div className="flex-1 customBorder m-20 flex flex-col overflow-auto justify-between ">
            <HomeAbout className="flex-1" />
          </div>
        </ArchiveWrapper>
        <RightSideWrapper>
          <div className="flex-1 customBorder m-20 flex overflow-auto">
            <div className="flex-1">{children}</div>
          </div>
        </RightSideWrapper>
      </BodyWrapper>
    </div>
  );
};
// class Layout extends React.Component {
//   render() {
//     return (
//       <Wrapper>
//         <MainWrapper>
//           <div
//             id="style-15"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               overflow: "auto",
//               padding: "30px",
//             }}
//           >
//             <header>{header}</header>
//             <main>{children}</main>
//             <footer>
//               © {new Date().getFullYear()}, Built with
//               {` `}
//               <a href="https://www.gatsbyjs.org">Gatsby</a>
//             </footer>
//           </div>
//         </MainWrapper>
//         <MyInfoWrapper>
//           <MyInfo></MyInfo>
//         </MyInfoWrapper>
//       </Wrapper>
//       // <div
//       //   style={{
//       //     marginLeft: `auto`,
//       //     marginRight: `auto`,
//       //     maxWidth: rhythm(24),
//       //     padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//       //   }}
//       // >
//       //   <header>{header}</header>
//       //   <main>{children}</main>
//       //   <footer>
//       //     © {new Date().getFullYear()}, Built with
//       //     {` `}
//       //     <a href="https://www.gatsbyjs.org">Gatsby</a>
//       //   </footer>
//       // </div>
//     )
//   }
// }

export default Layout;
