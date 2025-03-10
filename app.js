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
