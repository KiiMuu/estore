import { 
    combineReducers,
} from 'redux';

// reducers
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;