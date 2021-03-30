import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../state/actions/category';

// * styles
import { 
    StyledCatgeories, 
    StyledTag,
} from './styles';

// * @antd
import Space from 'antd/lib/space';
import Alert from 'antd/lib/alert';
import { LoadingOutlined } from '@ant-design/icons';
import { StyledText, StyledTitle } from '../../pages/home/styles';

const CategoryList = () => {
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

    const showCategoires = () => (
        <Space size={[8, 10]} wrap>
            {categories?.length === 0 ? (
                'No categories added yet'
            ) : categories?.map(category => (
                <Link key={category._id} to={`/category/${category.slug}`}>
                    <StyledTag>{category.name}</StyledTag>
                </Link>
            ))}
        </Space>
    )

    return (
        <StyledCatgeories>
            <StyledTitle level={4}>Categories</StyledTitle>
            <StyledText type='secondary'>
                Here our categories list
            </StyledText>
            {loading ? (
                <LoadingOutlined spin />
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                showCategoires()
            )}
        </StyledCatgeories>
    )
}

export default CategoryList;