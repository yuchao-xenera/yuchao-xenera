import React, { Component } from 'react'
import UpdateUser from './UpdateUser'
import UserList from './UserList'

export default class UserManage extends Component {
    render() {
        return (
            <div>
                <UserList />
                <UpdateUser />
            </div>
        )
    }
}
