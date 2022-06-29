function computeWhenDouble(interestRate) {
  let principal = 1;
  const interest = 1 + interestRate * 0.01;
  let count = 0;

  while (principal < 2) {
    principal = principal * interest;
    count++;
  }
  return count;
}
