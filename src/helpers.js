/**
 * createRandomMatrix: Creates a random matrix of 0s or 1s
 * @param {Int} size - The size of the matrix, 5 by default
 * @param {String} mode - The difficulty mode, EASY by default
 * @return {Array<Array>} - 2D array which represents the Lights Out matrix
 */
export const createRandomMatrix = (size = 5, mode = 'EASY') => {
  let mat = []

  if (mode === 'EASY') {
    mat = [
      [1, 1, 0, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 0, 1, 1]
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

/**
 * computeNewMatrix: Computes the new matrix given an old matrix and the toggled point
 * @param {Array<Array>} mat - The matrix in which we will run the Lights Out algorithm
 * @param {Object} point - The matrix in which we will run the Lights Out algorithm
 * @return {Array<Array>} - The new matrix with updated toggles
 */
export const computeNewMatrix = (mat, point) => {
  const { x, y } = point
  let newMat = mat.splice(0)

  // Toggle the clicked tile
  newMat[y][x] = !newMat[y][x] | 0

  // Toggle neighbors
  if (y !== 0) newMat[y - 1][x] = !newMat[y - 1][x] | 0
  if (y !== newMat[x].length - 1) newMat[y + 1][x] = !newMat[y + 1][x] | 0
  if (x !== 0) newMat[y][x - 1] = !newMat[y][x - 1] | 0
  if (x !== newMat.length - 1) newMat[y][x + 1] = !newMat[y][x + 1] | 0

  return newMat
}

/**
 * verifyCompletion: Verifies whether the game has been won or not
 * @param {Array<Array>} mat - The matrix which will be verified
 * @return {Bool} - Whether the matrix has all lights turned off (0s)
 */
export const verifyCompletion = mat => {
  // If there's a 0 at any point, the game is not complete
  for (let row of mat) {
    for (let element of row) {
      if (element === 1) {
        return false
      }
    }
  }

  console.info('Won game.')
  return true
}

/**
 * calculateBoardDimensions: Calculates the correct board dimensions given the viewport size
 * @return {Object} - an object that holds the appropriate width and height for the Board component
 */
export const calculateBoardDimensions = () => {
  const scale = 1.25
  const min = 340
  return {
    width: Math.min(window.innerWidth / scale, min),
    height: Math.min(window.innerWidth / scale, min)
  }
}

/**
 * scrollTo: Scrolls to a given point of the page
 * Acquired from https://gist.github.com/andjosh/6764939
 */
export const scrollTo = (element, to, duration) => {
  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20

  function animateScroll() {
    currentTime += increment
    let val = Math.easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}

Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}
