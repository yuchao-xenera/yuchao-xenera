import React from "react";
import { Layout, Menu } from "antd";
import { Context } from "../Population";
import { Link, useRouteMatch } from "react-router-dom";
const { Sider } = Layout;
export default function Left(props) {
  
  const context = React.useContext(Context);

  let match = useRouteMatch(window.location.pathname);
  let key = context.header.filter(item =>match.path.indexOf(item.path)>-1)

  const { setName } = props;

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={key[0] === undefined ? context.header[0].id : key[0].id}
        style={{ height: "100%", borderRight: 0 }}
      >
        {context.header.map((item) => {
          return (
            <Menu.Item key={item.id} onClick={() => setName(item.name)}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
