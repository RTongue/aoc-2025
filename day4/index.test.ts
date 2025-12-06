import { solvePartOne, solvePartTwo, isMoveable } from './solve'

describe('Day 4', () => {
  const partOneMap = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

  describe('is moveable', () => {
    it('returns true if less than four rolls are touching the roll at the coordinates', () => {
      const answer = isMoveable(0, 2, partOneMap)
    })
  })

  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(partOneMap)
      expect(answer).toEqual(13)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(partOneMap)
      expect(answer).toEqual(43)
    })
  })
})