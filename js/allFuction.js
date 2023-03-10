// 轉二進位計算出二進位中1的數量
function couuntBits(n) {
	let bits = n.toString(2)
	let res = 0
	for (let i = 0; i < bits.length; i++) {
		if(bits[i] === '1') {
			res++
		}
	}
	return res
}
// 最佳解參考
// countBits = n => n.toString(2).split('0').join('').length;

// 會員分類 高級會員及公開會員
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
function openOrSenior(data){
	let res = []
  for (let i = 0; i < data.length; i++) {
		if(data[i][0] >= 55 && data[i][1] > 7) {
			res.push('Senior')
		} else {
			res.push('Open')
		}
	}
	return res
}
// 最佳解參考
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// 將正數轉為負數
function makeNegative(num) {
	return num > 0 ? -num : num
}
// 最佳解參考
// function makeNegative(num) {
//   return -Math.abs(num);
// }

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

// 取得兩個字串的頭尾做比較，一樣回true否則false
function feast(beast, dish) {
	let str1 = beast.slice(0, 1) + beast.slice(-1)
	let str2 = dish.slice(0, 1) + dish.slice(-1)
	return str1 === str2 ? true : false
}
// 最佳解參考
// return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]