import { Fragment, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useUserHook from '../../../hooks/useUserHook';
import successAlert from '../message/successAlert';

// * styles
import {
    RateButton,
} from './styles';

// * @antd
import Modal from 'antd/lib/modal';
import Rate from 'antd/lib/rate';
import { StarFilled } from '@ant-design/icons';

const RatingModal = ({ star, rateLoading, onStarChange, handleRateSubmit }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalVisibility = () => setIsModalVisible(!isModalVisible);

    const { userInfo } = useUserHook();
    const history = useHistory();
    const { slug } = useParams();

    const handleModal = () => {
        if (userInfo?.token) {
            setIsModalVisible(true);
        } else {
            history.push({
                pathname: '/login',
                state: {
                    from: `/product/${slug}`
                }
            });
        }
    }

    const rateDescription = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    return (
        <Fragment>
            <RateButton onClick={handleModal}>
                <span><StarFilled /></span> 
                {userInfo ? 'Leave rating' : 'Login to rate'}
            </RateButton>
            <Modal
                title='Leave your rating'
                centered
                confirmLoading={rateLoading}
                visible={isModalVisible}
                onOk={handleRateSubmit}
                okText='Rate'
                onCancel={handleModalVisibility}
            >
                <Rate  
                    value={star}
                    onChange={onStarChange}
                    tooltips={rateDescription}
                    allowHalf
                    allowClear
                />
                {star ? <span className='ant-rate-text'>{rateDescription[star - 1]}</span> : ''}
            </Modal>
        </Fragment>
    )
}

export default RatingModal;