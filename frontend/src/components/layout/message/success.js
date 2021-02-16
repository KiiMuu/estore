import message from 'antd/lib/message';

const success = msgText => message.success({
    content: msgText, 
    style: {
        fontSize: '1.35rem',
        color: '#262626',
    },
    duration: 10
});

export default success;