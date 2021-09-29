import React, { Component } from 'react'
import {Breadcrumb,Button ,Form, Input, Row, Col } from 'antd';
import axios from 'axios';

export default class Add extends Component {
  formRef=React.createRef()
  onFinish=(values)=>{
    axios({
      url:"http://localhost:3000/api/user/addUser_handle",
      data:{
        ...values
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
              <Form
                name="basic"
                style={{border:'1px solid',paddingTop:'80px',paddingLeft:'100px'}}
                onFinish={this.onFinish}
                ref={this.formRef}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
              >
                <Row style={{marginTop:'30px'}} >
                    <Col >
                      <Form.Item
                        label="name"
                        labelAlign="right"
                        name="userName"
                        rules={[{required: true, message: '请输入名字!'}]}
                        style={{width:'300px'}}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        label="工号"
                        labelAlign="right"
                        name="employeeNumber"
                        rules={[{required: true, message: '请输入工号!'}]}
                        style={{width:'300px'}}
                      >
                        <Input  />
                      </Form.Item>
                    </Col>
                </Row>

                <Row style={{marginTop:'30px'}} >
                    <Col >
                      <Form.Item
                        label="邮箱"
                        labelAlign="right"
                        name="userEmail"
                        style={{width:'300px'}}
                        rules={[{
                          type: 'email',
                          message: '请输入正确的邮箱!',
                        }]}
                      >
                        <Input  />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item
                        label="手机号"
                        labelAlign="right"
                        name="telephone"
                        style={{width:'300px'}}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Form.Item
                        label="password"
                        name="password"
                        style={{width:'300px'}}
                        rules={[{required: true, message: '请输入密码!'}]}
                        >
                        <Input.Password  />
                    </Form.Item>
                </Row>
                <Row style={{marginTop:'30px'}} >
                    <Form.Item
                        label="确认密码"
                        name="passwordCheck"
                        style={{width:'300px'}}
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
                        <Input.Password  />
                    </Form.Item>
                </Row>
                <Row style={{marginTop:'30px'}} >
                    <Form.Item
                        label="status"
                        name="status"
                        style={{width:'300px'}}
                        >
                        <Input  />
                    </Form.Item>
                </Row>
                <Form.Item style={{marginTop:'30px'}} wrapperCol={{ offset: 10, span:10 }}>
                  <Button type="primary" htmlType="submit" >
                    添加
                  </Button>
                </Form.Item>
              </Form>
          </div>
      )
  }
}
