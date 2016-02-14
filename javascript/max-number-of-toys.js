function maxNumberOfToys(n, k, toyPrices) {

  console.log("n = " + n + "; k = " + k + "; toy prices = " + toyPrices);

  var bought = [];
  toyPrices = toyPrices.sort((a, b) => a - b); // sort as number in ascending order
  for (var price of toyPrices){
    if (k - price >= 0){
      bought.push(price);
      k = k - price;
    }
  }

  return bought.length;
}

function processData(input){
  var lines = input.split("\n");
  var flData = lines[0].split(" ");
  var slData = lines[1];

  var n = flData[0];
  var k = flData[1];

  var toyPrices = slData.split(" ");

  return maxNumberOfToys(n, k, toyPrices);
}


var data = "7 50\n1 12 5 111 200 1000 10 2 4 6 8 9";
console.log(processData(data));