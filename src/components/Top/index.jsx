import React, { Component } from 'react'
import {connect} from 'react-redux'
import { changeItems } from '../../redux/actions/top_action';
import {Menu,Layout} from 'antd';
class Top extends Component {
	chooseItem =(id) => {
		return () => {
			
		  const {itemObjList} = this.props;
		  const childList = itemObjList.filter(item => item.id === id)
		  console.log(childList[0]);
		  this.props.changeItems(childList[0]);
		}
	  }
	render() {
		const {Header} = Layout;
		const {itemObjList} = this.props;
		return (
			<>
			<Header className="header">
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
					{
            		itemObjList.map(item => <Menu.Item key={item.id} onClick={this.chooseItem(item.id)}>{item.name}</Menu.Item>)
         			}
				</Menu>
			</Header>
			</>
		)
	}
}

function mapState(state){
	return {
			itemObjList: state.all_path
		}
}

function mapFunction(dispatch) {
	return {changeItems: value => dispatch(changeItems(value))}
}

export default connect(mapState,mapFunction)(Top);