import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        label: 'Are you smarter than JM?',
        key: 'mail',
        // icon: <MailOutlined />,
    },
    {
        label: 'Dashboard',
        key: 'dashboard',
        // icon: <AppstoreOutlined />,
    },
    {
        label: 'About Us',
        key: 'about',
    },

];

const NavigationMenu = () => {
    const Navigate = useNavigate();
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        return Navigate(e.key)
    };
    return (
        <>
            <div className='menu-wrapper'>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='menu-item text-s' />
            </div>
        </>
    );
};
export default NavigationMenu;