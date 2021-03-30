import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RatingModal from '../layout/rating/RatingModal';
import { AverageRating } from '../layout/rating/AverageRating';

// * styles
import { 
    StyledText, 
    StyledTitle,
    ProductInfo,
    InfoItem,
    ProductActions,
    CarouselItem,
    StyledRating,
    CartAction,
    WishListAction,
    NoRate,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Tabs from 'antd/lib/tabs';

import {
    ShoppingCartOutlined,
    MoreOutlined,
    HeartFilled,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const SingleProduct = ({ 
    product, 
    star, 
    rateText,
    setRateText,
    rateLoading, 
    onStarChange, 
    handleRateSubmit 
}) => {
    return (
        <Fragment>
            <Col xs={24} md={14}>
                <Carousel effect='fade' autoplay>
                    {product?.images?.length ? (
                        product?.images?.map(img => (
                            <CarouselItem key={img.public_id}>
                                <Image 
                                    src={img.url} 
                                    alt={product?.title} 
                                    style={{ 
                                        objectFit: 'cover',
                                        borderRadius: '.3rem'
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
                            fallback='https://via.placeholder.com/300/?text=no+preview+image'
                        />
                    )}
                </Carousel>
            </Col>
            <Col xs={24} md={10}>
                <StyledTitle level={4}>{product?.title}</StyledTitle>
                <StyledRating>
                    {product?.ratings?.length > 0 ? AverageRating(product) : (
                        <NoRate>Not rated yet</NoRate>
                    )}
                </StyledRating>
                <ProductInfo>
                    <InfoItem>
                        <p>Price</p>
                        <span>${product?.price}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Category</p>
                        <Link to={`/category/${product?.category.slug}`}>
                            <Tag color='#059669' style={{ color: '#fff' }}>{product?.category.name}</Tag>
                        </Link>
                    </InfoItem>
                    <InfoItem>
                        <p>Sub Categories</p>
                        {product?.subCategories.map(sub => (
                            <Link to={`/sub/${sub.slug}`} key={sub._id}>
                                <Tag color='#059669' style={{ color: '#fff' }}>{sub.name}</Tag>
                            </Link>
                        ))}
                    </InfoItem>
                    <InfoItem>
                        <p>Shipping</p>
                        <span>{product?.shipping}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Color</p>
                        <span>{product?.color}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Brand</p>
                        <span>{product?.brand}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Available</p>
                        <span>{product?.quantity}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Sold</p>
                        <span>{product?.sold}</span>
                    </InfoItem>
                </ProductInfo>
                <ProductActions>
                    <CartAction>
                        <button>
                            <span><ShoppingCartOutlined /></span>
                            Add to Cart
                        </button>
                    </CartAction>
                    <WishListAction>
                        <button>
                            <Link to='/'>
                                <span><HeartFilled /></span> 
                                Add to Wishlist
                            </Link>
                        </button>
                    </WishListAction>
                    <RatingModal
                        star={star}
                        rateText={rateText}
                        setRateText={setRateText}
                        onStarChange={onStarChange}
                        rateLoading={rateLoading}
                        handleRateSubmit={handleRateSubmit}
                    />
                </ProductActions>
            </Col>
            <Col xs={24} md={12}>
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
        </Fragment>
    )
}

export default SingleProduct;