import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Context } from "../Population";

const { Header } = Layout;

export default function Headers() {
  const context = useContext(Context);
  let list = [
    {
      id:"1",
      name: "用户管理",
      path: "/manage",
      children: [{ id:'1-1',name: "用户一览",path:"/manage/userlist" }, { id:'1-2',name: "用户添加",path:"/manage/added" }],
    },
    { id:"2",name: "数据展示", path: "/exhibit", children: [{ id:"2-1",name: "菜单1",path:"/exhibit/menu" }] },
  ];


  const clickSwitch = (current) => {
    const index = parseInt(current.key);
    context.getHeader(list[index].children);
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {list.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              onClick={(current) => {
                clickSwitch(current);
              }}
            >
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}
