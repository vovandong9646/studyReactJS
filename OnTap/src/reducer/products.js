import * as TypeAction from './../constant/ActionType';

var initialState = [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case TypeAction.FETCH_ALL:
            state = action.products;
            return [...state];
        case TypeAction.ADD_ITEM:
            console.log(action);
            return [...state];
        default : return [...state];
    }
};

export default myReducer;