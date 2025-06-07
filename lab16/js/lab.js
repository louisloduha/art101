// index.js - Lab 13 JS
// Author: Louis Loduha
// Date: 5/26/25


$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
        console.log("XKCD comic data:", comicObj);

        // Create elements using the comic object
        const title = `<h3>${comicObj.title}</h3>`;
        const img = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
        const altText = `<p>${comicObj.alt}</p>`;

        // Append to output div
        $("#output").html(title + img + altText);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("<p>Something went wrong. Try refreshing the page.</p>");
    }
});