import React from 'react';
import inputHook from './hooks/inputHook';

import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = inputHook('');

    return (
        <Paper
            style={{
                margin: '1rem auto',
                padding: '0 1rem',
                width: '70%'
                // backgroundColor: 'lightgrey'
            }}
        >
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    style={{
                        margin: '10px auto',
                        width: '100%'
                    }}
                    label="New todo"
                />
            </form>
        </Paper>
    );
}
