import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../state/actions/category';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import {
    CategoryScreen,
    StyledText, 
    StyledTitle,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';
import Tag from 'antd/lib/tag';

const CategoryHome = ({ match }) => {
    const dispatch = useDispatch();
    const { slug } = match.params;

    // * category & category products state
    const singleCat = useSelector(state => state.categorySingle);
    const { 
        loading: categoryLoading, 
        error: categoryError, 
        category,
    } = singleCat;
    
    useEffect(() => {
        dispatch(getCategory(slug));
    }, [dispatch, slug]);

    const showCategoryProducts = () => (
        category?.categoryProducts.map(product => (
            <ProductCard product={product} key={product._id} />
        ))
    )

    return (
        <div className='container'>
            <CategoryScreen>
                <StyledTitle level={4}>
                    <span>{category?.category.name}</span> products
                </StyledTitle>
                <StyledText type='secondary'>
                    <Tag color='#059669'>{category?.categoryProducts.length}</Tag> products in {`"${category?.category.name}"`} category
                </StyledText>
                {categoryLoading ? (
                    <CardSkeleton count={3} />
                ) : categoryError ? (
                    <Alert message={categoryError} type='error' showIcon />
                ) : category?.categoryProducts.length === 0 ? (
                    <Alert 
                        message='This category has no products yet.' 
                        type='info' 
                        closeText='Hide' 
                        showIcon
                    />
                ) : (
                    <Row gutter={[20, 20]}>
                        {showCategoryProducts()}
                    </Row>
                )}
            </CategoryScreen>
        </div>
    )
}

export default CategoryHome;