jQuery(function ($) {
  var list = $(".my");
  for (var i = 0, len = list.length; i < len; i++) {
    console.log(list[i].href);
  }
});
