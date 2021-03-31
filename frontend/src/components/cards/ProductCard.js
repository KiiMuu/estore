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
    NoRate,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Image from 'antd/lib/image';

import { 
    EyeOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

const ProductCard = ({ product }) => {
    const {
        slug,
        title,
        description,
        images,
        price,
    } = product;

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
                        <h2>{title}</h2>
                        <span>${price}</span>
                    </CardHeading>
                    <CardRate>
                        {product?.ratings?.length > 0 ? AverageRating(product) : (
                            <NoRate>Not rated yet</NoRate>
                        )}
                    </CardRate>
                    <CardDesc>
                        <p>{formatDescription(description)}</p>
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
                                add to cart
                            </button>
                        </AddToCart>
                    </CardActions>
                </CardInfo>
            </Card>
        </Col>
    )
}

export default ProductCard;