import React from "react";
import { Form, Input, Button, Select } from "antd";
import axios from "axios";
const { Option } = Select;

function handleChange(value) {
  console.log(value);
}

export default function Added() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const add = () => {
    axios.post(`http://10.113.8.169:8090/api/user/addUser_handle`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="userName"
        rules={[{ required: true, message: "请输入你的姓名" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="工号"
        name="employeeNumber"
        rules={[{ required: true, message: "请输入你的工号" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="邮箱" name="userEmail">
        <Input />
      </Form.Item>
      <Form.Item label="手机" name="telephone">
        <Input />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: "请输入你的密码" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="confirmPassword"
        rules={[{ required: true, message: "请再次输入你的密码" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="status" name="status">
        <Select labelInValue style={{ width: 120 }} onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
        <Button type="primary" htmlType="submit" onClick={add}>
          添加
        </Button>
      </Form.Item>
    </Form>
  );
}
