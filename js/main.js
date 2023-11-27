const boxes = Array.from(document.querySelectorAll('.open'));

boxes.forEach((box) => {box.addEventListener("click", boxHandler)});

function boxHandler(e) {
  e.preventDefault();
  boxes.forEach((box) => {box.classList.remove('active')});

  // let currentBox = e.target.closest(".box");
  // console.log(currentBox)




  let currentContent = e.target.nextElementSibling;
  console.log(currentContent)
  currentContent.style.maxHeight = currentContent.scrollHeight + "px";


  // currentBox.classList.toggle("active");
  // if (currentBox.classList.contains("active")) {
  //   currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  // } else {
  //   currentContent.style.maxHeight = 0;
  // }
}