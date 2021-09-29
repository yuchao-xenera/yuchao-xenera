import React, { Component } from 'react'
import { Table} from 'antd';
import axios from 'axios'
import UserForm from '../UserForm'

export default class UserList extends Component {

	state = {
		selectedRowKeys: [], // Check here to configure the default column
		loading: false,
		userInfo:[],
		editUser:[]
	  };
	
	  onSelectChange = selectedRowKeys => {
		this.setState({ selectedRowKeys });
	  };
	  userEdit=(record)=>{
			return ()=>{
				this.setState({editUser:record})
			}
	  }

	  componentDidMount(){
		const data1 = {};
		axios.post('http://10.113.8.169:8090/api/user/show_user_list',data1).then(
			response => {
				this.setState({userInfo:response.data.result})
			},
			error => {console.log('失败了',error)}
		)
	  }

	render() {
		const {selectedRowKeys } = this.state;
		const rowSelection = {
		  selectedRowKeys,
		  onChange: this.onSelectChange,
		};
		const columns = [
			{
			  title: 'Name',
			  dataIndex: 'userName',
			},
			{
			  title: '工号',
			  dataIndex: 'employeeNumber',
			},
			{
			  title: '邮箱',
			  dataIndex: 'userEmail',
			},
			{
				title: '操作',
				valueType: 'option',
				width: 200,
				render: (text, record, _, action) => [
				  <a
					key={record.userId}
					onClick={this.userEdit(record)}
				  >
					修改
				  </a>,
				],
			  },
		  ];
		return (
			<>
				<Table 
					rowSelection={rowSelection} 
					columns={columns} 
					dataSource={this.state.userInfo} 
				/>
				<UserForm userEdit={this.state.editUser}/>
			</>
		)
	}
}
