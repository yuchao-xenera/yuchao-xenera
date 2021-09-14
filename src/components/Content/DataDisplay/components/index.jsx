import React, { Component } from 'react'
import {Breadcrumb } from 'antd';

export default class Menu1 extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>/菜单1</Breadcrumb.Item>
                </Breadcrumb>
                
            </div>
        )
    }
}
