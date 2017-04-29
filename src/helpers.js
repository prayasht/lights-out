export const createRandomMatrix = (size, mode = 'EASY') => {
  let mat = []

  if (mode === 'EASY') {
    mat = [
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1]
    ]
  } else {
    while (mat.length < size) {
      const row = []

      while (row.length < size) {
        row.push(Math.round(Math.random()))
      }

      mat.push(row)
    }
  }

  return mat
}

export const computeNewMatrix = (mat, point) => {
  const { x, y } = point
  let newMat = mat.splice(0)

  // Toggle the clicked tile
  newMat[y][x] = !newMat[y][x] | 0

  // Toggle neighbors
  if (y !== 0)                      newMat[y - 1][x] = !newMat[y - 1][x] | 0
  if (y !== newMat[x].length - 1)   newMat[y + 1][x] = !newMat[y + 1][x] | 0
  if (x !== 0)                      newMat[y][x - 1] = !newMat[y][x - 1] | 0
  if (x !== newMat.length - 1)      newMat[y][x + 1] = !newMat[y][x + 1] | 0

  return newMat
}

export const verifyCompletion = (matrix) => {

  // If there's a 0 at any point, the game is not complete
  for (let row of matrix) {
    for (let element of row) {
      if (element === 0) {
        return false
      }
    }
  }

  return true
}