import { createStore, applyMiddleware, compose } from 'redux'; 
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

// 引入异步逻辑
import mySaga from './sages';

// 创建一个sage中间件
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  // 把sage中间件传入进去
  applyMiddleware(sagaMiddleware)
);
const store = createStore(reducer, enhancer);

// 运行异步逻辑
sagaMiddleware.run(mySaga)

export default store;
