
function reverseString(string) {
  if ((typeof string) != "string") string = "" + string;
  let reversed = "";

  for(i = 1; i <= string.length; i++) {
      reversed += string.charAt(string.length - i);
  }
  return reversed;
}



function isPalindrome(string){
  if ((typeof string) != "string") string = "" + string;
  if(string === reverseString(string)) return true;
  else return false;
}