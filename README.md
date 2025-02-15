# Valentines Blossoming Flower 💖🌸

Welcome to **Valentines Blossoming Flower**, a beautifully designed interactive webpage to surprise your loved one! This project creates a romantic digital experience where users are prompted with a question: **"Will You Be My Valentine?"** and are given an engaging and fun way to respond.

🌐 **Live Demo**: You can check out the live version of this project at [junayed-hasan.github.io/valentines_blossoming_flower](https://junayed-hasan.github.io/valentines_blossoming_flower/). Easily host it on **GitHub Pages** and send the link to your loved one for a sweet surprise! 💕

## ✨ Features
- A heartwarming Valentine’s Day invitation with animated responses.
- Fun and interactive Yes/No button behavior.
- Beautiful floral animation with glowing effects.
- Background music to enhance the experience.
- Surprise blossom animation when the answer is **Yes**.
- A pleading animation if **No** is selected.

## 🖼️ Preview
| Screenshot | Description |
|------------|------------|
| ![Will You Be My Valentine?](ss1.png) | Initial prompt asking the user to be the valentine. |
| ![If No is Clicked](ss2.png) | Fun interaction where the button changes behavior with pleading animations. |
| ![If Yes is Clicked](ss3.png) | Romantic response with flower blooming and a special message. |

## 🎨 Customization Guide
You can personalize this project in the following ways:

### 1️⃣ Change the Background Image
Replace `image.jpeg` with your desired background image, ensuring the filename remains `image.jpeg`.

### 2️⃣ Modify the Text and Messages
- Edit the main message inside **index.html** in the following section:
  ```html
  <h1 class="headerText" id="wedate">Will You Be My Valentine, Babe? 🥺</h1>
  ```
- Update the response message when **Yes** is clicked:
  ```html
  wedate.innerText = "We are each other's valentine now. I love you cutie. ❤️😘";
  ```
  in `main2.js` inside the `yes()` function.

- Edit the floral surprise text inside **index1.html**:
  ```html
  <h1 style="color: rgb(162, 247, 219); margin-top: 3%;">A little floral surprise for you 🌸💐🌸 </h1>
  ```
  Change this text to personalize your message.

### 3️⃣ Adjust the Button Behavior
- Customize the No button responses inside **main2.js**, modifying the `blackmail` array for different pleading messages.
- Change the images used for happy/sad animations inside `main2.js`:
  ```javascript
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  ```

### 4️⃣ Modify Styles (Colors, Fonts, Effects)
- Edit **style1.css** and **style2.css** to change the aesthetic, including:
  - Button colors
  - Font styles (import different fonts from Google Fonts)
  - Background colors and effects

### 5️⃣ Add Your Name
- Replace `Your Teddy` in **index.html** with your own signature:
  ```html
  <a rel="noopener" href="https://www.linkedin.com/in/mjhasan21/" target="_blank">Your Teddy</a>
  ```

## 🚀 How to Use
1. Clone this repository:
   ```bash
   git clone https://github.com/junayed-hasan/valentines_blossoming_flower.git
   ```
2. Open `index.html` in any modern web browser.
3. Enjoy the experience with your loved one! 💕

## 🔧 Project Origin
This project is a updated version and creative combination of two different projects:
- [CSS Blossoming Flowers at Magical Night](https://codepen.io/mdusmanansari/pen/BamepLe) by **Md Usman Ansari**.
- [Will you be my valentine](https://codepen.io/Sleeping-Bot/pen/VwREBdg) by **Sleeping-Bot**.

These projects were customized and creatively merged to create a unique and interactive Valentine’s experience. 🎨✨

## ⭐ Show Some Love
If you like this project, consider **starring** ⭐ this repository to spread the love and appreciation!

---
💖 Made with love by [Mohammad Junayed Hasan](https://github.com/junayed-hasan).

