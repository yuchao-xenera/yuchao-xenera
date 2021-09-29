import React from 'react'
import { Table, Button } from 'antd';
import axios from 'axios'
import UpdateUser from './UpdateUser';

axios.defaults.baseURL = 'http://10.113.8.169:8090/api'

export default function UserList() {

    const columns = [
        {
            title: '姓名',
            dataIndex: 'userName',
        },
        {
            title: '工号',
            dataIndex: 'employeeNumber',
        },
        {
            title: '邮箱',
            dataIndex: 'userEmail',
        },
        {
            title: '手机号',
            dataIndex: 'telephone',
        },
    ];

    /**
     * 测试数据
     */
    const data = [
        {
            key: '0',
            userName: 'Devil',
            employeeNumber: 1000,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
        {
            key: '1',
            userName: 'John',
            employeeNumber: 1001,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
        {
            key: '2',
            userName: 'Tom',
            employeeNumber: 1002,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
        {
            key: '3',
            userName: 'Poney',
            employeeNumber: 1003,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
        {
            key: '4',
            userName: 'Demon',
            employeeNumber: 1004,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
        {
            key: '5',
            userName: 'James',
            employeeNumber: 1005,
            userEmail: '888888@qq.com',
            telephone: '13500000000',
            password: '99999'
        },
    ];

    const [userList, setUserList] = React.useState([])
    //是否显示更新组件
    const [isShow, setShow] = React.useState(false)
    //选中的行数据
    const [selectedRowsData, setRowsData] = React.useState()
    const [selectedRowsDataTemp, setRowsDataTemp] = React.useState()

    

    /**
     * 副作用钩子。
     * 适合 设置定时器、发送Ajax请求、取消订阅等
     */
    React.useEffect(() => {
        //当第二个参数不写时，相当于componentDidMount() + Unpdate
        loadData()
        //第一个参数的返回值，相当于 componentWillUnmount()

    }, [])//第二个参数，为数组。作用检测 state的数据，当检测的数据发生变化时，调用第一个参数，更新update

    function loadData() {
        console.log("加载数据 loadData()");

        // setUserList(data)

        axios.post('/user/show_user_list', {}).then(
            res => {
                if (res.data.code === 200) {
                    const result = res.data.result
                    console.log(result)
                    if (result.length > 0) {
                        let list = []
                        result.map((item) => {
                            // console.log(list.length.toString());
                            let obj = {
                                key: list.length.toString(),
                                userName: item.userName,
                                employeeNumber: item.employeeNumber,
                                userEmail: item.userEmail,
                                telephone: item.telephone,
                                password:item.password,
                                userId:item.userId
                            }
                            list.push(obj)
                        })
                        setUserList(list)
                    }
                } else {
                    alert(res.data.msg)
                }
            },
            fail => {
                console.log(fail);
            }
        )

    }

    function refreshCallback() {
        console.log("重新加载数据");
        setShow(false)
        loadData()
    }


    const rowSelection = {
        type: 'radio',
        onChange: onSelectChange,
    };

    function onSelectChange(selectedRowKeys,selectedRows) {
        console.log('selectedRowKeys: ', selectedRowKeys,'selectedRows:',selectedRows);
        setShow(false)
        setRowsDataTemp(selectedRows[0])
    };

    function showTotal(total, range) {
        // console.log('总条数：', total);

    }
    /**
     * 修改按钮
     */
    function modifyUser(e) {
        console.log('修改用户数据：',selectedRowsDataTemp);
        setShow(true)
        setRowsData(selectedRowsDataTemp)
    }

    let pagination = {
        pageSize: 6,
        showSizeChanger: false,
        showTotal: showTotal
    };

    return (
        <div>
            <div>
                <h4 style={{display: 'inline-block' }}>  用户个数：{userList.length}</h4>
                <Button type='primary' style={{ float: 'right', display: 'inline-block' }} onClick={modifyUser}>修改</Button>
            </div>
            <br />
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={userList}
                pagination={pagination}
            />
            {isShow ? <UpdateUser user={selectedRowsData} callback={refreshCallback}/> : null}
            
        </div>
    )
}
