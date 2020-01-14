import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';
import useLocalStorageState from './hooks/useLocalStorageState';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
    const initialTodos = JSON.parse(
        window.localStorage.getItem('my-todos') || '[]'
    );
    // const initialTodos = [
    //     { id: 1, task: 'Clean Fishtank', completed: true },
    //     { id: 2, task: 'Wash Car', completed: false },
    //     { id: 3, task: 'Grow Beard', completed: true }
    // ];

    const [todos, setTodos] = useLocalStorageState('my-todos', initialTodos);

    const addTodo = newTodoText => {
        setTodos([
            ...todos,
            { id: uuid(), task: newTodoText, completed: false }
        ]);
    };

    const deleteTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: '64px' }}
            >
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>

            <Grid container justify="center" style={{ marginTop: '2rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
