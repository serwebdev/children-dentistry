(function () {
  const buttons = document.querySelectorAll('.tabs-price__button');
  const contents = document.querySelectorAll('.tabs-price__content');
  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(item => item.classList.remove('active'));

      btn.classList.add('active');
      contents[i].classList.add('active');
    });
  });
})();
