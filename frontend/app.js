document.getElementById("fetchData").addEventListener("click", () => {
  fetch("http://localhost:4000/api/message")
      .then(response => response.json())
      .then(data => {
          document.getElementById("response").innerText = data.message;
      })
      .catch(error => console.error("Error:", error));
});

  