import { Provider as ReactProvider } from 'react-redux'

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from './store';

function App() {
  return (
    <ReactProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReactProvider>
  )
}

export default App;
