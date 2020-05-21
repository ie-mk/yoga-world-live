import React from 'react';
import DashboardItem from './dashboardItem/DashboardItem';

const mockdata = [
  {
    title: 'Students',
    count: 324,
    New: 24,
    Active: 50,
  },
  {
    title: 'Courses',
    count: 54,
    New: 2,
    Active: 10,
  },
];

const DashboardContent = () => {
  return mockdata.map((item, idx) => {
    return <DashboardItem key={idx} data={item} />;
  });
};

export default DashboardContent;
