const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log({
    name: form.name.value,
    email: form.email.value,
    age: form.age.value,
    subject: form.subject.value,
    availableShifts: form.availableShifts,
    schooling: form.schooling.value,
    description: form.description.value,
    cv: form.cv.value,
  })
})
