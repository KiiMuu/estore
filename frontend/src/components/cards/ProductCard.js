import { Link } from 'react-router-dom';
import { AverageRating } from '../layout/rating/AverageRating';

// * styles
import {
    Card,
    CardInfo,
    CardHeading,
    CardRate,
    CardDesc,
    CardActions,
    ViewProduct,
    AddToCart,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Image from 'antd/lib/image';
import Divider from 'antd/lib/divider';

import { 
    EyeOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import Tag from 'antd/lib/tag';

const ProductCard = ({ product }) => {
    const {
        slug,
        title,
        description,
        images,
        price,
        category,
    } = product;

    const formatTitle = str => {
        return str.length > 20 ? `${str.substring(0, 20)}...` : str;
    }

    const formatDescription = str => {
        return str.length > 30 ? `${str.substring(0, 30)}...` : str;
    }

    return (
        <Col xs={24} md={12} lg={8}>
            <Card>
                {images?.length ? (
                    <Image
                        src={images[0].url}
                        style={{ 
                            objectFit: 'cover',
                            borderRadius: '3px'
                        }}
                        width='100%'
                        height='30rem'
                        alt={title}
                    />
                ) : (
                    <Image
                        style={{ 
                            objectFit: 'cover',
                            borderRadius: '3px'
                        }}
                        width='100%'
                        height='30rem'
                        src='error'
                        fallback='https://dummyimage.com/3000x2500/0bb55a/000000.jpg&text=No+image+provided'
                    />
                )}
                <CardInfo>
                    <CardHeading>
                        <h2 title={title}>{formatTitle(title)}</h2>
                        <span>${price}</span>
                    </CardHeading>
                    <CardRate>
                        {product?.ratings?.length > 0 ? AverageRating(product) : (
                            <Tag style={{ marginTop: '1rem', marginRight: '0' }} color='warning'>Not rated yet</Tag>
                        )} 
                        <Divider type='vertical' style={{ background: '#999' }} />
                        <Tag color='blue'>{category?.name}</Tag>
                    </CardRate>
                    <CardDesc>
                        <p title={description}>{formatDescription(description)}</p>
                    </CardDesc>
                    <CardActions>
                        <ViewProduct>
                            <Link to={`/product/${slug}`}>
                                <span><EyeOutlined /></span>
                                View
                            </Link>
                        </ViewProduct>
                        <AddToCart>
                            <button>
                                <span><ShoppingCartOutlined /></span>
                                Add to Cart
                            </button>
                        </AddToCart>
                    </CardActions>
                </CardInfo>
            </Card>
        </Col>
    )
}

export default ProductCard;