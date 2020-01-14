import React from 'react';
import TextField from '@material-ui/core/TextField';
import inputHook from './hooks/inputHook';

function EditTodoForm({ id, task, editTodo, toggle }) {
    const [value, handleChange, reset] = inputHook(task);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggle();
            }}
            style={{ marginLeft: '1rem', width: '70%' }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}

export default EditTodoForm;
