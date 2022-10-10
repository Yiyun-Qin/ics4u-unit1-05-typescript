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
let width: number | undefined
let height: number | undefined

console.log('This program figutes out the length of a wooden board that is 1')
console.log(' board food in dimension. (1 board foot is 144 inches³ of wood.')
const widthString = prompt('Enter the width(inch): ')
const heightString = prompt('Enter the height(inch): ')

const width = parseInt(widthString)
const height = parseInt(heightString)
if (isNaN(width) || isNaN(height)) {
  console.log('Invalid number!')
} else if (width <= 0 || height <= 0 || width > 144 || height > 144) {
  console.log('Please enter integers between 1 and 144!')
} else {
  const length = BoardFoot(width, height)
  console.log(`The wood should be ${length} inches long.`)
}

export function BoardFoot(widthInt: number, heightInt: number): number {
  const lengthAnswer = area / width / height
  return lengthAnswer
}

console.log('\nDone.')
