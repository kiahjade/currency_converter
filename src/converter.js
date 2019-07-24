const rate = 1.3066
const fixFee = 25 * rate

module.exports = (amount) => {
  if (amount <= 1000) {
    return amount * rate;
  } else if (amount > 1000){
    return (amount * rate) - (25 * rate);
  }
}
