import axios from 'axios';
import { 
    REMOVE_IMG_FAIL,
    REMOVE_IMG_REQUEST,
    REMOVE_IMG_SUCCESS,
    UPLOAD_IMGS_FAIL,
    UPLOAD_IMGS_REQUEST, 
    UPLOAD_IMGS_SUCCESS,
} from "../constants/cloudinary";

export const uploadImages = (image, authtoken) => async dispatch => {
    try {
        dispatch({
            type: UPLOAD_IMGS_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
        
        const { data } = await axios.post(`${process.env.REACT_APP_API}/api/upload-images`, image, config);
    
        dispatch({
            type: UPLOAD_IMGS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: UPLOAD_IMGS_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}

export const deleteImg = (public_id, authtoken) => async dispatch => {
    try {
        dispatch({
            type: REMOVE_IMG_REQUEST,
        });

        const config = {
            headers: {
                authtoken,
            }
        }
    
        await axios.post(`${process.env.REACT_APP_API}/api/remove-image`, public_id, config);
    
        dispatch({
            type: REMOVE_IMG_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: REMOVE_IMG_FAIL,
            payload: err.response?.data.message ? err.response.data.message : err.message,
        });
    }
}