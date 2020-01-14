import React from 'react';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo({ id, task, completed, deleteTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false);

    return (
        <List>
            <ListItem style={{ height: '64px' }}>
                {isEditing ? (
                    <EditTodoForm
                        editTodo={editTodo}
                        id={id}
                        task={task}
                        toggle={toggle}
                    />
                ) : (
                    <>
                        <Checkbox
                            tabIndex={-1}
                            checked={completed}
                            onClick={() => toggleTodo(id)}
                        />
                        <ListItemText
                            style={{
                                textDecoration: completed
                                    ? 'line-through'
                                    : 'none'
                            }}
                        >
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                aria-label="delete"
                                onClick={() => deleteTodo(id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="edit" onClick={toggle}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}
            </ListItem>
        </List>
    );
}

export default Todo;
