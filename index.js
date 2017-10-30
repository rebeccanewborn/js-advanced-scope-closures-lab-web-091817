function produceDrivingRange(blockRange) {
  return function(start, end) {
    const distance = Math.abs(
      parseInt(start.slice(0, -2)) - parseInt(end.slice(0, -2))
    );
    const difference = blockRange - distance;
    if (difference > 0) {
      return `within range by ${difference}`;
    } else if (difference < 0) {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(price) {
    return price * percentage;
  };
}
