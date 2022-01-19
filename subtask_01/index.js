const users = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Pavel', age: 16 }, { name: 'Sasha', age: 29 }]

document.addEventListener('DOMContentLoaded', () => {
  const generateUserForm = document.getElementById('generate-form')
  generateUserForm.addEventListener('submit', onGenerateFormSubmit)

  users.forEach((user) => addOutputListItem(user))
});

function onGenerateFormSubmit(e) {
  e.preventDefault()

  const inputName = document.querySelector('[name="user-name"]')
  const inputAge = document.querySelector('[name="user-age"]')

  const newUser = { name: inputName.value, age: inputAge.value }
  users.push(newUser)
  addOutputListItem(newUser)

  inputName.value = ''
  inputAge.value = ''
}

function addOutputListItem(userData) {
  const { name, age } = userData

  const outputList = document.getElementById('output-list')
  const outputCounter = document.getElementById('output-counter')
  const li = document.createElement('li')

  li.classList.add('output-list-item')
  li.innerHTML = `<span>name: ${name}</span><span>age: ${age}</span>`

  outputList.appendChild(li)
  outputCounter.textContent = `users count: ${users.length}`
}
