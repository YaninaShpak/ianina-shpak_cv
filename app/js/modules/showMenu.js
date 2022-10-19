export const showMenu = (icnMenu, navMenu, body, siteList) => {
  icnMenu.addEventListener('click', () => {
    icnMenu.classList.toggle('active');
    navMenu.classList.toggle('show');
    body.classList.toggle('lock');
  });
  
  siteList.addEventListener('click', () => {
    icnMenu.classList.remove('active');
    navMenu.classList.remove('show');
    body.classList.remove('lock');
  });
}