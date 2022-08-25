// 当前store中，新的state覆盖旧的state（用于combineReducers生成的state）
const combineState = (
  { oldState = {}, newState = {} },
  { store = undefined, actionMap = undefined }
) => {
  if (!store) {
    console.error(`请传入store对象(即redux调用createStore方法返回的对象)`);
    return;
  }
  if (!actionMap) {
    console.error(`请传入所有reducer对应覆盖其state的action方法集合对象`);
    return;
  }
  const oldStateKeys = Object.keys(oldState);
  const newStateKeys = Object.keys(newState);

  for (let i = 0; i < newStateKeys.length; i++) {
    const key = newStateKeys[i];
    if (oldStateKeys.indexOf(key) == -1) {
      console.error(
        `当前redux中并未定义名为${key}的reducer，所以该状态未能被覆盖，请创建好对应的reducer后重试`
      );
      continue;
    }
    const newStateVal = JSON.stringify(newState[key]);
    const oldStateVal = JSON.stringify(oldState[key]);
    if (newStateVal !== oldStateVal) {
      store.dispatch(actionMap[key](newState[key]));
    }
  }
};

export default combineState;
