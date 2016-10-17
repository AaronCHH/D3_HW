function random(N, M) {
  console.log(N, M)
  return Math.floor(Math.random() * (M + 1 - N) + N)
}
