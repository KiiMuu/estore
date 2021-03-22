import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createProduct,
} from '../../../state/actions/product';
import { 
    getCategories,
    getSubsOfParent,
} from '../../../state/actions/category';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import { PRODUCT_CREATE_RESET } from '../../../state/constants/product';
import useUserHook from '../../../hooks/useUserHook';
import ProductCreationForm from './ProductCreationForm';

// * styles 
import {
    ProductsWrapper,
    StyledTitle,
    StyledText,
    InputControl,
    AddButton,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Button from 'antd/lib/button';

import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const CreateProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(''); 
    const [parentSubs, setParentSubs] = useState([]);
    const [shipping, setShipping] = useState('Yes');
    const [quantity, setQuantity] = useState('');
    const [images, setImages] = useState([]);
    const [colors] = useState(['Black', 'White', 'Brown', 'Silver', 'Blue']);
    const [brands] = useState(['Apple', 'Samsung', 'Dell', 'Acer', 'Microsoft']);
    const [color, setColor] = useState('');
    const [brand, setBrand] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [areSubsVisible, setAreSubsVisible] = useState(false);
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

    // * subs of parent state
    const subsOfParentList = useSelector(state => state.subsOfParent);
    const { subs, loading: subsLoading } = subsOfParentList;

    const handleSubmit = e => {
        e.preventDefault();

        setConfirmLoading(true);

        dispatch(createProduct({
            title,
            description,
            price,
            category,
            subCategories: parentSubs,
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
        }

        if (error) {
            errorAlert(error, 3);

            setConfirmLoading(false);
        }

        dispatch(getCategories());
    }, [product?.title, error, success, dispatch]);

    const handleSubsOfParentChange = e => {
        setCategory(e);
        dispatch(getSubsOfParent(e));
        setAreSubsVisible(true);
        setParentSubs([]);
    }

    const props = {
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
    }
    
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
                            <ProductCreationForm {...props} />
                        </AddButton>
                    </Col>
                </Row>
                {/* <Products searched={searched} searchTerm={searchTerm} />              */}
            </ProductsWrapper>
        </AdminLayout>
    )
}

export default CreateProduct;