// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const challengers = Array(N + 2).fill(0);

  for (const stage of stages) {
    challengers[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (const [stage, challenger] of challengers.entries()) {
    fails[stage] = total > 0 ? challenger / total : 0;

    total -= challenger;
  }

  delete fails[0];
  delete fails[N + 1];

  const result = Object.entries(fails);
  result.sort((a, b) => {
    return b[1] - a[1];
  })

  return result.map(([stage]) => Number(stage));
}
