// ***reducer***
//reducer is a pure function that takes the previous state and an action
//(previousState, action) => newState
//No API calls. No mutations. Just a calculation.

import { VisibilityFilters, ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actions';
import { addTodo, completeTodo, setVisibilityFilter } from './actions';
import {createStore} from 'redux'
const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState;
//   }
//
//   // For now, don’t handle any actions
//   // and just return the state given to us.
//   return state;
// }

//don’t mutate the state
//return the previous state in the default case.
//It’s important to return the previous state for any unknown action
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//   case SET_VISIBILITY_FILTER:
//     return Object.assign({}, state, {
//       visibilityFilter: action.payload.filter
//     });
//   default:
//     return state;
//   }
// }
//
// function todoApp(state = initialState, action) {
//   switch (action.type) {
//   case SET_VISIBILITY_FILTER:
//     return Object.assign({}, state, {
//       visibilityFilter: action.payload.filter
//     });
//   case ADD_TODO:
//     return Object.assign({}, state, {
//       //without the help from immutable
//       todos: [...state.todos, {
//         text: action.payload.text,
//         completed: false
//       }]
//     });
//   case COMPLETE_TODO:
//     return Object.assign({}, state, {
//       todos: [
//         ...state.todos.slice(0, action.payload.index),
//         Object.assign({}, state.todos[action.payload.index], {
//           completed: true
//         }),
//         ...state.todos.slice(action.payload.index + 1)
//       ]
//     });
//   default:
//     return state;
//   }
// }

//split code logic
function todos(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
  case ADD_TODO:
    return [...state, {
      text: action.payload.text,
      completed: false
    }];
  case COMPLETE_TODO:
    return [
      ...state.slice(0, action.payload.index),
      Object.assign({}, state[action.payload.index], {
        completed: true
      }),
      ...state.slice(action.payload.index + 1)
    ];
  default:
    return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.payload.filter;
  default:
    return state;
  }
}
// function todoApp(state = {}, action){
//   console.log(action);
//   return{
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }

//combine reducer in combineReducers
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

let store = createStore(todoApp);
store.dispatch(addTodo('hello'));
export default todoApp;
