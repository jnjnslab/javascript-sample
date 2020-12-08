jQuery(function ($) {
    var current = new Date();
    var nam = $("input[name='time']");
    nam[0].value = current.toLocaleTimeString();
});
