import React from "react";
import Feature from "../Feature/Feature";
import FeatureReverse from "../FeatureReverse/FeatureReverse";
import "./Features.css";
import FooterCard from "../FooterCard/FooterCard";
import FeatureImg from "../../images/feature-image.png";

const Features = () => {
  const contentObj = {
    svg1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="474"
        viewBox="0 0 272 474"
        fill="none"
      >
        <path
          d="M91 226C91 356.615 367.115 473.715 236.5 473.715C105.885 473.715 0 367.831 0 237.215C0 106.6 105.885 0.71521 236.5 0.71521C367.115 0.71521 91 95.3847 91 226Z"
          fill="#39FFC4"
        />
      </svg>
    ),
    svg2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="474"
        viewBox="0 0 272 474"
        fill="none"
      >
        <path
          d="M180.587 248.431C180.587 117.815 -95.5284 0.71533 35.087 0.715342C165.702 0.715353 271.587 106.6 271.587 237.215C271.587 367.831 165.702 473.715 35.0869 473.715C-95.5284 473.715 180.587 379.046 180.587 248.431Z"
          fill="url(#paint0_linear_0_86)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_86"
            x1="226.396"
            y1="468.422"
            x2="58.4545"
            y2="0.63123"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#684CF6" />
            <stop offset="1" stop-color="#6A36FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: FeatureImg,
    heading1: "feature 1",
    heading2: "feature 2",
    heading3: "feature 3",
    content: `make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum`,
  };
  return (
    <div className="features">
      <h1 className="heading capital">our features</h1>
      <p className="capital">discover the power of feature-rich platform</p>
      <div className="feature-cards">
        <Feature
          svg={contentObj.svg1}
          image={contentObj.image}
          heading={contentObj.heading1}
          content={contentObj.content}
        />
        <FeatureReverse
          svg={contentObj.svg2}
          image={contentObj.image}
          heading={contentObj.heading2}
          content={contentObj.content}
        />
        <Feature
          svg={contentObj.svg1}
          image={contentObj.image}
          heading={contentObj.heading3}
          content={contentObj.content}
        />
      </div>
      <div className="footer-card">
        <FooterCard />
      </div>
    </div>
  );
};

export default Features;
