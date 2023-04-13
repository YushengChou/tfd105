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