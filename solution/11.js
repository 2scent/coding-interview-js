// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (const c of s) {
    if (s.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
