import React from 'react'
import { Form, Input, Button, message } from 'antd';

export default function ChangeUserPage(props) {
  const [form] = Form.useForm();
  const { data, getFormData } = props;
  const inputFocus = React.useRef();
  const inputRule = [
    {
      required: true,
      message: 'Please input in this!',
    }
  ];
  const submitForm = () => {
    const formData = form.getFieldsValue(true);
    if (formData === undefined || Object.keys(formData).length < 4) {
      message.warning('请输入后再提交');
    } else {
      getFormData(formData);
    }
  }
  const resetForm = () => {
    form.resetFields();
    inputFocus.current.focus();
  }
  React.useEffect(() => {
    form.setFieldsValue(data)
    return () => {
      form.resetFields();
    }
  }, [data])
  return (
    <>
      <Form form={form} name="changeUserForm" layout="inline" autoComplete="off">
        <Form.Item name="userName" style={{ margin: '0 50px 10px 0' }} rules={inputRule} >
          <Input addonBefore='Name' ref={inputFocus} />
        </Form.Item>
        <Form.Item name="employeeNumber" style={{ margin: '0 0 10px -5px' }} rules={inputRule} >
          <Input addonBefore='工号' style={{ width: '248px' }} />
        </Form.Item>
        <Form.Item name="userEmail" rules={inputRule} >
          <Input addonBefore='邮箱' style={{ width: '243px' }} />
        </Form.Item>
        <Form.Item name="telephone" rules={inputRule} style={{ marginLeft: '29px' }}>
          <Input addonBefore='手机号' />
        </Form.Item>
        <Form.Item rules={inputRule} style={{ marginTop: '20px' }}>
          <Button style={{ marginRight: '20px' }} type="primary" onClick={submitForm}>submit</Button>
          <Button onClick={resetForm}>reset</Button>
        </Form.Item>
      </Form>
    </>
  )
}
