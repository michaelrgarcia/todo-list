export function createProject(title, isDefault) {
    let tasks = [];

    return { title, isDefault, tasks };
}

export function createTask(title, description, notes, dueDate, starred) {
    return { title, description, notes, dueDate, starred };
}
