const boxes = Array.from(document.querySelectorAll('.box'));
const contents = Array.from(document.querySelectorAll('.content'));
const labels = Array.from(document.querySelectorAll('.posts__label'));


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

window.addEventListener('DOMContentLoaded', openContent());
