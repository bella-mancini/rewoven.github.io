
// menu
var coll = document.getElementsByClassName("menu-icon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector('.content');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//collapsible
document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");

    let content = this.querySelector(".p-content"); // Find the <p> inside the button
    if (content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});

/* For slide deck */
let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  
  
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  if (x[slideIndex[no] - 1]) {
    x[slideIndex[no] - 1].style.display = "block";
  } else {
    
  }
}

// hidden check
function hiddenCheck(hiddenBoxId) {
  var checkBox = document.getElementById(hiddenBoxId.replace('-box', 'Check'));
  var hiddenBox = document.getElementById(hiddenBoxId);

  if (checkBox.checked) {
      hiddenBox.style.display = "grid";
      console.log(hiddenBoxId + " is visible");
  } else {
      hiddenBox.style.display = "none";
      console.log(hiddenBoxId + " is hidden");
  }
}


