document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
  }, 2000); // Popup disappears after 2 seconds
});

document.getElementById('noBtn').addEventListener('click', function() {
  const noButton = document.getElementById('noBtn');
  noButton.style.display = 'none';

  const newX = Math.floor(Math.random() * window.innerWidth);
  const newY = Math.floor(Math.random() * window.innerHeight);

  const newButton = document.createElement('button');
  newButton.innerText = 'No';
  newButton.id = 'noBtn';
  newButton.style.position = 'absolute';
  newButton.style.top = newY + 'px';
  newButton.style.left = newX + 'px';
  newButton.addEventListener('click', function() {
    this.style.display = 'none';
    const newX = Math.floor(Math.random() * window.innerWidth);
    const newY = Math.floor(Math.random() * window.innerHeight);
    this.style.top = newY + 'px';
    this.style.left = newX + 'px';
    this.style.display = 'block';
  });
  document.body.appendChild(newButton);
});
