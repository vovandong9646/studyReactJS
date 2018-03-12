import * as Types from './../constants/ActionType';

export const addItem = (product,quantity) => {
    return {
        type : Types.ADD_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message 
    }
};

export const deleteItem = (product) => {
    return {
        type: Types.DELETE_ITEM,
        product
    }
};

export const updateItem = (product, quantity) => {
    return {
        type: Types.UPDATE_ITEM,
        product,
        quantity
    }
};