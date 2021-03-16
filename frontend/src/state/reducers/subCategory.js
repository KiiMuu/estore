import {
    SUB_CATEGORY_LIST_REQUEST,
    SUB_CATEGORY_LIST_SUCCESS,
    SUB_CATEGORY_LIST_FAIL,
    SUB_CATEGORY_SINGLE_REQUEST,
    SUB_CATEGORY_SINGLE_SUCCESS,
    SUB_CATEGORY_SINGLE_FAIL,
    SUB_CATEGORY_CREATE_REQUEST,
    SUB_CATEGORY_CREATE_SUCCESS,
    SUB_CATEGORY_CREATE_FAIL,
    SUB_CATEGORY_CREATE_RESET,
    SUB_CATEGORY_UPDATE_REQUEST,
    SUB_CATEGORY_UPDATE_SUCCESS,
    SUB_CATEGORY_UPDATE_FAIL,
    SUB_CATEGORY_UPDATE_RESET,
    SUB_CATEGORY_DELETE_REQUEST,
    SUB_CATEGORY_DELETE_SUCCESS,
    SUB_CATEGORY_DELETE_FAIL,
} from '../constants/subCategory';

const initialSubCategoriesList = {
    subCategories: []
}

export const subCategoryListReducer = (state = initialSubCategoriesList, action) => {
    switch (action.type) {
        case SUB_CATEGORY_LIST_REQUEST:
            return {
                loading: true,
            }
        case SUB_CATEGORY_LIST_SUCCESS:
            return {
                subCategories: action.payload,
                loading: false,
                success: true,
            }
        case SUB_CATEGORY_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialSubCategorySingle = {}

export const subCategorySingleReducer = (state = initialSubCategorySingle, action) => {
    switch (action.type) {
        case SUB_CATEGORY_SINGLE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUB_CATEGORY_SINGLE_SUCCESS:
            return {
                subCategory: action.payload,
                loading: false,
            }
        case SUB_CATEGORY_SINGLE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialSubCategoryCreate = {}

export const subCategoryCreateReducer = (state = initialSubCategoryCreate, action) => {
    switch (action.type) {
        case SUB_CATEGORY_CREATE_REQUEST:
            return {
                loading: true,
            }
        case SUB_CATEGORY_CREATE_SUCCESS:
            return {
                subCategory: action.payload,
                success: true,
                loading: false,
            }
        case SUB_CATEGORY_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case SUB_CATEGORY_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

const initialSubCategoryUpdate = {
    subCategory: {}
}

export const subCategoryUpdateReducer = (state = initialSubCategoryUpdate, action) => {
    switch (action.type) {
        case SUB_CATEGORY_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case SUB_CATEGORY_UPDATE_SUCCESS:
            return {
                updatedSubCategory: action.payload,
                success: true,
                loading: false,
            }
        case SUB_CATEGORY_UPDATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case SUB_CATEGORY_UPDATE_RESET:
            return {
                subCategory: {},
            }
        default:
            return state;
    }
}

const initialSubCategoryDelete = {}

export const subCategoryDeleteReducer = (state = initialSubCategoryDelete, action) => {
    switch (action.type) {
        case SUB_CATEGORY_DELETE_REQUEST:
            return {
                loading: true,
            }
        case SUB_CATEGORY_DELETE_SUCCESS:
            return {
                removedSubCategory: action.payload,
                success: true,
                loading: false,
            }
        case SUB_CATEGORY_DELETE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}