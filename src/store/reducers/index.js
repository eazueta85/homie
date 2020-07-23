import { combineReducers } from 'redux';

import propertyReducer from './propertyReducer'
import activePropertyReducer from './activePropertyReducer'

export default combineReducers({
    properties: propertyReducer,
    activeProperty: activePropertyReducer,
});