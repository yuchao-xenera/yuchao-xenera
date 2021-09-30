import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
export default class UserForm extends Component {
    componentDidUpdate(){
        this.myForm.setFieldsValue(this.props.userEdit)
	}
    render() {
        const onFinish = (values) => {
            const userEdit=this.props.userEdit
            const data ={
                userId:userEdit.userId,
                password:userEdit.password,
                status:userEdit.status,
                createUser:userEdit.createUser,
                updateUser:userEdit.updateUser,
                pass:userEdit.pass,
                checkPass:userEdit.checkPass,
                ...values
            };
            axios.post('http://10.113.8.169:8090/api/user/changeInfo',data).then(
                response => {
                    if(response.data.code!==200){
                        alert(response.data.msg)
                        return
                    }else{
                       alert(response.data.msg)
                       //刷新上面表单
                       this.props.refreshMy()
                       //清空下方表单
                       this.myForm.resetFields();
                       return
                    }
                },
                error => {console.log('失败了',error)}
		)
        };
        const onFinishFailed = (errorInfo) => {
           
        };
        // const {userEdit} = this.props
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
