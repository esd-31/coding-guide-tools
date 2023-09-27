

const themeFunction = document.querySelector(".theme-content");
themeFunction.addEventListener("click", () => {
    var bodyIndex = document.body;
    bodyIndex.classList.toggle('dark-mode');
    var toggleIcon = document.getElementById("toggle-icon");


    if (toggleIcon.src === "https://img.icons8.com/?size=30&id=59841&format=png") {
        toggleIcon.src = "https://img.icons8.com/?size=1x&id=SyBDr18WdUcD&format=png";
        toggleIcon.classList.toggle("rotation");

    } else {
        toggleIcon.src = "https://img.icons8.com/?size=30&id=59841&format=png";
    }
});


const w3SchoolFunctionNavigate = document.getElementById("w3school-function");
w3SchoolFunctionNavigate.addEventListener("click", () => {
    window.location.href = 'https://www.w3schools.com/';
});

const w3SchoolFunction = document.getElementById("w3school-function");
w3SchoolFunction.addEventListener("mouseenter", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'block';
    frameInfo.innerHTML = `{
About HTML, <br/>
About CSS, <br/>
About JS, <br/>
About PHP, <br/>
About Py, <br/>
and etc programming languages.    
}`;
});

const w3SchoolFunctions = document.getElementById("w3school-function");
w3SchoolFunction.addEventListener("mouseleave", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'none';
    frameInfo.innerHTML = "";
});



const roadmapFunction = document.getElementById("roadmap-function");
roadmapFunction.addEventListener("mouseenter", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'block';
    frameInfo.innerHTML = `<h2>Click this to link to ROADMAP.SH</h2>`
});


const roadmapFunctions = document.getElementById("roadmap-function");
roadmapFunction.addEventListener("mouseleave", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'none';
    frameInfo.innerHTML = "";
});


const roadmapLink = document.getElementById("roadmap-function");
roadmapLink.addEventListener("click", () => {
    window.location.href = 'https://roadmap.sh/';
});


const toolHoverEnter = document.getElementById("tool-function");
toolHoverEnter.addEventListener("mouseenter", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'block';
    frameInfo.innerHTML = `<h2>Click this to link!</h2>`
});


const toolHoverLeave = document.getElementById("tool-function");
toolHoverLeave.addEventListener("mouseleave", () => {
    var frameInfo = document.getElementById("frame-info");
    var frameContainer = document.querySelector(".frame-container");

    frameContainer.style.display = 'none';
    frameInfo.innerHTML = "";
});


const devToolLink = document.getElementById("tool-function");
devToolLink.addEventListener("click", () => {
    window.location.href = 'https://code.visualstudio.com/download';
});