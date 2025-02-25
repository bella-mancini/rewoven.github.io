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