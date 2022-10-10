window.onload = function () {
    "use strict";
    // put all of your code here
    let textArea = document.getElementById("text-area");
    let stopBtn = document.getElementById("stop");
    let currentAnimation = ANIMATIONS["blank"];
    let fontSizeDropdown = document.getElementById("fontsize");
    let interval;
    let delay = 250;
    let frames;
    let fontSize;
    udpateFontSize();
    let frameIndex = 0;


    document.getElementById("start").onclick = function () {
        stopBtn.disabled = false;
        frames = setUpFrames();
        runAnimation();
    };

    stopBtn.onclick = function () {
        clearInterval(interval);
        textArea.value = currentAnimation;
        stopBtn.disabled = true;
        frameIndex = 0;
    };

    document.getElementById("animation").onchange = function () {
        currentAnimation = ANIMATIONS[document.getElementById("animation").value];
        textArea.value = currentAnimation;
    }

    fontSizeDropdown.onchange = function () {
        udpateFontSize();
    }

    document.getElementById("turbo").addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            delay = 50;
        } else {
            delay = 250;
        }
        if (interval)
            runAnimation();
    })

    function setUpFrames() {
        currentAnimation = textArea.value;
        return currentAnimation.split("=====\n");
    }

    function udpateFontSize() {
        fontSize = fontSizeDropdown.value;
        textArea.style.fontSize = fontSize + 'px';
    }

    function runAnimation() {
        if (interval)
            clearInterval(interval);
        interval = setInterval(function () {
            textArea.value = frames[frameIndex++];
            if (frameIndex >= frames.length)
                frameIndex = 0;
        }, delay);
    }
}