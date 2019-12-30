slideBox = document.getElementById("slideBox");
slideImg = slideBox.firstChild.nextSibling;

imgSrcList = [
  "http://placehold.it/1000x500/aaa/ffffff?text=No.1",
  "http://placehold.it/1000x500/1e4e7c/ffffff?text=No.2",
  "http://placehold.it/1000x500/1e4e11/ffffff?text=No.3",
  "http://placehold.it/1000x500/000/ffffff?text=No.4",
  "http://placehold.it/1000x500/3e3e3e/ffffff?text=No.5"
];
var i = 1;
setInterval(function () {
  if (i == imgSrcList.length) { i = 0; }
  slideImg.src = imgSrcList[i];
  i = i + 1;
}, 1000)
