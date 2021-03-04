import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createCategory, 
    getCategories, 
    deleteCategory,
} from '../../../state/actions/category';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';

// * styles 
import {
    CategoriesWrapper,
    StyledTitle,
    StyledText,
    StyledButton,
    SearchField,
    AddButton,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';

import {
    // KeyOutlined,
    // EyeInvisibleOutlined,
    // EyeOutlined,
    PlusOutlined,
} from '@ant-design/icons';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const dispatch = useDispatch();

    // * user state
    const { user } = useSelector(state => ({ ...state }));
    const { userInfo } = user;

    // * category state
    const categoryCreation = useSelector(state => state.categoryCreate);
    const { success, error, loading, category } = categoryCreation;
    
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createCategory({ name }, userInfo.token));
    }
    
    useEffect(() => {
        if (success) {
            successAlert(`"${category.name}" created`);

            setName('');
        }

        if (error) {
            errorAlert(error);
        }
    }, [category?.name, error, success]);
    
    const categoryForm = () => (
        <Modal
            title='Create new category'
            centered
            visible={isModalVisible}
            onOk={handleModalVisible}
            onCancel={handleModalVisible}
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type='text'
                        inputMode='text'
                        placeholder='Enter category name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <StyledButton
                    onClick={handleSubmit}
                    type='primary'
                    loading={loading ? true : false}
                >
                    {loading ? 'Creating...' : 'Create'}
                </StyledButton>
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
                    Create, update or remove categories
                </StyledText>
                <Row gutter={[10, 10]}>
                    <Col xs={24} lg={12}>
                        <SearchField>
                            <input type='text' placeholder='Search in categories' />
                        </SearchField>
                    </Col>
                    <Col xs={24} lg={12}>
                        <AddButton>
                            <Button type='primary' onClick={() => handleModalVisible()}>
                                <PlusOutlined /> Create
                            </Button>
                            {categoryForm()}
                        </AddButton>
                    </Col>
                </Row>
            </CategoriesWrapper>
        </AdminLayout>
    )
}

export default CreateCategory;