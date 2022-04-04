import { Button } from '@material-ui/core';
import React from 'react';
import './widgetlarge.css';

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetlarge'>
      <h3 className='widgetLargeTitle'>Latest Transactions</h3>
      <table className='widgetLargeTable'>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'>Customer</th>
          <th className='widgetLargeTh'>Date</th>
          <th className='widgetLargeTh'>Amount</th>
          <th className='widgetLargeTh'>Status</th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/5424972/pexels-photo-5424972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Mami guci</span>
          </td>
          <td className='widgetLargeDate'>2 June 2022</td>
          <td className='widgetLargeAmount'>$122.0</td>
          <td className='widgetLargeStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'>Customer</th>
          <th className='widgetLargeTh'>Date</th>
          <th className='widgetLargeTh'>Amount</th>
          <th className='widgetLargeTh'>Status</th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/5424972/pexels-photo-5424972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Mami guci</span>
          </td>
          <td className='widgetLargeDate'>2 June 2022</td>
          <td className='widgetLargeAmount'>$122.0</td>
          <td className='widgetLargeStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLargeTr'>
          <th className='widgetLargeTh'>Customer</th>
          <th className='widgetLargeTh'>Date</th>
          <th className='widgetLargeTh'>Amount</th>
          <th className='widgetLargeTh'>Status</th>
        </tr>
        <tr className='widgetLargeTr'>
          <td className='widgetLargeUser'>
            <img
              src='https://images.pexels.com/photos/5424972/pexels-photo-5424972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='widgetLargeImg'
            />
            <span className='widgetLargeName'>Mami guci</span>
          </td>
          <td className='widgetLargeDate'>2 June 2022</td>
          <td className='widgetLargeAmount'>$122.0</td>
          <td className='widgetLargeStatus'>
            <Button type='Declined' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
