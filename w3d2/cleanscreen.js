let params = {};
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
    $('.circle-container').append($('<div>', {
        'class': 'circle',
        css: {
            'width': params.width,
            'height': params.width,
            'border-radius': params.width / 2
        }
    }));
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
    }, params.growthRate);
}

function addClickEvent() {
    $(".circle").click((e) => {
        e.currentTarget.remove();
    });
}