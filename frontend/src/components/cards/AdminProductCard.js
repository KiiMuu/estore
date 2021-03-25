// * @antd
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Image from 'antd/lib/image';

import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
    const {
        title,
        description,
        images
    } = product;

    const formatDesc = str => {
        return str.length > 30 ? `${str.substring(0, 30)}...` : str;
    }

    return (
        <Col xs={24} md={12} lg={6}>
            <Card
                hoverable
                cover={
                    images?.length ? (
                        <img 
                            alt={title} 
                            src={images[0].url} 
                            style={{ height: '15rem', objectFit: 'cover' }}
                        />
                    ) : (
                        <Image
                            style={{ objectFit: 'cover' }}
                            height='15rem'
                            src='error'
                            fallback='https://via.placeholder.com/300/?text=no+preview+image'
                        />
                    )
                }
                actions={[
                    <EditOutlined key='edit' />,
                    <DeleteOutlined key='delete' />,
                ]}
            >
                <Meta
                    title={title}
                    description={formatDesc(description)} 
                />
            </Card>
        </Col>
    )
}

export default AdminProductCard;
