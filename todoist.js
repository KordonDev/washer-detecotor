const fetch = require('node-fetch');

const token = process.env.TODOIST_TOKEN;

const newTask = {
    content: 'Wäsche aufhängen',
    due_string: 'in 1 Minute',
    due_lang: 'de',
};

export const createNewTask = () => {
    return fetch('https://api.todoist.com/rest/v1/tasks', {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(res => res.json())
}