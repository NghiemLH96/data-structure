import React from 'react';
import "./generalChart.scss"
import { Column } from '@ant-design/charts';

const DemoBarChart: React.FC = () => {
  const data = [
    {
      type: 'A',
      point: 38,
    },
    {
      type: 'B',
      point: 52,
    },
    {
      type: 'C',
      point: 61,
    },
    {
      type: 'D',
      point: 145,
    },
    {
      type: 'E',
      point: 48,
    }
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'point',
    height:300,
    colorField: 'type', // Mapping màu cho từng cột dựa trên trường 'type'
    title:{
      title:'Thống kê thành tích',
      style:{
        titleFontSize:23,
        titleFontFamily:"'Times New Roman', Times, serif"
      },
    },

    scale: { 
      color: { palette: "puBu" },
      x: { 
        type:'band',
        padding:0.5
      } },
    label: {
      position: 'middle', // 'top', 'bottom', 'middle'
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return <Column {...config} />;
};

export default DemoBarChart;
