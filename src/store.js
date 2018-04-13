import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { PACK_BUFFER} from './actions/actionTypes'

const hackReducer =function (reduxFormReducer) {
    return (state,action) => {
        if (action.type===PACK_BUFFER) {
            return Object.assign({}, state, {
                "Buffer": action.buffer
            });
        } else
            return reduxFormReducer(state,action);
    }
    
}

const reducer = combineReducers({
    form: hackReducer(reduxFormReducer), // mounted under "form"
});

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

export default store;
