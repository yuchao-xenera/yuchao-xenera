import React from "react";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import Headers from "../Header";
import Left from "../Left";
import Countents from "../Content";

export const Context = React.createContext();

export default function Population() {
  const [name, setName] = React.useState("");
  let start = [];
  if (window.location.pathname.indexOf("/exhibit")) {
    start = [
      { name: "用户一览", path: "/manage/userlist" },
      { name: "用户添加", path: "/manage/added" },
    ];
  } else if (window.location.pathname.indexOf("/manage")) {
    start = [{ name: "菜单1", path: "/exhibit/menu" }];
  }
  const [header, setHeader] = React.useState(start);

  const getHeader = (list) => {
    // console.log(list);
    setHeader(list);
    return list;
  };
  const context = {
    header,
    getHeader,
  };

  return (
    <Layout style={{ height: 900 }}>
      <Context.Provider value={context}>
        <Headers />
        <Layout>
          <Left name={name} setName={setName} />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{"/" + name}</Breadcrumb.Item>
            </Breadcrumb>
            <Countents />
          </Layout>
        </Layout>
      </Context.Provider>
    </Layout>
  );
}
