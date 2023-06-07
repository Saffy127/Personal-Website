window.onload = function() {
  // Get the canvas and context
  let canvas = document.getElementById('matrixCanvas');
  let context = canvas.getContext('2d');

  // Set canvas to full page size
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Characters used in the matrix
  let characters = '01';

  // Convert string to array of single characters
  characters = characters.split('');

  let font_size = 10;
  let columns = canvas.width / font_size;

  let drops = [];
  for (let x = 0; x < columns; x++)
    drops[x] = 1;

  // Render the matrix
  function drawMatrix() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0f0';
    context.font = font_size + 'px arial';
    for (let i = 0; i < drops.length; i++) {
      let text = characters[Math.floor(Math.random() * characters.length)];
      context.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);

  let text = "Welcome to My Personal Website";
  let i = 0;
  let speed = 50;

  function typeWriterTitle() {
    if (i < text.length) {
      document.getElementById("title").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriterTitle, speed);
    } else {
      typeWriterContent();
    }
  }

  let contentText = "\n\nMy name is Isaac Saffran. \nI'm currently studying Software Development at Sait. \nOn the side im currenlty Working on AI Apps using Python and the LangChain framework. Also looking to get into LLM open source projects.";
  let j = 0;

  function typeWriterContent() {
    if (j < contentText.length) {
      document.getElementById("content").innerHTML += contentText.charAt(j);
      j++;
      setTimeout(typeWriterContent, speed);
    }
  }

  typeWriterTitle();
};
