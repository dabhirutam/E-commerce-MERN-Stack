import { createStore } from 'redux';
import RootReducer from './services/RootReducer';

const Store = createStore(RootReducer);

export default Store;