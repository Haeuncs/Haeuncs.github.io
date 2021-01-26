import React, { Component } from "react";

const randomText = [
  "🌹 어쩌다 이 누추한 곳까지 찾아오셨을까요. 반갑습니다. 🌹",
  "じl가,행복ぁłとŀ면,しŀ도행복하l~♡",
  "Øl서l상, 믿을놈, 너, 밖어l,엄ㄷㄷŀ ♥",
  "☆-とБ신ㅇl,행복ぁŀ기를,ばł라l요-☆",
  "[♥] Ŀlフr 있ブı에 LĦつL있Øィε♡з  ",
  "∥♥∥小중한。인연으로。남길바래요∥♡∥",
  "★LI7r웃으면Lr도죠οL넌장난σizr咬H도★",
  "∥우연えㅓ럼만ĿΓ。우연을필연으로∽♥∥",
  "너에겐 ŁĦㄱr 없는거㉡l? 그런 거니?",
];

export default class Banner extends Component {
  render() {
    return (
      <div className="bounce">
        <div>
          <span>
            {randomText[Math.floor(Math.random() * randomText.length)]}
          </span>
        </div>
      </div>
    );
  }
}
