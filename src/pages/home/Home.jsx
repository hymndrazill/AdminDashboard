import './home.css';
import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../data';
import WidgetSmall from '../../components/widgetsmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Users Analytics'
        grid
        dataKey='Active Users'
      />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
