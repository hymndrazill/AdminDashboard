import React from 'react';
import './sidebar.css';
import {
  AssessmentOutlined,
  AttachMoney,
  ChatBubbleOutlineOutlined,
  FeedbackOutlined,
  LineStyle,
  MailOutlined,
  ReportOutlined,
  Timeline,
  TrendingUp,
  WorkOutlineOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyle /> Home
            </li>
            <li className='sidebarListItem'>
              <Timeline /> Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp /> Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <LineStyle className='sidebarIcons' /> Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListItem'>
                <Timeline className='sidebarIcons' /> Products
              </li>
            </Link>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcons' /> Transactions
            </li>
            <li className='sidebarListItem'>
              <AssessmentOutlined className='sidebarIcons' /> Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutlined className='sidebarIcons' /> Mail
            </li>
            <li className='sidebarListItem'>
              <FeedbackOutlined className='sidebarIcons' /> Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutlineOutlined className='sidebarIcons' /> Messages
            </li>
          </ul>
        </div>{' '}
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkOutlineOutlined className='sidebarIcons' /> Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcons' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportOutlined className='sidebarIcons' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
