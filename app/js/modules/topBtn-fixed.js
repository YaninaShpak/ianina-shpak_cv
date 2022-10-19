export const topBtnFixed = (intro, topBtn) => {
  let scrollTop = window.scrollY;
  let introHight = intro.offsetHeight / 2;

  if (scrollTop >= introHight) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
}