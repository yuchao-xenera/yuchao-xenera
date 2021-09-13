import React from "react"
import Comments from './Comments'
import './Comment.css'
class Comment extends React.Component{
    state={
        username:'',
        comment:'',
        list:[]
    }
    render(){
        const {username,comment}=this.state
        return(
            <div>
                <div className="comment">
                    评论者
                    <input type="text" style={{width:'280px',height:'30px'}} value={username} onChange={this.saveInfo('username')}/>
                    评论语
                    <textarea name="" id="" cols="39" rows="10" value={comment} onChange={this.saveInfo('comment')}></textarea>
                    <button onClick={this.addComment}>发表评论</button>
                    <br></br>
                </div>
                <div>                    
                    <Comments list={this.state.list}/>
                </div>
            </div>
        )
    }
    saveInfo = (type)=>{
        return (event)=>{
            this.setState({[type]:event.target.value})
        }
    }
    addComment=()=>{
        const {username,comment,list}=this.state
        const str={
            username:username,
            comment:comment
        }
        console.log(str)        
        list.push(str)
        this.setState({
            username:'',
            comment:'',
            list:list})
        console.log(this.state.list)
    }
}
export default Comment;