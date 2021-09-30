import React from 'react'
import { connect } from 'react-redux';
import { sendPath } from '../../redux/actions/main_action';

function Menu1(props) {
  const [path] = React.useState(window.location.pathname);
  React.useEffect(() => {
    props.sendPath(path)
  })
  return (
    <div>
      <p>我是组件菜单1</p>
      <p>{path}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendPath: value => dispatch(sendPath(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu1)