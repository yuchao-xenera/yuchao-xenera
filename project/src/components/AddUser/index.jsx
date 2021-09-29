import React from 'react'
import { connect } from 'react-redux';
import { sendPath } from '../../redux/actions/main_action';
import { Form, Input, Button, Row, Col, message, Switch } from 'antd';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddUser(props) {
  const [path] = React.useState(window.location.pathname);
  const [form] = Form.useForm();
  const history = useHistory();

  const addUser = () => {
    let formData = form.getFieldsValue(true);
    console.log(formData);
    if (formData.status || formData.status === undefined) {
      formData.status = 1;
    } else {
      formData.status = 0;
    }
    console.log(formData);
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

  const switchChange = (checked) => {
    // console.log(checked);
  }

  React.useEffect(() => {
    props.sendPath(path)
  })
  return (
    <>
      <Form form={form} name='addUserForm' autoComplete="off" >
        <Row gutter={[16, 8]}>
          <Col span={8} >
            <Form.Item label="Name" name="userName">
              <Input style={{ marginLeft: '19px', width: '276px' }} />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item label="工号" name="employeeNumber">
              <Input style={{ marginLeft: '14px', width: '290px' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={8} >
            <Form.Item label="邮箱" name="userEmail">
              <Input style={{ marginLeft: '28px', width: '276px' }} />
            </Form.Item>
          </Col>
          <Col span={8} >
            <Form.Item label="手机号" name="telephone">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={16} >
            <Form.Item label="密码" name="password">
              <Input style={{ marginLeft: '28px', width: '638px' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={16} >
            <Form.Item label="确认密码" name="passwordCheck">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={16} >
            <Form.Item label="状态" name="status" valuePropName="checked">
              <Switch style={{ marginLeft: '28px' }} defaultChecked onChange={switchChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={14} />
          <Col span={2} >
            <Button type="primary" style={{ width: '100%' }} onClick={addUser}>添加</Button>
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