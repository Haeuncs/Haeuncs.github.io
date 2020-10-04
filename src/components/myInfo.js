import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";
import withSizes from "react-sizes";

const Span = styled.span`
  font-family: AppleSDGothicNeo;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: right;
  color: #000000;
  ${media.lessThan("medium")`
  font-size: 20px;
  `}
`;
const SmallSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  ${media.lessThan("medium")`
  font-size: 14px;
  `}
`;

const MobileHideDiv = styled.div`
  ${media.lessThan("medium")`
  opacity: 0;
  height: 0;
`}
`;
const mapSizesToProps = ({ width }) => ({
  isMobile: width > 480,
});

const MyInfo = ({ isMobile }) => {
  return (
    <Span>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Lee Haeun<br></br>
        iOS Developer<br></br>
        <br></br>
      </Link>
      {isMobile && (
        <>
          <SmallSpan>
            <a href={`mailto:haeun.developer@gmail.com`}>
              haeun.developer@gmail.com
            </a>
          </SmallSpan>
          <Link to={`/portfolio`}>
            <a>
              <h1 style={{ backgroundColor: "black" }}>About me</h1>
            </a>
          </Link>
        </>
      )}
    </Span>
  );
};

MyInfo.propTypes = {};

export default withSizes(mapSizesToProps)(MyInfo);
