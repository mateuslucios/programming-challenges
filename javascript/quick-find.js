/**

Quick-Find Javascript implementation for the Union-Find abstraction.

Quick-find algorithm may take ~MN steps
to process M union commands on N objects

Works for cases that

1 <= M < 10^10
1 <= M < 10^10

**/

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