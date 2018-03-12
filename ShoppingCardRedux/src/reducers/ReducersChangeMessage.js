import * as Types from './../constants/ActionType';
import * as Message from './../constants/MessageType';
var initialState = Message.WEL_COME;

const myReducer = (state=initialState, action) => {
    
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
};

export default myReducer;