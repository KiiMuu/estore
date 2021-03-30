import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, rateProduct } from '../../state/actions/product';
import SingleProduct from '../../components/cards/SingleProduct';
import ProductSkeleton from '../../components/layout/skeletons/ProductSkeleton';

// * styles
import {
    RelatedProducts,
    StyledProduct,
    Loader,
} from './styles';

// * @antd
import Row from 'antd/lib/row';
import Typography from 'antd/lib/typography';
import Alert from 'antd/lib/alert';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';

const { Title } = Typography;

const Product = ({ match }) => {
    const [star, setStar] = useState(0);
    const [rateText, setRateText] = useState('');

    const dispatch = useDispatch();

    const { userInfo } = useUserHook();

    useEffect(() => {
        dispatch(getProduct(match.params.slug));
    }, [dispatch, match.params.slug]);

    // * product state
    const prod = useSelector(state => state.productSingle);
    const { error, loading, product } = prod;

    const prodRate = useSelector(state => state.productRating);
    const { 
        loading: rateLoading, 
        error: rateError, 
        success: rateSuccess,
    } = prodRate;

    const onStarChange = newRate => setStar(newRate);

    const handleRateSubmit = () => {
        dispatch(rateProduct(product?._id, star, rateText, userInfo?.token));
    }

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
                    <RelatedProducts>
                        <Title level={4}>Related Products</Title>
                        <div>Related Cards</div>
                    </RelatedProducts>
                </Fragment>
            )}
        </div>
    )
}

export default Product;