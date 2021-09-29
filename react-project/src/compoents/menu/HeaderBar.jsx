import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { resetKeyAction } from '../../redux/actions/headerBar';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const { Header } = Layout;

class HeaderBar extends Component {

    state = {
        selectedKeys: ['1']
    }

    onClick = (e) => {
        this.props.resetKey(e.key)
        // console.log(this.props.keyValue,this.props.temp);

        setTimeout(() => {
            // console.log('@2：', this.props.keyValue,this.props.temp);
            if (this.props.keyValue === "/dataMenu") {
                this.props.history.push('/dataMenu')
            } else {
                if (this.props.temp === "1") {
                    this.props.history.push('/userList')
                } else {
                    this.props.history.push('/addUser')
                }
            }
            this.setHeaderSelectedItem()
        }, 200);

    }
    /**
     * 设置headerBar的选中状态
     */
    setHeaderSelectedItem() {
        const pathname = this.props.location.pathname
        console.log('@@@', pathname, pathname === "/dataMenu");
        if (pathname === "/dataMenu") {
            this.setState({
                selectedKeys: [pathname]
            })
        } else {
            this.setState({
                selectedKeys: ['1']
            })
        }
    }

    /**
     * 刷新页面，重新设置headerBar和leftBar的选中状态
     */
    componentDidMount() {
        this.setHeaderSelectedItem()
        console.log('--->', this.state.selectedKeys);

        const pathname = this.props.location.pathname
        this.props.resetKey(pathname === "/dataMenu" ? pathname : '1')
    }

    componentDidUpdate() {
        // console.log("header bar didUpate",this.props.keyValue,this.props.temp);

    }

    render() {
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={this.state.selectedKeys}
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.onClick}
                >
                    <Menu.Item key="1" >用户管理</Menu.Item>
                    <Menu.Item key="/dataMenu" >数据展示</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

function mapStateToProps(state) {
    return {
        keyValue: state.key,
        temp: state.temp
    }
}

function mapDispachToProps(dispach) {
    return {
        resetKey: (value) => { dispach(resetKeyAction(value)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(HeaderBar))
