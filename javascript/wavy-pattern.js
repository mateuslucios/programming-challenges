function processData(input) {
    for (var i = 0; i < 14; i++){
      var str = "";
      for (var j = 0; j < 7; j++){
        str = str.concat("\u2571\u2572");
      }
      console.log(str);
    }
} 

processData();

console.log(Array(15).join(Array(8).join("\u2571\u2572")+'\n'));