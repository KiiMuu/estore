import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../AdminLayout';
import { 
    createCoupon, getCoupons, 
} from '../../../state/actions/coupon';
import successAlert from '../../../components/layout/message/successAlert';
import errorAlert from '../../../components/layout/message/errorAlert';
import Coupons from './Coupons';
import { COUPON_CREATE_RESET } from '../../../state/constants/coupon';
import useUserHook from '../../../hooks/useUserHook';

// * styles 
import {
    CouponsWrapper,
    StyledTitle,
    StyledText,
    InputLabel,
    InputControl,
    AddButton,
    StyledPicker,
} from './styles';

// * @antd
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';

import {
    PlusOutlined,
    SearchOutlined,
} from '@ant-design/icons';

const CreateCoupon = () => {
    const [name, setName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [discount, setDiscount] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleModalVisible = () => setIsModalVisible(!isModalVisible);

    const dispatch = useDispatch();

    // * user state
    const { userInfo } = useUserHook();

    // * coupon state
    const couponCreation = useSelector(state => state.couponCreate);
    const { success, error, loading, coupon } = couponCreation;
    
    const handleSubmit = e => {
        e.preventDefault();

        setConfirmLoading(true);

        dispatch(createCoupon({ name, expiration, discount }, userInfo.token));
    }
    
    useEffect(() => {
        if (success) {
            dispatch({
                type: COUPON_CREATE_RESET,
            });

            successAlert(`"${coupon.name}" has been created`, 3);

            setConfirmLoading(false);

            setName('');
            setDiscount('');

            dispatch(getCoupons());
        }

        if (error) {
            errorAlert(error, 3);

            setConfirmLoading(false);
        }
    }, [coupon?.name, error, success, dispatch]);

    const handleSearch = e => {
        e.preventDefault();

        setSearchTerm(e.target.value.toLowerCase());
    }

    const searched = term => coupon => coupon.name.toLowerCase().includes(term);
    
    const couponForm = () => (
        <Modal
            title='Create new coupon'
            centered
            visible={isModalVisible}
            onOk={handleSubmit}
            confirmLoading={confirmLoading}
            okText={loading ? 'Creating...' : 'Create'}
            onCancel={handleModalVisible}
        >
            <form onSubmit={handleSubmit}>
                <InputLabel>
                    <label htmlFor='couponName'>Coupon Name</label>
                    <input
                        type='text'
                        id='couponName'
                        inputMode='text'
                        placeholder='Enter category name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                    />
                </InputLabel>
                <InputLabel>
                    <label htmlFor='discount'>Coupon Discount</label>
                    <input
                        type='number'
                        id='discount'
                        inputMode='numeric'
                        placeholder='Enter coupon discount'
                        value={discount}
                        onChange={e => setDiscount(e.target.value)}
                    />
                </InputLabel>
                <StyledPicker>
                    <label htmlFor='expiration'>Coupon Expiration Date</label>
                    <DatePicker 
                        size='small'
                        placeholder='Select expiration date'
                        defaultValue={expiration}
                        onChange={(obj, val) => setExpiration(val)} 
                    />
                </StyledPicker>
            </form>
        </Modal>
    ) 

    return (
        <AdminLayout>
            <CouponsWrapper xs={24} lg={12}>
                <StyledTitle level={4}>
                    Coupons
                </StyledTitle>
                <StyledText type='secondary'>
                    Create, remove or filter coupons
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
                                    placeholder='Filter coupons'
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
                            {couponForm()}
                        </AddButton>
                    </Col>
                </Row>
                <Coupons searched={searched} searchTerm={searchTerm} />
            </CouponsWrapper>
        </AdminLayout>
    )
}

export default CreateCoupon;