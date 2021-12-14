export function generate(rows, cols, defaultVal = 0) {
  const mat = new Array(rows);
  for (let row = 0; row < rows; row++) {
    mat[row] = new Array(cols);
    for (let col = 0; col < cols; col++) {
      mat[row][col] = defaultVal;
    }
  }
  return mat;
}
export function clone(matrix) {
  const rows = matrix.length;
  if (rows == 0) return [];
  const cols = matrix[0].length;
  const clone = new Array(rows);
  for (let row = 0; row < rows; row++) {
    clone[row] = new Array(cols);
    for (let col = 0; col < cols; col++) {
      clone[row][col] = matrix[row][col];
    }
  }
  return clone;
}