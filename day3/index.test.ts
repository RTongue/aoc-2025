import { solvePartOne, solvePartTwo } from './solve'

describe('Day 3', () => {
  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`987654321111111
811111111111119
234234234234278
818181911112111`)
      expect(answer).toEqual(357)
    })
  })

  describe('part two', () => {
    it('solves for a single line', () => {
      const answer = solvePartTwo('987654321111111')
      expect(answer).toEqual(987654321111)
    })

    it('solves for a single line part 2', () => {
      const answer = solvePartTwo('811111111111119')
      expect(answer).toEqual(811111111119)
    })

    it('solves for example input', () => {
      const answer = solvePartTwo(`987654321111111
811111111111119
234234234234278
818181911112111`)
      expect(answer).toEqual(3121910778619)
    })
  })
})