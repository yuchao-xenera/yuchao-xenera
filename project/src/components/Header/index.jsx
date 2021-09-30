import React from 'react'
import { Layout, Menu } from 'antd';
import { useHistory, useRouteMatch } from "react-router-dom";

import { connect } from 'react-redux';
import { changeItems } from '../../redux/actions/header_action';

const { Header } = Layout;


function MyHeader(props) {
  // 从redux上获取到的菜单的对象数组
  const { itemObjList } = props;
  const [items] = React.useState(itemObjList);
  // 路由
  let history = useHistory();
  // router
  let match = useRouteMatch(window.location.pathname);
  // 过滤出来的当前页面的菜单对象
  let key = itemObjList.filter(item => match.path.indexOf(item.path) > -1)

  const chooseItem = (id) => {
    return () => {
      const childList = itemObjList.filter(item => item.id === id)
      props.changeItems(childList[0]);
      history.push(childList[0].path);
    }
  }

  return (
    <>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={key[0] === undefined ? items[0].id : key[0].id}
        >
          {
            items.map(item => <Menu.Item key={item.id} onClick={chooseItem(item.id)}>{item.name}</Menu.Item>)
          }
        </Menu>
      </Header>
    </>
  )
}

const mapStateToProps = state => {
  return {
    itemObjList: state.all_path
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeItems: value => dispatch(changeItems(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);