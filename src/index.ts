/**
 * The HelloWorld program implements an application that
 * simply displays energy released question to the standard output.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const area = 144

/**
 * function, calculates the length.
 *
 * @param {number} widthInt The width of boardfoot.
 * @param {number} heightInt The height of boardfoot.
 * @returns {number} lengthAnswer The final answer for the length.
 */
function boardFoot(widthInt: number, heightInt: number): number {
  let lengthAnswer = area / width / height
  lengthAnswer = parseFloat(lengthAnswer.toFixed(2))
  return lengthAnswer
}

console.log(
  'This program figutes out the length of a wooden board that is 1' +
    ' board food in dimension. (1 board foot is 144 inches³' +
    ' of wood.'
)
const widthString = prompt('Enter the width(inch): ')
const heightString = prompt('Enter the height(inch): ')

const width = parseFloat(widthString)
const height = parseFloat(heightString)
if (isNaN(width) || isNaN(height)) {
  console.log('\nInvalid number!')
} else if (width <= 0 || height <= 0 || width > 144 || height > 144) {
  console.log('\nPlease enter integers between 1 and 144!')
} else {
  const length = boardFoot(width, height)
  console.log(`\nThe wood should be ${length} inches long.`)
}
console.log('\nDone.')
