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


const start = () => {
    // Initialize the JavaScript client library
    gapi.client.init({
      'apiKey': '{GOOGLE_API_KEY}',
      'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
      return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '{SPREADSHEET_ID}',
        range: '{SHEET_NAME}!{DATA_RANGE}', // for example: List 1!A1:B6
      })
    }).then((response) => {
      // Parse the response data
      const loadedData = response.result.values;
  
      // populate HTML table with data
      const table = document.getElementsByTagName('table')[0];
      
      // add column headers
      const columnHeaders = document.createElement('tr');
      columnHeaders.innerHTML = `<th>${loadedData[0][0]}</th>
  <th>${loadedData[0][1]}</th>`;
      table.appendChild(columnHeaders);
  
      // add table data rows
      for (let i = 1; i < loadedData.length; i++) {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${loadedData[i][0]}</td>
  <td>${loadedData[i][1]}</td>`;
        table.appendChild(tableRow);
      }
    }).catch((err) => {
        console.log(err.error.message);
    });
  };
  
  // Load the JavaScript client library
  gapi.load('client', start);
  

//nfc api 
scanButton.addEventListener("click", async () => {
    log("User clicked scan button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      log("> Scan started");
  
      ndef.addEventListener("readingerror", () => {
        log("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        log(`> Serial Number: ${serialNumber}`);
        log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      log("Argh! " + error);
    }
  });
  
  writeButton.addEventListener("click", async () => {
    log("User clicked write button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
      log("> Message written");
    } catch (error) {
      log("Argh! " + error);
    }
  });
  
  makeReadOnlyButton.addEventListener("click", async () => {
    log("User clicked make read-only button");
  
    try {
      const ndef = new NDEFReader();
      await ndef.makeReadOnly();
      log("> NFC tag has been made permanently read-only");
    } catch (error) {
      log("Argh! " + error);
    }
  });