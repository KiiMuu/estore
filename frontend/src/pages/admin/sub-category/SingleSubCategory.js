import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    deleteSubCategory, 
    getSubCategories,
    updateSubCategory,
} from '../../../state/actions/subCategory';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import { SUB_CATEGORY_UPDATE_RESET } from '../../../state/constants/subCategory';
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
    const {
        updatedSubCategory,
        error: updateError,
        success: updateSuccess,
        loading: updateLoading,
    } = subCategoryUpdating;

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { categories } = catsList;

    const subCategoryDeletion = useSelector(state => state.subCategoryDelete);
    const { 
        removedSubCategory,
        error, 
        success,
        loading,
    } = subCategoryDeletion;

    const handleUpdateSubCategory = slug => {
        dispatch(updateSubCategory(slug, { name, parent: parentCategory }, userInfo.token));
    }

    const handleDeleteCategory = slug => {
        dispatch(deleteSubCategory(slug, userInfo.token));
    }

    useEffect(() => {
        if (updateError && subCategory.name === name) {
            errorAlert(updateError, 3);
        }

        if (updateSuccess && updatedSubCategory.name === name) {
            dispatch({
                type: SUB_CATEGORY_UPDATE_RESET,
            });

            successAlert(`"${subCategory?.name}" has been updated to "${updatedSubCategory?.name}"`, 3);

            dispatch(getSubCategories());
        }
    }, [updateError, updateSuccess, subCategory, updatedSubCategory, name, dispatch]);

    useEffect(() => {
        if (error) {
            errorAlert(error, 3);
        }

        if (success && removedSubCategory.name === subCategory.name) {
            successAlert(`"${removedSubCategory.name}" has been deleted`, 3);
            dispatch(getSubCategories());
        }
    }, [error, success, removedSubCategory?.name, subCategory, dispatch]);

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
                loading={loading ? true : false}>
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
                <span>{subCategory.parent.name}</span>
                <span>{subCategory.name}</span>
            </ParentSubCat>
        </Popover>
    )
}

export default SingleSubCategory;