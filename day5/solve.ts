export function solvePartOne (input: string) {
  let freshIngredients = 0
  const idRanges = []
  const ids = []
  const database = input.split('\n')

  for (const row of database) {
    if (row.trim().length === 0) continue
    if (row.includes('-')) {
      const [start, end] = row.trim().split('-')
      idRanges.push({ start: Number(start), end: Number(end) })
    } else {
      ids.push(Number(row.trim()))
    }
  }

  for (const id of ids) {
    for (const { start, end } of idRanges) {
      if (id >= start && id <= end) {
        freshIngredients++
        break
      }
    }
  }

  return freshIngredients
}

export function solvePartTwo (input: string) {
  const totalFreshIds = 0
  const idRanges = []
  const database = input.split('\n')

  for (const row of database) {
    if (row.trim().length === 0) break
    if (row.includes('-')) {
      const [start, end] = row.trim().split('-')
      idRanges.push({ start: Number(start), end: Number(end) })
    }
  }

  for (const { start, end } of idRanges) {

  }

  return totalFreshIds
}