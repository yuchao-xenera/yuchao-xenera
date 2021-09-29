import React, { useState, useCallback } from "react";
import { Table, Modal, Button } from "antd";
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
  const changeSingleUser = useCallback((code) => setsingleUser(code), []);
  console.log(singleUser);
  // const changeSingleUser = () => {
  //   // axios.post(`http://10.113.8.169:8090/api/user/changeInfo`).then(
  //   //   response =>{
  //   //     console.log(response);
  //   //   },
  //   //   (error) => {
  //   //     console.log(error);
  //   //   }
  //   // )
  //   console.log(singleUser);
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //     setConfirmLoading(false);
  //   }, 500);
  // };

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
    axios.post(`http://10.113.8.169:8090/api/user/show_user_list`).then(
      (response) => {
        // console.log(response);
        const { result } = response.data;
        result.forEach((item) => {
          item["key"] = item.userId;
        });
        setData(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

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
        <Button type="primary">修改</Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={pagination}
      />
      <Revise singleUser={singleUser} changeSingleUser={changeSingleUser} />
    </div>
  );
}
