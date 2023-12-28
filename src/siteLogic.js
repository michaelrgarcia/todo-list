export function createProject(title, selected) {
    let tasks = [];

    return { title, selected, tasks };
}

export function createTask(title, description, notes, dueDate, starred, parentProject) {
    return { title, description, notes, dueDate, starred, parentProject };
}
