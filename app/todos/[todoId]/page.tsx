import React from 'react'

type PageProps = {
    params: {
        todoId : string;
    }
}

const fetchTodo = async (todoId: string) => {
   // console.log(todoId)
    const res = await fetch(`https:jsonplaceholder.typicode.com/todos/${todoId}`,)

    const todo:Todo = await res.json();
    //console.log(todo)
    return todo;

}

 async function TodoPage({params: { todoId } } : PageProps) {
 
    const todo = await fetchTodo(todoId);
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>
            Completed: {todo.Completed ? "Yes": "No"}
        </p>
        <p className="border-t border-black mt-5 test-right">
            By User: {todo.userId}
            </p>
    </div>
  )
}

export default TodoPage