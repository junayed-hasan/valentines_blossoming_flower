// Execute once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Position the .image1 elements randomly (from your original code)
  var images = document.querySelectorAll(".image1");
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }
  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

// Functions to change images on hover
function angry() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  absImg.style.display = "flex";
  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}
function happy() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  absImg.style.display = "flex";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  images.forEach(function (image) {
    image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}
function normal() {
  var absImg = document.getElementById("absImg");
  absImg.style.display = "none";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

// Arrays for the "No" response (unchanged)
const sadCat = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
  "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
  "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif"
];
const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry"
];

// Counter (if needed for original behavior)
let counter = 0;

// Modified yes() function – now triggers the flower pop
function yes() {
  // Increase counter (if you still wish to track clicks)
  counter++;

  // Get the flower template and container
  let template = document.getElementById("flowerTemplate");
  let container = document.getElementById("flowerContainer");
  // Clone the template content
  let clone = document.importNode(template.content, true);
  // Wrap it in a div to allow removal after animation
  let wrapper = document.createElement("div");
  wrapper.classList.add("flower-popup");
  wrapper.appendChild(clone);
  container.appendChild(wrapper);
  
  // Remove the popup after 3 seconds (adjust timing as needed)
  setTimeout(() => {
    wrapper.remove();
  }, 3000);
  
  // (If you wish to combine additional behavior from your original yes() function,
  // for example updating text or playing music, add that code here.)
}

// Original no() function (unchanged)
function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  happyMusic.pause();
  sadMusic.play();
  let model = document.getElementById("model");
  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");
    modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    modelText.innerText =
      blackmail[Math.floor(Math.random() * blackmail.length)];
  }, 100);
}

// Function for the "Love You Too" button inside model2
function ly2() {
  let model = document.getElementById("model2");
  model.style.display = "none";
}

// onload function to remove the "not-loaded" class (from flower code)
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
