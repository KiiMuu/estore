import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getSubCategories, 
} from '../../../state/actions/subCategory';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import SingleSubCategory from './SingleSubCategory';
import { SUB_CATEGORY_UPDATE_RESET } from '../../../state/constants/subCategory';

// * styles
import {
    StyledCategories,
    Loader,
    StyledPageHeader,
} from '../category/styles';

// * @antd
import Space from 'antd/lib/space';
import Result from 'antd/lib/result';
import {
    LoadingOutlined,
} from '@ant-design/icons';

const SubCategories = ({ searched, searchTerm }) => {
    const dispatch = useDispatch();

    // * sub categories state
    const subCatsList = useSelector(state => state.subCategoryList);
    const { 
        loading, 
        error, 
        subCategories
    } = subCatsList;

    // * category state
    const subCategoryUpdating = useSelector(state => state.subCategoryUpdate);
    const {
        updatedSubCategory,
        error: updateError,
        success: updateSuccess,
    } = subCategoryUpdating;

    const subCategoryDeletion = useSelector(state => state.subCategoryDelete);
    const { 
        removedSubCategory,
        error: removeError, 
        success: removeSuccess,
    } = subCategoryDeletion;
    
    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

    useEffect(() => {
        if (updateError) {
            errorAlert(updateError, 3);
        }

        if (updateSuccess) {
            dispatch({
                type: SUB_CATEGORY_UPDATE_RESET,
            });

            successAlert(`Sub category has been updated to "${updatedSubCategory?.name}"`, 3);

            dispatch(getSubCategories());
        }
    }, [updateError, updateSuccess, updatedSubCategory, dispatch]);

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError, 3);
        }

        if (removeSuccess) {
            successAlert(`"${removedSubCategory.name}" has been deleted`, 3);
            dispatch(getSubCategories());
        }
    }, [removeError, removeSuccess, removedSubCategory, dispatch]);

    const subCatsItems = () => (
        <Space size={[8, 10]} wrap>
            {subCategories?.length === 0 ? (
                <StyledPageHeader
                    subTitle='No sub categories added yet, once you add sub categories they will be listed here'
                />
            ) : subCategories?.filter(searched(searchTerm)).length === 0 ? (
                <StyledPageHeader
                    subTitle='No sub categories matched your keyword'
                />
            ) : subCategories?.filter(searched(searchTerm)).map(subCategory => (
                <SingleSubCategory 
                    subCategory={subCategory}
                    key={subCategory._id}
                    parent={subCategory.parent?._id}
                />                
            ))}
        </Space>
    )

    return (
        <StyledCategories>
            {loading ? (
                <Loader>
                    <LoadingOutlined spin />
                </Loader>
            ) : error ? (
                <Result
                    status='500'
                    subTitle='Sorry, something went wrong.'
                />
            ) : (
                subCatsItems()
            )}
        </StyledCategories>
    )
}

export default SubCategories;