import axios from 'axios'
import { PostSuccess } from '../ADMIN/BitAction';
import {useSelector} from 'react-redux';
export const Display= () => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:4000/post/getpost',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(DisplaySuccess(res.data))
              
            })
    }
  }
  
  
  export const like= (id,user_id) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:4000/post/like',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:4000/post/getpost',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(DisplaySuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }

  export const dislike=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:4000/post/dislike',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:4000/post/getpost',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(DisplaySuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  export const irrevelant=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:4000/post/irrevelant',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:4000/post/getpost',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(DisplaySuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  export const userposts= (user_id) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:4000/post/user_idposts',{user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(DisplaySuccess(res.data))
              
            })
    }
  }

  export const DeletePost =(id,user_id)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.delete(`http://localhost:4000/post/deletepost/${id}`,{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:4000/post/user_idposts',{user_id:user_id},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(postdetails(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }
  export const postdetails = (e) => {
    return (dispatch) => {
      console.log("new",e);
      dispatch(DeleteSuccess(e))
      }
    }
  export const DisplaySuccess = skill => {
  
    return {
      type: "DISPLAY_POST_SUCCESS",
      payload: skill
    }
  }
  export const DeleteSuccess = skill => {
  
    return {
      type: "DELETE_POST_SUCCESS",
      payload: skill
    }
  }
  
  
  export const DisplayFailure = () => {
    return {
      type: "DISPLAY_POST_FAILED",
      
    }
  }
  