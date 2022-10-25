$(() => {
    const addedSuccess = (json) => {
        $("#cartItemCount").text(json.cartItemCount);
    }
    const noSuccess = () => {
        $("#qin").val("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#cartForm").submit(() => {
        const data = {
            name: $("#productName").val(),
            price: $("#productPrice").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});