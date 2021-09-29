import React, { Component } from 'react'
import { Layout } from 'antd';
import SubTitle from '../menu/SubTitle';
import LeftBar from '../menu/LeftBar';
import HeaderBar from '../menu/HeaderBar';
const { Content } = Layout;

export default class AppLayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderBar />
                <Layout>
                    <LeftBar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <SubTitle />
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

