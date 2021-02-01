import React, { Component } from "react";
import { navigate } from "gatsby";

export default class HomeAboutFooter extends Component {
  render() {
    return (
      <footer>
        <div
          className="customBorder w-full flex"
          style={{
            height: "8vh",
            borderLeft: "none",
            borderBottom: "none",
            borderRight: "none",
          }}
        >
          <button
            className="flex-1 bg-transparent"
            style={{ border: "none" }}
            onClick={() => navigate("/")}
          >
            글 목록 POST LIST
          </button>
          <div
            className="bg-black h-full"
            style={{
              width: "5px",
            }}
          ></div>
          <button
            className="flex-1 bg-transparent"
            style={{ border: "none" }}
            onClick={() => navigate("/GuestBook")}
          >
            방명록 GUESTBOOK
          </button>
          <div></div>
        </div>
      </footer>
    );
  }
}
