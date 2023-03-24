
function findMax(arr) {
  var max = arr[0];
  for(i = 1;i < arr.length-1; i ++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}