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
    productDeleteReducer, 
    productListReducer,
    productRatingReducer,
    productSingleReducer,
    productUpdateReducer,
    productsRelatedReducer,
    searchQueryReducer,
} from './product';
import {
    uploadImgsReducer,
    removeImgReducer,
} from './cloudinary';
import {
    cartListDrawerReducer,
    cartListReducer,
    proceedCheckoutReducer,
} from './cart';

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
    productList: productListReducer,
    productSingle: productSingleReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productRating: productRatingReducer,
    productsRelated: productsRelatedReducer,
    searchQuery: searchQueryReducer,
    // * cloudinary
    uploadImgs: uploadImgsReducer,
    removeImg: removeImgReducer,
    // * cart
    cartList: cartListReducer,
    cartListDrawer: cartListDrawerReducer,
    proceedCheckout: proceedCheckoutReducer,
});

export default rootReducer;