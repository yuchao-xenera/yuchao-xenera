import React from 'react'
import { Button, Modal } from 'antd'
import axios from 'axios'
import md5 from 'md5'

export default function AddUser() {

    const userName = React.useRef()
    const userEmail = React.useRef()
    const employeeNumber = React.useRef()
    const telephone = React.useRef()
    const password = React.useRef()
    const passwordCheck = React.useRef()
    const status = React.useRef()

    /**
     * 添加按钮事件
     */
    function submit() {

        const uName = userName.current.value;
        const uEmail = userEmail.current.value;
        const uNo = employeeNumber.current.value;
        const uTelephone = telephone.current.value;
        const uPassword = password.current.value;
        const uPasswordCheck = passwordCheck.current.value;
        const uValue = status.current.value;

        //做参数校验
        if (uName === '' || uNo === '' || uPassword === '' || uPasswordCheck === '') {
            Modal.error({
                title: '用户名、工号、密码都不能为空',
            });
            return
        }

        if (uPassword !== uPasswordCheck) {
            Modal.error({
                title: '输入的两次密码不一致',
            });
            return
        }

        axios.post('/user/addUser_handle', {
            "userName": uName,
            "employeeNumber": uNo,
            "password": md5(uPassword),
            "checkPass": uPasswordCheck,
            "userEmail": uEmail,
            "telephone": uTelephone,
            "status": uValue
        }).then(
            res => {
                if (res.data.code === 200) {
                    console.log(res.data.result);

                    Modal.success({
                        title: '用户添加成功！'
                    });

                    clearInput()

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

    function clearInput() {
        userName.current.value = ''
        userEmail.current.value = ''
        employeeNumber.current.value = ''
        telephone.current.value = ''
        password.current.value = ''
        passwordCheck.current.value = ''
        status.current.value = ''
    }

    return (
        <div>
            <div>
                <span style={{ color: 'red' }}>*</span>name：
                <input ref={userName} onChange={() => { }} style={{ width: '100px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'red' }}>*</span>工&nbsp;&nbsp;&nbsp;号：
                <input ref={employeeNumber} onChange={() => { }} style={{ width: '100px' }} />
            </div>
            <br />
            <div>
                邮箱： <input ref={userEmail} onChange={() => { }} maxLength='20' style={{ width: '100px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;手机号：
                <input ref={telephone} onChange={() => { }} maxLength='11' style={{ width: '100px' }} />
            </div>
            <br />
            <span style={{ color: 'red' }}>*</span>password：<input ref={password} onChange={() => { }} style={{ width: '100px' }} /> <br /> <br />
            <span style={{ color: 'red' }}>*</span>确认密码：<input ref={passwordCheck} onChange={() => { }} style={{ width: '100px' }} /> <br /><br />
            status：<input ref={status} onChange={() => { }} style={{ width: '100px' }} /> <br /><br />

            <Button type='primary' style={{ float: 'right', display: 'inline-block' }} onClick={submit}>添加</Button>
        </div >
    )
}
