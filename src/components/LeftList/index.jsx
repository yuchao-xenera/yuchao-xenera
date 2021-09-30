import React, { Component } from 'react'
import {Layout,Menu} from 'antd';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class LeftList extends Component {
    state={
        match:""
    }

    myClick=()=>{
        const newMath= window.location.pathname;
        this.setState({match:newMath})
    }

    render() {
        const { Sider } = Layout;
        const match = window.location.pathname;
        let key = this.props.getItems.children.filter(item => match.indexOf(item.path) > -1);
        return (
            <>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        selectedKeys={
                            key[0] === undefined ? this.props.getItems.children[0].id : key[0].id
                          }
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            this.props.getItems.children.map((item)=>{
                                return (
                                        <Menu.Item key={item.id}>
                                            <Link to={item.path} onClick={this.myClick}>
                                                {item.name}
                                            </Link>
                                        </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
      getItems: state.items
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LeftList);


