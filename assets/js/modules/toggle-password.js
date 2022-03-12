export default function initTogglePassword() {
  const password = document.querySelector(".input-password input");
  const togglePassword = document.querySelector(".input-password input + button");

  togglePassword.addEventListener("click", () => {
      // toggle the type attribute
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
  });
}