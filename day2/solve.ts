function isInvalidIdOne(id: number): boolean {
  const currentString = String(id)
  const length = currentString.length
  if (length % 2 !== 0) return false
  return currentString.slice(0, length / 2) === currentString.slice(length / 2)
}

export function solvePartOne (input: string) {
  const ranges = input.split(',').map(rangeString => {
    return rangeString.split('-').map(Number)
  })

  let invalidIdSum = 0

  for (const range of ranges) {
    const start = range[0]
    const end = range[1]
    let current = start

    while (current <= end) {
      if (isInvalidIdOne(current)) {
        invalidIdSum += current
      }

      current++
    }
  }

  return invalidIdSum
}

export function getLargestFactor(length: number): number {
  const half = length / 2
  let current = 1
  let largest = 1

  while (current <= half) {
    if (length % current === 0) {
      largest = current
    }
    current++
  }

  return largest
}

export function containsRepeats(length: number, id: string): boolean {
  const first = id.slice(0, length)
  for (let i = length; i < id.length; i += length) {
    // console.log(first, id.slice(i, i + length))
    if (first !== id.slice(i, i + length)) return false
  }
  return true
}

export function isInvalidIdTwo(id: number): boolean {
  const currentString = String(id)
  const length = currentString.length

  if (length < 2) return false

  let currentFactor = getLargestFactor(length)

  while (currentFactor >= 1) {
    if (containsRepeats(currentFactor, currentString)) return true
    currentFactor--
  }

  return false
}

export function solvePartTwo (input: string) {
  const ranges = input.split(',').map(rangeString => {
    return rangeString.split('-').map(Number)
  })

  let invalidIdSum = 0

  for (const range of ranges) {
    const start = range[0]
    const end = range[1]
    let current = start

    while (current <= end) {
      if (isInvalidIdTwo(current)) {
        invalidIdSum += current
      }

      current++
    }
  }

  return invalidIdSum
}