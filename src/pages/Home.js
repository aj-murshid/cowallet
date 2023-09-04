import React from "react";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import Features from "../components/Features/Features";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Introduction />
      <Features />
    </div>
  );
};

export default Home;
