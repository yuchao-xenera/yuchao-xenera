import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
export default class UserForm extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        const {userEdit} = this.props

        return (
            <>
                <Form
                    ref={c=>this.myForm =c}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        ...userEdit
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{border:'1px solid',padding:'10px 10px 10px'}}
                    >
                    <div>
                        <Form.Item
                            label="name"
                            name="userName"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                            style={{width:'300px',float:'left',marginLeft:'100px'}}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="工号"
                            name="employeeNumber"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                            style={{width:'300px',float:'rigth'}}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="邮箱"
                            name="userEmail"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                            style={{width:'300px',float:'left',marginLeft:'100px'}}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号"
                            name="telephone"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                            style={{width:'300px',float:'rigth'}}
                        >
                            <Input />
                        </Form.Item>
                    </div>    
                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                            提交
                            </Button>
                        </Form.Item>
                    </Form>
            </>
        )
    }
}
