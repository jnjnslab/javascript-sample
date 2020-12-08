jQuery(function ($) {
    var current = new Date();
    var result = $("#result");
    //console.log(result[0])
    result[0].textContent = current.toLocaleString();
});
