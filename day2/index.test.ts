import {containsRepeats, getLargestFactor, isInvalidIdTwo, solvePartOne, solvePartTwo} from './solve'

describe('Day 2', () => {
  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`)
      expect(answer).toEqual(1227775554)
    })
  })

  describe('get largets factor', () => {
    it('finds the largest factor for 1188511885', () => {
      const input = 10
      const output = getLargestFactor(input)
      expect(output).toBe(5)
    })
  })

  describe('contains repeats', () => {
    it('finds repeats in 123123123', () => {
      const input = '123123123'
      const output = containsRepeats(3, input)
      expect(output).toBe(true)
    })

    it('finds repeats in 1188511885', () => {
      const input = '1188511885'
      const output = containsRepeats(5, input)
      expect(output).toBe(true)
    })
  })

  describe('Is invalid ID Two', () => {
    it('123123123', () => {
      const input = 123123123
      const output = isInvalidIdTwo(input)
      expect(output).toBe(true)
    })

    it('1188511885', () => {
      const input = 1188511885
      const output = isInvalidIdTwo(input)
      expect(output).toBe(true)
    })

    it('2121212121', () => {
      const input = 2121212121
      const output = isInvalidIdTwo(input)
      expect(output).toBe(true)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`)
      expect(answer).toEqual(4174379265)
    })
  })
})