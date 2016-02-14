function heightAfterNCycles(ih, n){

  var height = ih;
  for (var i = 1; i <= n; i++){
    if (i % 2 !== 0){
      height = height * 2;
    } else {
      height = height + 1;
    }
  }

  return height;
}

console.log(heightAfterNCycles(1, 0));
console.log(heightAfterNCycles(1, 1));
console.log(heightAfterNCycles(1, 4));
console.log(heightAfterNCycles(1, 5));
console.log(heightAfterNCycles(1, 6));