import React from 'react'
import { Button, Modal } from 'antd'
import axios from 'axios'
const confirm = Modal.confirm

export default function AddUser() {

    const userName = React.useRef()
    const userEmail = React.useRef()
    const employeeNumber = React.useRef()
    const telephone = React.useRef()

    /**
     * 添加按钮事件
     */
    function submit(params) {

    }

    return (
        <div>
            <div>
                姓名：
                <input ref={userName} onChange={() => { }} style={{ width: '100px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;工&nbsp;&nbsp;&nbsp;号：
                <input ref={employeeNumber} onChange={() => { }} style={{ width: '100px' }} />
            </div>
            <br />
            <div>
                邮箱：
                <input ref={userEmail} onChange={() => { }} maxLength='20' style={{ width: '100px' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;手机号：
                <input ref={telephone} onChange={() => { }} maxLength='13' style={{ width: '100px' }} />
            </div>
            <br />
            密码：
            <input ref={userName} onChange={() => { }} style={{ width: '100px' }} />
            {/* 确认密码：
            <input ref={userName} onChange={() => { }} style={{ width: '100px' }} />
            状态：
            <input ref={userName} onChange={() => { }} style={{ width: '100px' }} /> */}

            <Button type='primary' style={{ float: 'right', display: 'inline-block' }} onClick={submit}>添加</Button>
        </div >
    )
}
