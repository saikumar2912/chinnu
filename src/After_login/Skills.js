import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { follow } from '../Redux/Auth/ADMIN/SkillAction';
import './Skills.css'
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/Auth/PostAction';

export default function RecipeReviewCard() {
  const dispatch=useDispatch();

  const user = useSelector(state => state.user.user)
  console.log(user)

      const [Data,setData] = useState([]);
    
    
    useEffect(()=>{
            
      Axios.post('http://localhost:4000/skill/skills')
      .then((res)=>setData(res.data))
       
      },[])
      console.log(Data)


      
      
       
   
  return (

    <>   
    <div class="card-class">
    <div class="row">
    {Data.map((e)=> <>
              {e.Title.length > 0 ?
              <div class="col-xl-4 col-lg-4 col-4">
              <Card className='skill__card'>
              <div className="homepage__card__header" >


              <Avatar alt={"title"} src={e.photo} className="homepage__card__header__avatar" />
              <div className="skill_name">
              <h4> {e.Title}</h4>  

              </div>
              </div>

              <div className="user_name" >
               <h3><strong> Description:</strong> </h3>

               <h4 className="des">{e.Description} </h4> 
              </div>
              <div className="btn-div">
              {user.role==="user"?<div>
                <button className="btn btn-primary" onClick={()=>dispatch(follow(e._id,user._id))}> 
                {e.followers.includes(user._id)? <> unfollow</>:<>follow</> }
</button>
</div>:

<div>
        <Link to={{pathname:"/navbar/view",
                  state:e._id}} onClick={()=>{}} className="navbar-lin">add bit</Link>
        <button className="bttn" onClick={()=>{dispatch(Delete(e._id))}}> delete</button>

</div>
}

               


              </div>

              </Card>
              </div>
              
          
         
          



         
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </div>
    </div>
    </>
  );
  
}