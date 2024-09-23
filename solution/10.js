// https://school.programmers.co.kr/learn/courses/30/lessons/76502

const pair = {
  '(': ')',
  '{': '}',
  '[': ']',
};

function isValid(s) {
  const stack = [];

  const keys = Object.keys(pair);

  for (const c of s) {
    if (keys.includes(c)) {
      stack.push(c);
    } else {
      if (pair[stack.pop()] !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i) + s.slice(0, i);
    if (isValid(str)) answer++;
  }

  return answer;
}
