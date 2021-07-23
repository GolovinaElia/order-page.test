// let form = document.getElementById("form")
const form = document.querySelector(".form")

form.addEventListener("submit", async function (event) {
  event.preventDefault()
  let response = await fetch("https://asiansy.com/test/test.php", {
    method: "POST",
    body: new FormData(form),
  })
  if (response.ok) {
    let text = await response.text()
    alert(text)
  } else {
    alert(response.status)
  }
})

// form.onsubmit = async (event) => {
//   event.preventDefault()
//   let response = await fetch("https://asiansy.com/test/test.php", {
//     method: "POST",
//     body: new FormData(form),
//   })
//   if (response.ok) {
//     let text = await response.text()
//     alert(text)
//   } else {
//     alert(response.status)
//   }
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault()
// let name = this.querySelector('[name="name"]').value
// let phone = this.querySelector('[name="phone"]').value

// let formData = new FormData()
// formData.append("name", name)
// formData.append("phone", phone)
// alert(formData.get("name"))

// let promise = fetch("https://asiansy.com/test/test.php", {
//   method: "POST",
//   // body: new FormData(this),
//   body: formData,
//   mode: "no-cors",
// })

// promise
//   .then((response) => {
//     response.text()
//     return console.log(response)
//   })
//   .then((text) => {
//     console.log(text)
//   })
//   .catch((error) => console.log(error))

// })
// form.onsubmit = async (event) => {
//   event.preventDefault()
//   let response = await fetch("https://asiansy.com/test/test.php", {
//     method: "POST",
//     body: new FormData(form),
//   })
//   if (response.ok) {
//     let result = await response.text()
//     alert(texe)
//   } else {
//     alert(response.status)
//   }
// let result = await response.json()
// alert(result.message)
