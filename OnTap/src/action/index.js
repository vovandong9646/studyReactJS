import callApi from './../callApi/callApi';
import * as ActionType from './../constant/ActionType';

export const fetchDataFromAPI = () => {
    return (dispatch) => {
        return callApi("GET","products",null).then(res=>{
            dispatch(saveDataFromStore(res.data));
        });
    }
};

export const saveDataFromStore = (products) => {
    return {
        type: ActionType.FETCH_ALL,
        products
    }
};

export const addProduct = () => {
    return {
        type: ActionType.ADD_ITEM
    }
};