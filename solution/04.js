// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, pattern] of patterns.entries()) {
    for (const [j, answer] of answers.entries()) {
      if (answer === pattern[j % pattern.length]) {
        scores[i]++;
      }
    }
  }

  const highestScore = Math.max(...scores);

  const result = [];
  for (const [i, score] of scores.entries()) {
    if (score === highestScore) {
      result.push(i + 1);
    }
  }

  return result;
}
