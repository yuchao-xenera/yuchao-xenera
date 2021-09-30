import React from 'react'
import { connect } from 'react-redux';
import { sendPath } from '../../redux/actions/main_action';
import { Table, message, Button } from 'antd';
import Axios from 'axios';

import ChangeUserPage from '../../pages/changeUser/ChangeUserPage';

function UserList(props) {
  // 给父组件传递url
  const [path] = React.useState(window.location.pathname);
  // antd中，Table组件需要的
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  // 存放后端请求来的data
  const [dataSource, setDataSource] = React.useState([]);
  // 存放传递给子组件ChangeUserPage的数据
  const [sendData, setSendData] = React.useState({});
  // 控制修改按钮的显示
  const [isShow, setIsShow] = React.useState(true);
  // 点击修改跳转到修改框
  const changeRef = React.useRef();

  const columns = [
    {
      title: 'name',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '工号',
      dataIndex: 'employeeNumber',
      key: 'employeeNumber',
      width: '25%'
    },
    {
      title: '邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail',
      width: '25%'
    },
    {
      title: '手机号',
      dataIndex: 'telephone',
      key: 'telephone',
      width: '25%'
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
            result.forEach(item => item['key'] = item.userId)
            setDataSource(result)
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  const changeUser = () => {
    let tmpArray = [];
    if (dataSource.length !== 0) {
      tmpArray = dataSource.filter(item => item.key === selectedRowKeys[0])
    }
    setSendData(tmpArray[0])
    if (changeRef.current) {
      window.scrollTo(0, changeRef.current.offsetTop || 0)
    }
  }

  const reload = () => {
    loadingData();
  }

  React.useEffect(() => {
    props.sendPath(path);
    loadingData();
    selectedRowKeys.length === 0 ? setIsShow(true) : setIsShow(false);
  }, [selectedRowKeys])

  return (
    <>
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "flex-end" }} >
        <Button type="primary" onClick={changeUser} disabled={isShow}>修改</Button>
      </div>
      <Table rowSelection={{ type: 'radio', ...rowSelection }}
        columns={columns} dataSource={dataSource} bordered pagination={{ pageSize: 5 }}
      />
      <div ref={changeRef}>
        <ChangeUserPage data={sendData} reload={reload} />
      </div>
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