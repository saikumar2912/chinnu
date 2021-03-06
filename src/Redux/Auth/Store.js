import { combineReducers, applyMiddleware, createStore } from "redux";
import UserReducer from "./Login/Reducers";
import PostReducer from './PostReducer'
import BitReducer from './ADMIN/BitReducer'
import SkillReducer from './ADMIN/SkillReducer'
import DisplayReducer from './Login/DisplayReducer';
import verification from './ADMIN/VerificationReducer';
 import thunk from "redux-thunk";
const RootReducer = combineReducers({
  user: UserReducer,
  post:PostReducer,
  bit:BitReducer,
  skill:SkillReducer,
  display:DisplayReducer,
  verification:verification

});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(RootReducer);