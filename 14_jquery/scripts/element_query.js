jQuery(function ($) {
  var list = $("#list .external");
  for (var i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
  }
});
