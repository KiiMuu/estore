import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteCategory, 
    getCategories,
    updateCategory,
} from '../../../state/actions/category';

// * styles
import {
    StyledActions,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Popover from 'antd/lib/popover';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import {
    DeleteOutlined, 
    LoadingOutlined,
} from '@ant-design/icons';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import { CATEGORY_UPDATE_RESET } from '../../../state/constants/category';

const SingleCategory = ({ category }) => {
    const [name, setName] = useState(category.name);

    const dispatch = useDispatch();

    // * user state
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    // * category state
    const categoryUpdating = useSelector(state => state.categoryUpdate);
    const {
        updatedCategory,
        error: updateError,
        success: updateSuccess,
        loading: updateLoading,
    } = categoryUpdating;

    const categoryDeletion = useSelector(state => state.categoryDelete);
    const { 
        removedCategory,
        error, 
        success,
    } = categoryDeletion;

    const handleUpdateCategory = slug => {
        dispatch(updateCategory(slug, { name }, userInfo.token));
    }

    const handleDeleteCategory = slug => {
        dispatch(deleteCategory(slug, userInfo.token));
    }

    useEffect(() => {
        if (updateError) {
            errorAlert(updateError);
        }

        if (updateSuccess && updatedCategory.name === name) {
            dispatch({
                type: CATEGORY_UPDATE_RESET,
            });

            successAlert(`"${category?.name}" has been updated to "${updatedCategory?.name}"`);

            dispatch(getCategories());
        }
    }, [updateError, updateSuccess, category, updatedCategory, name, dispatch]);

    useEffect(() => {
        if (error) {
            errorAlert(error);
        }

        if (success && removedCategory.name === category.name) {
            successAlert(`"${removedCategory.name}" has been deleted`);
            dispatch(getCategories());
        }
    }, [error, success, removedCategory?.name, category, dispatch]);

    const categoryActions = (
        <StyledActions>
            <form>
                <Space>
                    <input 
                        type='text' 
                        placeholder='Type a new name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button 
                        size='small' 
                        type='primary'
                        onClick={() => handleUpdateCategory(category.slug)}>
                        {updateLoading ? <LoadingOutlined /> : 'Update'}
                    </Button>
                </Space>
            </form>
            <Divider />
            <Button 
                size='small' 
                type='danger' 
                onClick={() => handleDeleteCategory(category.slug)}>
                <DeleteOutlined />
            </Button>
        </StyledActions>
    );

    return (
        <Popover 
            content={categoryActions} 
            title='Edit or delete a category' 
            trigger='click'
            key={category._id}>
            <Button type='primary'>
                {category.name}
            </Button>
        </Popover>
    )
}

export default SingleCategory;