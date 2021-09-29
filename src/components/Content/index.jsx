import {  Route,Switch,Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import React, { Component } from 'react'
import UserManage from './UserManage'
import DataDisplay from './DataDisplay'

const { Content} = Layout
export default class MyContent extends Component {
    render() {
        return (
            <div>
                <Content style={{ height:'500px', padding: '0 0px' }}>
                     <Switch>
                        <Route path='/userManage' component={UserManage}/>
                        <Route path='/dataDisplay' component={DataDisplay}/>                        
                        <Redirect to='/userManage'></Redirect>
                    </Switch> 
                </Content>
            </div>
        )
    }
}
