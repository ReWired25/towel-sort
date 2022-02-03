
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let finalArr = [];

  if (matrix === undefined) {
      return [];
  }

  for (let i = 0; i < matrix.length; i++) {
      for(let k = 0; k < matrix[i].length; k++) {
          if (i % 2 === 0) {
              finalArr.push(matrix[i][k])
          } else {
              finalArr.push(matrix[i][matrix[i].length - 1 - k])
          }
      }
  }

  return finalArr;
}