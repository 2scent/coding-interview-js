function solution(d) {
  const s = [];

  while (d > 0) {
    s.push(d % 2);
    d = Math.floor(d / 2);
  }

  return s.toReversed().join('');
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
