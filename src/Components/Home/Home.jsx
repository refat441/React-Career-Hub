import React from "react";
import Banner from "../Banner/Banner";
import CateforyList from "../CateforyList/CateforyList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CateforyList></CateforyList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
