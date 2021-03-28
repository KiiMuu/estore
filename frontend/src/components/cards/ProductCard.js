import { Link } from 'react-router-dom';

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
        return str.length > 40 ? `${str.substring(0, 40)}...` : str;
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
                        fallback='https://via.placeholder.com/300/?text=no+preview+image'
                    />
                )}
                <CardInfo>
                    <CardHeading>
                        <h2>{title}</h2>
                        <span>${price}</span>
                    </CardHeading>
                    <CardRate>
                        <p>rate</p>
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
