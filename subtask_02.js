/*
Дан массив пользователей const users = [{name: 'Ivan', age: 18}, {name: 'Petr', age: 12}, {name: 'Sidor', age: 25}, {name: 'Pavel', age: 16}, {name: 'Sasha', age: 29}]
Для каждого из этих объектов, через JS создайте отдельный div в котором будет отображать информация о каждом пользователе. Создайте список из div для кажого пользователя. Используйте методы создания элемента и наполнения его содержимым, добавления элемента.
*/

const users = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Pavel', age: 16 }, { name: 'Sasha', age: 29 }]

const wrapper = document.createElement('div')
wrapper.style = 'position: absolute; top: 0; left: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%; margin: 0; background-color: #EFF7FF; z-index: 9999;'

const list = document.createElement('ul')
list.style = 'margin: 0; list-style: decimal;'
wrapper.appendChild(list)

users.forEach((user) => {
  const listItem = document.createElement('li')
  listItem.textContent = `Name: ${user.name} | Age: ${user.age}`
  listItem.style = 'font-size: 32px'
  list.appendChild(listItem)
})

document.body.appendChild(wrapper)
