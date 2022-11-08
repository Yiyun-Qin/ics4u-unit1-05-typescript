/**
 * The function that calculates the length of a board foot.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-05
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * function, calculates the length.
 *
 * @param {number} width The width of boardfoot.
 * @param {number} height The height of boardfoot.
 * @returns {number} lengthAnswer The final answer for the length.
 */
function boardFoot(width: number, height: number): number {
  const area = 144
  let lengthAnswer = area / width / height
  lengthAnswer = parseFloat(lengthAnswer.toFixed(2))
  return lengthAnswer
}

console.log(
  'This program figures out the length of a wooden board that is 1' +
    ' board foot in dimension. (1 board foot is 144 inches³' +
    ' of wood.'
)
const widthString = prompt('Enter the width(inch): ')
const heightString = prompt('Enter the height(inch): ')

const width = parseFloat(widthString)
const height = parseFloat(heightString)
if (isNaN(width) || isNaN(height)) {
  console.log('\nInvalid number!')
} else if (width <= 0 || height <= 0) {
  console.log('\nPlease enter a positive number!')
} else {
  const length = boardFoot(width, height)
  console.log(`\nThe wood should be ${length} inches long.`)
}
console.log('\nDone.')
