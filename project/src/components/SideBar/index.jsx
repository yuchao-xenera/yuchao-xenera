import React from 'react'
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

const { Sider } = Layout;

function SideBar(props) {
  let match = useRouteMatch(window.location.pathname);
  let key = props.getItems.children.filter(item => match.path.indexOf(item.path) > -1);

  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          selectedKeys={
            key[0] === undefined ? props.getItems.children[0].id : key[0].id
          }
          style={{ height: '100%', borderRight: 0 }}
        >
          {
            props.getItems.children.map(item => {
              return (
                <Menu.Item key={item.id}>
                  <Link to={item.path}>
                    {item.name}
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    </>
  )
}

const mapStateToProps = state => {
  return {
    getItems: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);