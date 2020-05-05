import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import MyInfo from "./myInfo"
import "../../css/layout.css"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  ${media.lessThan("medium")`
    flex-direction: column-reverse;
  `}
`
const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: 10px 10px 99px 0 rgba(178, 159, 55, 0.16);
  background-color: #ffffff;
  overflow: auto;
  ${media.greaterThan("medium")`
  margin-bottom: 70px;
  margin-top: 70px;
  margin-left: 30px;
  margin-right: 30px;

`}
`
const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  ${media.greaterThan("medium")`
  maxWidth: 300px
  paddingRight: 30px
  `};
`
const MyInfoWrapper_Hide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  overflow: hidden;
`

const Layout = props => {
  const testRef = useRef()
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const [showInfo, setShowInfo] = useState(true)
  const [offset, SetOffset] = useState(0)

  const myInfoHeightRef = useRef()

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
    )
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
    )
  }
  return (
    <Wrapper className="test">
      <MainWrapper>
        <div
          id="style-15"
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            padding: "30px",
          }}
          ref={testRef}
          onScroll={() => {
            if (testRef.current.scrollTop < 261) {
              SetOffset(testRef.current.scrollTop)
            }
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </MainWrapper>
      <MyInfoWrapper ref={myInfoHeightRef}>
        <MyInfo></MyInfo>
      </MyInfoWrapper>
    </Wrapper>
  )
}
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

export default Layout
