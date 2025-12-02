export function solvePartOne (input: string) {
  let numZeroPointers = 0
  let currentPosition = 50
  const combinations = input.split('\n').map(chars => {
      const charsArr = chars.split('')
      const direction = charsArr.shift()
      const rotationsString = charsArr.join('')
      return { direction, rotations: Number(rotationsString) }
  })

  for (const combo of combinations) {
      const netRotations = combo.rotations % 100
      if (combo.direction === 'L') {
        currentPosition -= netRotations
      } else {
        currentPosition += netRotations
      }

      if (currentPosition < 0) currentPosition += 100
      if (currentPosition > 99) currentPosition -= 100

      if (currentPosition === 0) {
          numZeroPointers++
      }

      // console.log(`${combo.direction}${combo.rotations} points at ${currentPosition}`)
  }

  return numZeroPointers
}

export function solvePartTwo (input: string) {
    let numZeroPointers = 0
    let currentPosition = 50
    const combinations = input.split('\n').map(chars => {
        const charsArr = chars.split('')
        const direction = charsArr.shift()
        const rotationsString = charsArr.join('')
        return { direction, rotations: Number(rotationsString) }
    })

    for (const combo of combinations) {
        const totalFullRotations = Math.trunc(combo.rotations / 100)
        // console.log('totalFullRotations', totalFullRotations)
        numZeroPointers += totalFullRotations
        const netRotations = combo.rotations % 100
        const lastPosition = currentPosition
        if (combo.direction === 'L') {
            currentPosition -= netRotations
        } else {
            currentPosition += netRotations
        }

        if (currentPosition < 0) {
            currentPosition += 100
            if (currentPosition !== 0 && lastPosition != 0) {
                // console.log('points at 0')
                numZeroPointers++
            }
        }
        if (currentPosition > 99) {
            currentPosition -= 100
            if (currentPosition !== 0 && lastPosition != 0) {
                // console.log('points at 0')
                numZeroPointers++
            }
        }

        if (currentPosition === 0) {
            numZeroPointers++
        }

        // console.log(`${combo.direction}${combo.rotations} points at ${currentPosition}`)
    }

    return numZeroPointers
}