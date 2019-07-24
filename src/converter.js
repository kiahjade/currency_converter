const rate = 1.3066
const sourceFee = 0.01
const fixFee = 25 * rate

module.exports = (amount) => {
  if (amount < 0) {
    return 0
  } else if (amount <= 1000) {
    return (amount * rate) - ((amount * sourceFee) * rate);
  } else if (amount > 1000){
    return (amount * rate) - (fixFee);
  }
}
