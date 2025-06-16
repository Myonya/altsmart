const navLinks = document.querySelectorAll('.buttons nav a');
const iframeElement = document.querySelector('#iframeChange');
const newParent = document.querySelector('.new-container');
const origParent = iframeElement.parentElement;

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Снимаем класс active со всех ссылок
        navLinks.forEach(btn => btn.classList.remove('active'));

        // Добавляем active к текущей ссылке
        link.classList.add('active');
    });
});
// Функция для изменения iframe под мобилки
function mobileResize() {
    const windowWidth = window.innerWidth; // получение ширины окна

    if (windowWidth <= 770) {
        if (iframeElement.parentElement !== newParent) { //присваивание нового контейнера
            newParent.appendChild(iframeElement);
        }
    } else {
        if (iframeElement.parentElement !== origParent) { //присваивание оригинального контейнера
            origParent.appendChild(iframeElement);
        }
    }
}
// добавляем обработчик изменения того что окно меняется
window.addEventListener('resize', mobileResize);
// просто вызвать по приколу чтобы мозг не долбить и всё сразу подгрузилось
mobileResize();

const TOKEN = '7356344907:AAF5W5Ig2nzTuGbrZcGa5azoHNEkE1fhxyM';
const CHAT_ID = '855812223';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const { name, phone, message } = this;

    const text = `<b>Новая заявка</b>\nИмя: ${name.value}\nТелефон: ${phone.value}\nКомментарий: ${message.value}`;
    
    fetch(URI_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        })
    }).then(res => {
        alert("Заявка отправлена!");
        this.reset();
    }).catch(err => {
        alert("Ошибка отправки");
        console.error(err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const inner = document.querySelector(".carousel-inner");
    const reviews = document.querySelectorAll(".carousel-inner .review");
    const next = document.querySelector(".carousel-btn.next");
    const prev = document.querySelector(".carousel-btn.prev");

    let index = 0;

    function updateCarousel() {
        inner.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index = (index + 1) % reviews.length;
        updateCarousel();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + reviews.length) % reviews.length;
        updateCarousel();
    });
});

document.getElementById("modalRequestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const { name, phone, message } = this;

    const text = `<b>Новая заявка</b>\nИмя: ${name.value}\nТелефон: ${phone.value}\nКомментарий: ${message.value}`;
    
    fetch(URI_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        })
    }).then(res => {
        alert("Заявка отправлена!");
        this.reset();
    }).catch(err => {
        alert("Ошибка отправки");
        console.error(err);
    });

    this.reset();
    document.getElementById("modal").style.display = "none";
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openBtn = document.querySelector(".footer-button");
    const closeBtn = document.querySelector(".close-button");

    openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
