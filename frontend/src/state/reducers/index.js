import { 
    combineReducers,
} from 'redux';

// reducers
import { userReducer } from './user';
import { 
    categoryListReducer,
    categorySingleReducer,
    categoryCreateReducer,
    categoryUpdateReducer,
    categoryDeleteReducer,
} from './category';

const rootReducer = combineReducers({
    user: userReducer,
    categoryList: categoryListReducer,
    categorySingle: categorySingleReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
});

export default rootReducer;