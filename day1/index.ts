import { solvePartOne, solvePartTwo } from './solve.ts'
import { getInput } from '../utils/getInput.ts'

getInput('https://adventofcode.com/2025/day/1/input')
  .then((res: string) => {
    const answerOne = solvePartOne(res)
    console.log('Day 1 - Answer one', answerOne)

    const answerTwo = solvePartTwo(res)
    console.log('Day 1 - Answer two', answerTwo)
  })
  .catch(err => console.error(err))
