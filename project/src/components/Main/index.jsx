import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux';

import { Route, Switch, Redirect } from 'react-router-dom';

import UserList from '../UserList';
import AddUser from '../AddUser';
import Test3 from '../testComp3.jsx';

const { Content } = Layout;

function Main(props) {
  const { getAllPath, getNowPath } = props;
  let nameList = [];
  nameList = getPathName(getAllPath, getNowPath);
  return (
    <>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {
            nameList.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
          }
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Switch>
            <Redirect path="/" to="/user/userList" exact></Redirect>
            <Redirect path="/user" to="/user/userList" exact></Redirect>
            <Redirect path="/data" to="/data/menu1" exact></Redirect>
            <Route path="/user/userList" component={UserList} exact></Route>
            <Route path="/user/addUser" component={AddUser} exact></Route>
            <Route path="/data/menu1" component={Test3} exact></Route>
          </Switch>
        </Content>
      </Layout>

    </>
  )
}

function getPathName(allPath, nowPath) {
  let arr = [];
  let nowPathArray = nowPath.split('/');
  nowPathArray.shift();
  let allPathArray = allPath;
  for (let path of nowPathArray) {
    allPathArray = allPathArray.filter(item => item.path.indexOf(path) > -1);
    arr.push(allPathArray[0].name);
    allPathArray = allPathArray[0].children;
  }
  return arr
}

const mapStateToProps = state => {
  return {
    getAllPath: state.all_path,
    getNowPath: state.now_url_path
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);