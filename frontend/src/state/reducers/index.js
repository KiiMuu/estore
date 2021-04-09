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
    addDeliveryAddressReducer,
    cartListDrawerReducer,
    cartListReducer,
    deleteUserCartReducer,
    proceedCheckoutReducer,
    userCartReducer,
} from './cart';
import { 
    couponListReducer,
    couponCreateReducer,
    couponDeleteReducer,
    couponApplyReducer,
    isCouponAppliedReducer,
} from './coupon';
import {
    stripePaymentIntentReducer,
} from './stripe';
import {
    cashOrderCreateReducer,
    orderCreateReducer, 
    userOrdersListReducer,
} from './order';
import { 
    orderListReducer, 
    orderUpdateReducer, 
} from './admin';
import { 
    wishListReducer,
    addToWishListReducer,
    deleteFromWishlistReducer,
} from './wishlist';
import { isCashOnDeliveryReducer } from './COD';

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
    userCart: userCartReducer,
    deleteUserCart: deleteUserCartReducer,
    addDeliveryAddress: addDeliveryAddressReducer,
    // * coupon
    couponList: couponListReducer,
    couponCreate: couponCreateReducer,
    couponDelete: couponDeleteReducer,
    couponApply: couponApplyReducer,
    isCouponApplied: isCouponAppliedReducer,
    // * stripe
    stripePaymentIntent: stripePaymentIntentReducer,
    // * order
    orderCreate: orderCreateReducer,
    userOrdersList: userOrdersListReducer,
    cashOrderCreate: cashOrderCreateReducer,
    // * admin
    orderList: orderListReducer,
    orderUpdate: orderUpdateReducer,
    // * wishlist
    wishList: wishListReducer,
    addToWishList: addToWishListReducer,
    deleteFromWishlist: deleteFromWishlistReducer,
    // * COD
    isCashOnDelivery: isCashOnDeliveryReducer,
});

export default rootReducer;