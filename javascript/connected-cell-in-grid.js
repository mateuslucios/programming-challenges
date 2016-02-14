var QuickFind = function (size) {
  this.id = [];
  this.size = size;
  
  for (var i = 0; i < size; i++)
    this.id[i] = i;
};

QuickFind.prototype.find = function (p, q) {
  return this.id[p] == this.id[q];
};

QuickFind.prototype.union = function (p, q) {
  var pid = this.id[p];
  for(var i = 0; i < this.id.length; i++) {
    if(this.id[i] == pid)
      this.id[i] = this.id[q];
  }
};

QuickFind.prototype.regions = function () {
  var sorted = this.id.sort((a, b) => a - b);

  var ref = -1;

  var reg = [];
  var index = -1;

  for (var i of sorted) {
    if (ref != i) {
      ref = i;
      index++;
      reg[index] = [];
      reg[index].push(i);
    } else {
      reg[index].push(i);
    }
  }
  
  return reg;
}


function processData(input){

  /** auxiliary functions **/
  
  var isOpen = (i) => grid[i] == 1;

  var isValid = (i, j) => i > 0 && j > 0 && i <= rows && j <= cols;
  
  var map = function (i, j) {
    if (i == 1)
        return j;
    if (i == 2)
        return cols + j;
    return (i - 1) * cols + j;
  }

  /** auxiliary functions **/


  var lines = input.split("\n")
  var a = 0;
  var rows = parseInt(lines[a++].trim());
  var cols = parseInt(lines[a++].trim());
  var grid = [];
  
  grid.push(-1);
  for (var i = a; i < rows + a; i++) {
    
    var columns = lines[i].split(" ");
    for(var j = 0; j < cols; j++) {
      grid.push(parseInt(columns[j].trim()));
    }
  }

  var qf = new QuickFind(grid.length);
  debugger;
  for (var i = 1; i <= rows; i++) {
    for(var j = 1; j <= cols; j++) {

      if (isOpen(map(i, j))){ // connects if i'm opened
        // left
        if (isValid(i, j - 1) && isOpen(map(i, j - 1)))
          qf.union(map(i, j), map(i, j - 1));

        // right
        if (isValid(i, j + 1) && isOpen(map(i, j + 1)))
          qf.union(map(i, j), map(i, j + 1));

        // up
        if (isValid(i - 1, j) && isOpen(map(i - 1, j)))
          qf.union(map(i, j), map(i - 1, j));

        // down
        if (isValid(i + 1, j) && isOpen(map(i + 1, j)))
          qf.union(map(i, j), map(i + 1, j));

        // up-left
        if (isValid(i - 1, j - 1) && isOpen(map(i - 1, j - 1)))
          qf.union(map(i, j), map(i - 1, j - 1));

        // up-right
        if (isValid(i - 1, j + 1) && isOpen(map(i - 1, j + 1)))
          qf.union(map(i, j), map(i - 1, j + 1));

        // down-left
        if (isValid(i + 1, j - 1) && isOpen(map(i + 1, j - 1)))
          qf.union(map(i, j), map(i + 1, j - 1));

        // down-right
        if (isValid(i + 1, j + 1) && isOpen(map(i + 1, j + 1)))
          qf.union(map(i, j), map(i + 1, j + 1));
        
      }
    }
  }

  // console.log(qf.find(map(1, 1), map(1, 2)));
  // console.log(qf.find(map(2, 2), map(2, 3)));
  // console.log(qf.find(map(2, 3), map(3, 3)));
  // console.log(qf.find(map(1, 1), map(3, 3)));

  // console.log(qf.find(map(1, 1), map(2, 1)));
  // console.log(qf.find(map(1, 2), map(1, 3)));
  // console.log(qf.find(map(3, 2), map(3, 3)));

  //console.log(qf.regions());
  console.log(qf.regions().sort((a, b) => b.length - a.length)[0].length);

}

var input = "4\n4\n1 1 0 0\r\n0 1 1 0\n0 0 1 0\n1 0 0 0";
processData(input);

var input = "5\n4\n0 0 1 1\n0 0 1 0\n0 1 1 0\n0 1 0 0\n1 1 0 0";
processData(input);

var input = "5\n4\n0 0 0 1\n0 0 1 0\n0 1 1 0\n0 1 0 0\n1 1 0 0";
processData(input);





