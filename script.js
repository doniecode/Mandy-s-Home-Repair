// harmburger
const sidebar = document.querySelector('.sidebar');
const showMenu = document.querySelector('.hamburger i');
const hideMenu = document.querySelector('.xmark i');
//show menu
showMenu.addEventListener('click', function(e){
  sidebar.style.display="flex";
  hideMenu.style.display="block";
  showMenu.style.display="none";
})
// hide menu
hideMenu.addEventListener('click', function(e){
  sidebar.style.display="none";
  hideMenu.style.display="none";
  showMenu.style.display="block";
})