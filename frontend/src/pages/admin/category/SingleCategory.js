import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteCategory, 
    updateCategory,
} from '../../../state/actions/category';
import useUserHook from '../../../hooks/useUserHook';

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

const SingleCategory = ({ category }) => {
    const [name, setName] = useState(category.name);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * category state
    const categoryUpdating = useSelector(state => state.categoryUpdate);
    const { loading: updateLoading } = categoryUpdating;

    const categoryDeletion = useSelector(state => state.categoryDelete);
    const { loading: deletionLoading } = categoryDeletion;

    const handleUpdateCategory = slug => {
        dispatch(updateCategory(slug, { name }, userInfo.token));
    }

    const handleDeleteCategory = slug => {
        dispatch(deleteCategory(slug, userInfo.token));
    }

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
                onClick={() => handleDeleteCategory(category.slug)}
                loading={deletionLoading ? true : false}>
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