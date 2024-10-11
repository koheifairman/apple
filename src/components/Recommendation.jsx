import React from "react";

import "../styles/Recommendation.css";

//import recoImages from "./recoImages";
// import recoImage1 from './assets/reco-1.jpeg';
// import recoImage2 from './assets/reco-2.jpeg';
// import recoImage3 from './assets/reco-3.jpeg';
// import recoImage4 from './assets/reco-4.jpeg';
// import recoImage5 from './assets/reco-5.jpeg';

//later:画像index.jsでとばす。h1つかわない
//１ファイル１css。（モジュール（エモーションなど）でjavascriptでcss書いちゃうのもあり）

export const Recommendation = () => {
  // const recommendationList = [
  //   {
  //     sub: "月々の分割払い",
  //     title: "iPhone 14の各モデルを金利0%、36回の分割払いで購入できます。",
  //     text: "24か月目に新しいiPhoneにアップグレードすると、残りの分割払いが不要に。事前申し込みを今すぐどうぞ。",
  //     img: (
  //       <img
  //         src={recoImage1}
  //         alt="レコメンド画像"
  //         className="scrolleritem-img"
  //       />
  //     ),
  //   },
  //   {
  //     sub: "IPHONE14",
  //     title: "ビッグと超ビッグ。",
  //     text: "下取りがない場合は119,800円(税込)から",
  //     img: (
  //       <img
  //         src={recoImage2}
  //         alt="レコメンド画像"
  //         className="scrolleritem-img"
  //       />
  //     ),
  //   },
  //   {
  //     sub: "APPL WATCH SERIES 8",
  //     title: "健康の未来へ、新たな一歩を。",
  //     text: "59,800円(税込)から",
  //     img: (
  //       <img
  //         src={recoImage3}
  //         alt="レコメンド画像"
  //         className="scrolleritem-img"
  //       />
  //     ),
  //   },
  //   {
  //     sub: "APPLE TV 4K",
  //     title: "目にも耳にも、映画館の迫力。Appleだけの体験です。",
  //     text: "19,800円(税込)から",
  //     img: (
  //       <img
  //         src={recoImage4}
  //         alt="レコメンド画像"
  //         className="scrolleritem-img"
  //       />
  //     ),
  //   },
  //   {
  //     sub: "M2チップ搭載MacBook Air",
  //     title: "そのパワーは、軽くない。",
  //     text: "164,800円(税込)から",
  //     img: (
  //       <img
  //         src={recoImage5}
  //         alt="レコメンド画像"
  //         className="scrolleritem-img"
  //       />
  //     ),
  //   },
  // ];
  return (
    <div className="recommendation">
      <div className="recommendation-container">
        <div className="recommendation-inner-container">
          <div className="recommendation-heading">
            <h2>いま人気です。</h2>
            <span>
              最新製品を今すぐ<nobr>チェック。</nobr>
            </span>
          </div>
          <div className="scroller">
            <div className="inner-scroller">
              <div className="space"></div>
              <div className="scrolleritem">
                <img
                  src="/assets/reco-1.jpeg"
                  alt="レコメンド画像"
                  className="scrolleritem-img"
                />
                <div className="scrolleritem-generic">
                  <p className="scrolleritem-sub">月々の分割払い</p>
                  <h1 className="scrolleritem-title">
                    iPhone 14の各モデルを金利0%、36回の分割払いで購入できます。
                  </h1>
                  <p className="scrolleritem-text">
                    24か月目に新しいiPhoneにアップグレードすると、残りの分割払いが不要に。事前申し込みを今すぐどうぞ。
                  </p>
                </div>
              </div>
              <div className="scrolleritem">
                <img
                  src="/assets/reco-2.jpeg"
                  alt="レコメンド画像"
                  className="scrolleritem-img"
                />
                <div className="scrolleritem-generic">
                  <p className="scrolleritem-sub">IPHONE14</p>
                  <h1 className="scrolleritem-title">ビッグと超ビッグ。</h1>
                  <p className="scrolleritem-text">
                    下取りがない場合は119,800円(税込)から
                  </p>
                </div>
              </div>
              <div className="scrolleritem">
                <img
                  src="/assets/reco-3.jpeg"
                  alt="レコメンド画像"
                  className="scrolleritem-img"
                />
                <div className="scrolleritem-generic">
                  <p className="scrolleritem-sub-watch">APPL WATCH SERIES 8</p>
                  <h1 className="scrolleritem-title-watch">
                    健康の未来へ、新たな一歩を。
                  </h1>
                  <p className="scrolleritem-text-watch">59,800円(税込)から</p>
                </div>
              </div>
              <div className="scrolleritem">
                <img
                  src="/assets/reco-4.jpeg"
                  alt="レコメンド画像"
                  className="scrolleritem-img"
                />
                <div className="scrolleritem-generic">
                  <p className="scrolleritem-sub">APPLE TV 4K</p>
                  <h1 className="scrolleritem-title">
                    目にも耳にも、映画館の迫力。Appleだけの体験です。
                  </h1>
                  <p className="scrolleritem-text">19,800円(税込)から</p>
                </div>
              </div>
              <div className="scrolleritem">
                <img
                  src="/assets/reco-5.jpeg"
                  alt="レコメンド画像"
                  className="scrolleritem-img"
                />
                <div className="scrolleritem-generic">
                  <p className="scrolleritem-sub">M2チップ搭載MacBook Air</p>
                  <h1 className="scrolleritem-title">
                    そのパワーは、軽くない。
                  </h1>
                  <p className="scrolleritem-text">164,800円(税込)から</p>
                </div>
              </div>
              {/* {recommendationList.map((recoArg) => {
                return (
                  <div className="scrolleritem">
                    <p className="scrolleritem-sub">{recoArg.sub}</p>
                    <h1 className="scrolleritem-title">{recoArg.title}</h1>
                    <p className="scrolleritem-text">{recoArg.text}</p>
                    <img
                      src={recoArg.img}
                      alt="レコメンド画像"
                      className="scrolleritem-img"
                    />
                  </div>
                );
              })} */}

              {/* <div className="space"></div>
              {recoImages.map((recommendationArg) => {
                return (
                  <div className="scrolleritem">
                    <img
                      src={recommendationArg}
                      alt="レコメンド画像"
                      className="scrolleritem-img"
                      width="400px"
                      height="500px"
                    />
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
