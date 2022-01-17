# React

### Redux
- 概念：一个javascript容器，进行全局状态管理
- 设计初衷：单页面开发日渐复杂，需要管理更多state，包括服务器响应，缓存数据，本地生成未持久化到服务器的数据，以及UI状态。

- 三大核心：
  - 单一数据源：整个state存储在一个object tree，这个object tree只存在于一个store中。store就是一个容器。
  - state是只读的：唯一改变state的方法是触发action，action用于描述一个已经发生事件的普通对象。保证所有的修改都被集中处理，并严格按照顺序执行。调用store.dispatch()发一个action
  - 纯函数修改：为了描述action如何改变state tree，需要编写reducer，它接受先前的state和action，返回新的state。纯函数的好处是可以复用

#### state
大致分为3类：
- DomainDate：服务器端数据
- UI State：当前UI展示状态
- App State：APP级别状态

#### action
component 通过store.dispatch()方法像store发送一个action
- 本质是js的普通对象
- 对象内部有type属性表示执行的动作，通常为字符串常量
- 只描述事情发生，不描述如何更新state
  ```
  // action
  {
      type: 'const string',
      info: {
          ....
      },
      isLoading: true,
      .....
  }
  ```

#### Reducer
本质是函数，响应发送过来的action，处理state，把state发给store（通过return返回）
```
state = { ... }
reducer = (state = state, action) => {
    // 其他处理
    return {
        // state
    }
}
```

#### Store
是将action与reducer联系到一起的对象。<br>
主要职责:
- 维持state
- getState()获取state
- dispatch()发送action
- subscribe()注册监听
- subscribe()返回值注销监听