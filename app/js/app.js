import { showElements } from "./modules/show-elements.js";
import { showMenu } from "./modules/showMenu.js";
import { toggleTHeme } from "./modules/toggle-theme.js";
import { headerFixed } from "./modules/header-fixed.js";
import { topBtnFixed } from "./modules/topBtn-fixed.js";

document.addEventListener('DOMContentLoaded', () => {
  const icnMenu = document.querySelector('.burger-button');
  const navMenu = document.querySelector('.main-nav');
  const siteList = document.querySelector('.site-list');
  const body = document.querySelector('body');
  const header = document.querySelector('.main-header');
  const intro = document.querySelector('.intro');
  const topBtn = document.querySelector('.button-top');

  showElements();
  
  showMenu(icnMenu, navMenu, body, siteList);
  
  toggleTHeme(body);

  headerFixed(header);

  topBtnFixed(intro, topBtn);

  window.addEventListener('scroll', () => {
    headerFixed(header);
    topBtnFixed(intro, topBtn);
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
});


