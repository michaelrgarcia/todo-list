import { header, main, dialog, addTaskPrompt, addProjectPrompt, detailsPrompt, settingsPrompt, renamePrompt, projectSettingsPrompt, projectRenamePrompt, infoPrompt } from "./siteBuilder.js";
import { updateProjects, domCreateTask, domCreateProject, displayDetails, displayTaskTitle, displayProjectTitle } from "./projectTaskRender.js";
import { changeDialogTaskNum, submitDetails, submitTaskTitle, closeDialog, changeDialogProjectNum, confirmNewProjectName, toggleDropdown } from "./otherDomLogic.js";
import { selectProject, starTask, deleteTask, completeTask } from "./siteLogic.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

selectProject(0); //selects "All Tasks" project

window.addEventListener("click", function(event) {
    let domTask = event.target.parentNode.parentNode.dataset.tnum;
    let domProject = event.target.parentNode.dataset.pnum;

    if (event.target.className === "all-tasks" || event.target.parentNode.className === "all-tasks") {
        selectProject(0);
    }
    if (event.target.className === "starred-tasks" || event.target.parentNode.className === "starred-tasks") {
        selectProject(1);
    }
    if (event.target.className === "completed-tasks" || event.target.parentNode.className === "completed-tasks") {
        selectProject(2);
    }
    if (event.target.dataset.pnum) {
        selectProject(event.target.dataset.pnum);
    } else if (event.target.parentNode.dataset.pnum) {
        selectProject(event.target.parentNode.dataset.pnum);
    }
    if (event.target.id === "add-task") {
        addTaskPrompt();
    }
    if (event.target.id === "add-project") {
        addProjectPrompt();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
    if (event.target.className === "submit-project") {
        domCreateProject();
    }
    if (event.target.className === "svg close-dialog") {
        closeDialog();
    }
    if (event.target.className === "svg notes" ||
        event.target.className === "svg notes completed") {
        detailsPrompt();
        displayDetails(domTask);
    }
    if (event.target.className === "confirm-details") {
        submitDetails();
    }
    if (event.target.className === "svg star") {
        starTask(domTask);
    }
    if (event.target.className === "svg other") {
        settingsPrompt();
        changeDialogTaskNum(domTask);
    }
    if (event.target.className === "rename-task") {
        renamePrompt();
        displayTaskTitle();
    }
    if (event.target.className === "confirm-new-task-title") {
        submitTaskTitle();
    }
    if (event.target.className === "confirm-new-project-title") {
        confirmNewProjectName();
    }
    if (event.target.className === "delete-task") {
        deleteTask();
    }
    if (event.target.className === "task-check") {
        completeTask(domTask);
    }
    if (event.target.className === "svg site-info") {
        infoPrompt();
    }
    if (event.target.className === "svg toggle-nav") {
        event.stopPropagation();
        toggleDropdown();
    }
});

updateProjects();