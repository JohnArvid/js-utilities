export default function isEmptyObj(obj) {
   if(typeof obj != 'object') return `error: ${obj} is not of type object`;
   for(let prop in obj){
      return false; 
    }
    return true;
}