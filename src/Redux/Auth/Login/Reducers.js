const initial={
  user:null
}

const reducer=(state=initial,action)=>{
  switch(action.type){
    case 'LOGIN':
      return{
             ...state,
             user:action.payload
      }
      case 'LOGOUT':
        return null
        
      default:
        return state
  }
}

export default reducer