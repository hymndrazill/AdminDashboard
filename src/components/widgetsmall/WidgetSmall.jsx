import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetsmall.css';
const WidgetSmall = () => {
  return (
    <div className='widgetsmall'>
      <span className='widgetsmTitle'>New Joined members</span>
      <ul className='widgetsmList'>
        <li className='widgetsmListItem'>
          <img
            src='https://images.pexels.com/photos/7191158/pexels-photo-7191158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='widgetsmimg'
          />
          <div className='widgetsmUser'>
            <span className='widgetsmUsername'>chung Li</span>
            <span className='widgetsmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>
        <li className='widgetsmListItem'>
          <img
            src='https://images.pexels.com/photos/7191158/pexels-photo-7191158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='widgetsmimg'
          />
          <div className='widgetsmUser'>
            <span className='widgetsmUsername'>chung Li</span>
            <span className='widgetsmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>{' '}
        <li className='widgetsmListItem'>
          <img
            src='https://images.pexels.com/photos/7191158/pexels-photo-7191158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='widgetsmimg'
          />
          <div className='widgetsmUser'>
            <span className='widgetsmUsername'>chung Li</span>
            <span className='widgetsmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>{' '}
        <li className='widgetsmListItem'>
          <img
            src='https://images.pexels.com/photos/7191158/pexels-photo-7191158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='widgetsmimg'
          />
          <div className='widgetsmUser'>
            <span className='widgetsmUsername'>chung Li</span>
            <span className='widgetsmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>{' '}
        <li className='widgetsmListItem'>
          <img
            src='https://images.pexels.com/photos/7191158/pexels-photo-7191158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            className='widgetsmimg'
          />
          <div className='widgetsmUser'>
            <span className='widgetsmUsername'>chung Li</span>
            <span className='widgetsmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetsmButton'>
            <Visibility className='widgetMsIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
