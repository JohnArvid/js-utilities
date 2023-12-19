// str is a string to pad
// len is a wanted length of the string
// ch is an optional character to pad with, default is ' ' 


function leftPad(str, len, ch) {
	str = String(str);
	let i = -1;
	if (!ch && ch !== 0) ch = ' ';
	len = len -str.length;
	while (++i < len) {
		str = ch + str;
	}
	return str;
}
