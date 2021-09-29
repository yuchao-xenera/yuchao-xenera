import React from 'react'
import { connect } from 'react-redux';
import { sendPath } from '../../redux/actions/main_action';
import { Table, Modal, message } from 'antd';
import Axios from 'axios';

import ChangeUserPage from '../../pages/changeUser/ChangeUserPage';

function UserList(props) {
  // 给父组件传递url
  const [path] = React.useState(window.location.pathname);
  // antd中，Table组件需要的
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  // 存放后端请求来的data
  const [dataSource, setDataSource] = React.useState([]);
  // 控制对话框的显示，用于修改数据
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  // 用于给修改User对话框组件传递当前行数据
  const [sendData, setSendData] = React.useState({});

  const columns = [
    {
      title: 'Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '工号',
      dataIndex: 'employeeNumber',
      key: 'employeeNumber',
    },
    {
      title: '邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail',
    },
    {
      title: '手机号',
      dataIndex: 'telephone',
      key: 'telephone',
    },
    // 虽然不懂，但是出来了！！！
    {
      title: '操作',
      valueType: 'option',
      width: 100,
      render: (_, record, __) => [
        <a key="editable" onClick={() => showModal(record)} > 修改 </a>
      ],
    }
  ];

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(() => selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const loadingData = () => {
    Axios.post(`http://10.113.8.169:8090/api/user/show_user_list`)
      .then(
        res => {
          const { code, result } = res.data;
          if (code === 200) {
            // 给得到的result数组每一项加上一个key
            result.forEach(item => {
              item['key'] = item.userId
            })
            setDataSource(result)
          }
        },
        err => {
          console.log(err);
        }
      )

    // // 在家里面模拟的数据，记得删除！
    // const result = [
    //   { userName: 'test01', employeeNumber: 'P0100001', userEmail: 'test@pactera.com', telephone: '15212345678', key: 1, userId: 1 },
    //   { userName: 'test02', employeeNumber: 'P0100002', userEmail: 'test@pactera.com', telephone: '15212345678', key: 2, userId: 2 },
    //   { userName: 'test03', employeeNumber: 'P0100003', userEmail: 'test@pactera.com', telephone: '15212345678', key: 3, userId: 3 },
    //   { userName: 'test04', employeeNumber: 'P0100004', userEmail: 'test@pactera.com', telephone: '15212345678', key: 4, userId: 4 }
    // ];
    // setDataSource(result)
  }

  const showModal = (record) => {
    setIsModalVisible(true);
    setSendData(record);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getFormData = (formData) => {
    delete formData.key;
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
          setIsModalVisible(false);
          loadingData();
        },
        err => {
          console.log(err);
        }
      )

  }

  React.useEffect(() => {
    props.sendPath(path);
    loadingData();
  }, [])

  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
      <Modal title="修改用户" visible={isModalVisible} width={600} style={{ top: '30%' }} footer={null} onCancel={handleCancel}>
        <ChangeUserPage data={sendData} getFormData={getFormData} />
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList)