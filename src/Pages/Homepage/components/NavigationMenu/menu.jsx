import React, { useState } from 'react';
import { Menu } from 'antd';

const items = [
    {
        label: 'Are you smarter than JM?',
        key: 'mail',
        // icon: <MailOutlined />,
    },
    {
        label: 'Dashboard',
        key: 'app',
        // icon: <AppstoreOutlined />,
    },
    {
        label: 'About Us',
        key: 'about',
    },

];
const NavigationMenu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
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