// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import characterReducer from './characterReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    characterReducer,
});

// Exports
export default rootReducer;