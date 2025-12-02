import { solvePartOne, solvePartTwo } from './solve'

describe('Day 1', () => {
  describe('part one', () => {
    it.skip('solves for example input', () => {
      const answer = solvePartOne(`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`)
      expect(answer).toEqual(3)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`)
      expect(answer).toEqual(6)
    })
  })
})