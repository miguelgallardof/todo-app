import { Todo } from "../Todo/Todo"
import { TodoFilters } from "../TodoFilters"

export const TodoList = ({ todos, handleSetComplete, handleDelete, handleClearComplete, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos }) => {
  return(
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map(todo => {
        return (
          <Todo 
            key={todo.id}
            todo={todo}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
          />

        )
      })}
      <TodoFilters 
        activeFilter = {activeFilter}
        total = {todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  )
}