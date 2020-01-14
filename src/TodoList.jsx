import React from 'react';
import Todo from './Todo';

import { Paper, Divider } from '@material-ui/core';

function TodoList(props) {
    return (
        <Paper>
            {props.todos.map((todo, i) => (
                <React.Fragment key={todo.id}>
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        deleteTodo={props.deleteTodo}
                        toggleTodo={props.toggleTodo}
                        editTodo={props.editTodo}
                    />
                    {i < props.todos.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </Paper>
    );
}
export default TodoList;
