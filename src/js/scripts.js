// Video
(function () {
  const videoBox = document.querySelector('.aboutus__video-box');
  const imgWrap = document.querySelector('.aboutus__img-wrap');
  const videoPlay = document.querySelector('.aboutus__video-play');

  if (!videoBox) return;

  videoBox.addEventListener('click', () => {
    imgWrap.classList.add('hide');
    videoPlay.classList.add('hide');
  });
})();
