import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import './product.css';
import { productData } from '../../data';
const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>prod</h1>
        <Link to='/product'>
          <button className='productButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'></div>
      <div className='productTopLeft'>
        <Chart data={productData} dataKey='Sales' title='Sales Performance' />
      </div>
      <div className='productTopRight'>
        <div className='productInfoTop'>
          <img
            src='https://images.pexels.com/photos/4812959/pexels-photo-4812959.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=''
            className='productInfoImg'
          />
          <span className='productName'>Apple AirPods</span>
        </div>
        <div className='productInfoBottom'>
          <div className='productInfoItem'>
            <span className='productInfoKey'>Id:</span>
            <span className='productInfoValue'> 123</span>
          </div>
          <div className='productInfoItem'>
            <span className='productInfoKey'>Sales:</span>
            <span className='productInfoValue'> 4123</span>
          </div>
          <div className='productInfoItem'>
            <span className='productInfoKey'>Active:</span>
            <span className='productInfoValue'> Yes</span>
          </div>
          <div className='productInfoItem'>
            <span className='productInfoKey'>In Stock:</span>
            <span className='productInfoValue'> No</span>
          </div>
        </div>
      </div>
      <div className='productBottom'></div>
    </div>
  );
};
export default Product;
