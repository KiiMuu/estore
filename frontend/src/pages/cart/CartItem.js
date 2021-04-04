import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../state/constants/cart';
import errorAlert from '../../components/layout/message/errorAlert';

// * @antd
import Select from 'antd/lib/select';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import { CheckCircleOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';

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

            // * `forEach` instead of `map` as I don't care about returned value
            cart.forEach((product, i) => {
                if (product._id === c._id) {
                    cart[i].color = val;
                }
            })
        }

        localStorage.setItem('userCart', JSON.stringify(cart));

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    }

    const handleCountChange = val => {
        let count = val < 1 ? 1 : val;

        if (count > c.quantity) {
            errorAlert(`Maximum available in stock: ${c.quantity}`, 3);
            return;
        }

        let cart = [];

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('userCart')) {
                cart = JSON.parse(localStorage.getItem('userCart'));
            }

            cart.forEach((product, i) => {
                if (product._id === c._id) {
                    cart[i].count = val;
                }
            })
        }

        localStorage.setItem('userCart', JSON.stringify(cart));

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    }

    const handleRemove = () => {
        let cart = [];

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('userCart')) {
                cart = JSON.parse(localStorage.getItem('userCart'));
            }

            cart.forEach((product, i) => {
                if (product._id === c._id) {
                    cart.splice(i, 1);
                }
            })
        }

        localStorage.setItem('userCart', JSON.stringify(cart));

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    }

    return (
        <tr>
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
                        fallback='https://dummyimage.com/600x400/059669/000000&text=No+image'
                    />
                )}
            </td>
            <td>{c.title}</td>
            <td><Tag color='processing'>${c.price}</Tag></td>
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
            <td>
                <InputNumber min={1} max={c.quantity} defaultValue={c.count} onChange={handleCountChange} />
            </td>
            <td>
                {c.shipping === 'Yes' ? <CheckCircleOutlined /> : <CloseOutlined />}
            </td>
            <td>
                <Button 
                    type='danger' 
                    size='small'
                    onClick={handleRemove}
                >
                    <DeleteOutlined />
                </Button>
            </td>
        </tr>
    )
}

export default CartItem;