import React, { Component } from 'react'

import { Layout, Menu } from 'antd'
import { resetHeaderKeyAction } from '../../redux/actions/headerBar'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const { Header } = Layout;

const userManageKey = '1'
const dataShowKey = '2'

class HeaderBar extends Component {

    state = {
        selectedKeys: [userManageKey]
    }

    onClick = (e) => {
        this.props.resetHeaderKey(e.key)
        // console.log(this.props.headerKey,this.props);

        //设置路由
        setTimeout(() => {
            // console.log('@@', e.key,this.props.leftKey);
            if (e.key === dataShowKey) {
                this.props.history.push('/dataMenu')
            }
            else {
                if (!this.props.leftKey || this.props.leftKey === "1") {
                    this.props.history.push('/userList')
                } else {
                    this.props.history.push('/addUser')
                }
            }
            this.setHeaderSelectedItem()
        }, 200);


    }
    /**
     * 设置headerBar的选中状态(根据路由来更新的状态)
     */
    setHeaderSelectedItem() {
        const pathname = this.props.location.pathname
        // console.log('haderBar 路由：', pathname);
        if (pathname === "/dataMenu") {
            this.setState({
                selectedKeys: [dataShowKey]
            })
        } else {
            this.setState({
                selectedKeys: [userManageKey]
            })
        }
    }

    /**
     * 刷新页面，重新设置headerBar
     */
    componentDidMount() {
        this.setHeaderSelectedItem()
        //通知leftBar
        const pathname = this.props.location.pathname
        this.props.resetHeaderKey(pathname === "/dataMenu" ? dataShowKey : userManageKey)
    }

    render() {
        return (
            <Header className="header">
                <div className="logo"/>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.onClick}
                >
                    <Menu.Item key={userManageKey} >用户管理</Menu.Item>
                    <Menu.Item key={dataShowKey} >数据展示</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

function mapStateToProps(state) {
    return {
        headerKey: state.headerKey,
        leftKey: state.leftKey
    }
}

function mapDispachToProps(dispach) {
    return {
        resetHeaderKey: (value) => { dispach(resetHeaderKeyAction(value)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(HeaderBar))
