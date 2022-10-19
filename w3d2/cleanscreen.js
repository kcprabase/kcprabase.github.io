let params = {};
let circles = [];
$(() => {
    $('#startBtn').click(e => {
        params = getFormData();
        addCircle();
        animate();
        addClickEvent();
    });
});

function getFormData() {
    return $('#form').serializeArray()
        .reduce(function (json, { name, value }) {
            json[name] = value;
            return json;
        }, {});
}

function addCircle() {
    for (let i = 0; i < params.circleNumber; i++) {
        circles.push($('<div>', {
            'class': 'circle',
            css: {
                'top': getRandomNum(50, 500),
                'left': getRandomNum(100, 1400),
                'width': params.width,
                'height': params.width,
                'border-radius': params.width / 2,
                'background-color': getRandomColor()
            }
        }));
    }
    // debugger;
    $('.circle-container').append(circles);
}

function animate() {
    setInterval(() => {
        $(".circle").css("width", (idx, old) => {
            var x = parseInt(old) + parseInt(params.growthAmount) + "px";
            return x;
        });
        $(".circle").css("height", (idx, old) => {
            return parseInt(old) + parseInt(params.growthAmount) + "px";
        });
        $(".circle").css("border-radius", (idx, old) => {
            return parseInt(old) + parseInt(params.growthAmount) / 2 + "px";
        });
        $(".circle").css("top", (idx, old) => {
            return parseInt(old) - parseInt(params.growthAmount) / 2 + "px";
        });
        $(".circle").css("left", (idx, old) => {
            return parseInt(old) - parseInt(params.growthAmount) / 2 + "px";
        });
    }, params.growthRate);
}

function addClickEvent() {
    $(".circle").click((e) => {
        e.currentTarget.remove();
    });
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}