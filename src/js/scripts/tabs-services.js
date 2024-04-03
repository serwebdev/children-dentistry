// (function () {
//   const buttons = document.querySelectorAll('.tabs-services__button');
//   const contents = document.querySelectorAll('.tabs-services__content');
//   const bgImg = document.querySelectorAll('.tabs-services__bg-img');
//   buttons.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//       buttons.forEach(btn => btn.classList.remove('active'));
//       contents.forEach(item => item.classList.remove('active'));
//       bgImg.forEach(item => item.classList.remove('active'));

//       btn.classList.add('active');
//       contents[i].classList.add('active');
//       bgImg[i].classList.add('active');
//     });
//   });
// })();

// tabs-services 2=====================================================================
(function () {
  const buttons = document.querySelectorAll('.tabs-services__button');
  const contentItem = document.querySelectorAll('.tabs-services__content-item');
  const contentInfo = document.querySelectorAll('.tabs-services__content-info');
  const bgImg = document.querySelectorAll('.tabs-services__bg-img');
  const imgKid = document.querySelectorAll('.tabs-services__img-kid');
  const imgMoon = document.querySelector('.tabs-services__img-moon');
  const imgTooth = document.querySelector('.tabs-services__img-tooth');

  let heightInfo;

  function hangeHeight() {
    contentItem.forEach(item => {
      const currInfo = item.querySelector(
        '.tabs-services__content-info.active'
      );

      heightInfo = currInfo.offsetHeight;
      item.style.height = heightInfo + 'px';
      // console.log(heightInfo);
    });
  }

  hangeHeight();

  window.addEventListener('resize', () => {
    hangeHeight();
  });

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contentInfo.forEach(item => item.classList.remove('active'));
      bgImg.forEach(item => item.classList.remove('active'));
      imgKid.forEach(item => item.classList.remove('active'));

      btn.classList.add('active');

      contentItem.forEach(item => {
        const currInfo = item.querySelectorAll('.tabs-services__content-info')[
          i
        ];
        currInfo.classList.add('active');

        heightInfo = currInfo.offsetHeight;
        item.style.height = heightInfo + 'px';
      });

      bgImg[i].classList.add('active');
      imgKid[i].classList.add('active');
      i === 4
        ? imgMoon.classList.add('active')
        : imgMoon.classList.remove('active');

      const toothClasses = imgTooth.classList;

      toothClasses.forEach(cl => {
        if (cl.indexOf('tab-') === 0) {
          imgTooth.classList.remove(cl);
        }
      });

      imgTooth.classList.add(`tab-${i + 1}`);
    });
  });
})();
