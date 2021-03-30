import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, rateProduct, getRelatedProducts } from '../../state/actions/product';
import SingleProduct from '../../components/cards/SingleProduct';
import ProductSkeleton from '../../components/layout/skeletons/ProductSkeleton';
import CardSkeleton from '../../components/layout/skeletons/CardSkeleton';
import ProductCard from '../../components/cards/ProductCard';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';

// * styles
import {
    RelatedProducts,
    StyledHeading,
    StyledProduct,
    Loader,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Alert from 'antd/lib/alert';

const Product = ({ match }) => {
    const [star, setStar] = useState(0);
    const [rateText, setRateText] = useState('');

    const dispatch = useDispatch();

    const { userInfo } = useUserHook();

    // * product state
    const prod = useSelector(state => state.productSingle);
    const { error, loading, product } = prod;

    const prodRate = useSelector(state => state.productRating);
    const { 
        loading: rateLoading, 
        error: rateError, 
        success: rateSuccess,
    } = prodRate;

    const relatedProds = useSelector(state => state.productsRelated);
    const { 
        loading: relatedLoading, 
        error: relatedError, 
        products: relatedProducts
    } = relatedProds;

    const onStarChange = newRate => setStar(newRate);

    const handleRateSubmit = () => {
        dispatch(rateProduct(product?._id, star, rateText, userInfo?.token));
    }

    useEffect(() => {
        dispatch(getProduct(match.params.slug));
    }, [dispatch, match.params.slug]);

    useEffect(() => {
        dispatch(getRelatedProducts(product?._id));
    }, [dispatch, product?._id]);

    useEffect(() => {
        // * get current user's rating stars
        if (userInfo && product?.ratings) {
            let existingRating = product.ratings
            .find(ele => ele.ratedBy.toString() === userInfo._id.toString());

            existingRating && setStar(existingRating.numberOfStars);
            existingRating && setRateText(existingRating.rateText);
        }
    }, [userInfo, product?.ratings]);

    useEffect(() => {
        if (rateError) {
            errorAlert(rateError, 3);
        }

        if (rateSuccess) {
            successAlert('Thanks for your rating!', 3);

            dispatch(getProduct(match.params.slug));
        }
    }, [rateError, rateSuccess, dispatch, match.params.slug]);

    return (
        <div className='container'>
            {loading ? (
                <Loader><ProductSkeleton count={2} /></Loader>
            ) : error ? (
                <Alert message={error} type='error' showIcon />
            ) : (
                <Fragment>
                    <StyledProduct>
                        <Row gutter={[20, 20]}>
                            <SingleProduct 
                                product={product} 
                                star={star}
                                rateText={rateText}
                                setRateText={setRateText}
                                onStarChange={onStarChange} 
                                rateLoading={rateLoading}
                                handleRateSubmit={handleRateSubmit}
                            />
                        </Row>
                    </StyledProduct>
                    {relatedProducts?.length > 0 && (
                        <RelatedProducts>
                            <StyledHeading>You might also like</StyledHeading>
                            {relatedLoading ? (
                                <CardSkeleton count={relatedProducts?.length} />
                            ) : relatedError ? (
                                <Alert message={relatedError} type='error' showIcon />
                            ) : (
                                <Row gutter={[20, 20]}>
                                    {relatedProducts?.map(rp => (
                                        <ProductCard key={rp._id} product={rp} />
                                    ))}
                                </Row>
                            )}
                        </RelatedProducts>
                    )}
                </Fragment>
            )}
        </div>
    )
}

export default Product;