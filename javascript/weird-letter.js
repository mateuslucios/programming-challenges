function processData(input) {
  var str = input.split('\n');
  var t = parseInt(str[0]);
  for(var i = 0; i < t; i++){
    var count = 0;
    var current = input.split('\n')[i + 1];
    var s = 0;
    var len = current.length - 1;
    while(s <= len) {
      count += Math.abs(current.charCodeAt(len) - current.charCodeAt(s));
      s++;
      l--;
    }
    
    console.log(count);
  }
}