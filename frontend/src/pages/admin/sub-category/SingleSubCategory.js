import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteSubCategory, 
    updateSubCategory,
} from '../../../state/actions/subCategory';
import useUserHook from '../../../hooks/useUserHook';

// * styles
import {
    StyledActions,
    StyledUpdateSelect,
    ParentSubCat,
} from '../category/styles';

// * @antd
import Space from 'antd/lib/space';
import Popover from 'antd/lib/popover';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import Select from 'antd/lib/select';
import {
    DeleteOutlined, 
    LoadingOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const SingleSubCategory = ({ subCategory, parent }) => {
    const [name, setName] = useState(subCategory.name);
    const [parentCategory, setParentCategory] = useState(parent);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * category state
    const subCategoryUpdating = useSelector(state => state.subCategoryUpdate);
    const { loading: updateLoading } = subCategoryUpdating;

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { categories } = catsList;

    const subCategoryDeletion = useSelector(state => state.subCategoryDelete);
    const { loading: deletionLoading } = subCategoryDeletion;

    const handleUpdateSubCategory = slug => {
        dispatch(updateSubCategory(slug, { name, parent: parentCategory }, userInfo.token));
    }

    const handleDeleteCategory = slug => {
        dispatch(deleteSubCategory(slug, userInfo.token));
    }

    const subCategoryActions = (
        <StyledActions>
            <form>
                <Space direction='vertical'>
                    <input 
                        type='text' 
                        placeholder='Type a new name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <StyledUpdateSelect
                        labelInValue
                        size='small'
                        defaultValue={{ value: parentCategory }}
                        onChange={e => setParentCategory(e.value)}
                    >
                        {categories?.length > 0 && categories.map(category => (
                            <Option 
                                value={category._id} 
                                key={category._id}
                            >{category.name}</Option>
                        ))}
                    </StyledUpdateSelect>
                    <Button 
                        size='small' 
                        type='primary'
                        onClick={() => handleUpdateSubCategory(subCategory.slug)}>
                        {updateLoading ? <LoadingOutlined /> : 'Update'}
                    </Button>
                </Space>
            </form>
            <Divider />
            <Button 
                size='small' 
                type='danger' 
                onClick={() => handleDeleteCategory(subCategory.slug)}
                loading={deletionLoading ? true : false}>
                <DeleteOutlined />
            </Button>
        </StyledActions>
    );

    return (
        <Popover 
            content={subCategoryActions} 
            title='Edit or delete a sub category' 
            trigger='click'
            key={subCategory._id}>
            <ParentSubCat>
                <span>{subCategory.parent?.name}</span>
                <span>{subCategory.name}</span>
            </ParentSubCat>
        </Popover>
    )
}

export default SingleSubCategory;