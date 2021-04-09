export const isCashOnDeliveryReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_CASH_ON_DELIVERY':
            return action.payload;
        default:
            return state;
    }
}