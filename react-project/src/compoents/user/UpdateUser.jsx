import React from 'react'
import { Button, Modal } from 'antd'
import axios from 'axios'
const confirm = Modal.confirm

export default function UpdateUser(props) {

    const userName = React.useRef()
    const userEmail = React.useRef()
    const employeeNumber = React.useRef()
    const telephone = React.useRef()

    // const data = [
    //     {
    //         key: '1',
    //         userName: 'John Brown',
    //         employeeNumber: 1000,
    //         userEmail: '888888@qq.com',
    //         telephone: '13500000000',
    //     },
    // ];

    /**
     * 提交按钮事件
     */
    function submit() {

        confirm({
            title: '您确定要更新数据吗？',
            content: '用户名：' + userName.current.value,
            onOk: function () {
                ajaxUpdateUserInfo();
            },
            onCancel: function () { }
        })
    }

    function ajaxUpdateUserInfo() {
        const uName = userName.current.value;
        const uEmail = userEmail.current.value;
        const uNo = employeeNumber.current.value;
        const uTelephone = telephone.current.value;
        const uPassword = props.user.password;
        const userId = props.user.userId;
        console.log(uName, uEmail, uNo, uTelephone, uPassword);

        //axios请求
        axios.post('/user/changeInfo', {
            "userId": userId,
            "userName": uName,
            "employeeNumber": uNo,
            "password": uPassword,
            "userEmail": uEmail,
            "telephone": uTelephone,
            "status": "2",
            "createUser": 0,
            "updateUser": 0,
            "pass": uPassword,
            "checkPass": uPassword
        }).then(
            res => {
                if (res.data.code === 200) {
                    console.log(res.data.result);

                    props.callback();
                    Modal.success({
                        title: '修改成功！'
                    });
                    
                } else {
                    Modal.error({
                        title: res.data.msg
                    });
                }
            },
            fail => {
                Modal.error({
                    title: '网络出现错误',
                    content: fail
                });
            }
        );
    }

    return (
        <div >
            <div>
                name：
                <input ref={userName} defaultValue={props.user ? props.user.userName : ''} onChange={() => { }} style={{ width: '150px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;工&nbsp;&nbsp;&nbsp;号：
                <input ref={employeeNumber} 
                defaultValue={props.user ? props.user.employeeNumber : ''} 
                onChange={() => { }} 
                disabled="disabled"
                style={{ width: '150px' }} />
            </div>
            <br />
            <div>
                邮箱：
                <input ref={userEmail} defaultValue={props.user ? props.user.userEmail : ''} onChange={() => { }} maxLength='20' style={{ width: '150px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;手机号：
                <input ref={telephone} 
                defaultValue={props.user ? props.user.telephone : ''} 
                onChange={() => { }} 
                maxLength='11' 
                style={{ width: '150px' }} 
                />
            </div>

            <Button type='primary' style={{ float: 'right', display: 'inline-block' }} onClick={submit}>提交</Button>

        </div>
    )

}
