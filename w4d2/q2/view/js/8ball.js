$(() => {
    const clearMsg = () => $("#qin").val("");
    $("#qin").focus(function () { $(this).select(); });
    const addedSuccess = (json) => {
        console.log(json);
        $("#qin").val(json.answer);
        $("#qin").focus();
        // setTimeout(clearMsg, 5000);
    }
    const noSuccess = () => {
        $("#qin").val("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#form").submit(() => {
        const data = {
            question: $("#qin").val()
        };
        console.log(data);
        $.get({
            url: "/8ball",
            data: data,
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});