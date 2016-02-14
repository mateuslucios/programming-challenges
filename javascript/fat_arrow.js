var my_function = arr => arr.map(e => e % 2 === 0 ?  e + 1 : e - 1);


var data = [1, 2, 3, 4];

console.log(my_function(data));