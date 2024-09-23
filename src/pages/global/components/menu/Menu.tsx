import React, { useState } from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import "./menu.scss"
import { useNavigate } from 'react-router-dom';



const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();


  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    { key: '1', icon: <PieChartOutlined />, label: 'Dashboard' },
    {
      key: 'sub1',
      label: 'Admin',
      icon: <MailOutlined />,
      children: [
        { key: '5', label: 'Question manager', onClick: () => { navigate("admin/question-manager") } },
        { key: '6', label: 'Option 6' },
        { key: '7', label: 'Option 7' },
        { key: '8', label: 'Option 8' },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '11', label: 'Option 11' },
            { key: '12', label: 'Option 12' },
          ],
        },
      ],
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='menu__container'>
      <Button type="primary" onClick={toggleCollapsed} className='menu-extend-btn'>
        {<MenuOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;