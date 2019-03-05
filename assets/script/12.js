let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

let i = 0
let highScores = 0

// while (i < scores.length) {
//   if (scores[i] > highScores) {
//     highScores = scores[i]
//   }
//   let msg = `Лошадь n${i + 1} пришла с результатом ${scores[i]}`
//   console.log(msg)
//   i += 1
// }

console.log(highScores);

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > highScores) {
    highScores = scores[i]
  }
  let msg = `Лошадь n${i + 1} пришла с результатом ${scores[i]}`
  console.log(msg)
  i += 1
}
