import React from "react";
import HomeAboutGridItem from "../HomeAboutGridItem/HomeAboutGridItem";
import "./HomeAboutGrid.css";

const HomeAboutGrid = function(props) {
  return (
    <div className="HomeAboutGrid">
      <div className="wrapper wrapper--content">
        <div className="HomeAboutGrid__grid">
          <HomeAboutGridItem title="Our Beliefs" icon="beliefs" />
          <HomeAboutGridItem title="Our Ministries" icon="ministries" />
          <HomeAboutGridItem title="Our Leadership" icon="leadership" />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutGrid;
