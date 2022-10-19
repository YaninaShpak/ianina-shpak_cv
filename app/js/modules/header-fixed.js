export const headerFixed = (header) => {
  let scrollTop = window.scrollY;
  let headerHight = header.offsetHeight;
  
  if (scrollTop >= headerHight) {
    header.classList.add('color');
  } else {
    header.classList.remove('color');
  }
}