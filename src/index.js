import { header, main, dialog } from "./siteBuilder.js";

const content = document.getElementById("content");

content.append(header(), main(), dialog());

window.addEventListener("click", function(event) {
    if (event.target.id == "add-task") {
        document.querySelector("dialog").showModal();
    }
});