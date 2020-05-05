import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../../css/portfolio.css"
import media from "styled-media-query"

const PortfolioModal = props => {
  const { closeHandler, imgData } = props
  return (
    <Wrapper style={{ zIndex: 999 }}>
      <a
        onClick={() => {
          closeHandler()
        }}
      >
        <Close>닫기😔</Close>
      </a>
      <img style={{ width: "100%", objectFit: "contain" }} src={imgData}></img>
    </Wrapper>
  )
}
const Img = styled.img`
  object-fit: contain;
`
const Close = styled.h1`
  margin-top: 0;
  width: 100px;
  height: 50px;
  color: #e2a42e;
  right: 0;
  /* background-color: white; */

  position: absolute;
`

const Wrapper = styled.div`
  color: #fff;
  background: #fff;
  border-color: #fff;
  width: 600px;
  height: 600px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: block;
  position: fixed;
  -webkit-box-shadow: 10px 10px 100px #e2a42e;
  -moz-box-shadow: 10px 10px 100px #e2a42e;
  -khtml-box-shadow: 10px 10px 100px #e2a42e;
  box-shadow: 10px 10px 100px #e2a42e;
  border-radius: 30px;
  ${media.lessThan("medium")`
    width: 100%;
    padding: 10px;
    display: flex;
  `}
`
const ContentWrapper = styled.div`
  white-space: nowrap;
  overflow: auto;
  position: absolute;
  z-index: -1;
  width: 375px;
  height: 812px;
  overflow: auto;
`
export default PortfolioModal
