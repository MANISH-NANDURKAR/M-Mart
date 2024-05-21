import React from 'react';
import Banner from '../components/Banner';
import BestSeller from './BestSeller';
import LastPurchase from './LastPurchase';


const Home = () => {
  return (
   <div>
    <Banner/>
    <BestSeller/>
    <LastPurchase/>
   </div>
  );
};

export default Home;
