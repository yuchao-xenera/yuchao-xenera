import React from 'react'
import { connect } from 'react-redux';
import { sendPath } from '../../redux/actions/main_action';
import { Form, Input, Button, Row, Col, message, Select } from 'antd';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

function AddUser(props) {
  // 存放url
  const [path] = React.useState(window.location.pathname);
  // form表单
  const [form] = Form.useForm();
  // 路由
  const history = useHistory();

  const addUser = () => {
    let formData = form.getFieldsValue(true);
    if (formData.statusObj.value !== undefined) {
      formData['status'] = formData.statusObj.value;
    } else {
      formData['status'] = 1;
    }
    Axios.post('http://10.113.8.169:8090/api/user/addUser_handle', formData)
      .then(
        res => {
          console.log(res);
          const { code, result } = res.data;
          if (code === 200) {
            message.success(result);
          } else {
            message.error(result);
          }
          history.push('/user/userList')
        },
        err => {
          console.log(err);
        }
      )
  }

  // 自定义校验规则
  const passwordValidator = (_, value, __) => {
    const { getFieldValue } = form;
    if (value && value !== getFieldValue('password')) {
      return Promise.reject('两次输入不一致！');
    }
    return Promise.resolve();
  }

  React.useEffect(() => {
    props.sendPath(path)
  })

  return (
    <>
      <Form form={form} name='addUserForm' autoComplete="off" onFinish={addUser}
        labelCol={{ span: 4 }} wrapperCol={{ span: 13 }}
        initialValues={{ statusObj: { value: '1', label: '1', key: '1' } }}>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              label="name"
              name="userName"
              rules={[{ required: true, message: "请输入你的姓名" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="工号"
              name="employeeNumber"
              rules={[{ required: true, message: "请输入你的工号" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item label="邮箱" name="userEmail" rules={[{ type: 'email', message: '请输入正确的邮箱地址' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="手机" name="telephone"
              rules={[
                {
                  message: '请输入正确的手机号',
                  pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
                }
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: "请输入你的密码" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              label="确认密码"
              name="passwordCheck"
              rules={[
                { required: true, message: "请再次输入你的密码" },
                { validator: passwordValidator }
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item label="status" name="statusObj">
              <Select labelInValue style={{ width: 120 }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={19} />
          <Col span={2} >
            <Button type="primary" htmlType="submit">添加</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendPath: value => dispatch(sendPath(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)