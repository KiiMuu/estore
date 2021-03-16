import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createCategory, getCategories, 
} from '../../../state/actions/category';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import Categories from './Categories';
import { CATEGORY_CREATE_RESET } from '../../../state/constants/category';
import useUserHook from '../../../hooks/useUserHook';

// * styles 
import {
    CategoriesWrapper,
    StyledTitle,
    StyledText,
    InputLabel,
    InputControl,
    AddButton,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';

import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * category state
    const categoryCreation = useSelector(state => state.categoryCreate);
    const { success, error, loading, category } = categoryCreation;
    
    const handleSubmit = e => {
        e.preventDefault();

        setConfirmLoading(true);

        dispatch(createCategory({ name }, userInfo.token));
    }
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: CATEGORY_CREATE_RESET,
            });

            successAlert(`"${category.name}" has been created`);

            setConfirmLoading(false);

            setName('');

            dispatch(getCategories());
        }

        if (error) {
            errorAlert(error);

            setConfirmLoading(false);
        }
    }, [category?.name, error, success, dispatch]);

    const handleSearch = e => {
        e.preventDefault();

        setSearchTerm(e.target.value.toLowerCase());
    }

    const searched = term => category => category.name.toLowerCase().includes(term);
    
    const categoryForm = () => (
        <Modal
            title='Create new category'
            centered
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={confirmLoading}
            okText={loading ? 'Creating...' : 'Create'}
            onCancel={handleModalVisible}
        >
            <form onSubmit={handleSubmit}>
                <InputLabel>
                    <label htmlFor='categoryName'>Category Name</label>
                    <input
                        type='text'
                        id='categoryName'
                        inputMode='text'
                        placeholder='Enter category name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                    />
                </InputLabel>
            </form>
        </Modal>
    ) 

    return (
        <AdminLayout>
            <CategoriesWrapper xs={24} lg={12}>
                <StyledTitle level={4}>
                    Categories
                </StyledTitle>
                <StyledText type='secondary'>
                    Create, updat remove or filter categories
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
                                    placeholder='Filter categories'
                                    value={searchTerm}
                                    onChange={handleSearch}
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
                            {categoryForm()}
                        </AddButton>
                    </Col>
                </Row>
                <Categories searched={searched} searchTerm={searchTerm} />
            </CategoriesWrapper>
        </AdminLayout>
    )
}

export default CreateCategory;