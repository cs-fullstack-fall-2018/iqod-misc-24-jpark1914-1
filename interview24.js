var array = [[4, 5, 6, 1, 8], [2, 3, 4, 5], [7, 5, 3]];
var firstNum = [];
var middleNum = [];
var lastNum = [];
for (var i = 0; i< array.length; i++) {
    firstNum.push(array[i][0]);
    for(var k = array[i].length-1; k>0; k--){
        lastNum.push(array[i][k]);
    }
    lastNum = array[i].length-1;

}
 console.log(firstNum);
console.log(lastNum);