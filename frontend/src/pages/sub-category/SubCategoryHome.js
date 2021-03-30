import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategory } from '../../state/actions/subCategory';
import ProductCard from '../../components/cards/ProductCard';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';

// * styles
import {
    SubCategoryScreen,
    StyledText, 
    StyledTitle,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';
import Tag from 'antd/lib/tag';

const SubCategoryHome = ({ match }) => {
    const dispatch = useDispatch();
    const { slug } = match.params;

    // * category & category products state
    const singleSubCat = useSelector(state => state.subCategorySingle);
    const { 
        loading: subCategoryLoading, 
        error: subCategoryError, 
        subCategory,
    } = singleSubCat;
    
    useEffect(() => {
        dispatch(getSubCategory(slug));
    }, [dispatch, slug]);

    const showSubCategoryProducts = () => (
        subCategory?.subCategoryProducts.map(product => (
            <ProductCard product={product} key={product._id} />
        ))
    )

    return (
        <div className='container'>
            <SubCategoryScreen>
                <StyledTitle level={4}>
                    <span>{subCategory?.subCategory.name}</span> products
                </StyledTitle>
                <StyledText type='secondary'>
                    <Tag color='#059669'>{subCategory?.subCategoryProducts.length}</Tag> products in {`"${subCategory?.subCategory.name}"`} sub category
                </StyledText>
                {subCategoryLoading ? (
                    <CardSkeleton count={3} />
                ) : subCategoryError ? (
                    <Alert message={subCategoryError} type='error' showIcon />
                ) : subCategory?.subCategoryProducts.length === 0 ? (
                    <Alert 
                        message='This sub category has no products yet.' 
                        type='info' 
                        closeText='Hide' 
                        showIcon
                    />
                ) : (
                    <Row gutter={[20, 20]}>
                        {showSubCategoryProducts()}
                    </Row>
                )}
            </SubCategoryScreen>
        </div>
    )
}

export default SubCategoryHome;