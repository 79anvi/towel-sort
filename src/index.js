
// You should implement your task here.

module.exports = function towelSort (matrix) {
  arr = [];
  if (Array.isArray(matrix)) {
    len = matrix.length;
    for (i = 0; i < len; i++) {
      if (i % 2 !== 0) {
        arr = arr.concat(matrix[i].reverse());
      } else arr = arr.concat(matrix[i]);
    }
  }
  return arr;
}
