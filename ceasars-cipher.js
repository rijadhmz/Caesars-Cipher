function rot13(str) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let a = str + "";
    let lower = a.toLowerCase();
    let arr = lower.split("");
    let aIndex;
    let result = [];
    
    for (let i=0; i<arr.length; i++){
      if (arr[i]==" " || arr[i]=="!" ||  arr[i]=="?" || arr[i]=="." ){
        result.push(arr[i]);
      }
      for (let y=0; y<alphabet.length; y++){
        if (alphabet[y] == arr[i]){
          aIndex = y + 13
          result.push(alphabet[aIndex]);
          break
        }
      }
    }
    let final = result.join("");
    let upper = final.toUpperCase();
    return upper;
  }
  
  console.log(rot13("SERR PBQR PNZC"));