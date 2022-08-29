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
    dragElementMobile(selector);
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
        if (leftSpace < 65) { leftSpace = 65 }
        if (leftSpace > 195) { leftSpace = 195 }
        if (leftSpace <= 105) {
            operationOneGb();
        }
        if (leftSpace >= 155) {
            operationTwoGb();
        }
        elmnt.style.left = leftSpace + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        // setTimeout(initialPosition, 3000);
    }
}


function operationOneGb() {
    // Onegb.classList ? Onegb.className += ' scaleUp-animation' : Onegb.classList.add('scaleUp-animation');
    $(".Onegb").addClass("scaleUp-animation");
    setTimeout(() => {
        $(".copy1").addClass("textSlideRemove-animation");
        $(".selector").addClass("selectorRemove-animation");
        $(".Onegb").removeClass("scaleUp-animation");
        $(".Onegb").addClass("oneGbCardRemove-animation");
        $(".Twogb").addClass("twoGbCardSecondaryRemove-animation");
        setTimeout(()=>{
            $(".cta1").addClass("cta1Remove-animation");
        },300);

        setTimeout(() => {
            $(".Onegb").addClass("hidden");
            $(".Twogb").addClass("hidden");
            $(".arrows").addClass("hidden");

            $(".OnegbCopy").removeClass("hidden");
            $(".buynow").removeClass("hidden");
            $(".OnegbCopy").addClass("OnegbCopy-animation");
            $(".buynow").addClass("buynow-animation");
            setTimeout(() => { 
                $(".buynow").removeClass("buynow-animation");
                $(".buynow").addClass("pulse-animation"); }, 800)


        }, 700);
    }, 600);
}

function operationTwoGb() {
     $(".Twogb").addClass("scaleUp-animation");
    setTimeout(() => {
        $(".copy1").addClass("textSlideRemove-animation");
        $(".selector").addClass("selectorRemove-animation");
        $(".Twogb").removeClass("scaleUp-animation");
        $(".Onegb").addClass("oneGbCardSecondaryRemove-animation");
        $(".Twogb").addClass("twoGbCardRemove-animation");
        setTimeout(()=>{
            $(".cta1").addClass("cta1Remove-animation");
        },300);

        setTimeout(() => {
            $(".Onegb").addClass("hidden");
            $(".Twogb").addClass("hidden");
            $(".arrows").addClass("hidden");

            $(".TwogbCopy").removeClass("hidden");
            $(".buynow").removeClass("hidden");
            $(".TwogbCopy").addClass("OnegbCopy-animation");
            $(".buynow").addClass("OnegbCopy-animation");
            setTimeout(() => { 
                $(".buynow").removeClass("OnegbCopy-animation");
                $(".buynow").addClass("pulse-animation"); }, 800)


        }, 700);
    }, 600);
}


// touch Code
function dragElementMobile(elmnt) {
    var pos1 = 0, pos2 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
    } else {
        elmnt.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        // animationRotation();

        e.preventDefault();
        e = e.touches[0] || window.event;
        pos2 = e.clientX;
        document.ontouchmove = elementDrag;
        document.ontouchend  = closeDragElement;
    }

    function elementDrag(e) {
        e = e.touches[0] || window.event;
        pos1 = pos2 - e.clientX;

        pos2 = e.clientX;
        leftSpace = elmnt.offsetLeft - pos1;
        console.log(leftSpace);
        if (leftSpace < 65) { leftSpace = 65 }
        if (leftSpace > 195) { leftSpace = 195 }
        if (leftSpace <= 105) {
            operationOneGb();
        }
        if (leftSpace >= 155) {
            operationTwoGb();
        }
        elmnt.style.left = leftSpace + "px";
    }

    function closeDragElement() {
        document.ontouchend  = null;
        document.ontouchmove  = null;
        // setTimeout(initialPosition, 3000);
    }
}
