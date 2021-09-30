import React, { useState } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import Revise from "../Userlist/Revise/index";

export default function Userlist() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  //修改用户
  const [singleUser, setsingleUser] = useState({});

  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
    },
    {
      title: "工号",
      dataIndex: "employeeNumber",
    },
    {
      title: "邮箱",
      dataIndex: "userEmail",
    },
    {
      title: "手机号",
      dataIndex: "telephone",
    },
  ];
  //修改用户
  const revise = () => {
    // console.log(data);
    let single = [];
    single = data.filter((item) => item.key === selectedRowKeys[0]);
    setsingleUser(single[0]);
  };

  const pagination = {
    pageSize: 6,
  };
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(() => selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const loadingData = () => {
    axios
      .post(`http://10.113.8.169:8090/api/user/show_user_list`)
      .then((response) => {
        // console.log(response);
        const { result } = response.data;
        result.forEach((item, index) => {
          item["key"] = index;
        });
        setData(result);
      });
  };

  const overload=()=>{
    loadingData();
  }

  React.useEffect(() => {
    loadingData();
  }, []);

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button type="primary" onClick={revise}>
          修改
        </Button>
      </div>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={pagination}
      />
      <Revise singleUser={singleUser} overload={overload}/>
    </div>
  );
}
