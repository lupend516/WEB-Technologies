// Переключение темы
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Рейтинг с помощью звезд
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < star.dataset.value; i++) {
            stars[i].classList.add('selected');
        }
        playSound(); // Звук при выборе рейтинга
    });
});

// Звук для клика по звездам
function playSound() {
    const audio = new Audio('click-sound.mp3'); // Убедитесь, что файл существует
    audio.play();
}

// Показ времени следующей сессии
document.getElementById('show-next-session').addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Next session starts at ${currentTime}`);
});

// "Читать далее" для дополнительной информации
document.getElementById('show-more').addEventListener('click', () => {
    const extraInfo = document.getElementById('extra-info');
    extraInfo.classList.toggle('visible');
    extraInfo.classList.contains('visible')
        ? extraInfo.textContent = "This is additional information about PE sessions."
        : extraInfo.textContent = "";
});

// Массив занятий и фильтр по дням
const classes = [
    { name: "Armwrestling", day: "Monday" },
    { name: "Basketball", day: "Wednesday" },
    { name: "Volleyball", day: "Friday" }
];
const classNames = classes.map(cl => cl.name).join(", ");
alert(`Available classes: ${classNames}`);
