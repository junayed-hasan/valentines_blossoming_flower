document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const messageDiv = document.getElementById('message');
  const canvas = document.getElementById('flowerCanvas');
  const ctx = canvas.getContext('2d');

  // Function to draw and animate the flower
  function drawFlower() {
    canvas.style.display = 'block';
    let angle = 0;
    let colorHue = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const petals = 8;
    const petalLength = 80;
    const petalWidth = 30;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      colorHue = (colorHue + 1) % 360;  // Cycle hue for a changing color effect

      // Draw flower center
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${colorHue}, 100%, 50%)`;
      ctx.fill();
      ctx.closePath();

      // Draw petals
      for (let i = 0; i < petals; i++) {
        const theta = i * (2 * Math.PI / petals) + angle;
        const petalX = centerX + Math.cos(theta) * 20;
        const petalY = centerY + Math.sin(theta) * 20;
        ctx.save();
        ctx.translate(petalX, petalY);
        ctx.rotate(theta);
        ctx.beginPath();
        ctx.ellipse(0, 0, petalWidth, petalLength, 0, 0, 2 * Math.PI);
        ctx.fillStyle = `hsl(${(colorHue + i * 30) % 360}, 100%, 70%)`;
        ctx.fill();
        ctx.restore();
      }

      angle += 0.01; // Slow rotation effect
      requestAnimationFrame(animate);
    }
    animate();
  }

  // Event listeners for buttons
  yesBtn.addEventListener('click', () => {
    messageDiv.textContent = "Yay! I'm so happy!";
    drawFlower();
  });

  noBtn.addEventListener('click', () => {
    messageDiv.textContent = "I know you're joking so you still get a flower!";
    drawFlower();
  });
});
