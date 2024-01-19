
export function reverseString(string) {
  if ((typeof string) != "string") string = "" + string;
  let reversed = "";

  for(let i = 1; i <= string.length; i++) {
      reversed += string.charAt(string.length - i);
  }
  return reversed;
}



export function isPalindrome(string){
  if ((typeof string) != "string") string = "" + string;
  string = string.toLowerCase();
  if(string === reverseString(string)) return true;
  else return false;
}