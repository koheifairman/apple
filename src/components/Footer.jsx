import React from "react";
import "../styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// later: h3の位置を変える
//配列でうめこむ、配列名・map引数名けある
export const Footer = () => {
  // const footerList1 = [
  //     'Mac',
  //     'iPad',
  //     'iPhone',
  //     'Watch',
  //     'AirPods',
  //     'TV & Home',
  //     'AirTag',
  //     'アクセサリ',
  //     'ギフトカード',
  // ];
  // const footerList2 = [
  //     'Apple Music',
  //     'Apple TV+',
  //     'Apple Arcade',
  //     'iCloud+',
  //     'Apple One',
  //     'Apple Pay',
  //     'Apple Books',
  //     'Apple Podcasts',
  //     'App Store',
  // ];
  // const footerList3 = ['Apple IDの管理', 'Apple Storeのアカウント', 'iCloud.com'];
  // const footerList4 = [
  //     'お近くのApple Store',
  //     'Genius Bar',
  //     'Today at Apple',
  //     'サマーキャンプ',
  //     'Apple Store App',
  //     '整備済製品&旧モデル新品',
  //     '分割でお支払い',
  //     'Apple Trade In',
  //     'ご注文状況',
  //     'ご利用ガイド',
  // ];
  // const footerList5 = ['Appleとビジネス', 'ビジネス向けストア'];
  // const footerList6 = ['Appleと教育', '購入とサポート', '学生・教職員向けストア'];
  // const footerList7 = ['Appleとヘルスケア', 'Apple Watchと健康'];
  // const footerList8 = ['アクセシビリティ', '環境', 'プライバシー', 'サプライヤー責任'];
  // const footerList9 = [
  //     'Newsroom',
  //     'Appleの役員について',
  //     '採用情報',
  //     '倫理とコンプライアンス（英語）',
  //     'イベント',
  //     '雇用創出',
  //     'Appleの連絡先',
  // ];
  // const copyrightList = ['プライバシーポリシー', '利用規約', '販売条件', 'Legal Infomation', 'サイトマップ'];
  return (
    <div className="footer">
      <div className="footer-wrapper">
        {/* heading */}
        <div className="footer-heading">
          <div className="footer-heading-generic">
            <a className="apple logo" href="https://www.apple.com/jp/">
              <FontAwesomeIcon icon={faApple} />
            </a>
            <i className="rightchevron logo">
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
            <p className="footer-heading-text">Apple Storeオンライン</p>
          </div>
        </div>
        {/* generic */}
        <div className="footer-container-generic">
          <div className="footer-container container1">
            <ul className="footer-column column1">
              <li className="footer-column-title">製品情報と購入</li>
              {[
                "Mac",
                "iPad",
                "iPhone",
                "Watch",
                "AirPods",
                "TV & Home",
                "AirTag",
                "アクセサリ",
                "ギフトカード",
              ].map((productInfo) => {
                return <li className="footer-column-content">{productInfo}</li>;
              })}
            </ul>
          </div>
          <div className="footer-container container23">
            <ul className="footer-column column2">
              <li className="footer-column-title">サービス</li>
              {[
                "Apple Music",
                "Apple TV+",
                "Apple Arcade",
                "iCloud+",
                "Apple One",
                "Apple Pay",
                "Apple Books",
                "Apple Podcasts",
                "App Store",
              ].map((service) => {
                return <li className="footer-column-content">{service}</li>;
              })}
            </ul>
            <ul className="footer-column column3">
              <li className="footer-column-title">アカウント</li>
              {["Apple IDの管理", "Apple Storeのアカウント", "iCloud.com"].map(
                (account) => {
                  return <li className="footer-column-content">{account}</li>;
                }
              )}
            </ul>
          </div>
          <div className="footer-container container4">
            <ul className="footer-column column4">
              <li className="footer-column-title">Apple Store</li>
              {[
                "お近くのApple Store",
                "Genius Bar",
                "Today at Apple",
                "サマーキャンプ",
                "Apple Store App",
                "整備済製品&旧モデル新品",
                "分割でお支払い",
                "Apple Trade In",
                "ご注文状況",
                "ご利用ガイド",
              ].map((appleStore) => {
                return <li className="footer-column-content">{appleStore}</li>;
              })}
            </ul>
          </div>
          <div className="footer-container container567">
            <ul className="footer-column column5">
              <li className="footer-column-title">ビジネス</li>
              {["Appleとビジネス", "ビジネス向けストア"].map((business) => {
                return <li className="footer-column-content">{business}</li>;
              })}
            </ul>
            <ul className="footer-column column6">
              <li className="footer-column-title">教育</li>
              {["Appleと教育", "購入とサポート", "学生・教職員向けストア"].map(
                (education) => {
                  return <li className="footer-column-content">{education}</li>;
                }
              )}
            </ul>
            <ul className="footer-column column7">
              <li className="footer-column-title">ヘルスケア</li>
              {["Appleと教育", "購入とサポート", "学生・教職員向けストア"].map(
                (healthCare) => {
                  return (
                    <li className="footer-column-content">{healthCare}</li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="footer-container container89">
            <ul className="footer-column column8">
              <li className="footer-column-title">Appleの取り組み</li>
              {[
                "アクセシビリティ",
                "環境",
                "プライバシー",
                "サプライヤー責任",
              ].map((activity) => {
                return <li className="footer-column-content">{activity}</li>;
              })}
            </ul>
            <ul className="footer-column column9">
              <li className="footer-column-title">Appleについて</li>
              {[
                "Newsroom",
                "Appleの役員について",
                "採用情報",
                "倫理とコンプライアンス（英語）",
                "イベント",
                "雇用創出",
                "Appleの連絡先",
              ].map((aboutApple) => {
                return <li className="footer-column-content">{aboutApple}</li>;
              })}
            </ul>
          </div>
        </div>
        {/* end */}
        <div className="footer-end">
          <p>
            そのほかの購入方法：
            <a href="https://www.apple.com/jp/retail/">お近くのApple Store</a>
            、または
            <a href="https://locate.apple.com/jp/ja/">Apple製品取扱店</a>
            で製品を購入することもできます。電話による購入、ご相談は
            <a href="https://www.apple.com/jp/contact/">0120-993-993</a>まで。
          </p>
          <div className="copyrightlist">
            <div className="copyrightlist-left">
              Copyright © 2022 Apple Inc. All rights reserved.
            </div>
            <ul className="copyrightlist-center">
              {[
                "プライバシーポリシー",
                "利用規約",
                "販売条件",
                "Legal Infomation",
                "サイトマップ",
              ].map((copyright) => {
                return (
                  <li className="copyrightlist-center-content">{copyright}</li>
                );
              })}
            </ul>
            <div className="copyrightlist-right">日本</div>
          </div>
        </div>
      </div>
    </div>
  );
};
