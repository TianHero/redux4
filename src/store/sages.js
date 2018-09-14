import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import axios from 'axios';

// 这个函数用来执行异步方法，并派发改给changeList的action
function* getInitList() {
  try {
    const res = yield axios.get('/api/list.json');
    const action = actionCreators.changeList(res.data.data);
    yield put(action)
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  // 所有使用getInitList的action 都会调用本sage的getInitList方法
  yield takeEvery(actionTypes.GET_INIT_LIST, getInitList);
}

export default mySaga;