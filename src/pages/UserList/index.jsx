import React, { Component } from 'react'
import { Button ,Table,Breadcrumb} from 'antd';
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
	  userEdit=()=>{
			const record=this.state.userInfo.filter(item=>item.userId===this.state.selectedRowKeys[0])
			this.setState({editUser:record[0]})
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

	  refreshMy=()=>{
			const data1 = {};
			axios.post('http://10.113.8.169:8090/api/user/show_user_list',data1).then(
				response => {
					const newEdit=response.data.result.filter(item => item.userId === this.state.editUser.userId)
					this.setState({userInfo:response.data.result,editUser:newEdit})
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
				title: '手机号',
				dataIndex: 'telephone',
			  },
			// {
			// 	title: '操作',
			// 	valueType: 'option',
			// 	width: 200,
			// 	render: (text, record, _, action) => [
			// 	  <a
			// 		key={record.userId}
			// 		onClick={this.userEdit(record)}
			// 	  >
			// 		修改
			// 	  </a>,
			// 	],
			//   },
		  ];
		return (
			<>
				<Breadcrumb style={{ margin: '16px 0',float:'left'}}>
                    <Breadcrumb.Item>/用户一览</Breadcrumb.Item>
                </Breadcrumb>
				<Button type="primary" onClick={this.userEdit} style={{float:'right',marginBottom:'10px',marginTop: '12px'}}>修改</Button>
				<Table 
					rowKey="userId"
					rowSelection={{type:'radio',...rowSelection}} 
					columns={columns} 
					dataSource={this.state.userInfo} 
				/>
				<UserForm userEdit={this.state.editUser} refreshMy={this.refreshMy}/>
			</>
		)
	}
}
