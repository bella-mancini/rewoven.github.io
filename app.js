<<<<<<< HEAD
// web url https://script.google.com/macros/s/AKfycbwNPHFaXw0cpHXC9Rus6y7UJvI8pyWIHjYa9vOW_1c3CRI7LhfvNgE4oHXb-iCWIqng/exec
// deploy id AKfycbwNPHFaXw0cpHXC9Rus6y7UJvI8pyWIHjYa9vOW_1c3CRI7LhfvNgE4oHXb-iCWIqng

/*document.getElementById('my-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;

    // Send the form data using Fetch API
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            // Redirect to success.html
            window.location.href = "success.html";
        } else {
            alert("There was an error submitting the form.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to submit the form.");
    });
});*/

/* Visibilty Nav bar */

/*document.querySelector('.menu-icon').addEventListener('click', function () {
    const contentNav = document.querySelector('.content-nav');
    contentNav.classList.toggle('show');
  });*/




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
  console.log(`Button clicked: Change slide in set ${no} by ${n}`);
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  console.log(`Showing slides for set ${no} (class: ${slideId[no]}), slide number ${n}. Total slides: ${x.length}`);
  
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
    console.log(`Error: Slide ${slideIndex[no] - 1} does not exist for set ${no}`);
  }
}

// checkbox pretty
const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach(checkbox => {
  const input = checkbox.children[0];
  const overlay = checkbox.children[1];
  const icon = overlay.children[0];
});

input.addEventListener("change", () => {
  if (input.checked) {
      overlay.classList.add("checked");
      icon.classList.add("checked");
  } else {
      overlay.classList.remove("checked");
      icon.classList.remove("checked");
  }
});

// for match text

async function matchText() {
  const query = document.getElementById("searchId").value;
  if (!query) {
      alert("Please enter an ID number");
      return;
  }

  try {
      const res = await fetch("/match", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: query }),
      });

      if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();
      document.getElementById("result").innerText = data.match
          ? `✅ Found: ${data.data}`
          : "❌ Not Found";
  } catch (error) {
      console.error("❌ Fetch Error:", error);
      document.getElementById("result").innerText = "❌ Error Fetching Data";
  }
}
=======

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



document.addEventListener("DOMContentLoaded", function () {
  // Define the sections to toggle
  const sections = [
      { yesId: "sizeCheck", noId: "No-size", boxId: "size-box" },
      { yesId: "shapeCheck", noId: "No-shape", boxId: "shape-box" },
      { yesId: "mendingCheck", noId: "No-mending", boxId: "mending-box" }
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


<<<<<<< Updated upstream
>>>>>>> 44deffd5f60c4a56c04ce8d357501fed3c6b5c69
=======




// price

document.addEventListener("DOMContentLoaded", function() {
    // Base price
    let basePrice = 100;

    // Additional service prices
    const PRICES = {
        sizeChange: 30,
        shapeChange: 30,
        mending: 10,
        ownFab: -5,
    };

    function updateTotal() {
        let total = basePrice; // Start with the base price

        // Check if each service is selected and add its price
        if (document.getElementById("sizeCheck").checked) total += PRICES.sizeChange;
        if (document.getElementById("shapeCheck").checked) total += PRICES.shapeChange;
        if (document.getElementById("mendingCheck").checked) total += PRICES.mending;
        if (document.getElementById("ownFab").checked) total += PRICES.ownFab;

        // Update the price display
        document.getElementById("total-price").textContent = total;
    }

    // Attach event listeners to checkboxes
    document.getElementById("sizeCheck").addEventListener("change", updateTotal);
    document.getElementById("shapeCheck").addEventListener("change", updateTotal);
    document.getElementById("mendingCheck").addEventListener("change", updateTotal);
    document.getElementById("ownFab").addEventListener("change", updateTotal);

    // Set the initial price display
    document.getElementById("total-price").textContent = basePrice;
});

>>>>>>> Stashed changes
