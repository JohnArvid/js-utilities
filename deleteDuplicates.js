function unique(arr) {
  //for every array item, run indexOf on the original array searching for 
  //item starting from current index + 1. If it doesn't exist anywhere else return true.
  //Gets only the LAST occurence of any value in arr.
  return arr.filter( (item, index) => arr.indexOf(item, index + 1) == -1);
}

//another variant, making use of set
export default function uniqueBySet(arr){
  return Array.from(new Set(arr));
}