import message from 'antd/lib/message';

const successAlert = (msgText, duration = 10) => message.success({
    content: msgText, 
    style: {
        fontSize: '1.35rem',
        color: '#262626',
    },
    duration: duration,
});

export default successAlert;