import { useState } from 'react';
import UserLayout from '../UserLayout';
import { auth } from '../../../firebase';
import success from '../../../components/layout/message/success';
import error from '../../../components/layout/message/error';

// * @antd
import Typography from 'antd/lib/typography';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';

import {
    KeyOutlined,
} from '@ant-design/icons';

const {
    Title,
    Text,
} = Typography;

const Password = () => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

        await auth.currentUser.updatePassword(password).then(() => {
            setLoading(false);

            success('Password updated successfully');

            setPassword('');
        }).catch(err => {
            setLoading(false);

            error(err.message);
        });
    }

    const passwordUpdateForm = () => (
        <form>
            <Space size='middle' direction='vertical'>
                <div>
                    <span><KeyOutlined /></span>
                    <input
                        type='password'
                        inputMode='text'
                        value={password}
                        placeholder='Type new password'
                        onChange={e => setPassword(e.target.value)}  
                    />
                </div>
                <Button 
                    onClick={handleSubmit} 
                    type='primary' 
                    loading={loading ? true : false}>
                    Update
                </Button>
            </Space>
        </form>
    )

    return (
        <UserLayout>
            <div style={{ minHeight: 360 }}>
                <Title level={4}>
                    Password update
                </Title>
                <Text type='secondary'>
                    update your current password
                </Text>
                {passwordUpdateForm()}
            </div>
        </UserLayout>
    )
}

export default Password;