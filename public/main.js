/* global fetch */

const input = document.querySelector('#term')
const matches = document.querySelector('#matches')

const words = () => {
  return fetch('/typeahead/words').then(res => res.json())
}

input.addEventListener('keyup', () => {
  let current = input.value.toLowerCase()
  words().then(results => findString(current, results))
})

const findString = (str, array) => {
  clearList()
  if (str !== '') {
    for (let i = 0; i < array.length; i++) {
      if (array[i].word.indexOf(str) > -1) {
        renderWord(array[i].word)
      }
    }
  }
}

const renderWord = word => {
  const $word = document.createElement('li')
  $word.classList.add('word')
  $word.innerHTML = word
  matches.appendChild($word)
}

const clearList = () => {
  const $list = document.getElementsByTagName('li')
  for (var i = 0; i < $list.length; i++) {
    matches.removeChild($list[i])
  }
}
