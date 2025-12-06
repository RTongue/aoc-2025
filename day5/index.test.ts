import { solvePartOne, solvePartTwo } from './solve'

describe('Day 5', () => {
  const puzzleInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(puzzleInput)
      expect(answer).toEqual(3)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(puzzleInput)
      expect(answer).toEqual(14)
    })
  })
})