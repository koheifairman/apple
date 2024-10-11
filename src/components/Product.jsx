//import { motion } from "framer-motion";
//import { useRef, useEffect, useState } from "react";

import "../styles/Product.css";

//import images from "./images";
//import image0 from " ./assets/transparent.jpeg";
// import image1 from './assets/1.png';
// import image2 from './assets/2.png';
// import image3 from './assets/3.png';
// import image4 from './assets/4.png';
// import image5 from './assets/5.png';
// import image6 from './assets/6.png';
// import image7 from './assets/7.png';
// import image8 from './assets/8.png';
// import image9 from './assets/9.png';
// import image10 from './assets/10.png';

//assetsの位置publicにして、imageに渡す。スプレッド構文

export const Product = () => {
  // const productList = [
  //     {
  //         image: <img src={image1} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'Mac',
  //     },
  //     {
  //         image: <img src={image2} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'iPhone',
  //     },
  //     {
  //         image: <img src={image3} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'iPad',
  //     },
  //     {
  //         image: <img src={image4} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'Apple Watch',
  //     },
  //     {
  //         image: <img src={image5} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'AirPods',
  //     },
  //     {
  //         image: <img src={image6} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'AirTag',
  //     },
  //     {
  //         image: <img src={image7} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'Apple TV 4K',
  //     },
  //     {
  //         image: <img src={image8} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'HomePod mini',
  //     },
  //     {
  //         image: <img src={image9} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'アクセサリ',
  //     },
  //     {
  //         image: <img src={image10} alt="プロダクト画像" className="scrolleritem-img" />,
  //         title: 'Apple Gift Card',
  //     },
  // ];
  const productList = [
    //public下のファイルは「実際のURL」直下にある。url指定はpathname以下(/〜)
    //public下のファイルはimport非対応。urlで直で呼び出す
    {
      imageSrc: "/assets/1.png",
      title: "Mac",
    },
    {
      imageSrc: "/assets/2.png",
      title: "iPhone",
    },
    {
      imageSrc: "/assets/3.png",
      title: "iPad",
    },
    {
      imageSrc: "/assets/4.png",
      title: "Apple Watch",
    },
    {
      imageSrc: "/assets/5.png",
      title: "AirPods",
    },
    {
      imageSrc: "/assets/6.png",
      title: "AirTag",
    },
    {
      imageSrc: "/assets/7.png",
      title: "Apple TV 4K",
    },
    {
      imageSrc: "/assets/8.png",
      title: "HomePod mini",
    },
    {
      imageSrc: "/assets/9.png",
      title: "アクセサリ",
    },
    {
      imageSrc: "/assets/10.png",
      title: "Apple Gift Card",
    },
    // {
    //     image: <img src={image3} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'iPad',
    // },
    // {
    //     image: <img src={image4} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'Apple Watch',
    // },
    // {
    //     image: <img src={image5} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'AirPods',
    // },
    // {
    //     image: <img src={image6} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'AirTag',
    // },
    // {
    //     image: <img src={image7} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'Apple TV 4K',
    // },
    // {
    //     image: <img src={image8} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'HomePod mini',
    // },
    // {
    //     image: <img src={image9} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'アクセサリ',
    // },
    // {
    //     image: <img src={image10} alt="プロダクト画像" className="scrolleritem-img" />,
    //     title: 'Apple Gift Card',
    // },
  ];

  // URLについて
  // protocol hostname pathname hash search(? + x=x + & x=x)
  // https:// www.google.com /aa/bb #xyz ?a=apple&b=banana

  //相対パス
  // CURRENT: // https:// www.google.com /aa
  // DEST: // https:// www.google.com /aa/bb
  // relative path: bb

  return (
    <div className="product">
      <div className="scroller">
        <div className="inner-scroller">
          {/* <div className="scrolleritem-container space">
                        <div className="scrolleritem-inner-container"></div>
                    </div> */}
          {productList.map(({ imageSrc, title }, i) => {
            return (
              <div key={i} className="scrolleritem-container">
                <div className="scrolleritem-inner-container">
                  <div className="scrolleritem">
                    <div className="scrolleritem-img-container">
                      <img
                        src={imageSrc}
                        alt="プロダクト画像"
                        className="scrolleritem-img"
                      />
                    </div>
                    <div className="scrolleritem-title">{title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
