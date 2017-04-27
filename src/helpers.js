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

export const computeNewMatrix = (mat, point) => {
  const { x, y } = point
  let newMat = mat.splice(0)

  newMat[y][x] = !newMat[y][x] | 0
  if (y !== 0)                      newMat[y - 1][x] = !newMat[y - 1][x] | 0
  if (y !== newMat[x].length - 1)   newMat[y + 1][x] = !newMat[y + 1][x] | 0
  if (x !== 0)                      newMat[y][x - 1] = !newMat[y][x - 1] | 0
  if (x !== newMat.length - 1)      newMat[y][x + 1] = !newMat[y][x + 1] | 0

  return newMat
}

export const verifyCompletion = (matrix) => {
  matrix.forEach((row) => {
    row.forEach((col) => {
      if (col === 1) {
        return false
      }
    }, this);
  }, this);

  return true
}