/* Return array of prime numbers */
const filterPrime = (arr) => {
  let p_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let num_prime = true;
    if (arr[i] > 1) {
      for (let k = 2; k < arr[i]; k++) {
        if (arr[i] % k == 0) num_prime = false;
      }
    }
    //final check to push the element to the array
    if (num_prime || arr[i] === 1) p_arr.push(arr[i]);
  }

  return p_arr;
};

/* Palindrome Checker */
const checkPalindrome = (word) => {
  let reversed = "";
  for (let k = word.length - 1; k > -1; k--) {
    reversed = reversed.concat(word[k]);
  }
  return reversed === word;
};

/* Array Reversing */
const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i > -1; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

/* Inplace Array Reversing */
const inplaceReverse = (arr) => {
  let j = arr.length - 1;
  let tmp;
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] && arr[j]) {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
  return arr;
};

/* Array To Object */
const makeObject = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].split(",")[0].split(" ")[0]] = {
      second_name: arr[i].split(",")[0].split(" ")[1],
      age: parseInt(arr[i].split(",")[1]),
    };
  }
  return obj;
};

/* Sorting */
// Func 1 - Working
const filterNotPrime = (arr) => {
  let p_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let num_prime = true;
    if (arr[i] > 1) {
      for (let k = 2; k < arr[i]; k++) {
        if (arr[i] % k == 0) num_prime = false;
      }
    }
    //final check to push the element to the array
    if (!num_prime && arr[i] !== 1) p_arr.push(arr[i]);
  }

  return p_arr;
};
const sortFunc = (arr) => {
  let p_arr = [...filterNotPrime(arr)];
  let tmp;
  for (let i = 0; i < p_arr.length; i++) {
    for (let k = 0; k < p_arr.length - 1; k++) {
      if (p_arr[i] > p_arr[k]) {
        tmp = p_arr[i];
        p_arr[i] = p_arr[k];
        p_arr[k] = tmp;
      }
    }
  }
  return p_arr;
};

// Func 2 - Still working on it
const sortFunc_2 = (arr) => {
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    // Check if number is prime
    let num_prime = true;
    if (arr[i] > 1) {
      for (let k = 2; k < arr[i]; k++) {
        if (arr[i] % k == 0) num_prime = false;
      }
    }
    if (arr[i] === 1 || num_prime) {
      console.log("Prime::", arr[i]);
      //Erase element from array
      arr.splice(i, 1);
    } else {
      for (let k = 0; k < arr.length - 1; k++) {
        if (arr[i] > arr[k]) {
          tmp = arr[i];
          arr[i] = arr[k];
          arr[k] = tmp;
        }
      }
    }
  }
  return arr;
};

/* Time Complexity */
const checkMajority = (arr) => {
  let majority = [];
  let undupl = [];
  //Remove duplications
  for (let i = 0; i < arr.length; i++) {
    if (undupl.findIndex((x) => x === arr[i]) === -1) {
      undupl.push(arr[i]);
    }
  }
  for (let i = 0; i < undupl.length; i++) {
    let occurence = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === undupl[i]) occurence++;
    }
    if (occurence > arr.length / 2) {
      majority.push(
        `Majority element ${undupl[i]} with occurence ${occurence} out of ${arr.length}`
      );
    }
  }
  return majority;
};

/* Testing */
// console.log(filterPrime([1, 2, 3, 4, 5, 6]));
// console.log(checkPalindrome("madam"));
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));
// console.log(inplaceReverse([1, 2, 3, 4, 5, 6, 7]));
// console.log(makeObject(["Boby Anna, 30", "Color Green, 20"]));
// console.log(sortFunc([1, 2, 3, 4, 5, 6]));
// console.log(checkMajority([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));
