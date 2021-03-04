import errorAlert from '../../components/layout/message/errorAlert';

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
        errorAlert('All fields are required');
    } else if (!isValidPassword(password)) {
        errorAlert('Password must be at least 6 characters long');
    } else {
        return true;
    }
}

export const isEmailValid = email => {
    if (!email) {
        errorAlert('Please type your email address');
    } else {
        return true;
    }
}