import { 
    combineReducers,
} from 'redux';

// reducers
import { userReducer } from './user';

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;