import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createProduct,
} from '../../../state/actions/product';
import { getCategories } from '../../../state/actions/category';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import { PRODUCT_CREATE_RESET } from '../../../state/constants/product';
import useUserHook from '../../../hooks/useUserHook';

// * styles 
import {
    ProductsWrapper,
    StyledTitle,
    StyledText,
    InputControl,
    AddButton,
    InputLabel,
    StyledSelect,
    StyledLabel,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Radio from 'antd/lib/radio';
import Select from 'antd/lib/select';

import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const CreateProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [shipping, setShipping] = useState('Yes');
    const [quantity, setQuantity] = useState('');
    const [images, setImages] = useState([]);
    const [colors] = useState(['Black', 'White', 'Brown', 'Silver', 'Blue']);
    const [brands] = useState(['Apple', 'Samsung', 'Dell', 'Acer', 'Microsoft']);
    const [color, setColor] = useState('');
    const [brand, setBrand] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(false);
    
    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * product state
    const productCreation = useSelector(state => state.productCreate);
    const { success, error, loading, product } = productCreation;

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { categories } = catsList;

    const handleSubmit = e => {
        e.preventDefault();

        setConfirmLoading(true);

        dispatch(createProduct({
            title,
            description,
            price,
            category,
            subCategories,
            shipping,
            quantity,
            images,
            brand,
            color,
        }, userInfo.token));
    }

    useEffect(() => {
        if (success) {
            dispatch({
                type: PRODUCT_CREATE_RESET,
            });

            successAlert(`"${product.title}" has been created`, 3);

            setConfirmLoading(false);

            setTitle('');
            setDescription('');
            setPrice('');
            setQuantity('');

            // dispatch(getSubCategories());
        }

        if (error) {
            errorAlert(error, 3);

            setConfirmLoading(false);
        }

        dispatch(getCategories());
    }, [product?.title, error, success, dispatch]);

    // const handleSearch = e => {
    //     e.preventDefault();

    //     setSearchTerm(e.target.value.toLowerCase());
    // }

    // const searched = term => product => product.title.toLowerCase().includes(term);

    const productForm = () => (
        <Modal
            title='Create new product'
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={confirmLoading}
            okText={loading ? 'Creating...' : 'Create'}
            onCancel={handleModalVisible}
            width={1000}
            style={{ padding: '1rem' }}
        >
            <form onSubmit={handleSubmit}>
                <Row gutter={[10, 10]}>
                    <Col xs={24} md={12}>
                        <InputLabel>
                            <label htmlFor='title'>Title</label>
                            <input
                                type='text'
                                id='title'
                                inputMode='text'
                                placeholder='Enter product title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </InputLabel>
                    </Col>
                    <Col xs={24} md={12}>
                        <InputLabel>
                            <label htmlFor='description'>Description</label>
                            <input
                                type='text'
                                id='description'
                                inputMode='text'
                                placeholder='Enter product description'
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </InputLabel>
                    </Col>
                    <Col xs={24} md={12}>
                        <InputLabel>
                            <label htmlFor='price'>Price</label>
                            <input
                                type='number'
                                id='price'
                                inputMode='number'
                                placeholder='Enter product price'
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </InputLabel>
                    </Col>
                    <Col xs={24} md={12}>
                        <InputLabel>
                            <label htmlFor='quantity'>Quantity</label>
                            <input
                                type='number'
                                id='quantity'
                                name='quantity'
                                inputMode='number'
                                placeholder='Enter product quantity'
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
                            />
                        </InputLabel>
                    </Col>
                    <Col xs={24} md={12}>
                        <StyledLabel>Color</StyledLabel>
                        <StyledSelect
                            size='large'
                            labelInValue
                            defaultValue={{ value: 'Select color' }}
                            onChange={e => setColor(e.value)}
                        >
                            {colors.map(color => (
                                <Option 
                                    value={color} 
                                    key={color}
                                >{color}</Option>
                            ))}
                        </StyledSelect>
                    </Col>
                    <Col xs={24} md={12}>
                        <StyledLabel>Brand</StyledLabel>
                        <StyledSelect
                            size='large'
                            defaultValue='Select brand'
                            onChange={e => setBrand(e.value)}
                        >
                            {brands.map(brand => (
                                <Option 
                                    value={brand} 
                                    key={brand}
                                >{brand}</Option>
                            ))}
                        </StyledSelect>
                    </Col>
                    <Col xs={24} md={12}>
                        <StyledLabel>Category</StyledLabel>
                        <StyledSelect
                            size='large'
                            defaultValue='Select category'
                            onChange={e => setCategory(e)}
                        >
                            {categories?.length > 0 && categories.map(category => (
                                <Option 
                                    value={category._id} 
                                    key={category._id}
                                >{category.name}</Option>
                            ))}
                        </StyledSelect>
                    </Col>
                    <Col xs={24} md={12}>
                        <StyledLabel>Shipping</StyledLabel>
                        <Radio.Group 
                            defaultValue={shipping} 
                            onChange={e => setShipping(e.target.value)}>
                            <Radio value='Yes'>Yes</Radio>
                            <Radio value='No'>No</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </form>
        </Modal>
    ) 

    return (
        <AdminLayout>
            <ProductsWrapper xs={24} lg={12}>
                <StyledTitle level={4}>
                    Products
                </StyledTitle>
                <StyledText type='secondary'>
                    Create, update, remove or filter products
                </StyledText>   
                <Row gutter={[10, 10]} align='top'>
                    <Col xs={24} sm={12}>
                        <div>
                            <InputControl>
                                <span>
                                    <SearchOutlined />
                                </span>
                                <input
                                    type='text'
                                    inputMode='text'
                                    placeholder='Filter products'
                                    // value={searchTerm}
                                    // onChange={handleSearch}
                                />
                                <strong></strong>
                            </InputControl>
                        </div>
                    </Col>
                    <Col xs={24} sm={12}>
                        <AddButton>
                            <Button type='primary' onClick={() => handleModalVisible()}>
                                <PlusOutlined /> Create
                            </Button>
                            {productForm()}
                        </AddButton>
                    </Col>
                </Row>
                {/* <Products searched={searched} searchTerm={searchTerm} />              */}
            </ProductsWrapper>
        </AdminLayout>
    )
}

export default CreateProduct;