//全レデューサーを一つのレデューサーに結合

import { combineReducers } from 'redux'
import count from './count';

// export defaiul combineReducers({foo,bar,bax})

export default combineReducers({count})