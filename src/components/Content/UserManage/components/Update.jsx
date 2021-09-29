import React, { Component } from 'react'
import {Button ,Form, Input, Row, Col } from 'antd';
import axios from 'axios';

export default class Update extends Component {
    formRef = React.createRef()


    onFinish=(values)=>{
        const {saveInfo,updateObj}=this.props
        axios({
          url:"http://localhost:3000/api/user/changeInfo",
          data:{
            userId:updateObj.userId,
            password:updateObj.password,
            status:updateObj.status,
            createUser:updateObj.createUser,
            updateUser:updateObj.updateUser,            
            ...values
          },
          method:'post'
        }).then(
          response => {
            alert('修改成功')
            saveInfo({key:updateObj.key,...values})
          },
          error=>{
            alert('修改失败'+error)
          }
        )
        
    }

    componentDidUpdate(){
        this.formRef.current.setFieldsValue({
            ...this.props.updateObj
          });
    }

    render() {        
        return (
            <div style={{border:'1px solid',padding:'60px'}}>
              <Form
                name="basic"
                layout="horizontal"
                onFinish={this.onFinish}
                ref={this.formRef}
              >
                <Row gutter={24}>
                    <Col span={12}>
                      <Form.Item
                        label="name"
                        name="userName"
                      >
                        <Input style={{width:'200px'}} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="工号"
                        name="employeeNumber"
                      >
                        <Input style={{width:'200px'}} />
                      </Form.Item>
                    </Col>
                </Row>

                <Row style={{marginTop:'30px'}} gutter={24}>
                    <Col span={12}>
                      <Form.Item
                        label="邮箱"
                        name="userEmail"
                      >
                        <Input style={{width:'200px'}} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="手机号"
                        name="telephone"
                      >
                        <Input style={{width:'200px'}} />
                      </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 23, span: 16 }}>
                  <Button type="primary" htmlType="submit" >
                    提交
                  </Button>
                </Form.Item>
              </Form>
            </div>
        )
    }
}
