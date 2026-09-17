var welcomeScreen =
    document.querySelector("#welcome");

/* 🆕 PART 3: Put window in the center */

welcomeScreen.style.left =
    (window.innerWidth - welcomeScreen.offsetWidth) / 2 + "px";

welcomeScreen.style.top =
    (window.innerHeight - welcomeScreen.offsetHeight) / 2 + "px";    


var welcomeScreenClose =
    document.querySelector("#welcomeclose");


var welcomeScreenOpen =
    document.querySelector("#welcomeopen");


function updateTime() {

    var currentTime =
        new Date().toLocaleString();


    var timeText =
        document.querySelector("#timeElement");


    timeText.innerHTML = currentTime;
}


updateTime();


setInterval(updateTime, 1000);

function closeWindow(element) {

    element.style.display = "none";
}


function openWindow(element) {

    element.style.display = "flex";
}


welcomeScreenClose.addEventListener(
    "click",
    function() {

        closeWindow(welcomeScreen);

    }
);


welcomeScreenOpen.addEventListener(
    "click",
    function() {

        openWindow(welcomeScreen);

    }
);


dragElement(welcomeScreen);


function dragElement(element) {

    var initialX = 0;

    var initialY = 0;

    var currentX = 0;

    var currentY = 0;


    var header =
        document.getElementById(
            element.id + "header"
        );



    if (header) {

        header.onmousedown =
            startDragging;

    } else {

        element.onmousedown =
            startDragging;

    }


    function startDragging(e) {

        e = e || window.event;

        e.preventDefault();


        initialX = e.clientX;

        initialY = e.clientY;


        document.onmouseup =
            stopDragging;


        document.onmousemove =
            moveWindow;

    }



    function moveWindow(e) {

        e = e || window.event;

        e.preventDefault();


        currentX =
            initialX - e.clientX;


        currentY =
            initialY - e.clientY;


        initialX = e.clientX;

        initialY = e.clientY;


        /* 🆕 Keep the window inside the screen */

var newTop = element.offsetTop - currentY;
var newLeft = element.offsetLeft - currentX;


/* Don't let the window go above the top bar */

if (newTop < 50) {
    newTop = 50;
}


/* Don't let the window go off the left side */

if (newLeft < 0) {
    newLeft = 0;
}


/* Don't let the window go off the right side */

if (newLeft + element.offsetWidth > window.innerWidth) {
    newLeft = window.innerWidth - element.offsetWidth;
}


/* Don't let the window go off the bottom */

if (newTop + element.offsetHeight > window.innerHeight) {
    newTop = window.innerHeight - element.offsetHeight;
}


/* Apply the new position */

element.style.top = newTop + "px";

element.style.left = newLeft + "px";

    }


    function stopDragging() {

        document.onmouseup = null;

        document.onmousemove = null;

    }

}