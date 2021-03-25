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

const ProductCreationForm = ({
    isModalVisible,
    handleSubmit,
    confirmLoading,
    loading,
    handleModalVisible,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    setColor,
    colors,
    setBrand,
    brands,
    handleSubsOfParentChange,
    categories,
    areSubsVisible,
    setParentSubs,
    subsLoading,
    parentSubs,
    subs,
    shipping,
    setShipping,
    images,
    setImages,
}) => {
    return (
        <Modal
            title='Create new product'
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={confirmLoading}
            okText={loading ? 'Creating...' : 'Create'}
            onCancel={handleModalVisible}
            width={1000}
            style={{ padding: '1rem', top: 20 }}
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
                            disabled={areSubsVisible ? false : true}
                            placeholder={subsLoading ? <LoadingOutlined /> : 'Select categories'}
                            value={parentSubs}
                            onChange={e => setParentSubs(e)}
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
                            onChange={e => setShipping(e.target.value)}>
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

export default ProductCreationForm;