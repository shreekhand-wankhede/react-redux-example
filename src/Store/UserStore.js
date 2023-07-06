import {createStore} from 'redux'
import { UserReducer } from './reducer/UserReducer';

export const UserStore = createStore(UserReducer);