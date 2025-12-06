export function solvePartOne (input: string) {
  return input.split('\n').reduce((accum, bank) => {
    const batteries = bank.trim().split('')
    let firstLargestBattery = 0
    let firstLargestBatteryIndex = 0
    let secondLargestBattery = 0

    for (let i = 0; i < batteries.length - 1; i++) {
      const currentBattery = Number(batteries[i])
      if (currentBattery > firstLargestBattery) {
        firstLargestBattery = currentBattery
        firstLargestBatteryIndex = i
      }
    }

    for (let i = firstLargestBatteryIndex + 1; i < batteries.length; i++) {
      const currentBattery = Number(batteries[i])
      if (currentBattery > secondLargestBattery) {
        secondLargestBattery = currentBattery
      }
    }

    accum += Number(String(firstLargestBattery) + String(secondLargestBattery))
    return accum
  }, 0)
}

function findLargestIndexInList (input: number[], offset) {
  let largest = 0
  let largestIndex = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] > largest) {
      largest = input[i]
      largestIndex = i
    }
  }

  return largestIndex + offset
}

export function solvePartTwo (input: string) {
  return input.split('\n').reduce((accum, bank) => {
    const batteries = bank.trim().split('').map(Number)
    const numBatteries = batteries.length
    const indices = []

    for (let i = 0; i < 12; i++) {
      const startingIndex = indices.length > 0 ? indices[indices.length - 1] + 1 : 0
      const subList = batteries.slice(startingIndex, numBatteries - (11 - i))
      indices.push(findLargestIndexInList(subList, startingIndex))
    }

    const biggestBatteries = indices.map(index => batteries[index]).join('')
    accum += Number(biggestBatteries)
    return accum
  }, 0)
}