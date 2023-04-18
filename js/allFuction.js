// 轉二進位計算出二進位中1的數量
function couuntBits(n) {
  let bits = n.toString(2);
  let res = 0;
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === "1") {
      res++;
    }
  }
  return res;
}
// 最佳解參考
// countBits = n => n.toString(2).split('0').join('').length;

// 會員分類 高級會員及公開會員
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
function openOrSenior(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      res.push("Senior");
    } else {
      res.push("Open");
    }
  }
  return res;
}
// 最佳解參考
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// 將正數轉為負數
function makeNegative(num) {
  return num > 0 ? -num : num;
}
// 最佳解參考
// function makeNegative(num) {
//   return -Math.abs(num);
// }

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// 取得兩個字串的頭尾做比較，一樣回true否則false
function feast(beast, dish) {
  let str1 = beast.slice(0, 1) + beast.slice(-1);
  let str2 = dish.slice(0, 1) + dish.slice(-1);
  return str1 === str2 ? true : false;
}
// 最佳解參考
// return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

// Given the triangle of consecutive odd numbers:
// 用奇數形成的三角形(計算第N列的加總)
// 				1
// 			3     5
// 		7     9    11
// 	13    15    17    19
// 21    23    25    27    29
// ...
function rowSumOddNumbers(n) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += 1 + n * (n - 1) + 2 * i;
  }
  return res;
  // 最佳解
  // return n * n * n
}

// 判斷陣列a中是否包含x，有回true否則回false
function check(a, x) {
  return a.includes(x);
}

// 傳入一個整數數字，返回排序由大至小的數字
// 轉字串用split轉陣列用sort排序用reverse反轉排序用join轉回字串用parseInt轉回數字
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// 去除字串中間所有空格
function noSpace(x) {
  // 正則
  return x.replace(/\s*/g, "");
  // 用split轉陣列(用空格去切，沒空格的話是每一個單位都保留含空格) 再用join轉回字串
  // return x.split(' ').join('')
}

// 字串取得正中間的字(基數取中間，偶數取中間兩字)ex: 'abc': 'b', 'abcd': 'bc'
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[parseInt(s.length / 2) - 1] + s[s.length / 2];
  } else {
    return s[parseInt(s.length / 2)];
  }
}
// 最佳解 return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

// 得到一組陣列，返回陣列數值正數變負數;負數變正數
function invert(array) {
  return array.map(item => item * -1);
}
// 最佳解 const invert = array => array.map(num => -num);

// 算出第幾世紀
function century(year) {
  return year % 100 === 0 ? year / 100 : parseInt(year / 100) + 1
}
// return (year + 99) / 100 | 0; "|" 符號用來無條件捨去小數點後
// return Math.ceil(year/100) Math.ceil()函數結果非整數時無條件進位至整數

// 算出給定的字串中有包含幾個['a', 'e', 'i', 'o', 'u'];
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// 判斷是否可以開根號並且大於等於0，符合回true否則false
function isSquare(n){
  return Number.isInteger(Math.sqrt(n)) && n >= 0 ? true : false
}
// 最佳解
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// 計算陣列中true的數量
function countTrue(arrayOfBooleans) {
  return arrayOfBooleans.filter(Boolean).length;
}

// 剪刀石頭布
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  return 'Player 2 won!';
};

// 將接收到的字串單字反轉
function reverseWords(str) {
  // 切成陣列->反轉->合併->切成陣列->反轉->合併
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

// 根据名字和拥有者回应
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}
// 其他写法
function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}

// 接收一串文字，返回该字串内最小单字的长度
function findShort(s){
  const arr = []
  s.split(' ').forEach(function(item) {
    arr.push(item.length)
  })
  return arr.sort((a,b) => a - b)[0]
}
// 最佳解
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// 无条件舍去运用
function litres(time) {
  return Math.floor(time / 2)
}

// 将阵列中一堆单词合并成一个字串
function smash (words) {
  return words.join(' ')
};

// 收到一个阵列其长度至少大于4，返回将其最小的两个数字之和
function sumTwoSmallestNumbers(numbers) {
  // 将数组按升序排序
  const sortedNumbers = numbers.sort((a, b) => a - b);
  // 返回前两个数的和
  return sortedNumbers[0] + sortedNumbers[1];
}

// 收到一个数字字串，将数字小于5转成0，大于等于5转成1，并将其返回
function fakeBin(x){
  let res = ''
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      res += 0
    } else {
      res += 1
    }
  }
  return res
}
// 简洁写法
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// 收到一个字串，使函數將打破駝峰式大小寫，在單詞之間使用空格。
function solution(string) {
  let res = ''
  for (let i = 0; i < string.length; i++) {
    if (!/[A-Z]/.test(string[i])) {
      res += string[i]
    } else {
      res += (' ' + string[i])
    }
  }
  return res
}
// 最佳解
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

// 將字符串轉換為新字符串，若有重复转成")"否则"("，不区分大小写
function duplicateEncode(word){
  let res = ''
  let str = word.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      res += '('
    } else {
      res += ')'
    }
  }
  return res
}
// 最佳解
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// 得到阵列中最小及最大值
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

// BMI
function bmi(weight, height) {
  let res = weight / Math.pow(height, 2)
  if (res <= 18.5) {
    return "Underweight"
  } else if (res <= 25) {
    return "Normal"
  } else if (res <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// 判断阵列中字串长度=4的项目
function friend(friends){
  return friends.filter(item => item.length === 4)
}

// 计算租车费用
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50
  } else if (d >= 3 && d < 7) {
    return d * 40 - 20
  } else {
    return d * 40
  }
}
// 简短写法
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}
// 更清晰--一个function做一件事情
function baseCost(days, rate) {
  return days * rate;
}
function discountRate(days) {
  if ( days >= 7 ) {
    return 50;
  }
  else if ( days >= 3 ) {
    return 20;
  }
  else {
    return 0;
  }
}
function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number=function(array){
  let resArr = []
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      resArr.push(`${i + 1}: ${array[i]}`)
    }
    return resArr
  } else {
    return resArr
  }
}
// 用map
var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}
// const number = array => array.map((n, i) => `${i + 1}: ${n}`);

// 給定一個整數數組，找到出現奇數次的整數。永遠只有一個整數出現奇數次。
// 返回該數組內出現基數次數的數字
function findOdd(A) {
  let obj = A.reduce(function(count, currentVal) {
    return (
      count[currentVal] ? ++count[currentVal] : (count[currentVal] = 1),
      count
    )
  }, {})
  let objKey = Object.keys(obj)
  for (let i = 0; i < objKey.length; i++) {
    if (obj[objKey[i]] % 2 != 0) {
      return Number(objKey[i])
    }
  }
}
// 最佳解
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// 参考
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

// 實現一個函數，將兩個數字相加並以二進制形式返回它們的和。 轉換可以在添加之前或之後進行。
// 返回的二進制數應該是一個字符串。
function addBinary(a,b) {
  return parseInt(a + b).toString(2)
}