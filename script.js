document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const loaderText = document.getElementById('loaderText');
  const mainContent = document.getElementById('mainContent');
  const nameEffect = document.getElementById('nameEffect');
  const bgMusic = document.getElementById('bgMusic');
  const welcomeText = document.getElementById('welcomeText');

  let loadingProgress = 0;
  const loadingInterval = setInterval(() => {
    loaderText.innerText = `Loading... ${loadingProgress}%`;
    loadingProgress += 2;
    if (loadingProgress > 100) {
      clearInterval(loadingInterval);
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
      bgMusic.play();
    }
  }, 50);

  setTimeout(() => {
    nameEffect.style.opacity = 1;
  }, 1000);

  // Add your text data to the page
  const textData = `
    <strong>Nama Lengkap:</strong> Muhammad Rizky F.<br>
    <strong>Panggilan:</strong> Ikyy<br>
    <strong>Tinggal:</strong> Tembilahan<br>
    <strong>Hobi:</strong> Bikin bot WhatsApp & ngoding<br>
    <br>
    Sekarang aku sedang membuat bot WhatsApp yaitu <strong>ZERAKION multi device</strong> 💥<br>
    Dengan fitur berlimpah dan berbagai fitur yang Anda butuhkan.<br>
  `;
  document.getElementById('dataTeks').innerHTML = textData;
});