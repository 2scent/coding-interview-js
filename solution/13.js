// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;

  const bucket = [];
  for (const move of moves) {
    const col = move - 1;

    for (const row of board) {
      if (row[col] !== 0) {
        if (bucket.at(-1) === row[col]) {
          bucket.pop();
          answer += 2;
        } else {
          bucket.push(row[col]);
        }
        row[col] = 0;
        break;
      }
    }
  }

  return answer;
}
