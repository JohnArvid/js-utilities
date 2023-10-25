//Add css-class mexLen4 on inputs to set attribute maxlength to 4
//Works for multiple items on same page
//IIFE to be added in footer and doesn't have to be called explicitly 

(function () {
  const nodelist = document.querySelectorAll(".maxLen4 input");
  for (let node of nodelist) { 
    node.setAttribute("maxlength","4");
  };
})();


