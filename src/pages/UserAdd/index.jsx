import React, { Component } from 'react'
import { Form, Input, Button,Breadcrumb} from 'antd';
import axios from 'axios'
export default class UserAdd extends Component {

	render() {
		const onFinish = (value) => {
			if(value.password!== value.passwordCheck){
				alert("验证密码和密码不相同！")
				return
			}
			
			axios.post('http://10.113.8.169:8090/api/user/addUser_handle',value).then(
				response => {
                    if(response.data.code!==200){
                        alert(response.data.msg)
                        return
                    }else{
                        alert(response.data.msg)
                        return
                    }
                },
                error => {console.log('失败了',error)}
			)
		};
		const onFinishFailed = (errorInfo) => {
           
		};
		return (
			<>
                <div>
                    <Breadcrumb style={{ margin: '16px 0',float:'left'}}>
                        <Breadcrumb.Item>/用户添加</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
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
                        
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{border:'1px solid',padding:'10px 10px 10px',marginTop:'60px'}}
                    >
                    <div>
                        <Form.Item
                            label="name"
                            name="userName"
                            rules={[
                            {
                                required: true,
                                message: '请输入name！',
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
                                message: '请输入工号！',
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
                            style={{width:'300px',float:'left',marginLeft:'100px'}}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号"
                            name="telephone"
                            style={{width:'300px',float:'rigth'}}
                        >
                            <Input />
                        </Form.Item>
                    </div>  
                        <Form.Item
                            label="password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                            ]}
                            style={{width:'300px',marginLeft:'100px'}}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="确认密码"
                            name="passwordCheck"
                            rules={[
                            {
                                required: true,
                                message: '请输入确认密码!',
                                
                            }, ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('两次输入密码不一致!'));
                                },
                              })
                            ]}
                            style={{width:'300px',marginLeft:'100px'}}
                        >
                            <Input.Password />
                        </Form.Item>
						<Form.Item
                            label="status"
                            name="status"
                            style={{width:'300px',marginLeft:'100px'}}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                            添加
                            </Button>
                        </Form.Item>
                    </Form>
			</>
		)
	}
}
