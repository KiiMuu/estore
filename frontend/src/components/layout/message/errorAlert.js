import message from 'antd/lib/message';

const errorAlert = (msgText, duration = 10) => message.error({
    content: msgText, 
    style: {
        fontSize: '1.35rem',
        color: '#262626',
    },
    duration: duration,
});

export default errorAlert;