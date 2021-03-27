import { useState } from 'react';
import ProductUpdateForm from '../../pages/admin/product/ProductUpdateForm';

// * @antd
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Image from 'antd/lib/image';

import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import Popconfirm from 'antd/lib/popconfirm';
import Button from 'antd/lib/button';

const { Meta } = Card;

const AdminProductCard = ({ product, handleDeleteProduct, deletionLoading }) => {
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const togglePopConfirm = () => setVisible(!visible);
    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const {
        title,
        description,
        images,
        slug,
    } = product;
    
    const formatDesc = str => {
        return str.length > 30 ? `${str.substring(0, 30)}...` : str;
    }

    const props = {
        product,
        isModalVisible,
        handleModalVisible,
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
                    <>
                        <Button type='text' onClick={() => handleModalVisible()}>
                            <EditOutlined key='edit' /> 
                        </Button>
                        <ProductUpdateForm {...props} />
                    </>,
                    <Popconfirm
                        title='Are you sure you want to delete?'
                        visible={visible}
                        onConfirm={() => handleDeleteProduct(slug)}
                        okButtonProps={{ loading: deletionLoading }}
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