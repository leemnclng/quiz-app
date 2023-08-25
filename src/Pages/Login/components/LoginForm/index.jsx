import { useEffect, useState } from "react";
import { Button, Form, Input, Alert, Space } from "antd";
import { UserOutlined,UnlockFilled  } from '@ant-design/icons'
import { checkUserSigned } from "../../api/UserValidationServices";
import { useNavigate } from "react-router-dom";

const LoginForm = ()=> {
    const Navigate = useNavigate();
    const [form] = Form.useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const acquiredData = localStorage.getItem('user');
    const storedUser = checkUserSigned({username,password});
    console.log(storedUser);

    const handleSubmit = (values) => {
        setUsername(values.username)
        setPassword(values.password);
    }

    useEffect(()=>{
        if(storedUser !== null) {
            if(storedUser.valid) {
                localStorage.setItem('user',JSON.stringify({userName:username,userPass:password}))
                setTimeout(()=>{
                    return Navigate('/dashboard')
                },2000)
            }
        }
    });

    useEffect(()=>{
        if(acquiredData !== null) {
            return Navigate('/dashboard')
        }
    });

    const handleError = () => {
        if(storedUser !== null) {
            return (storedUser.status === 'success' ?
            <Alert message={storedUser.message} type="success" showIcon closable/> :
            <Alert message={storedUser.message} type="error" showIcon closable/>
            )
        }
        return '';
    }

    return (
    <Space
        direction="vertical"
        style={{
        width: '100%',
        }}
    >
    { storedUser !== null ? handleError() : '' }
        <Form
            style={{maxWidth:600}}
            form={form}
            onFinish={handleSubmit}
            name="basic"
            autoComplete="off"
            >
            <Form.Item
            id="username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input 
                size="large" 
                placeholder="Username" 
                prefix={<UserOutlined />}
            />
            
            </Form.Item>

            <Form.Item
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password size="large" placeholder="Password"  prefix={<UnlockFilled />}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </Space>
    
    )
};

export default LoginForm;