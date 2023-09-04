import React from "react";
import "./FooterCard.css";
import FooterImage from "../../images/footer 3d.png";

const FooterCard = () => {
  return (
    <div className="footer">
      <div className="contents">
        <img className="footer-img" src={FooterImage} />
        <div className="text-button">
          <div className="footer-data">
            <h4 className="c-white w-300 capital">
              Affordable Pricing for Seamless
            </h4>
            <h4 className="c-white bold upper">LORAM IPSUM</h4>
          </div>
          <button className="btn cta-btn contact">contact now</button>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
