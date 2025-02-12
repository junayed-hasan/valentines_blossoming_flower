/***************************************************
  1) Random positioning for floating hearts 
     (or sad faces if "No" is hovered).
****************************************************/
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "image1"
  var images = document.querySelectorAll(".image1");

  // Helper: set random position for an element
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  // Assign random position for each image
  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

/***************************************************
  2) Hover logic for "No" (angry/sad) and 
     "Yes" (happy) states.
****************************************************/
function angry() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");

  // Switch main GIF to sad
  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";

  // Ensure the hearts container is visible
  absImg.style.display = "flex";

  // Change each floating heart to a sad GIF
  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}

function happy() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");

  // Switch main GIF to a happier one
  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  absImg.style.display = "flex";

  // Change each floating image to a heart GIF
  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

/***************************************************
  3) "Normal" state (mouse leaves buttons)
****************************************************/
function normal() {
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");

  // Hide the floating images container
  absImg.style.display = "none";

  // Reset main GIF to default "happy1"
  mainImg.src =
    "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

/***************************************************
  4) Logic for "No" clicks.
     - Increments counter
     - Plays sad music
     - Shows "beg" modal
****************************************************/
let counter = 0;
const sadCat = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
  "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
  "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
];
const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");

  // Stop the happy music, play sad music
  happyMusic.pause();
  sadMusic.play();

  // Hide the modal if it's visible, then show it again with updated text
  let model = document.getElementById("model");
  model.style.display = "none";

  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");

    // Pick random cat GIF and random "beg" text
    modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
  }, 100);
}

/***************************************************
  5) Logic for "Yes" clicks.
     - Spawns the flower
     - Plays happy music
     - After 3 "No" attempts, final reveal
****************************************************/

/* Helper: spawn a fresh copy of the flower animation */
function popFlower() {
  // Grab the hidden template container
  const template = document.getElementById("flower-template");
  // Clone it
  const clone = template.cloneNode(true);

  // Clear the ID to avoid duplicates
  clone.id = "";
  // Make it visible + let animations run
  clone.style.display = "block";
  clone.classList.remove("not-loaded");

  // Position it absolutely at random (optional)
  clone.style.position = "absolute";
  clone.style.zIndex = 9999; 
  clone.style.top = Math.floor(Math.random() * 50 + 10) + "%";
  clone.style.left = Math.floor(Math.random() * 70 + 10) + "%";

  // Append to body so it shows on top
  document.body.appendChild(clone);
}

function yes() {
  // Always spawn a fresh flower
  popFlower();

  // Music logic
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  sadMusic.pause();
  happyMusic.play();

  // Hide the "begging" modal if open
  let model = document.getElementById("model");
  model.style.display = "none";

  // If user previously clicked "No" 3 or more times, do final reveal
  if (counter >= 3) {
    alert("We are a couple now. I love you cutie.");

    // Optionally hide the main buttons, update text
    let wedate = document.getElementById("wedate");
    let btns = document.getElementById("btns");
    if (btns) btns.style.display = "none";
    if (wedate) wedate.innerText = "We are a couple now. I love you cutie.";
  } else {
    // Tease them if they haven't refused enough times
    alert("Play around a bit, cutie. Don't say Yes right away xD");
  }
}
