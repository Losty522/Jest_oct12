function calculateSquareRoot(num) {
    if (num < 0) {
      throw new Error('Input cannot be negative');
    }
    return Math.sqrt(num);
  }
  
  module.exports = { calculateSquareRoot };
  