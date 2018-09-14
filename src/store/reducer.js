import * as actionTypes from './actionTypes';

const defaultState = {
  list: ['windows', 'mac', 'linux']
}

// reducer 可以接收state，但是不能修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      const newState = JSON.parse(JSON.stringify(state));
      newState.list = newState.list.concat(action.value);      
      return newState;
    default:
      return state;
  }
}
