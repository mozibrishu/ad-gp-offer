let bg = document.querySelector(".bg");
let copy1 = document.querySelector(".copy1");
let Onegb = document.querySelector(".Onegb");
let Twogb = document.querySelector(".Twogb");
let arrows = document.querySelector(".arrows");
let selector = document.querySelector(".selector");
let cta1 = document.querySelector(".cta1");
let OnegbCopy = document.querySelector(".OnegbCopy");
let TwogbCopy = document.querySelector(".TwogbCopy");
let buynow = document.querySelector(".buynow");


if (typeof window.orientation !== 'undefined') {
    console.log("Touch");
    // dragElementMobileLeft(canO);
    // dragElementMobileRight(canG);
}
else {
    dragElement(selector);
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        // animationRotation();

        e = e || window.event;
        e.preventDefault();
        pos2 = e.clientX;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientX;

        pos2 = e.clientX;
        leftSpace = elmnt.offsetLeft - pos1;
console.log(leftSpace);
        if (leftSpace < 105) { leftSpace = 105 }
        if (leftSpace > 155) { leftSpace = 155 }
        if (leftSpace < 105) {
            leftSpace = 105;
            // operationOneGb();
        }
        if (leftSpace > 155) {
            leftSpace = 155;
            // operationTwoGb();
        }
        elmnt.style.left = leftSpace + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // setTimeout(initialPosition, 3000);
    }
}
