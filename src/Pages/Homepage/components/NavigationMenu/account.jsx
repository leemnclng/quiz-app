import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const AccountBtn = () => {
    return (
        <Button
            // type="primary"
            shape="circle"
            icon={<UserOutlined />}
            size="large" />
    );
};

export default AccountBtn;