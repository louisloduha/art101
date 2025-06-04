// index.js - Lab 15 JS
// Author: Louis Loduha
// Date: 6/2/25


$("#activate").click(function () {
    console.log("Button clicked!");


    $.ajax({
        url: "https://yesno.wtf/api",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);


            let html = `<p>Answer: <strong>${data.answer}</strong></p>
                        <img src="${data.image}" alt="Yes/No image">`;
            $("#output").html(html);
        },

        
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").html("<p>Sorry, an error occurred.</p>");
        }
    });
});