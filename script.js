//Если число не двухзначное то добавляем ноль
function checkTime(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

function startTime() {
//Присваиваем часы/минуты/секунды переменным
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
//Выполняем проверку
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
//Добавляем и изменяем значения HTML
	document.querySelector('#hourse').innerHTML = h;
	document.querySelector('#minutes').innerHTML = m;
	document.querySelector('#seconds').innerHTML = s;
//Запускаем функцию каждые полсекунды
	timer = setTimeout(function () {
		startTime()
	}, 500);

}

startTime()