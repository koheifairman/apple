import React from "react";

import "../styles/Promotion.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import portraitImage from './assets/portrait.jpeg';
// import speechbubbleImage from './assets/bubble2.png';

export const Promotion = () => {
  return (
    <div className="promotion">
      <div className="promotion-text-wrapper">
        <div className="promotion-text">
          36回の分割払いと下取りでiPhone 14が実質2,216円/月から<sup>§</sup>。
          <br />
          24か月目に新しい iPhoneにアップグレードすると、残りの分割払いが不要に
          <sup>§§</sup>。
          <a
            href="https://www.apple.com/jp/shop/browse/finance/installment/paidy_offer"
            className="apply button"
          >
            今すぐ申し込む
            <i className="rightchevron logo">
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </a>
        </div>
      </div>
      <div className="catchphrase-chatstore-container">
        <div className="row">
          <div className="catchphrase">
            <h1 className="heading">ストア。</h1>
            <div className="subheading">
              Apple製品と出会うための最高の場所です。
            </div>
          </div>
          <div className="chatstore-container">
            <div className="chatstore-column-generic">
              <div className="chat-section">
                <img
                  src="/assets/portrait.jpeg"
                  alt="ポートレイト画像"
                  className="portrait image"
                />
                <div className="chat-text-container">
                  <p>ショッピングのサポートが必要ですか？</p>
                  <a
                    href="https://contactretail.apple.com/Solutions"
                    className="chat-text button"
                  >
                    スペシャリストに相談する
                  </a>
                </div>
              </div>
              <div className="store-section">
                <img
                  src="/assets/bubble2.png"
                  alt="吹き出し画像"
                  className="speechbubble image"
                />
                <div className="store-text-container">
                  <p>お近くのApple Store</p>
                  <a
                    href="https://www.apple.com/jp/retail/"
                    className="store-text button"
                  >
                    お近くのストアを見る
                    <i className="rightchevron logo">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
