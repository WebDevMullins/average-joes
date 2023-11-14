const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to join.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
