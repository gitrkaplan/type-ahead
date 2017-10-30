/* global fetch */

const input = document.querySelector('#term')

const words = () => {
  return fetch('/typeahead/words').then(res => res.json())
}

input.addEventListener('keyup', () => {
  let current = input.value.toLowerCase()
  words().then(results => findString(current, results))
})

const findString = (str, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].word.indexOf(str) > -1) {
    }
  }
}
