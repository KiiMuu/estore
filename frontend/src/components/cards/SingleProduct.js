import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import RatingModal from '../layout/rating/RatingModal';
import { AverageRating } from '../layout/rating/AverageRating';
import { handleAddToCart } from '../../helpers/handleAddToCart';
import { addItemToWishlist } from '../../state/actions/wishlist';
import useUserHook from '../../hooks/useUserHook';
import errorAlert from '../../components/layout/message/errorAlert';
import successAlert from '../../components/layout/message/successAlert';

// * styles
import { 
    StyledText, 
    StyledTitle,
    ProductInfo,
    InfoItem,
    ProductActions,
    CarouselItem,
    StyledRating,
    PeopleRates,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Tabs from 'antd/lib/tabs';
import Button from 'antd/lib/button';
import Rate from 'antd/lib/rate';
import Comment from 'antd/lib/comment';

import {
    ShoppingCartOutlined,
    MoreOutlined,
    HeartFilled,
    BgColorsOutlined,
    GiftOutlined,
    TransactionOutlined,
    NumberOutlined,
    PayCircleOutlined,
    DollarCircleOutlined,
    HeartOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import Tooltip from 'antd/lib/tooltip';

const { TabPane } = Tabs;

const SingleProduct = ({ 
    product, 
    star, 
    rateText,
    setRateText,
    rateLoading, 
    onStarChange, 
    handleRateSubmit,
}) => {
    const [tooltip, setTooltip] = useState('Add');

    const dispatch = useDispatch();
    const { userInfo } = useUserHook();

    // * wishlist state
    const { 
        loading, 
        error, 
        wishItem 
    } = useSelector(state => state.addToWishList);

    const handleAddToWishlist = e => {
        e.preventDefault();

        dispatch(addItemToWishlist(product._id, userInfo?.token));
    }

    useEffect(() => {
        if (wishItem?.ok) {
            successAlert('Added to wishlist', 3);
        }

        if (error) {
            errorAlert(error, 3);
        }
    }, [wishItem, error]);

    return (
        <Fragment>
            <Col xs={24} lg={14}>
                <Carousel effect='fade' autoplay>
                    {product?.images?.length ? (
                        product?.images?.map(img => (
                            <CarouselItem key={img.public_id}>
                                <Image 
                                    src={img.url} 
                                    alt={product?.title} 
                                    style={{ 
                                        objectFit: 'cover',
                                        borderRadius: '.3rem',
                                    }}
                                    width='100%'
                                    height='40rem'
                                />
                            </CarouselItem>
                        ))
                    ) : (
                        <Image
                            style={{ 
                                objectFit: 'cover',
                                borderRadius: '.3rem'
                            }}
                            width='100%'
                            height='40rem'
                            src='error'
                            fallback='https://dummyimage.com/600x400/059669/000000&text=No+image'
                        />
                    )}
                </Carousel>
            </Col>
            <Col xs={24} lg={10}>
                <ProductInfo>
                    <StyledTitle level={4}>{product?.title}</StyledTitle>
                    <StyledRating>
                        {product?.ratings?.length > 0 ? AverageRating(product) : (
                            <Tag color='warning'>Not rated yet</Tag>
                        )}
                    </StyledRating>
                    <InfoItem>
                        <p>Price</p>
                        <Tag color='green' icon={<DollarCircleOutlined />}>
                            ${product?.price}
                        </Tag>
                    </InfoItem>
                    <InfoItem>
                        <p>Category</p>
                        <Link to={`/category/${product?.category.slug}`}>
                            <Tag color='#059669'>{product?.category.name}</Tag>
                        </Link>
                    </InfoItem>
                    <InfoItem>
                        <p>Sub Categories</p>
                        {product?.subCategories.map(sub => (
                            <Link to={`/sub/${sub.slug}`} key={sub._id}>
                                <Tag color='#059669'>{sub.name}</Tag>
                            </Link>
                        ))}
                    </InfoItem>
                    <InfoItem>
                        <p>Shipping</p>
                        <Tag color='green' icon={<TransactionOutlined />}>
                            {product?.shipping}
                        </Tag>
                    </InfoItem>
                    <InfoItem>
                        <p>Color</p>
                        <Tag color='green' icon={<BgColorsOutlined />}>
                            {product?.color}
                        </Tag>
                    </InfoItem>
                    <InfoItem>
                        <p>Brand</p>
                        <Tag color='green' icon={<GiftOutlined />}>
                            {product?.brand}
                        </Tag>
                    </InfoItem>
                    <InfoItem>
                        <p>Available</p>
                        <Tag color='green' icon={<NumberOutlined />}>
                            {product?.quantity}
                        </Tag>
                    </InfoItem>
                    <InfoItem>
                        <p>Sold</p>
                        <Tag color='green' icon={<PayCircleOutlined />}>
                            {product?.sold}
                        </Tag>
                    </InfoItem>
                    <ProductActions>
                        <Tooltip title={product?.quantity < 1 ? '' : tooltip} color='#059669'>
                            <Button 
                                disabled={product?.quantity < 1}
                                onClick={() => dispatch(handleAddToCart(product, setTooltip))}
                                type='primary' 
                                icon={<ShoppingCartOutlined />}>
                                {product?.quantity < 1 ? 'Out of Stock' : 'Add to Cart'}
                            </Button>
                        </Tooltip>
                        <Button 
                            onClick={handleAddToWishlist}
                            type='default' 
                            icon={<HeartOutlined style={{ color: 'orangered' }} />}>
                            {loading ? <LoadingOutlined /> : 'Add to Wishlist'}
                        </Button>
                        <RatingModal
                            star={star}
                            rateText={rateText}
                            setRateText={setRateText}
                            onStarChange={onStarChange}
                            rateLoading={rateLoading}
                            handleRateSubmit={handleRateSubmit}
                        />
                    </ProductActions>
                </ProductInfo>
            </Col>
            <Col xs={24} lg={12}>
                <Tabs defaultActiveKey='1'>
                    <TabPane key='1' tab={<span><HeartFilled /> Description</span>}>
                        <StyledText>{product?.description}</StyledText>
                    </TabPane>
                    <TabPane key='2' tab={<span><MoreOutlined /> More</span>}>
                        <StyledText>
                            Call us on 012-345-6789 to learn more about this product.
                        </StyledText>
                    </TabPane>
                </Tabs>
            </Col>
            {product?.ratings.length > 0 && (
                <Col xs={24} lg={12}>
                    <PeopleRates>
                        {product?.ratings?.map(rate => (
                            <Comment key={rate._id} author={rate.ratedBy.name} content={
                                <>
                                    <Rate disabled value={rate.numberOfStars} />
                                    <p>{rate.rateText}</p>
                                </>
                            } datetime={new Date(rate.ratedBy.createdAt).toLocaleString()} />
                        ))}
                    </PeopleRates>
                </Col>
            )}
        </Fragment>
    )
}

export default SingleProduct;