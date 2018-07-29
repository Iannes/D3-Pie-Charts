// UNUSED TODO -> refactor so it can repeat cross function
export const repeat = x => f => {
  if (x > 0) {
    f()
    repeat(x - 1)(f)
  }
}