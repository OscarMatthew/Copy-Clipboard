// Put your javascript or jquery here.
// Remember to comment well. Sections, which page it's used on, and what each function does, and in most cases what each line does.

new ClipboardJS('.btn');

var clipboard = new ClipboardJS('.btn');

$(document).ready(function () {
  var currentUrl = document.URL;
  $("#input-url").val(currentUrl);
});
