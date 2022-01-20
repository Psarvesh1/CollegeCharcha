import React from "react";
import Card from './Card'
import foods from '../assets/foods.jpg'
import Navigation from "./Navigation";
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className = "homeContent">
          <Card image={foods} alt='canteen' title='Mess and Canteen' desc ='All the discussions related to Mess and Canteen' redirect = '/Topic' />
          <Card image={foods} alt='academics' title='Academics' desc ='All the academics discussions' />
      </div>
    </div>
  );
};

export default Home;
