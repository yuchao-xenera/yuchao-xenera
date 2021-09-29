import React from "react";
import { Layout, Menu } from "antd";
import { Context } from "../Population";
import { Link } from "react-router-dom";
const { Sider } = Layout;
export default function Left(props) {
  
  const context = React.useContext(Context);

  const { setName } = props;

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[""]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {context.header.map((item, index) => {
          return (
            <Menu.Item key={index} onClick={() => setName(item.name)}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
