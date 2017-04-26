export const createRandomMatrix = (size) => {
  const mat = []
  while (mat.length < size) {
    const row = []

    while (row.length < size) {
      row.push(Math.round(Math.random()))
    }

    mat.push(row)
  }

  return mat
}
