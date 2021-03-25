import { useEffect } from 'react';
import Resizer from 'react-image-file-resizer';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages, deleteImg } from '../../state/actions/cloudinary';
import useUserHook from '../../hooks/useUserHook';
import successAlert from '../layout/message/successAlert';
import errorAlert from '../layout/message/errorAlert';
import { UPLOAD_IMGS_RESET } from '../../state/constants/cloudinary';

// * styles
import {
    StyledUploadLabel,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Badge from 'antd/lib/badge';
import Avatar from 'antd/lib/avatar/avatar';
import Spin from 'antd/lib/spin';
import { LoadingOutlined } from '@ant-design/icons';

const FileUpload = ({ images, setImages }) => {

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * imgs uploader state
    const imgsUploader = useSelector(state => state.uploadImgs);
    const { success, error, loading, filesChunks } = imgsUploader;

    // * img remove state
    const removeImage = useSelector(state => state.removeImg);
    const { 
        success: removeSuccess, 
        error: removeError, 
        loading: removeLoading 
    } = removeImage;
    
    const handleUpload = e => {
        let files = e.target.files;
        
        if (files) {
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(files[i], 720, 720, 'JPEG', 100, 0, uri => {
                    dispatch(uploadImages({ image: uri }, userInfo.token));
                }, 'base64');
            }
        }
    }

    const handleRemove = id => {
        dispatch(deleteImg({ public_id: id }, userInfo.token));

        let filteredImgs = images.filter(i => i.public_id !== id);

        setImages(filteredImgs);
    }

    useEffect(() => {
        if (removeSuccess) {
            successAlert('Image has been deleted successfully', 3);
        }

        if (removeError) {
            errorAlert(removeError, 3);
        }
    }, [removeSuccess, removeError, setImages, images]);
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: UPLOAD_IMGS_RESET,
            });
            
            let uploadedFiles = images;

            uploadedFiles.push(filesChunks);

            setImages(uploadedFiles);

            successAlert('Images have been uploaded successfully', 3);
        }
        
        if (error) {
            errorAlert(error, 3);
        }
    }, [error, success, dispatch, filesChunks, setImages, images]);

    return (        
        <>
            <Space size='middle'>
                {images?.map(img => (
                    <Badge 
                        count='x' 
                        style={{ cursor: 'pointer' }}
                        size='small' 
                        key={img.public_id} 
                        onClick={() => handleRemove(img.public_id)}>
                        <Avatar 
                            src={img.url} 
                            size={64} 
                            shape='square'
                        />
                    </Badge>
                ))}
            </Space>
            {images?.length < 3 && (
                <StyledUploadLabel>
                    <Spin size='small' spinning={loading ? true : false}>
                        {removeLoading ? (
                            <><LoadingOutlined /> Removing...</>
                        ) : 'Choose Files'}
                    </Spin>
                    <input
                        type='file'
                        multiple
                        hidden
                        accept='images/*'
                        onChange={handleUpload}
                    />
                </StyledUploadLabel>
            )}
        </>
    )
}

export default FileUpload;