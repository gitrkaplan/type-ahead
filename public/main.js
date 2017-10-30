/* global fetch */

const input = document.querySelector('#term')
const matches = document.querySelector('#matches')
const placeholder = document.querySelector('#placeholder')

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
    placeholder.classList.add('hidden')
    for (let i = 0; i < array.length; i++) {
      if (array[i].word.startsWith(str)) {
        // if (array[i].word.match(str).input !== null) {
        //   input.value = array[i].word.match(str).input
        // }
        renderWord(array[i].word, str)
      }
    }
  } else {
    placeholder.classList.remove('hidden')
  }
}

const renderWord = (word, term) => {
  const $word = document.createElement('li')
  const $term = document.createElement('span')
  $term.classList.add('matched')
  const $suggested = document.createElement('span')
  $suggested.classList.add('suggested')
  $suggested.textContent = word.slice(term.length)
  $term.textContent = term
  $word.classList.add('word')
  $word.append($term, $suggested)
  matches.appendChild($word)
}

const clearList = () => {
  while (matches.hasChildNodes()) {
    matches.removeChild(matches.lastChild)
  }
}
