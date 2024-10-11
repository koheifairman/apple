import React from "react";
import "../styles/Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const headerList = [
    "ストア",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Apple限定",
    "アクセサリ",
    "サポート",
  ];
  return (
    <div className="header">
      <ul className="header-list">
        <li className="header-list-item">
          <a className="apple logo" href="https://www.apple.com/jp/">
            <FontAwesomeIcon icon={faApple} />
          </a>
        </li>

        {headerList.map((headerArg) => {
          return <li className="header-list-item">{headerArg}</li>;
        })}

        <li className="header-list-item">
          <a className="search logo" href="https://www.apple.com/jp/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </li>
        <li className="header-list-item">
          <a className="briefcase logo" href="https://www.apple.com/jp/search">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
      </ul>
    </div>
  );
};
