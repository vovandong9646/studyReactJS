import { combineReducers } from 'redux';
import ReducersProducts from './ReducersProducts';
import ReducersCarts from './ReducersCarts';
import ReducersChangeMessage from './ReducersChangeMessage';

const myReducer = combineReducers({
    ReducersProducts,
    ReducersCarts,
    ReducersChangeMessage
});

export default myReducer;