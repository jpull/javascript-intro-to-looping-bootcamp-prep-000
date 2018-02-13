function forLoop(array) {
  array.push('I am ${i} strange loop$(i === 0 ? '' : 's').')
  return array
}
