jQuery(function ($) {
  var list = $("a");
  for (var i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
  }
});