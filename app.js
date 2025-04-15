
// menu
var coll = document.getElementsByClassName("menu-icon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = document.querySelector('.content');
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
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



document.addEventListener("DOMContentLoaded", function () {
  // Define the sections to toggle
  const sections = [
      { yesId: "sizeCheck", noId: "No-size", boxId: "size-box" },
      { yesId: "shapeCheck", noId: "No-shape", boxId: "shape-box" },
      { yesId: "mendingCheck", noId: "No-mending", boxId: "mending-box" },
      { yesId: "lengthCheck", noId: "No-length", boxId: "length-box" }
  ];

  function toggleHiddenBox(yesRadio, noRadio, hiddenBox) {
      if (yesRadio.checked) {
          hiddenBox.style.display = "grid";
          console.log(hiddenBox.id + " is visible");
      } else {
          hiddenBox.style.display = "none";
          console.log(hiddenBox.id + " is hidden");
      }
  }

  sections.forEach(({ yesId, noId, boxId }) => {
      const yesRadio = document.getElementById(yesId);
      const noRadio = document.getElementById(noId);
      const hiddenBox = document.getElementById(boxId);

      if (yesRadio && noRadio && hiddenBox) {
          yesRadio.addEventListener("change", () => toggleHiddenBox(yesRadio, noRadio, hiddenBox));
          noRadio.addEventListener("change", () => toggleHiddenBox(yesRadio, noRadio, hiddenBox));

          // Initialize visibility on page load
          toggleHiddenBox(yesRadio, noRadio, hiddenBox);
      }
  });
});



// price

document.addEventListener("DOMContentLoaded", function() {
  // Base price
  let basePrice = 150.00; // Set your actual base price here

  // Additional service prices
  const PRICES = {
      sizeChange: 10,
      shapeChange: 10,
      mending: 10,
      ownFab: -5,
      lengthChange: 10,
  };

  function updateTotal() {
      let addPrice = 0;

      // Check if each service is selected and add its price
      if (document.getElementById("sizeCheck").checked) addPrice += PRICES.sizeChange;
      if (document.getElementById("shapeCheck").checked) addPrice += PRICES.shapeChange;
      if (document.getElementById("mendingCheck").checked) addPrice += PRICES.mending;
      if (document.getElementById("ownFab").checked) addPrice += PRICES.ownFab;
      if (document.getElementById("lengthCheck").checked) addPrice += PRICES.lengthChange;

      let total = basePrice + addPrice;

      // Update the price displays
      document.getElementById("additional-price").textContent = addPrice.toFixed(2);
      document.getElementById("total-price").textContent = total.toFixed(2);
  }

  // Attach listeners to all radio buttons that affect price
    ["sizeCheck", "shapeCheck", "mendingCheck", "ownFab", "lengthCheck"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", updateTotal);
    });

  // Initial update
  updateTotal();
});


