import { useState } from 'react';

// * @antd
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Image from 'antd/lib/image';

import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import Popconfirm from 'antd/lib/popconfirm';

const { Meta } = Card;

const AdminProductCard = ({ product, handleDeleteProduct, loading }) => {
    const [visible, setVisible] = useState(false);

    const {
        title,
        description,
        images,
        slug
    } = product;

    const formatDesc = str => {
        return str.length > 30 ? `${str.substring(0, 30)}...` : str;
    }

    const togglePopConfirm = () => setVisible(!visible);

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
                    <Popconfirm
                        title='Are you sure you want to delete?'
                        visible={visible}
                        onConfirm={() => handleDeleteProduct(slug)}
                        okButtonProps={{ loading: loading }}
                        onCancel={togglePopConfirm}
                        okText='Yes'
                    >
                        <DeleteOutlined 
                            key='delete' 
                            onClick={togglePopConfirm}
                        />
                    </Popconfirm>
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
