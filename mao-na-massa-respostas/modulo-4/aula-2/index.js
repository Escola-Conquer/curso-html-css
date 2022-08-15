const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log({
    email: form.email.value,
    password: form.password.value,
    remeberMe: form.rememberMe.checked,
  })
})
