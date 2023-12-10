import { header, main, dialog } from "./siteBuilder.js";
import { displayDefault, updateScreen } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

displayDefault();

window.addEventListener("click", function(event) {
    if (event.target.id == "add-task") {
        document.querySelector("dialog").showModal();
    }
}); 

updateScreen();