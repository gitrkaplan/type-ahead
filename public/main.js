/* global fetch */

const input = document.querySelector('#term')
const matches = document.querySelector('#matches')
const placeholder = document.querySelector('#placeholder')

const words = () => {
  return fetch('/typeahead/words').then(res => res.json())
}

input.addEventListener('keyup', () => {
  let current = input.value.toLowerCase()
  console.log(current)
  words().then(results => findString(current, results))
})

const findString = (str, array) => {
  clearList()
  if (str !== '') {
    placeholder.classList.add('hidden')
    for (let i = 0; i < array.length; i++) {
      if (array[i].word.indexOf(str) > -1) {
        renderWord(array[i].word)
      }
    }
  } else {
    placeholder.classList.remove('hidden')
  }
}

const renderWord = word => {
  const $word = document.createElement('li')
  $word.classList.add('word')
  $word.innerHTML = word
  matches.appendChild($word)
}

const clearList = () => {
  while (matches.hasChildNodes()) {
    matches.removeChild(matches.lastChild)
  }
}
