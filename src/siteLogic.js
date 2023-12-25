export function createProject(title, isDefault, selected) {
    let tasks = [];

    return { title, isDefault, selected, tasks };
}

export function createTask(title, description, notes, dueDate, starred) {
    return { title, description, notes, dueDate, starred };
}
