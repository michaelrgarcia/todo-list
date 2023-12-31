(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"svgs/format-list-bulleted-square..svg",n=t.p+"svgs/information-variant-circle-outline..svg",a=t.p+"svgs/archive..svg",o=t.p+"svgs/calendar..svg",s=t.p+"svgs/calendar-arrow-right..svg",c=t.p+"svgs/star..svg",d=t.p+"svgs/check-bold..svg",r=t.p+"svgs/message-text-outline..svg",l=t.p+"svgs/star-outline..svg",i=t.p+"svgs/cog-outline..svg",u=t.p+"svgs/close-circle..svg";function m(t){let e=document.createElement("img");return e.src=t,e.classList.add("svg"),e}const p={param1:undefined,param2:undefined,param3:undefined,param4:undefined,param5:undefined,param6:undefined,icon:function(t){return m(t)},domProject:function(t,n){return function(t,n){const a=document.querySelector("#projects-menu > ul");let o=document.createElement("button");o.setAttribute("data-pnum",n),o.type="button";let s=document.createElement("p");s.textContent=t;let c=m(e);o.append(c,s),a.append(o)}(t,n)},domTask:function(t,e,n,a,o,s){return function(t,e,n,a,o,s){const d=document.getElementById("tasks");let u=document.createElement("li");u.setAttribute("data-tnum",`${o}.${a}`);let p=document.createElement("div");p.classList.add("task");let g=document.createElement("button");g.classList.add("task-check");let f=document.createElement("p");f.textContent=t;let E=document.createElement("p");E.classList.add("parent-project-name"),E.textContent=`(${e})`,E.style.display="All Tasks"===n?"block":"none",p.append(g,f,E);let v=document.createElement("div");v.classList.add("task-config");let k,y=m(r);y.classList.add("notes"),k=m(s?c:l),k.classList.add("star");let h=m(i);h.classList.add("other"),v.append(y,k,h),u.append(p,v),d.append(u)}(t,e,n,a,o,s)},textField:function(t,e){return function(t,e){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=e,a.textContent=t,a.style.alignSelf="center";const o=document.createElement("input");return o.id=e,o.type="text",o.name=e,o.required=!0,n.append(a,o),n}(t,e)},textAreaField:function(t,e){return function(t,e){const n=document.createElement("li");n.style.flexDirection="column";const a=document.createElement("label");a.htmlFor=e,a.textContent=t;const o=document.createElement("textarea");return o.id=e,o.name=e,o.rows="10",o.cols="20",o.placeholder="Type some notes or a description here",n.append(a,o),n}(t,e)},dateField:function(t,e){return function(t,e){const n=document.createElement("li"),a=document.createElement("label");a.htmlFor=e,a.textContent=t,a.style.alignSelf="center",a.style.marginRight="-15px";const o=document.createElement("input");return o.id=e,o.name=e,o.type="date",n.append(a,o),n}(t,e)}};function g(t){const e=document.querySelector("form > ul");document.querySelector(".dialog-heading > p ").textContent=t,e.replaceChildren()}const f=[],E=v("All Tasks",!0);function v(t,e){return{title:t,selected:e,tasks:[]}}f.push(E);const k=f,y=k[0];function h(t){const e=t.split("."),n=e[0],a=e[1];return k[n].tasks[a]}function b(){document.querySelector("#projects-menu > ul").replaceChildren(),k.forEach(((t,e)=>{e>0&&p.domProject(t.title,e)}))}function x(t){document.getElementById("tasks").replaceChildren(),t.tasks.forEach((e=>{const n=k.findIndex((t=>t.title===e.parentProject)),a=k[n].tasks.findIndex((t=>t.number===e.number));if(e.number=a,e.starred){let o=!0;p.domTask(e.title,e.parentProject,t.title,a,n,o)}else p.domTask(e.title,e.parentProject,t.title,a,n)}))}function C(t){let e=k[t];k.forEach((t=>{t.title!==e.title?t.selected=!1:t.selected=!0})),function(t){const e=document.getElementById("add-task"),n=document.querySelector(".project-name");t===k[0]?e.style.display="none":e.style.display="block",n.textContent=t.title}(e),x(e)}document.getElementById("content").append(function(){const t=document.createElement("header"),a=p.icon(e),o=document.createElement("p");o.id="header-text",o.textContent="To-Do List";const s=p.icon(n);return t.append(a,o,s),t}(),function(){const t=document.createElement("main");return t.append(function(){const t=document.createElement("nav");return t.append(function(){const t=document.createElement("div");t.id="filter-tasks";const e=document.createElement("p");e.classList.add("nav-header"),e.textContent="Filter Tasks";const n=document.createElement("ul");for(let t=0;t<5;t++){let e=document.createElement("button");e.type="button";let r,l=document.createElement("p");switch(t){case 0:r=a,l.textContent="All Tasks",e.classList.add("all-tasks");break;case 1:r=o,l.textContent="Today",e.classList.add("todays-tasks");break;case 2:r=s,l.textContent="7 Days",e.classList.add("7days-tasks");break;case 3:r=c,l.textContent="Starred",e.classList.add("starred-tasks");break;case 4:r=d,e.classList.add("completed-tasks"),l.textContent="Completed"}let i=p.icon(r);e.append(i,l),n.append(e)}return t.append(e,n),t}(),function(){const t=document.createElement("div");t.id="projects-menu";const e=document.createElement("p");e.classList.add("nav-header"),e.textContent="Projects";const n=document.createElement("ul"),a=document.createElement("button");return a.type="button",a.id="add-project",a.textContent="Add project",t.append(e,n,a),t}()),t}(),function(){const t=document.createElement("div");t.id="overview";const e=document.createElement("p");e.textContent="PLACEHOLDER",e.classList.add("project-name");const n=document.createElement("ul");n.id="tasks";const a=document.createElement("button");return a.type="button",a.id="add-task",a.textContent="Add task",t.append(e,n,a),t}()),t}(),function(){const t=document.createElement("dialog"),e=document.createElement("div");e.classList.add("dialog-heading");const n=document.createElement("p");n.textContent="placeholder";const a=p.icon(u);a.classList.add("close-dialog"),e.append(n,a);const o=document.createElement("form");o.method="dialog";const s=document.createElement("ul");return o.append(s),t.append(e,o),t}()),C(0),window.addEventListener("click",(function(t){const e=document.querySelector("dialog");"all-tasks"!==t.target.className&&"all-tasks"!==t.target.parentNode.className||C(0),t.target.dataset.pnum?C(t.target.dataset.pnum):t.target.parentNode.dataset.pnum&&C(t.target.parentNode.dataset.pnum),"add-task"===t.target.id&&(e.showModal(),function(){g("Add Task");const t=document.querySelector("form > ul"),e=p.textField("Title:","task-title"),n=p.textAreaField("Details:","task-details"),a=p.dateField("Due:","task-due"),o=document.createElement("button");o.type="submit",o.classList.add("submit-task"),o.textContent="Done",t.append(e,n,a,o)}()),"add-project"===t.target.id&&(e.showModal(),function(){g("Add Project");const t=document.querySelector("form > ul"),e=p.textField("Title:","project-title"),n=document.createElement("button");n.type="submit",n.classList.add("submit-project"),n.textContent="Done",t.append(e,n)}()),"submit-task"===t.target.className&&function(){const t=document.getElementById("task-title"),e=document.getElementById("task-details"),n=document.getElementById("task-due"),a=k.find((t=>!0===t.selected)),o=document.querySelector("dialog");if(""!==t.value){const s=function(t,e,n,a,o,s){return{title:t,details:e,dueDate:n,starred:!1,parentProject:o,number:void 0}}(t.value,e.value,n.value,0,a.title);a.tasks.push(s),y.tasks.push(s),o.close(),x(a)}}(),"submit-project"===t.target.className&&function(){const t=document.getElementById("project-title"),e=document.querySelector("dialog");if(""!==t.value){const n=v(t.value,!1);k.push(n),e.close(),b()}}(),"svg close-dialog"===t.target.className&&e.close(),"svg notes"===t.target.className&&(e.showModal(),function(){g("Details");const t=document.querySelector("form > ul"),e=p.textAreaField("","task-details"),n=document.createElement("button");n.type="submit",n.classList.add("confirm-details"),n.textContent="Done",t.append(e,n)}(),function(t){const e=document.getElementById("task-details"),n=document.querySelector("dialog"),a=h(t);n.setAttribute("data-tnum",t),e.textContent=a.details}(t.target.parentNode.parentNode.dataset.tnum)),"confirm-details"===t.target.className&&function(){const t=document.querySelector("dialog"),e=document.getElementById("task-details"),n=h(t.dataset.tnum);n.details!==e.value?!0===confirm("Confirm Changes")&&(n.details=e.value,t.close()):t.close()}(),"svg star"===t.target.className&&function(t){const e=h(t),n=k.find((t=>t.title===e.parentProject));e.starred?e.starred=!1:e.starred=!0,x(n)}(t.target.parentNode.parentNode.dataset.tnum)})),b()})();