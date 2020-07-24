import { combineReducers } from 'redux';

import propertyReducer from './propertyReducer'
import activePropertyReducer from './activePropertyReducer'
import paginatePropertyReducer from './paginatePropertyReducer'

export default combineReducers({
    properties: propertyReducer,
    activeProperty: activePropertyReducer,
    paginateProperty: paginatePropertyReducer,
});