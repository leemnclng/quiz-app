import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const Navigate = useNavigate();
    return (
        <>
            <Space>

                <Button type="link" size='large' onClick={() => { return Navigate('/auth/login') }}>
                    Log In
                </Button>

                <a href="#">
                    <Button shape="round" size='large' className='signup-btn text-m'>
                        Sign Up
                    </Button>
                </a>

            </Space>
        </>
    );
};

export default SignUp;