import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    getCategories, 
    getSubsOfParent 
} from '../../../state/actions/category';
import { updateProduct } from '../../../state/actions/product';
import useUserHook from '../../../hooks/useUserHook';

// * styles 
import {
    InputLabel,
    StyledSelect,
    StyledLabel,
} from './styles';
import FileUpload from '../../../components/forms/FileUpload';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import Radio from 'antd/lib/radio';
import { LoadingOutlined } from '@ant-design/icons';

const { Option } = Select;

const ProductUpdateForm = ({
    product,
    isModalVisible,
    handleModalVisible,
}) => {
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category] = useState(product.category); 
    const [parentSubs] = useState(product.subCategories);
    const [shipping, setShipping] = useState(product.shipping);
    const [quantity, setQuantity] = useState(product.quantity);
    const [images, setImages] = useState(product.images);
    const [colors] = useState(['Black', 'White', 'Brown', 'Silver', 'Blue']);
    const [brands] = useState(['Apple', 'Samsung', 'Dell', 'Acer', 'Microsoft']);
    const [color, setColor] = useState(product.color);
    const [brand, setBrand] = useState(product.brand);
    const [arrOfSubsIds, setArrOfSubsIds] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { categories } = catsList;

    // * subs of parent state
    const subsOfParentList = useSelector(state => state.subsOfParent);
    const { subs, loading: subsLoading } = subsOfParentList;

    // * product state
    const productUpdating = useSelector(state => state.productUpdate);
    const { loading: updateLoading } = productUpdating;

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(updateProduct(product.slug, {
            title,
            description,
            price,
            category: selectedCategory ? selectedCategory : category,
            subCategories: arrOfSubsIds,
            shipping,
            quantity,
            images,
            brand,
            color,
        }, userInfo.token));
    }

    const subsIds = useCallback(() => {
        let arr = [];

        parentSubs?.map(s => arr.push(s._id));

        setArrOfSubsIds(prev => arr);
    }, [parentSubs]);

    const handleSubsOfParentChange = e => {
        setSelectedCategory(e);
        dispatch(getSubsOfParent(e));
        
        if (category._id === e) {
            subsIds();
        } else {
            setArrOfSubsIds([]);
        }
    }
    
    useEffect(() => {
        dispatch(getCategories());
        subsIds();
    }, [dispatch, subsIds]);

    return (
        <Modal
            title='Update product'
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={updateLoading}
            okText='Update'
            onCancel={handleModalVisible}
            width={1000}
            style={{ padding: '1rem', top: 20 }}
        >
            <form>
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
                            defaultValue={{ value: color }}
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
                            labelInValue
                            defaultValue={{ value: brand }}
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
                            defaultValue={selectedCategory ? selectedCategory : category._id}
                            onChange={handleSubsOfParentChange}
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
                        <StyledLabel>Sub Categories</StyledLabel>
                        <StyledSelect
                            size='large'
                            mode='multiple'
                            placeholder={subsLoading ? <LoadingOutlined /> : 'Select categories'}
                            value={arrOfSubsIds}
                            onChange={e => setArrOfSubsIds(e)}
                        >
                            {subs?.length > 0 && subs.map(subCategory => (
                                <Option 
                                    value={subCategory._id} 
                                    key={subCategory._id} 
                                >{subCategory.name}</Option>
                            ))}
                        </StyledSelect>
                    </Col>
                    <Col xs={24} md={12}>
                        <StyledLabel>Shipping</StyledLabel>
                        <Radio.Group 
                            defaultValue={shipping} 
                            onChange={e => setShipping(e.target.value)}
                        >
                            <Radio value='Yes'>Yes</Radio>
                            <Radio value='No'>No</Radio>
                        </Radio.Group>
                    </Col>
                    <Col xs={24} md={12}>
                        <FileUpload images={images} setImages={setImages} />
                    </Col>
                </Row>
            </form>
        </Modal>
    )
}

export default ProductUpdateForm;