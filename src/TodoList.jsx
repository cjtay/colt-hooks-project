import React from 'react';
import Todo from './Todo';

import { Paper, Divider } from '@material-ui/core';

function TodoList(props) {
    return (
        <Paper>
            {props.todos.map((todo, i) => (
                <>
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        deleteTodo={props.deleteTodo}
                        toggleTodo={props.toggleTodo}
                        editTodo={props.editTodo}
                        key={todo.id}
                    />
                    {i < props.todos.length - 1 && <Divider />}
                </>
            ))}
        </Paper>
    );
}
export default TodoList;
