import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getSubCategories, 
} from '../../../state/actions/subCategory';
import SingleSubCategory from './SingleSubCategory';

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
    
    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

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
                    parent={subCategory.parent._id}
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