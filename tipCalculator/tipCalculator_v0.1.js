function tipCalculator() {
  var billAmount = "What is total of your bill?";
  var tip = 0;
  var tipRate = "What is the % tip rate?";
  var total = 0;

  // prompt user for their totals
  billAmount = prompt(billAmount);
  tipRate = prompt(tipRate);

  // convert the bill to a float and round to 2 decimal places
  billAmount = parseFloat(billAmount);
  billAmount = round(billAmount, 2);
  showBill = billAmount.toFixed(2);
  document.write("Bill: £" + showBill + "</br>");

  // convert tipRate to float
  tipRate = parseFloat(tipRate);

  // calculate the tipRate and round it up using external function
  tip = billAmount * (tipRate / 100);
  tip = round(tip, 2);
  showTip = tip.toFixed(2);

  total = billAmount + tip;
  total = round(total, 2);

  document.write("Tip: £" + tip + "</br>");
  document.write("Total (with tip): £" + total);
}

// function to round up to 'x' decimal place
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

tipCalculator();
