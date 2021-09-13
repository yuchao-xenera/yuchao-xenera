import React from "react"
class Comments extends React.Component{
    render(){
        return(            
            <div>
                评论内容
                <ul>
                    { this.props.list.length>0 ? this.props.list.map((item,index)=><li key={index}> {item.username+"-----"+item.comment}</li>):'暂无评论内容'}
                </ul>
            </div>
        )
    }
}
export default Comments;