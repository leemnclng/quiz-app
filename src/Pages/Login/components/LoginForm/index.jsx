import { Button, Form, Input } from "antd";
import { UserOutlined,UnlockFilled  } from '@ant-design/icons'
const LoginForm = ()=> {
    return (
    <Form
        style={{maxWidth:600}}
        name="basic"
        autoComplete="off"
        >
        <Form.Item
        name="username"
        rules={[
            {
            required: true,
            message: 'Please input your username!',
            },
        ]}
        >
        <Input size="large" placeholder="Username" prefix={<UserOutlined  />}/>
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
            <Button type="primary" >
                Submit
            </Button>
        </Form.Item>
    </Form>
    )
};

export default LoginForm;