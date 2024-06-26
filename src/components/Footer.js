import React from "react";
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerMenu}>
        <div className={style.menuItem}>회사 소개</div>
        <div className={style.menuSeparator}>|</div>
        <div className={style.menuItem}>이용 약관</div>
        <div className={style.menuSeparator}>|</div>
        <div className={style.menuItem}>개인정보처리방침</div>
        <div className={style.menuSeparator}>|</div>
        <div className={style.menuItem}>제휴 문의</div>
        <div className={style.menuSeparator}>|</div>
        <div className={style.menuItem}>구매문의</div>
      </div>
      <hr className={style.line} />
      <div className={style.footerContent}>
        <div className={style.companyInfo}>
          <div className={style.companyName}>(주)AngelGuard</div>
          <div className={style.details}>
            <div className={style.detail}>
              대표이사 : 응애 애기 2조
              <span className={style.separator}>|</span>
              서울특별시 구로구 고척동
              <span className={style.separator}>|</span>
              호스팅서비스 사업자 : 엔젤가드 시스템
            </div>
            <div className={style.detail}>
              통신판매업신고 : 2024-서울어쩌구-8888
              <span className={style.separator}>|</span>
              고객센터 1588-1588
            </div>
          </div>
          <div className={style.snsIcons}>
            <img
              className={style.icon}
              src={require("../assets/instagram.png")}
              alt="Instagram"
            />
            <img
              className={style.icon}
              src={require("../assets/facebook.png")}
              alt="Facebook"
            />
            <img
              className={style.icon}
              src={require("../assets/twitter.png")}
              alt="Twitter"
            />
            <img
              className={style.icon}
              src={require("../assets/youtube.png")}
              alt="YouTube"
            />
          </div>
        </div>
        <div className={style.customerService}>
          <div className={style.customerTitle}>
            <div className={style.title}>고객센터 1588-1588</div>
            <button className={style.inquiryButton}>1:1문의하기</button>
          </div>
          <div className={style.hours}>운영시간 : 평일 09:00 ~ 18:00</div>
          <div className={style.check}>
            고객센터 바로가기
            <input type="checkbox" className={style.checkbox} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
