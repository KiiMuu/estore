import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../state/constants/cart';

// * styles
import {
    TableRows,
} from './styles';

// * @antd
import Select from 'antd/lib/select';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import { DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const CartItem = ({ c }) => {
    const [colors] = useState(['Black', 'White', 'Brown', 'Silver', 'Blue']);

    const dispatch = useDispatch();

    const handleColorChange = val => {
        let cart = [];

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('userCart')) {
                cart = JSON.parse(localStorage.getItem('userCart'));
            }

            cart.forEach((product, i) => {
                if (product._id === c._id) {
                    cart[i].color = val;
                }
            })
        }

        localStorage.setItem('userCart', JSON.stringify(cart));
        console.log({cart});

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    }

    return (
        <TableRows>
            <td>
                {c?.images?.length ? (
                    <Image
                        src={c.images[0].url}
                        style={{ 
                            objectFit: 'cover',
                            borderRadius: '3px'
                        }}
                        width='10rem'
                        height='auto'
                        alt={c?.title}
                    />
                ) : (
                    <Image
                        style={{ 
                            objectFit: 'cover',
                            borderRadius: '3px'
                        }}
                        width='10rem'
                        height='auto'
                        src='error'
                        fallback='https://dummyimage.com/3000x2500/0bb55a/000000.jpg&text=No+image+provided'
                    />
                )}
            </td>
            <td>{c.title}</td>
            <td><Tag color='green'>${c.price}</Tag></td>
            <td><Tag color='processing'>{c.brand}</Tag></td>
            <td>
            <Select defaultValue={c.color} onChange={handleColorChange}>
                {c.color ? (
                    <Option value={c.color}>{c.color}</Option>
                ) : (
                    <Option>Select</Option>
                )}
                {colors.filter(color => color !== c.color).map(color => (
                    <Option key={color} value={color}>{color}</Option>
                ))}
            </Select>
            </td>
            <td><Tag color='orange'>{c.count}</Tag></td>
            <td>{c.shipping}</td>
            <td><Button type='danger' size='small'><DeleteOutlined /></Button></td>
        </TableRows>
    )
}

export default CartItem;