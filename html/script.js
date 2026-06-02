function checkPassword(){

  const password =
  document.getElementById('passwordInput').value;

  if(password === '30032025'){

    document.getElementById('passwordScreen')
    .style.display = 'none';

    document.getElementById('mainSite')
    .classList.remove('hidden');

  }else{

    document.getElementById('errorText')
    .innerText =
    'неправильный пароль... это важная дата для вас';

  }

}

function playMusic(){

  const audio =
  document.getElementById('musicAudio');

  audio.play();

}

function showGuests(){

  document.getElementById('guests')
  .classList.remove('hidden');

}

function blowCandle(){

  const wish =
  document.getElementById('wishInput').value;

  console.log(wish);

  window.location.href = 'dark.html';

}