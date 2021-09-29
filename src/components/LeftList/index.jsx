import React, { Component } from 'react'
import {Layout,Menu} from 'antd';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class LeftList extends Component {
    render() {
        const { Sider } = Layout;
        return (
            <>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            this.props.getItems.children.map((item)=>{
                                return (
                                        <Menu.Item key={item.id}>
                                            <Link to={item.path}>
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


