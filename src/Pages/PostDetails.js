import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import { Avatar } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';


import './PostDetails.css'
const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
    console.log(user)
    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state
console.log(e)
    return (
        <div class="post-container">
        <div class="post_card">
        <div class="thumbnail">
            <img src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png" alt="react" class="left" />
            
        </div>
        
        <div class="right">
            <h1>React</h1>
            <div class="author">
                <h2>Bindhu</h2>
            </div>
            <div class="seperator"></div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum urna sit amet nisl porta efficitur. Praesent facilisis tellus at suscipit pulvinar. Nunc mi velit, ullamcorper in justo quis, vulputate ultrices justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ultrices erat magna, sit amet placerat nisi dictum ut. Mauris quam eros, vulputate ut urna eu, convallis interdum urna. Suspendisse sit amet tellus et enim eleifend varius. Maecenas eu venenatis eros, et mollis odio. Ut faucibus a massa a tempor. Sed pretium, leo vel fermentum mollis, lectus magna semper turpis, at maximus arcu nunc nec odio. Suspendisse porta ut mi at ultricies. Nulla cursus quam magna, et suscipit odio laoreet in.

                Donec et euismod purus. Sed in cursus nibh, sit amet dapibus elit. Phasellus dapibus, erat at pretium rutrum, mi libero sollicitudin ligula, elementum tempus dui augue sed elit. Morbi quis pretium est. Pellentesque tempor fringilla erat, ac molestie augue. Fusce suscipit nunc sit amet nulla eleifend, eget laoreet erat dignissim. Aliquam ipsum mi, malesuada non est ac, mattis auctor ipsum. Vestibulum accumsan magna vitae rutrum aliquam. Cras sit amet tincidunt purus. Nunc luctus sem at condimentum dictum. Vestibulum ornare commodo leo, nec gravida elit pellentesque dictum.
                
                </p>
                
        </div>
        <ul>
            
<li><ThumbUpAltIcon  
       size={100}/></li><li class="down-icon"><ThumbDownIcon /></li>
       <li><WarningIcon size={100}/></li>
            
        </ul>

    </div>
        </div>
        
        
    )
    }

export default PostDetails