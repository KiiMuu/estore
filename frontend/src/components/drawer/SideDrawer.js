import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART_DRAWER } from '../../state/constants/cart';

// * @antd
import Drawer from 'antd/lib/drawer';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';

const SideDrawer = () => {
    const dispatch = useDispatch();

    const cartList = useSelector(state => state.cartList);
    const { drawer } = useSelector(state => state.cartListDrawer);

    const handleClose = () => {
        dispatch({
            type: ADD_TO_CART_DRAWER,
            payload: false,
        });
    }

    return (
        <Drawer
            title={`Cart Items - ${cartList?.length}`}
            placement='right'
            closable={false}
            onClose={handleClose}
            visible={drawer}
        >
            <Space direction='vertical' wrap>
                {cartList?.map(c => (
                    <div key={c._id}>
                        {c?.images?.length ? (
                            <Fragment>
                                <Image
                                    src={c.images[0].url}
                                    style={{ 
                                        objectFit: 'cover',
                                        borderRadius: '3px'
                                    }}
                                    width='100%'
                                    height='auto'
                                    alt={c.title}
                                />
                                <Tag 
                                    style={{ marginBottom: '2rem' }} 
                                    color='processing'
                                >{c.title} x {c.count}</Tag>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Image
                                    style={{ 
                                        objectFit: 'cover',
                                        borderRadius: '3px'
                                    }}
                                    width='100%'
                                    height='auto'
                                    src='error'
                                    fallback='https://dummyimage.com/600x400/059669/000000&text=No+image'
                                />
                                <Tag 
                                    style={{ marginBottom: '2rem' }} 
                                    color='processing'
                                >{c.title} x {c.count}</Tag>
                            </Fragment>
                        )}
                    </div>
                ))}
            </Space>
            <Button onClick={handleClose} type='primary' block style={{ marginTop: '2rem' }}>
                <Link to='/cart'>Open Cart</Link>
            </Button>
        </Drawer>
    )
}

export default SideDrawer;