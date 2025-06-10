
//PseudoCode
// Concat two stings
// check that both parameters are String
  
  function concatStrings(str1, str2) {
    
    if(typeof str1 === "string" && typeof str2 === "string") {
      
      return str1.concat(str2);
    }
    return "Wrong parameter";
  }


console.log(concatStrings("Hello", 5));
console.log(concatStrings("Hello", "Tati"));
console.log(concatStrings("Hello", null));
console.log(concatStrings("Hello", undefined));


  function concatStrings1(str3, str4) {
    
    if(typeof str3 === "string" && typeof str4 === "string") {
     //let arr=[...str3, ...str4]
     //console.log("myArr ", arr)
     //return arr.join('')
     
     return [str3, str4].join('')
      
    }
    return "Wrong parameter";
  }

console.log(concatStrings1("Hello ", "Sveta!"));