import React from "react";
import "../index.css";
import CardImageOne from "../public/Download.jpg";

import Navigationbar from "./components/Navigationbar/Navigationbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div>
      <Navigationbar />

      <section className="">
        <div className="container text-center text-md-start mt-5 mb-5">
          <h1>Best Tech Websites & Blogs</h1>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5 mb-5">
          <div class="row">
            <div class="col-sm-10">
              <Card
                title="1. TechCrunch.com"
                description="TechCrunch stands as a titan in the tech journalism realm, providing insights into the latest tech trends, startups, and industry movers and shakers. With its in-depth analysis and timely news coverage, it’s a go-to destination for anyone looking to understand the pulse of the tech world."
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
