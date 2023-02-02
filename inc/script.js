// Add another section Function
function createNewSection1() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "newSection1");

  var textIconDiv = document.createElement("div");
  textIconDiv.setAttribute("id", "text-icon-div1");

  var text = document.createElement("p");
  text.innerHTML = "Text";
  textIconDiv.appendChild(text);

  var icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-2x fa-plus-circle"); // replace "icon-name" with the appropriate icon class
  textIconDiv.appendChild(icon);

  newDiv.appendChild(textIconDiv);

  var closeButton = document.createElement("button");
  var closeText = document.createTextNode("Close");
  closeButton.appendChild(closeText);
  closeButton.setAttribute("class", "close-button");
  closeButton.setAttribute("onclick", "closeSection(this)");

  newDiv.appendChild(closeButton);
  newDiv.setAttribute("class", "example");
  document.getElementById("sectionContainer1").appendChild(newDiv);
}
function closeSection(element) {
  element.parentNode.remove();
}
document
  .getElementById("myButton1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createNewSection1();
  });
document
  .getElementById("myButton2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createNewSection2();
  });


  // video model
$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});
