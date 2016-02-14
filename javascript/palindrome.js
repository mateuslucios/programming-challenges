var my_array = ["mateus", "ama", "rotator"];

// for (var i of my_array){
//     var rev = i.split("").reverse().join("");
//     if (i === rev)
//       console.log(i);
// }

var arr = my_array.filter(e => e === e.split("").reverse().join("") );
for (var i of arr)
  console.log(i);
