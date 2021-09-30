import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import axios from "axios";

export default function Revise(props) {
  const { singleUser, overload } = props;
  // console.log(singleUser);
  const [form] = Form.useForm();

  const childClick = () => {
    axios
      .post(
        `http://10.113.8.169:8090/api/user/changeInfo`,
        form.getFieldsValue(true)
      )
      .then((response) => {
        // console.log(response.data.code);
        const { code } = response.data;
        if (code === 200) {
          message.success("修改成功");
          overload();
          form.resetFields();
        } else {
          message.error("修改失败");
        }
      });
  };

  React.useEffect(() => {
    form.setFieldsValue(singleUser);
  });
  return (
    <div>
      <Form
        name="Revise"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        autoComplete="off"
        form={form}
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
              <Input disabled />
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
      </Form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="primary" htmlType="submit" onClick={childClick}>
          确定
        </Button>
      </div>
    </div>
  );
}
