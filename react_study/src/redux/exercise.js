import { createStore } from "redux";

// 초기상태를 정의한다
const initialState = {
  count: 0,
  myText: "",
  myList: [],
};

// 액션타입을 정의한다 주로 대문자이다
const INCRE = "INCRE";
const DECRE = "DECRE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_LIST = "ADD_LIST";

//액션 생성함수 정의
const increase = () => ({
  type: INCRE,
});
const decrease = () => ({
  type: DECRE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addList = (item) => ({
  type: ADD_LIST,
  item,
});

// 리듀서를 만들어보자
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCRE:
      return {
        ...state,
        count: state.count + 10,
      };
    case DECRE:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.myText,
      };
    case ADD_LIST:
      return {
        ...state,
        list: state.myList.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

// 스토어안데 상태가 바뀔때마다 호출되는 listener함수

const listener = () => {
  const state = store.getState();
  console.log("리스너 발동", state);
};
const aaa = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("들어가니?"));
store.dispatch(addList({ id: 1, text: "dkssud" }));
