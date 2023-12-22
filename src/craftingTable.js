import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon8 from "./svgs/message-text-outline.svg";
import icon9 from "./svgs/star-outline.svg";
import icon10 from "./svgs/cog-outline.svg";
import { dialog } from "./siteBuilder";

function iconCreator(path) {
    let svg = document.createElement("img");
    svg.src = path;
    svg.classList.add("svg");

    return svg;
}

function domProjectCreator(title) {
    const projectsMenu = document.querySelector("#projects-menu > ul");
    let project = document.createElement("li");

    let projectTitle = document.createElement("p");
    projectTitle.textContent = title;

    let projectIcon = iconCreator(icon1);

    project.append(projectIcon, projectTitle);
    projectsMenu.append(project);
}

function domTaskCreator(title) {
    const taskMenu = document.getElementById("tasks");
    let task = document.createElement("li");

    let taskInfo = document.createElement("div");
    taskInfo.classList.add("task");

    let checkbox = document.createElement("div");
    checkbox.classList.add("task-check");

    let taskTitle = document.createElement("p");
    taskTitle.textContent = title;

    taskInfo.append(checkbox, taskTitle);

    let taskSettings = document.createElement("div");
    taskSettings.classList.add("task-config");

    let notes = iconCreator(icon8);
    let star = iconCreator(icon9);
    let other = iconCreator(icon10);

    taskSettings.append(notes, star, other);

    task.append(taskInfo, taskSettings);
    taskMenu.append(task);

    //need to store description, dueDate, starred, notes somewhere
    //maybe in its own dialog form
}

function textInput(labelText, givenId) {
    const mainElement = document.createElement("li");

    const label = document.createElement("label")
    label.htmlFor = givenId;
    label.textContent = labelText;
    label.style.alignSelf = "center"

    const input = document.createElement("input");
    input.id = givenId;
    input.type = "text";
    input.name = givenId;
    input.required = true;

    mainElement.append(label, input);

    return mainElement;
}

function bigTextArea(labelText, givenId) {
    const mainElement = document.createElement("li");
    mainElement.style.flexDirection = "column";

    const label = document.createElement("label");
    label.htmlFor = givenId;
    label.textContent = labelText;

    const textarea = document.createElement("textarea");
    textarea.id = givenId;
    textarea.name = givenId;
    textarea.rows = "10";
    textarea.cols = "20";
    textarea.placeholder = "Type some notes or a description here";

    mainElement.append(label, textarea);

    return mainElement;
}

function elementCrafter(param1, param2, param3) {
    const icon = function(param1) {
        let craftedIcon = iconCreator(param1);
        return craftedIcon;
    }

    const domProject = function(param1) {
        let craftedProject = domProjectCreator(param1);
        return craftedProject;
    }

    const domTask = function(param1) {
        let craftedTask = domTaskCreator(param1);
        return craftedTask;
    }

    const textField = function(param1, param2) {
        let newTextField = textInput(param1, param2);
        return newTextField;
    }

    const textAreaField = function(param1, param2) {
        let newTextAreaField = bigTextArea(param1, param2);
        return newTextAreaField;
    }

    return { param1, param2, icon, domProject, domTask, textField, textAreaField };
}

export default elementCrafter();