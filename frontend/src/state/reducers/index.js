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
    subsOfParentReducer,
} from './category';
import { 
    subCategoryListReducer,
    subCategorySingleReducer,
    subCategoryCreateReducer,
    subCategoryUpdateReducer,
    subCategoryDeleteReducer,
} from './subCategory';
import {
    productCreateReducer,
} from './product';

const rootReducer = combineReducers({
    // * user
    user: userReducer,
    // * category
    categoryList: categoryListReducer,
    categorySingle: categorySingleReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
    subsOfParent: subsOfParentReducer,
    // * sub category
    subCategoryList: subCategoryListReducer,
    subCategorySingle: subCategorySingleReducer,
    subCategoryCreate: subCategoryCreateReducer,
    subCategoryUpdate: subCategoryUpdateReducer,
    subCategoryDelete: subCategoryDeleteReducer,
    // * product
    productCreate: productCreateReducer,
});

export default rootReducer;