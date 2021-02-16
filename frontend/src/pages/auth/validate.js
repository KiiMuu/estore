import error from '../../components/layout/message/error';

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
        error('All fields are required');
    } else if (!isValidPassword(password)) {
        error('Password must be at least 6 characters long');
    } else {
        return true;
    }
}

export const isEmailValid = email => {
    if (!email) {
        error('Please type your email address');
    } else {
        return true;
    }
}