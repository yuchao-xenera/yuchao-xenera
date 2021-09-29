import React, { Component } from 'react'
import {Layout } from 'antd';
import LeftList from '../LeftList'
import Main from '../Main'
export default class Container extends Component {
    render() {
        return (
            <>
                <Layout>
					<LeftList/>
					<Main/>
				</Layout>
            </>
        )
    }
}
