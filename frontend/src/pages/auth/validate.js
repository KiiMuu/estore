import message from 'antd/lib/message';

const isFormEmpty = (email, password) => {
    return !email || !password;
}

const isValidPassword = password => {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}

export const isFormValid = (email, password) => {
    if (isFormEmpty(email, password)) {
        message.error({
            content: 'All fields are required', 
            style: {
                fontSize: '1.35rem',
                color: '#262626',
            },
            duration: 10
        });
    } else if (!isValidPassword(password)) {
        message.error({
            content: 'Password must be at least 6 characters long', 
            style: {
                fontSize: '1.35rem',
                color: '#262626',
            },
            duration: 10
        });
    } else {
        return true;
    }
}

export const isEmailValid = email => {
    if (!email) {
        message.error({
            content: 'Please type your email address', 
            style: {
                fontSize: '1.35rem',
                color: '#262626',
            },
            duration: 10
        });
    } else {
        return true;
    }
}