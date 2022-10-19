export const toggleTHeme = (body) => {
  const themeButton = document.querySelector('.theme-button');
  
  themeButton.addEventListener('click', () => {
    body.classList.toggle('night');
  });
}