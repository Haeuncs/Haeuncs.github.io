import React from "react"
import styled from "styled-components"

const PortDevType = props => {
  const { data, showThumbHandler } = props
  return (
    <WrapperColumn>
      <WrapperRow>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {!!data.img && (
            <>
              <div style={{ width: "3px" }}></div>
              <AppIconDiv>
                <img src={data.img}></img>
              </AppIconDiv>
              <div style={{ width: "12px" }}></div>
            </>
          )}
          {/* <TextSpan>{data.name}</TextSpan> */}
          <TextSpan>{data.name}</TextSpan>
        </div>
        <>
          <TextSpan>{data.date}</TextSpan>
        </>
      </WrapperRow>
      <div style={{ height: "24px" }}></div>
      {/* <AppIconImg></AppIconImg> */}
      <TextSpan>{data.description}</TextSpan>
      <Spacing></Spacing>
      <SubTitle>My Role</SubTitle>
      <Spacing></Spacing>
      <TextSpan>{data.roleDescription}</TextSpan>
      <Spacing></Spacing>
      <SubTitle>Technologies</SubTitle>
      <Spacing></Spacing>
      <TextSpan>{data.technologiesDescription}</TextSpan>
      <Spacing></Spacing>

      {!!data.git && (
        <>
          <a href={data.git}>🗂 Github</a> <Spacing></Spacing>
        </>
      )}
      {!!data.appStore && (
        <>
          <a href={data.appStore}>📡 App Store</a>
          <Spacing></Spacing>
        </>
      )}
      {!!data.thumb && (
        <>
          <a
            onClick={() => showThumbHandler(data.thumb)}
            style={{ textAlign: "right" }}
          >
            📸 스크린샷
          </a>
          <Spacing></Spacing>
        </>
      )}
      {!!data.demoUrl && (
        <>
          <a
            href={data.demoUrl}
            target="_blank "
            style={{ textAlign: "right" }}
          >
            🔮 데모
          </a>
          <Spacing></Spacing>
        </>
      )}
      <div style={{ height: "100px" }}></div>
    </WrapperColumn>
  )
}

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: blue; */
  height: 62px;
  justify-content: space-between;
`

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const AppIconDiv = styled.div`
  width: 62px;
  height: 62px;
  object-fit: contain;
  border-radius: 18px;
  /* background-color: red; */
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`

const TextSpan = styled.span`
  font-size: 18px;
  /* font-weight: 500; */
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
`
const SubTitle = styled.span`
  font-size: 28px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
`
const Spacing = styled.div`
  height: 16px;
`
export default PortDevType
