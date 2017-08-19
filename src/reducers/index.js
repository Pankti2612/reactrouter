import { combineReducers } from 'redux';
import PostReducer form './reducerPost';

const rootReducer = combineReducers({
  posts : PostReducer
});

export default rootReducer;
