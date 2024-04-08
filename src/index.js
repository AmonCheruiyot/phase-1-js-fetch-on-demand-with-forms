// src/index.js
const init = () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      const input = document.getElementById("searchByID").value;

      // Fetch movie details based on the ID entered
      fetch(`http://localhost:3000/movies/${input}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          const titleElement = document.querySelector("#movieDetails h4");
          const summaryElement = document.querySelector("#movieDetails p");

          // Update the title and summary elements with fetched data
          titleElement.innerText = data.title;
          summaryElement.innerText = data.summary;
        })
        .catch(error => {
          console.error("Error fetching movie details:", error);
        });
    });
  };

  document.addEventListener('DOMContentLoaded', init);
