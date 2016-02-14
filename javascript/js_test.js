function processData(myArray) {

    var sorted = myArray.sort(function (a, b) {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });

    var set = new Set(sorted.reverse());
    var arr = Array.from(set);
    if (arr.length > 1)
      console.log(arr[1]);
    else
      console.log([]);
}

function printWeekDay(date){
  var weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  console.log(weekday[date.getDay()]);
}