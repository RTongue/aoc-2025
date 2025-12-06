import { twoDimensionalArray } from '../utils/twoDimensionalArray.ts'

export function isMoveable (x, y, rollsOfPaper) {
  let adjacentRolls = 0

  for (let i = x - 1; i <= x + 1; i++) {
    const row = rollsOfPaper[i]
    if (row === undefined) continue
    for (let j = y - 1; j <= y + 1; j++) {
      if (i === x && j === y) continue
      const cell = row [j]
      if (cell === undefined) continue
      if (cell === '@') adjacentRolls++
    }
  }

  return adjacentRolls < 4
}

export function solvePartOne (input: string) {
  const rollsOfPaper = twoDimensionalArray(input, '\n', '')
  let moveableRolls = 0

  for (let x = 0; x < rollsOfPaper.length; x++) {
    const row = rollsOfPaper[x]
    for (let y = 0; y < row.length; y++) {
      const cell = row[y]
      if ((cell === '@' || cell === 'x') && isMoveable(x, y, rollsOfPaper)) {
        moveableRolls++
      }
    }
  }

  return moveableRolls
}

export function moveAndCountRolls (rollsOfPaper: string[][]): number {
  let moveableRolls = 0

  for (let x = 0; x < rollsOfPaper.length; x++) {
    const row = rollsOfPaper[x]
    for (let y = 0; y < row.length; y++) {
      const cell = row[y]
      if (cell === '@' && isMoveable(x, y, rollsOfPaper)) {
        rollsOfPaper[x][y] = 'x'
        moveableRolls++
      }
    }
  }

  if (moveableRolls === 0) {
    return 0
  }

  const removedRollsOfPaper = twoDimensionalArray(rollsOfPaper
    .map(r => r.join(''))
    .join('\n').replace('x', '.'), '\n', '')

  return moveableRolls + moveAndCountRolls(removedRollsOfPaper)
}

export function solvePartTwo (input: string) {
  const rollsOfPaper = twoDimensionalArray(input, '\n', '')
  return moveAndCountRolls(rollsOfPaper)
}