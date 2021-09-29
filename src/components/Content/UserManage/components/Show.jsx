import React, { Component} from 'react'
import {Breadcrumb,Table ,Button  } from 'antd';
import axios from 'axios'
import Update from './Update'

const columns = [
  {
    title: 'name',
    dataIndex: 'userName',
    //render: (text) => <a>{text}</a>,
  },
  {
    title: '工号',
    dataIndex: 'employeeNumber',
  },
  {
    title: '手机号',
    dataIndex: 'telephone',
  },
  {
    title: '邮箱',
    dataIndex: 'userEmail',
  },
];
class Show extends Component {
  state = {
    selectedRows: [], // Check here to configure the default column
    data:[],
    updateObj:{}, 
    loading:false   
  };  
  onSelectChange = (_, selectedRows) => {
    this.setState({ selectedRows });
    console.log(selectedRows);
  };
  updateInfo=()=>{
    const count=this.state.selectedRows.length
    if(count < 1){
      alert('必须选择一个对象进行修改')
    }else if(count > 1){
      alert('只能选择一个对象进行修改')
    }else{      
      this.setState({updateObj:this.state.selectedRows[0]})
    }
  }
  saveInfo = ()=>{
    this.setState({loading:true}) 
    axios({
      url:"http://localhost:3000/api/user/show_user_list",
      method:'POST'
    }).then(
          response=>{
            const {result}=response.data
            this.setState({data:result,loading:false}) 
          },
          error=>{
            console.log('失败了',error)
            this.setState({loading:false}) 
          }
      )
      this.setState({updateObj:{userName:'',employeeNumber:'',telephone:'',userEmail:''}})
  }

  componentDidMount(){
    this.setState({loading:true})
    axios({
      url:"http://localhost:3000/api/user/show_user_list",
      method:'POST'
    }).then(
          response=>{
            const {result}=response.data
            for(let i = 0; i < result.length; i++)
            {
              result[i].key=i
            }
            this.setState({data:result,loading:false}) 
          },
          error=>{
            console.log('失败了',error)
            this.setState({loading:false}) 
          }
      )
  }

  render() {
    const rowSelection = {
      onChange: this.onSelectChange,
    }; 
    const {data,loading,updateObj}=this.state
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>/用户一览</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              <Button type="primary" style={{float:'right'}} onClick={this.updateInfo}>修改</Button>
              <Table 　rowKey='userId' bordered loading={loading} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 300 }} />
            </div>
            <Update updateObj={updateObj} saveInfo={this.saveInfo}/>
        </div>
    )
  }
}
export default  Show
