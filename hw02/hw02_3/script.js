function random(M, N) {
  console.log(M, N)
  return Math.floor(Math.random() * (N + 1 - M) + M)
}