window.onload = () => {
  let html = document.documentElement;

  let gNavBtn = document.getElementById('js-gNavBtn');

  gNavBtn.addEventListener('click', function () {
    html.classList.toggle('is-gNavOpen');
  });
};
