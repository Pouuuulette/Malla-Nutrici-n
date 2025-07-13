document.querySelectorAll('.subject').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('approved');
  });
});
