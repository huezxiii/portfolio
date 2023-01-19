var synonyms = [
  "posts",
  "articles",
  "entries",
  "content",
  "writing",
  "journals",
  "thoughts",
  "blogs",
  "stories",
];
var colors = ["#333333", "#555555", "#777777", "#999999", "#bbbbbb"];
var i = 0;

setInterval(function () {
  document.querySelector(".synonym").innerHTML = synonyms[i];
  i = (i + 1) % synonyms.length;
}, 1500);
setInterval(function () {
  document.querySelector(".synonyms-section").style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}, 1500);
