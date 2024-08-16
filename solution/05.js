// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const row1 = arr1.length;
  const column1 = arr1[0].length;

  const row2 = arr2.length;
  const column2 = arr2[0].length;

  const result = [];
  for (let i = 0; i < row1; i++) {
    result[i] = new Array(column2).fill(0);
  }

  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < column2; j++) {
      for (let k = 0; k < column1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
