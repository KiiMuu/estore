import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createSubCategory, getSubCategories, 
} from '../../../state/actions/subCategory';
import { 
     getCategories,
} from '../../../state/actions/category';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import SubCategories from './SubCategories';
import { SUB_CATEGORY_CREATE_RESET } from '../../../state/constants/subCategory';
import useUserHook from '../../../hooks/useUserHook';

// * styles 
import {
    CategoriesWrapper,
    StyledTitle,
    StyledText,
    InputLabel,
    InputControl,
    AddButton,
    StyledSelect,
} from '../category/styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';

import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const CreateSubCategory = () => {
    const [name, setName] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * sub category state
    const subCategoryCreation = useSelector(state => state.subCategoryCreate);
    const { success, error, loading, subCategory } = subCategoryCreation;

    // * categories state
    const catsList = useSelector(state => state.categoryList);
    const { categories } = catsList;
    
    const handleSubmit = e => {
        e.preventDefault();

        setConfirmLoading(true);

        dispatch(createSubCategory({ name, parent: parentCategory }, userInfo.token));
    }
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: SUB_CATEGORY_CREATE_RESET,
            });

            successAlert(`"${subCategory.name}" has been created`);

            setConfirmLoading(false);

            setName('');

            dispatch(getSubCategories());
        }

        if (error) {
            errorAlert(error);

            setConfirmLoading(false);
        }

        dispatch(getCategories());
    }, [subCategory?.name, error, success, dispatch]);

    const handleSearch = e => {
        e.preventDefault();

        setSearchTerm(e.target.value.toLowerCase());
    }

    const searched = term => category => category.name.toLowerCase().includes(term);
    
    const subCategoryForm = () => (
        <Modal
            title='Create new sub category'
            centered
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={confirmLoading}
            okText={loading ? 'Creating...' : 'Create'}
            onCancel={handleModalVisible}
        >
            <form onSubmit={handleSubmit}>
                <InputLabel>
                    <label htmlFor='subCategoryName'>Sub Category Name</label>
                    <input
                        type='text'
                        id='subCategoryName'
                        inputMode='text'
                        placeholder='Enter sub category name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                    />
                </InputLabel>
                <StyledSelect
                    labelInValue
                    defaultValue={{ value: 'Parent Category' }}
                    onChange={e => setParentCategory(e.value)}
                >
                    {categories?.length > 0 && categories.map(category => (
                        <Option 
                            value={category._id} 
                            key={category._id}
                        >{category.name}</Option>
                    ))}
                </StyledSelect>
            </form>
        </Modal>
    ) 

    return (
        <AdminLayout>
            <CategoriesWrapper xs={24} lg={12}>
                <StyledTitle level={4}>
                    Sub Categories
                </StyledTitle>
                <StyledText type='secondary'>
                    Create, update, remove or filter sub categories
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
                                    placeholder='Filter sub categories'
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
                            {subCategoryForm()}
                        </AddButton>
                    </Col>
                </Row>
                <SubCategories 
                    searched={searched} 
                    searchTerm={searchTerm} 
                />
            </CategoriesWrapper>
        </AdminLayout>
    )
}

export default CreateSubCategory;