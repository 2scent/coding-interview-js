// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function isValidLocation(nx, ny) {
  return Math.abs(nx) <= 5 && Math.abs(ny) <= 5;
}

const d = {
  'U': [0, 1],
  'D': [0, -1],
  'R': [1, 0],
  'L': [-1, 0],
}

function nextLocation(x, y, dir) {
  const [dx, dy] = d[dir];
  return [x + dx, y + dy];
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();

  for (const dir of dirs) {
    const [nx, ny] = nextLocation(x, y, dir);

    if (!isValidLocation(nx, ny)) continue;

    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    [x, y] = [nx, ny];
  }

  return visited.size / 2;
}
