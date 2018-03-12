import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem("carts"));

var initialState = data ? data : [];

const myReducer = (state=initialState, action) => {
    switch (action.type) {
        case Types.ADD_CART:
            // neu da co sp roi thi cong so luong them 1
            // neu chua co thi push vao state.
            // dua vao id de phan biet
            var index = findId(state,action.product);
            if(index !== -1) {
                // co gia tri => cong so luong len 1
                state[index].quantity = state[index].quantity + 1;
            } else {
                // chua co => push vao state
                state.push(action);   
            }
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
        case Types.DELETE_ITEM:
            index = findId(state, action.product);
            if(index !== -1) {
                state.splice(index,1);
            }
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
        case Types.UPDATE_ITEM:
            index = findId(state, action.product);
            if(index !== -1) {
                state[index].quantity = action.quantity;
            }
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

var findId = (carts,product) => {
    var result = -1;
    if(carts.length > 0) {
        for(var i=0;i<carts.length;i++) {
            if(carts[i].product.id === product.id) {
                result = i;
                break;
            }
        }
    }
    return result;
}

export default myReducer;