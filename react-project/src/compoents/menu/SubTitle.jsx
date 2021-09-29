import React, { Component, Fragment } from 'react'
import { matchPath, withRouter } from 'react-router'
import routes from '../../config/routes'
import { Breadcrumb } from 'antd'

class SubTitle extends Component {

    generate = (routeList) => {
        let path = this.props.location.pathname
        return (
            <>
                {
                    routeList.map(r => {
                        let match = matchPath(path, { path: r.path })
                        if (match !== null) {
                            return (
                                <Fragment key={r.id}>
                                    <Breadcrumb.Item>/ {r.title}</Breadcrumb.Item>
                                </Fragment>
                            )
                        }
                        return null
                    })
                }
            </>
        )
    }

    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                {this.generate(routes)}
            </Breadcrumb>
        )
    }
}

export default withRouter(SubTitle)