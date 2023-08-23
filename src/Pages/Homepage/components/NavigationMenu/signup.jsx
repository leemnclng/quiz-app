import { Button, Space } from 'antd';

const SignUp = () => {

    return (
        <>
            <Space>
                <a href="#">
                    <Button type="link" size='large' >
                        Log In
                    </Button>
                </a>
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