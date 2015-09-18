//Allows access to state via getState();
//Allows state to be updated via dispatch(action);
//Registers listeners via subscribe(listener).

import {createStore} from 'redux'
import todoApp from './reducer'
import { addTodo, completeTodo, setVisibilityFilter } from './actions';

let store = createStore(todoApp);
store.dispatch(addTodo('hello'));
store.dispatch(addTodo('hello AGAIN'));
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addTodo('hello AGAIN'));
unsubscribe();
store.dispatch(addTodo('hello AGAIN'));
