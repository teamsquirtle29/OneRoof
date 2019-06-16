import { combineReducers } from 'redux';

// import all reducers here
import userReducers from './userReducers';
import manReducers from './manReducers';
import tenantReducers from './tenantReducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  user: userReducers,
  man: manReducers,
  tenant: tenantReducers
});

// make the combined reducers available for import
export default reducers;