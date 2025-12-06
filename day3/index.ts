import { solvePartOne, solvePartTwo } from './solve.ts'
import { getInput } from '../utils/getInput.ts'

getInput('https://adventofcode.com/2025/day/3/input')
  .then((res: string) => {
    const answerOne = solvePartOne(res)
    console.log('Day 3 - Answer one', answerOne)

    const answerTwo = solvePartTwo(res)
    console.log('Day 3 - Answer two', answerTwo)
  })
  .catch(err => console.error(err))
