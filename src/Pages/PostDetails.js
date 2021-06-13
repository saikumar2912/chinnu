import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import SimpleModal from '../components/Pop'




import Reports from './Reports';
const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
const post = useSelector(state => state.display.display)
const report = useSelector(state => state)
console.log(report.display)

    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state


    return (
        <>
        <div class="app-container post-con">
            <div className="admin-cards">
                <span></span>
                <div class="card-body">
        {post.map(a=><>{a._id===e._id?<>
        
            <div>
        <div>
        <div className="card-head">
       
            <img src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" alt="react" class="left" />
            <div class="card-head-name">
            <h1>{a.skill.Title}</h1>
            <div class="name">
                <h2>{a.user.user_name}</h2>
            </div>
            </div>
        </div>
        
        <div class="card-body">

           

            <p> Earlier, the developers write more than thousands of lines of code for developing a single page application. These applications follow the traditional DOM structure, and making changes in them was a very challenging task. If any mistake found, it manually searches the entire application and update accordingly. The component-based approach was introduced to overcome an issue. In this approach, the entire application is divided into a small logical group of code, which is known as components.

A Component is considered as the core building blocks of a React application. It makes the task of building UIs much easier. Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application.

Every React component have their own structure, methods as well as APIs. They can be reusable as per your need. For better understanding, consider the entire UI as a tree. Here, the root is the starting component, and each of the other pieces becomes branches, which are further divided into sub-branches.
                
                </p>
                
        </div>
        <div className="card-foot">
            <div className="card-foot-in">
<ThumbUpAltIcon className={a.like.includes(user._id)?"like_icon":"like_icon"} onClick={()=>{dispatch(like(a._id,user._id));}}  
       size={100}/> {a.like.length}    
       
       <ThumbDownIcon className={a.dislike.includes(user._id)?"dislike_icon":"dislike_icon"} onClick={()=>{dispatch(dislike(a._id,user._id))}} /> {a.dislike.length}
       </div>
       <div className="warning">
       <SimpleModal postid={a._id} count={a.reports.length}/>
            </div>
           <Reports reportid={a._id}/> 
        </div>
      


    </div>
        </div>
        </>:<></>} </>)}
        </div>
        </div>
        <div class="reports">
            
            <div class="admin-cards">
                <span></span>
                <div class="card-body">
                <h2>Reports</h2>
                <div class="report-body">
                    <h6>Bindhu</h6>
                    <p>I like the post</p>
                    <div class="d-flex">
                    <ThumbUpAltIcon className="like-icon"   
       size={100}/> 1    
       <div class="icon">
       <ThumbDownIcon className="dislike_icon" /> 0
</div></div>
                </div>
                <div class="report-body">
                    <h6>Bindhu</h6>
                    <p>I like the post</p>
                <div class="d-flex">    
                    <ThumbUpAltIcon className="like-icon"   
       size={100}/> 1    
       <div class="icon">
       <ThumbDownIcon className="dislike_icon" /> 0
</div>
</div>
                </div>
                </div>
                
            </div>
        </div>
        </div>
        </>
        
        
    )
    }

export default PostDetails