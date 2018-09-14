import React, { Component } from 'react';
import store from './store';
import * as actionCreators from './store/actionCreators';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.getMore = this.getMore.bind(this);
    this.handelStoreChange = this.handelStoreChange.bind(this);
    // 组件订阅store， 当store改变时执行改方法
    store.subscribe(this.handelStoreChange);
  }

  // 当store改变时触发的方法
  handelStoreChange() {
    this.setState(store.getState());
  }

  getMore() {
    const action = actionCreators.getInitList()
    // 实际是派发到saga中间件里面了，
    // saga中异步获取数据后在派发changeList
    store.dispatch(action)
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        <button onClick={this.getMore}>请求数据</button>
      </div>
    );
  }
}

export default App;
