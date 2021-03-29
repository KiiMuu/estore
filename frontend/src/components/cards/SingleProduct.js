import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// * styles
import { 
    StyledText, 
    StyledTitle,
    ProductInfo,
    InfoItem,
    ProductActions,
    ActionItem,
    CarouselItem,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Tabs from 'antd/lib/tabs';

import {
    HeartOutlined,
    ShoppingCartOutlined,
    MoreOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const SingleProduct = ({ product }) => {
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
                <ProductInfo>
                    <InfoItem>
                        <p>Price</p>
                        <span>${product?.price}</span>
                    </InfoItem>
                    <InfoItem>
                        <p>Category</p>
                        <Link to={`/category/${product?.category.slug}`}>
                            <Tag>{product?.category.name}</Tag>
                        </Link>
                    </InfoItem>
                    <InfoItem>
                        <p>Sub Categories</p>
                        {product?.subCategories.map(sub => (
                            <Link to={`/sub/${sub.slug}`} key={sub._id}>
                                <Tag>{sub.name}</Tag>
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
                    <ActionItem>
                        <button>
                            <span><ShoppingCartOutlined /></span>
                            Add to Cart
                        </button>
                    </ActionItem>
                    <ActionItem>
                        <Link to='/'><HeartOutlined /> Add to Wishlist</Link>
                    </ActionItem>
                </ProductActions>
            </Col>
            <Col xs={24} md={12}>
                <Tabs defaultActiveKey='1'>
                    <TabPane key='1' tab={<span><HeartOutlined /> Description</span>}>
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