import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_SINGLE_REQUEST,
    CATEGORY_SINGLE_SUCCESS,
    CATEGORY_SINGLE_FAIL,
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_RESET,
    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_UPDATE_RESET,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    SUBS_OF_PARENT_REQUEST,
    SUBS_OF_PARENT_SUCCESS,
    SUBS_OF_PARENT_FAIL,
} from '../constants/category';

const initialCategoriesList = {
    categories: []
}

export const categoryListReducer = (state = initialCategoriesList, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return {
                loading: true,
            }
        case CATEGORY_LIST_SUCCESS:
            return {
                categories: action.payload,
                loading: false,
                success: true,
            }
        case CATEGORY_LIST_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialCategorySingle = {}

export const categorySingleReducer = (state = initialCategorySingle, action) => {
    switch (action.type) {
        case CATEGORY_SINGLE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATEGORY_SINGLE_SUCCESS:
            return {
                category: action.payload,
                loading: false,
            }
        case CATEGORY_SINGLE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialCategoryCreate = {}

export const categoryCreateReducer = (state = initialCategoryCreate, action) => {
    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return {
                loading: true,
            }
        case CATEGORY_CREATE_SUCCESS:
            return {
                category: action.payload,
                success: true,
                loading: false,
            }
        case CATEGORY_CREATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case CATEGORY_CREATE_RESET:
            return {}
        default:
            return state;
    }
}

const initialCategoryUpdate = {
    category: {}
}

export const categoryUpdateReducer = (state = initialCategoryUpdate, action) => {
    switch (action.type) {
        case CATEGORY_UPDATE_REQUEST:
            return {
                loading: true,
            }
        case CATEGORY_UPDATE_SUCCESS:
            return {
                updatedCategory: action.payload,
                success: true,
                loading: false,
            }
        case CATEGORY_UPDATE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case CATEGORY_UPDATE_RESET:
            return {
                category: {},
            }
        default:
            return state;
    }
}

const initialCategoryDelete = {}

export const categoryDeleteReducer = (state = initialCategoryDelete, action) => {
    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return {
                loading: true,
            }
        case CATEGORY_DELETE_SUCCESS:
            return {
                removedCategory: action.payload,
                success: true,
                loading: false,
            }
        case CATEGORY_DELETE_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

const initialSubsOfParent = {
    subs: []
}

export const subsOfParentReducer = (state = initialSubsOfParent, action) => {
    switch (action.type) {
        case SUBS_OF_PARENT_REQUEST:
            return {
                loading: true,
            }
        case SUBS_OF_PARENT_SUCCESS:
            return {
                subs: action.payload,
                success: true,
                loading: false,
            }
        case SUBS_OF_PARENT_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}