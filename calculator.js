let calculator = {
  
  read() {
      this.a = +prompt("Number a:", 0);
      this.b = +prompt("Number b:", 0);
  },
  
  sum() {
      return this.a + this.b;
  },
  
  mul() {
      return this.a * this.b;
  }

};

//As a constructor

function Calculator = {
  
  this.read = function() {
      this.a = +prompt("Number a:", 0);
      this.b = +prompt("Number b:", 0);
  },
  
  this.sum = function() {
      return this.a + this.b;
  },
  
  this.mul = function() {
      return this.a * this.b;
  }
  
};

const constructedCalculator = new Calculator(); 