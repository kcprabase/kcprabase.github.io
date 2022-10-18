$(() => {
    setInterval(() => {
        $("div").css("width", (idx, old) => {
            return parseInt(old) + 10 + "px";
        });
        $("div").css("height", (idx, old) => {
            return parseInt(old) + 10 + "px";
        });
        $("div").css("borderRadius", (idx, old) => {
            return parseInt(old) + 5 + "px";
        });
    }, 250);
});