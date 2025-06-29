document.getElementById("questionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const question = document.getElementById("questionInput").value.trim();
  const responseDiv = document.getElementById("response");
  if (question) {
    responseDiv.textContent = "Thanks for your question! Maybe I'll answer it soon.";
    document.getElementById("questionInput").value = "";
  } else {
    responseDiv.textContent = "Please enter a question.";
  }
});
