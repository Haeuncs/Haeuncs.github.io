import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import "../../css/layout.css";
import "../../css/marquee.css";
import Banner from "./Banner";
import HomeAbout from "./HomeAbout";
import image1 from "../../static/Profile-1.jpg";
import image2 from "../../static/Profile-2.jpg";
import image3 from "../../static/Profile-3.jpg";
import image4 from "../../static/Profile-4.jpg";

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
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;

  const [isFunBackground, setIsFunBackground] = useState(false);
  let header;

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
    );
  }

  const imageList = [image1, image2, image3, image4];

  const Test = styled.div`
    background: url(${(props) => props.img}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -1;
  `;

  return (
    <div className="customBorder h-screen w-screen flex flex-col overflow-auto">
      {isFunBackground && (
        <Test
          className="h-screen w-screen absolute"
          img={imageList[Math.floor(Math.random() * imageList.length)]}
        ></Test>
      )}

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
            <HomeAbout
              className="flex-1"
              funBackgroundHandler={(bool) => setIsFunBackground(bool)}
            />
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

export default Layout;
