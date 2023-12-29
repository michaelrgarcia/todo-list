export function createProject(title, selected) {
    let tasks = [];

    return { title, selected, tasks };
}

export function createTask(title, details, dueDate, starred, parentProject, number) {
    return { title, details, dueDate, starred, parentProject, number };
}
