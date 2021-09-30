import React from "react";
import { Layout } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import Userlist from "../Content/Userlist/index";
import Added from "../Content/Added/index";
import Menu from "../Content/Menu/index";
const { Content } = Layout;
export default function Contents() {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Switch>
        <Redirect path="/" to="/manage/userlist" exact></Redirect>
        <Redirect path="/manage" to="/manage/userlist" exact></Redirect>
        <Redirect path="/exhibit" to="/exhibit/menu" exact></Redirect>
        <Route path="/manage/userlist" component={Userlist} exact></Route>
        <Route path="/manage/added" component={Added} exact></Route>
        <Route path="/exhibit/menu" component={Menu} exact></Route>
      </Switch>
    </Content>
  );
}
