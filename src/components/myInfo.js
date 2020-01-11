import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

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
`
const SmallSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  ${media.lessThan("medium")`
  font-size: 14px;
  `}
`

const MyInfo = props => {
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
        Haeun Lee 😎<br></br>
        iOS Developer 👻<br></br>
        모두 환영합니다 🙌<br></br>
        <br></br>
      </Link>
      <SmallSpan>
        모든 질문은 아래 메일로 주세요 🤗<br></br>
        <a href={`mailto:haeun.developer@gmail.com`}>
          haeun.developer@gmail.com
        </a>
      </SmallSpan>
    </Span>
  )
}

MyInfo.propTypes = {}

export default MyInfo
