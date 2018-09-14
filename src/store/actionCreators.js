import * as actionTypes from './actionTypes';


// 这个action是sage内部用来派发的
export const changeList = (value) => ({
  type: actionTypes.CHANGE_LIST,
  value
})

// 这个action是组件中调用的，和saga关联，并执行异步方法
export const getInitList = () => ({
  type: actionTypes.GET_INIT_LIST
})