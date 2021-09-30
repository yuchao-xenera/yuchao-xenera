import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeItems } from '../../redux/actions/top_action';
import {createBrowserHistory} from 'history';
import {Menu,Layout} from 'antd';
class Top extends Component {

	chooseItem =(id) => {
		return () => {
			let history=createBrowserHistory({
				basename:'',
				forceRefresh:true
			})
		  const {itemObjList} = this.props;
		  const childList = itemObjList.filter(item => item.id === id)
		  this.props.changeItems(childList[0]);
		  history.push(childList[0].path)
		  history.go()
		}
	  }
	render() {
		const {Header} = Layout;
		const {itemObjList} = this.props;
		const match = window.location.pathname;
		let key = itemObjList.filter(item => match.indexOf(item.path) > -1)
		return (
			<>
			<Header className="header">
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" selectedKeys={key[0] === undefined ? itemObjList[0].id : key[0].id}>
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