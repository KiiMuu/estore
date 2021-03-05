import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getCategories, 
} from '../../../state/actions/category';
import SingleCategory from './SingleCategory';

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

    const catsItems = () => (
        <Space size={[8, 10]} wrap>
            {categories?.length === 0 ? (
                <StyledPageHeader
                    subTitle='No categories added yet, once you add categories they will be listed here'
                />
            ) : categories?.filter(searched(searchTerm)).length === 0 ? (
                <StyledPageHeader
                    subTitle='No categories matched your keyword'
                />
            ) : categories?.map(category => (
                <SingleCategory 
                    category={category}
                    key={category._id} 
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
                catsItems()
            )}
        </StyledCategories>
    )
}

export default Categories;
