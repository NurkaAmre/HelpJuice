var search = document.getElementById('searchCategory');
const changeCategory = (e) => {
  search.innerHTML = e.target.innerHTML
}
var navTitle = document.getElementById('navTitle');
var startedBtn = document.getElementById('startedBtn');
var navBtnContainer = document.getElementById('navBtnContainer')
var routeContainer = document.getElementById('routeContainer');
var personalizationBtn = document.getElementById('personalizationBtn');
var arrowRight = document.getElementById('arrowRight');
var arrowDown = document.getElementById('arrowDown');
const sideNav = (e) => {
  navTitle.textContent = e.target.children[0].textContent;
  routeContainer.style.display = 'flex';
  console.log(e.target.children[0].children[1]);
  e.target.children[0].children[1].style.display = 'none';
  e.target.children[0].children[2].style.display = 'flex';
  e.target.children[0].children[0].style.color = 'var(--formBtn)';
  if (!!e.target.children[1]) {
    e.target.children[1].style.display = 'flex';
  };
}
const blurNav = (e) => {
  navTitle.textContent = '';
  routeContainer.style.display = 'none';
  e.target.children[0].children[1].style.display = 'flex';
  e.target.children[0].children[2].style.display = 'none';
  e.target.children[0].children[0].style.color = '#000';
  if (!!e.target.children[1]) {
    e.target.children[1].style.display = 'none';
  }
}
startedBtn.addEventListener('focus', function(e) {
  sideNav(e)
});
startedBtn.addEventListener('blur', function(e) {
  blurNav(e)
})
personalizationBtn.addEventListener('focus', function(e) {
  sideNav(e)
})
personalizationBtn.addEventListener('blur', function(e) {
  blurNav(e)
})