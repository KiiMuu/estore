import { Fragment, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useUserHook from '../../../hooks/useUserHook';

// * styles
import {
    InputLabel,
} from './styles';

// * @antd
import Modal from 'antd/lib/modal';
import Rate from 'antd/lib/rate';
import { StarOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';

const RatingModal = ({ 
    star, 
    rateText,
    setRateText,
    rateLoading, 
    onStarChange, 
    handleRateSubmit 
}) => {
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
            <Button 
                type='default' 
                icon={<StarOutlined style={{ color: 'green' }} />} 
                onClick={handleModal}>
                {userInfo ? 'Leave rating' : 'Login to rate'}
            </Button>
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
                />
                {star ? <span className='ant-rate-text'>{rateDescription[star - 1]}</span> : ''}
                <InputLabel>
                    <label htmlFor='rateText'>Description</label>
                    <input 
                        type='text' 
                        inputMode='text'
                        id='rateText'
                        placeholder='Optional rating description'
                        value={rateText}
                        onChange={e => setRateText(e.target.value)}
                    />
                </InputLabel>
            </Modal>
        </Fragment>
    )
}

export default RatingModal;