import React from 'react'
import { Form, Input, Button, message, Row, Col } from 'antd';
import Axios from 'axios';

export default function ChangeUserPage(props) {
  // antd form
  const [form] = Form.useForm();
  // 父组件传递过来的数据和刷新的回调函数
  const { data, reload } = props;
  // 控制按钮显示
  const [isShow, setIsShow] = React.useState(true);
  // 
  const inputFocus = React.useRef();

  const submitForm = () => {
    const formData = form.getFieldsValue(true);
    getFormData(formData);
  }

  const getFormData = (formData) => {
    // ajax提交后台修改接口
    Axios.post('http://10.113.8.169:8090/api/user/changeInfo', formData)
      .then(
        res => {
          const { code, result } = res.data;
          if (code === 200) {
            message.success(result);
          } else {
            message.error(result);
          }
          reload();
          form.resetFields();
          setIsShow(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  React.useEffect(() => {
    form.setFieldsValue(data)
    Object.keys(data).length === 0 ? setIsShow(true) : setIsShow(false);
  }, [data])
  return (
    <div style={{ width: '60%', border: '1px solid #ddd' }}>
      <Form form={form} onFinish={submitForm} name="changeUserForm" autoComplete="off"
        style={{ margin: '20px 20px -15px 20px' }}>
        <Row gutter={[20, 4]}>
          <Col span={12} >
            <Form.Item name="userName"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input addonBefore='name' ref={inputFocus} disabled={isShow} />
            </Form.Item>
          </Col>
          <Col span={12} >
            <Form.Item name="employeeNumber">
              <Input addonBefore='工号' disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 4]}>
          <Col span={12} >
            <Form.Item name="userEmail"
              rules={[{ type: 'email', message: '请输入正确的邮箱地址' }]}
            >
              <Input addonBefore='邮箱' disabled={isShow} />
            </Form.Item>
          </Col>
          <Col span={12} >
            <Form.Item name="telephone"
              rules={[
                {
                  message: '请输入正确的手机号',
                  pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
                }
              ]}
            >
              <Input addonBefore='手机号' disabled={isShow} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[20, 4]}>
          <Col span={21}></Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={isShow}>修改</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
