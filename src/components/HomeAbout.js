import React, { Component } from "react";
import HomeAboutFooter from "./HomeAboutFooter";

export default class HomeAbout extends Component {
  render() {
    return (
      <>
        <div />
        <div className="flex flex-col justify-center m-10">
          <div
            style={{
              fontSize: "5rem",
            }}
          >
            ARCHIVE
            <br />
            <div className="flex flex-row items-end">
              {new Date().getFullYear()}
              {
                <img
                  hidden={true}
                  src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhaeuncs.github.io&count_bg=%23000000&title_bg=%23000000&icon=&icon_color=%23FFFFFF&title=%E4%BD%95%E5%9B%9E%E3%81%8B%E3%83%AA%E3%83%95%E3%83%AC%E3%83%83%E3%82%B7%E3%83%A5&edge_flat=true"
                />
              }
            </div>
          </div>
        </div>
        <HomeAboutFooter />
      </>
    );
  }
}
