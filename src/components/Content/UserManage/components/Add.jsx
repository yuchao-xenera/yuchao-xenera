import React, { Component } from 'react'
import {Breadcrumb,Button ,Form, Input, Row, Col } from 'antd';
import axios from 'axios';

export default class Add extends Component {
  formRef=React.createRef()
  onFinish=()=>{
    console.log(this.formRef.current.getFieldValue())
    axios({
      url:"http://localhost:3000/api/user/addUser_handle",
      data:{
        ...this.formRef.current.getFieldValue()
      },
      method:'post'
    }).then(
      response=>{
        alert('添加成功')
        this.formRef.current.resetFields()
      },
      error=>{
        alert('添加失败')
      }
    )
  }
  render() {
      return (
          <div>
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>/用户添加</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{border:'1px solid',padding:'80px'}}>
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
                          rules={[{required: true, message: '请输入名字!'}]}
                        >
                          <Input style={{width:'200px'}} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="工号"
                          name="employeeNumber"
                          rules={[{required: true, message: '请输入工号!'}]}
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
                          rules={[{
                            type: 'email',
                            message: '请输入正确的邮箱!',
                          }]}
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
                  <Row style={{marginTop:'30px'}} gutter={24}>
                      <Form.Item
                          label="password"
                          name="password"
                          rules={[{required: true, message: '请输入密码!'}]}
                          >
                          <Input.Password style={{width:'200px'}} />
                      </Form.Item>
                  </Row>
                  <Row style={{marginTop:'30px'}} gutter={24}>
                      <Form.Item
                          label="确认密码"
                          name="passwordCheck"
                          rules={[
                            {required: true, message: '请输入确认密码!'},
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }
                  
                                return Promise.reject(new Error('两次输入的密码不一致!'));
                              },
                            })
                          ]}
                          >
                          <Input.Password style={{width:'200px'}} />
                      </Form.Item>
                  </Row>
                  <Row style={{marginTop:'30px'}} gutter={24}>
                      <Form.Item
                          label="status"
                          name="status"
                          >
                          <Input style={{width:'200px'}} />
                      </Form.Item>
                  </Row>
                  <Form.Item style={{marginTop:'30px'}} wrapperCol={{ offset: 24, span: 16 }}>
                    <Button type="primary" htmlType="submit" >
                      添加
                    </Button>
                  </Form.Item>
                </Form>
              </div>
          </div>
      )
  }
}
