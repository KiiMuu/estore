import { 
    REMOVE_IMG_FAIL,
    REMOVE_IMG_REQUEST,
    REMOVE_IMG_SUCCESS,
    UPLOAD_IMGS_FAIL,
    UPLOAD_IMGS_REQUEST, 
    UPLOAD_IMGS_RESET, 
    UPLOAD_IMGS_SUCCESS,
} from '../constants/cloudinary';

const initialUploadImgs = {};

export const uploadImgsReducer = (state = initialUploadImgs, action) => {
    switch (action.type) {
        case UPLOAD_IMGS_REQUEST:
            return {
                loading: true,
            }
        case UPLOAD_IMGS_SUCCESS:
            return {
                filesChunks: action.payload,
                success: true,
                loading: false,
            }
        case UPLOAD_IMGS_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        case UPLOAD_IMGS_RESET:
            return {}
        default:
            return state;
    }
}

const initialRemoveImg = {};

export const removeImgReducer = (state = initialRemoveImg, action) => {
    switch (action.type) {
        case REMOVE_IMG_REQUEST:
            return {
                loading: true,
            }
        case REMOVE_IMG_SUCCESS:
            return {
                success: true,
                loading: false,
            }
        case REMOVE_IMG_FAIL:
            return {
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}