const boxes = Array.from(document.querySelectorAll('.box'));
const contents = Array.from(document.querySelectorAll('.content'));
const labels = Array.from(document.querySelectorAll('.posts__label'));
const categoriesCards = Array.from(document.querySelectorAll('.categories__item'));
let heightArray = [];


function setCategoriesHeight(){
  categoriesCards.forEach((eachElement) => heightArray.push(eachElement.offsetHeight));
  let maxHeight = Math.max.apply(null, heightArray);
  categoriesCards.forEach((eachElement) => eachElement.style.height = maxHeight + "px");
}


function openContent(){
  labels.forEach((eachElement, index) => 
    eachElement.addEventListener('click', function(event){
    event.preventDefault();
    if(labels[index].classList.contains('active')){
      contents[index].style.maxHeight = 0;
      labels[index].classList.remove('active');
    } else {
      contents.forEach((content) => {content.style.maxHeight = 0});
      labels.forEach((label) => {label.classList.remove('active')});
      contents[index].style.maxHeight = contents[index].scrollHeight + "px";
      labels[index].classList.add('active');
    }
  })
)}

window.addEventListener('DOMContentLoaded', startJS());

function startJS(){
  setCategoriesHeight();
  openContent();
}