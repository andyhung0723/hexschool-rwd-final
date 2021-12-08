window.onload = () => {
  document.querySelector('.btn-toggle').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('menu-collapse');
  });
};
