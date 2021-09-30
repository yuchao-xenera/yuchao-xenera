import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";

export default function Added() {
  const [form] = Form.useForm();
  const formRef = React.createRef()
  const add = async () => {
    await formRef.current.validateFields();
    let password = form.getFieldsValue().password;
    let passwordCheck = form.getFieldsValue().passwordCheck;
    if (password === passwordCheck) {
      axios
        .post(
          "http://10.113.8.169:8090/api/user/addUser_handle",
          form.getFieldsValue(true)
        )
        .then((response) => {
          const { code } = response.data;
          if (code === 200) {
            message.success("添加成功");
            form.resetFields();
          } else {
            message.error("添加失败");
          }
        });
    } else {
      message.error("两次密码输入不一致");
    }
  };
  return (
    <div>
      <Form
        name="Added"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        autoComplete="off"
        form={form}
        ref={formRef}
      >
        <Row>
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
        <Row>
          <Col span={12}>
            <Form.Item label="邮箱" name="userEmail">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="手机" name="telephone">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
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
        <Row>
          <Col span={12}>
            <Form.Item
              label="确认密码"
              name="passwordCheck"
              rules={[{ required: true, message: "请再次输入你的密码" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              label="status"
              name="status"
              rules={[{ required: true,message: "请输入状态" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "90%" }}
      >
        <Button type="primary" htmlType="submit" onClick={add}>
          添加
        </Button>
      </div>
    </div>
  );
}
