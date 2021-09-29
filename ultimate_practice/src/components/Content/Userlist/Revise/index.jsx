import React,{useCallback} from "react";
import { Form, Input,Button } from "antd";

export default function Revise(props) {
  const {singleUser,changeSingleUser} = props
  // console.log(singleUser);
  const [form] = Form.useForm();

  const childClick = useCallback(()=>changeSingleUser(singleUser),[changeSingleUser,singleUser])

  React.useEffect(() => {
    form.setFieldsValue(singleUser);
  });
  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 5 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
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

      <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
        <Button type="primary" htmlType="submit" onClick={childClick}>
          确定
        </Button>
      </Form.Item>
    </Form>
  );
}
