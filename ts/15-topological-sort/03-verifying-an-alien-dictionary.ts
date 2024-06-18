
function verifyAlienDictionary(words, order) {
  //  If there is only one word to check, this is a
  //  trivial case with not enough input (minimum two
  //  words) to run the algorithm. So we return True
  if (words.length == 1) {
    return true;
  }
  //  Declare a hash map to store the characters of the
  //  words
  let orderMap = {};

  //  Traverse order and store the rank of each letter
  //  in orderMap
  for (let i = 0; i < order.length; i++) {
    let val = order[i];
    orderMap[val] = i;
  }

  //  Traverse in array words
  for (let i = 0; i < words.length - 1; i++) {
    //  Traverse each character in a word
    for (let j = 0; j < words[i].length; j++) {
      //  If all the letters have matched so far, but
      //  the current word is longer than the next one,
      //  the two are not in order and we return False
      if (j >= words[i + 1].length) {
        return false;
      }
      //  Check if the letters in the same position in
      //  the two words are different
      if (words[i][j] != words[i + 1][j]) {
        //  Check if the rank of the letter in the
        //  current word is greater than the rank in the
        //  same position in the next word
        if (
          orderMap[words[i][j]] > orderMap[words[i + 1][j]]
        ) {
          return false;
        }
        //  if we find the first different character and
        //  they are sorted, then there's no need to
        //  check remaining letters
        break;
      }
    }
  }

  return true;
}









//  Driver Code

function main() {
  let words = [
    ["alpha", "bravo", "charlie", "delta"],
    ["apple", "app"],
    ["martian"],
    ["jupyter", "ascending"],
    ["passengers", "to", "the", "unknown"],
  ];

  let order = [
    "abcdlpite",
    "apple",
    "mabcdefghijklnopqrstuvwxyz",
    "jabcdefghiklmnopqrstuvwxyz",
    "ptuhabcdefghijklmnoqrsvwxyz",
  ];

  for (let i = 0; i < order.length; i++) {
    console.log(
      i + 1 + ".\t Words: [",
      words[i].toString(),
      "]"
    );
    console.log('\t Order: "', order[i], '"');
    let result = verifyAlienDictionary(words[i], order[i]);
    if (result) {
      console.log("\t Alien dictionary verified: Yes");
    } else {
      console.log("\t Alien dictionary verified: No");
    }
    console.log("-".repeat(100));
  }
}

main();
