import { header, main } from "./siteBuilder.js";

const content = document.getElementById("content");

content.append(header(), main());