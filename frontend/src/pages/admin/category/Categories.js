import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getCategories, 
} from '../../../state/actions/category';

// * styles
import {
    StyledCategories,
    Loader,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Result from 'antd/lib/result';
import Alert from 'antd/lib/alert';
import {
    LoadingOutlined,
} from '@ant-design/icons';
import SingleCategory from './SingleCategory';

const Categories = () => {
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
                <Alert message='No categories' type='info' />
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
