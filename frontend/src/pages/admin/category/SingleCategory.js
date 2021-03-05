import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteCategory, getCategories,
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
} from '@ant-design/icons';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';

const SingleCategory = ({ category }) => {
    const dispatch = useDispatch();

    // * user state
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    // * category state
    const categoryDeletion = useSelector(state => state.categoryDelete);
    const { 
        removedCategory,
        error, 
        success,
    } = categoryDeletion;

    const handleDeleteCategory = slug => {
        dispatch(deleteCategory(slug, userInfo.token));
    }

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
                        // value={category.name}
                    />
                    <Button size='small' type='primary'>Update</Button>
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