import React, { Component } from 'react'
import {Breadcrumb} from 'antd'

export default class FristList extends Component {
    render() {
        return (
            <>
                <div>
                    <Breadcrumb style={{ margin: '16px 0',float:'left'}}>
                        <Breadcrumb.Item>/菜单一</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div style={{marginTop:'200px'}}>菜单1as!!!!!!!!!!!!!!!!!!!!!!!!!</div>
             </>
        )
    }
}
