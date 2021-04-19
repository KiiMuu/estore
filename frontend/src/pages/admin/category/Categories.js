import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getCategories, 
} from '../../../state/actions/category';
import errorAlert from '../../../components/layout/message/errorAlert';
import successAlert from '../../../components/layout/message/successAlert';
import SingleCategory from './SingleCategory';
import { CATEGORY_UPDATE_RESET } from '../../../state/constants/category';

// * styles
import {
    StyledCategories,
    Loader,
    StyledPageHeader,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Result from 'antd/lib/result';
import {
    LoadingOutlined,
} from '@ant-design/icons';

const Categories = ({ searched, searchTerm }) => {
    const dispatch = useDispatch();

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { 
        loading, 
        error, 
        categories
    } = catsList;
    
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // * category state
    const categoryUpdating = useSelector(state => state.categoryUpdate);
    const {
        updatedCategory,
        error: updateError,
        success: updateSuccess,
    } = categoryUpdating;

    const categoryDeletion = useSelector(state => state.categoryDelete);
    const { 
        removedCategory,
        error: removeError, 
        success: removeSuccess,
    } = categoryDeletion;

    useEffect(() => {
        if (updateError) {
            errorAlert(updateError, 3);
        }

        if (updateSuccess) {
            dispatch({
                type: CATEGORY_UPDATE_RESET,
            });

            successAlert(`Category has been updated to "${updatedCategory?.name}"`, 3);

            dispatch(getCategories());
        }
    }, [updateError, updateSuccess, updatedCategory, dispatch]);

    useEffect(() => {
        if (removeError) {
            errorAlert(removeError);
        }

        if (removeSuccess) {
            successAlert(`"${removedCategory.name}" has been deleted`, 3);
            dispatch(getCategories());
        }
    }, [removeSuccess, removeError, dispatch, removedCategory]);

    const catsItems = () => (
        // <Space size={[8, 10]} wrap>
        //     {categories?.length === 0 ? (
        //         <StyledPageHeader
        //             subTitle='No categories added yet, once you add categories they will be listed here'
        //         />
        //     ) : categories?.filter(searched(searchTerm)).length === 0 ? (
        //         <StyledPageHeader
        //             subTitle='No categories matched your keyword'
        //         />
        //     ) : categories?.filter(searched(searchTerm)).map(category => (
        //         <SingleCategory 
        //             category={category}
        //             key={category._id}
        //         />
        //     ))}
        // </Space>
        categories?.filter(searched(searchTerm)).map(category => (
            <SingleCategory 
                category={category}
                key={category._id}
            />
        ))
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
                catsItems()
            )}
        </StyledCategories>
    )
}

export default Categories;