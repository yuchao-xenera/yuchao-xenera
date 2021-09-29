import React from "react";
import { Layout } from "antd";
import { Route } from 'react-router-dom';
import Userlist  from "../Content/Userlist/index"
import Added from "../Content/Added/index"
import Menu from "../Content/Menu/index"
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
      <Route path="/manage/userlist" component={Userlist} exact></Route>
      <Route path="/manage/added" component={Added} exact></Route>
      <Route path="/exhibit/menu" component={Menu} exact></Route>
    </Content>
  );
}
