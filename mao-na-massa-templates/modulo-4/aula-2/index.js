const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log({
    name: form.name.value,
    email: form.email.value,
    whatsapp: form.whatsapp.value,
    gender: form.gender.value,
    description: form.description.value,
    skillLevel: form.skillLevel.value,
    terms: form.terms.checked,
  })
})

function clearData() {
  form.name.value = ""
  form.email.value = ""
  form.whatsapp.value = ""
  form.gender.value = "male"
  form.description.value = ""
  form.skillLevel.value = ""
  form.terms.checked = false
}
