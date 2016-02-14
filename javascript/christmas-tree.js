function processData(input) {
  var offset = 9;

  console.log(new Array(offset).join(" ").concat("*"));
  
  for (var i = 0; i < offset; i++) {
    var prefix = new Array(offset - i).join(" ");
    console.log(prefix.concat(new Array(2 * i + 2).join("0")));
  }

}

processData();