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

// wrap the ribbon element in a javascript variable
const ribbon = document.querySelector(".ribbon");
// get the width of the entire ribbon
const ribbonWidth = ribbon.offsetWidth;
// get the width of one icon container
const iconContainerWidth =
  document.querySelector(".icon-container").offsetWidth;
// calculate the number of icon container elements in the ribbon
const iconCount = Math.ceil(ribbonWidth / iconContainerWidth);
// clone the first x number of icon container elements and add them to the end of the ribbon
for (let i = 0; i < iconCount; i++) {
  const iconClone = document.querySelector(".icon-container").cloneNode(true);
  ribbon.appendChild(iconClone);
}

// Get the button
var backToTopButton = document.getElementById("back-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
