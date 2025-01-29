const products = [ 
    { 
        name: "Угол Марсель", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/JzMFjYmz/image.jpg", 
        description: "Габариты 255/170 см сп. м. 195/125 см комфортное наполнение механизм дельфин есть короб для белья в комплекте идет столик накладки мдф ткань Канди - Вип Текстиль - 3 категория изготовлен под заказ ",
        gallery: ["https://i.postimg.cc/JzMFjYmz/image.jpg", "https://i.postimg.cc/ZqqDM9Wk/1.jpg", "https://i.postimg.cc/hjzZKH8p/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Классик", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/Bv49mQ0H/image.jpg", 
        description: "габариты: 235 / 120 см сп. м. 195 / 160 см большой короб для белья выполнен на фанере комфортное наполнение ткань Даллас  - 2 категория выполнен под заказ .",
        gallery: ["https://i.postimg.cc/Bv49mQ0H/image.jpg", "https://i.postimg.cc/TP08FMdS/1.jpg", "https://i.postimg.cc/tgQPfwSh/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Кресло Шанель", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/9fC0yhgN/image.jpg", 
        description: "габариты 100/105 см Комфортное наполнение , короб для хранения вещей выполнен на фанере наладки мдф ткань Мадрид - 1 категория изготовлен под заказ ",
        gallery: ["https://i.postimg.cc/9fC0yhgN/image.jpg", "https://i.postimg.cc/hjGG30BL/1.jpg", "https://i.postimg.cc/GtWhtwsK/2.jpg"],
        category: "Кресло"
    },
    { 
        name: "Угол Лофт", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/ncmh5z6P/image.jpg", 
        description: "Каркас - фанера 2 короба для белья. Пуф Сундук в комплекте,не только для хранения Ваших вещей, но и может быть продолжением спального места. Габариты 2,50*1, 70 Сп м 2.00*1.70 Высота от пола 45 Ширина угловой спинки 21 Глубина посадки диванной части (без учёта подушек) - 88 Габарит пуфа 90*50",
        gallery: ["https://i.postimg.cc/ncmh5z6P/image.jpg", "https://i.postimg.cc/B6tqCQTN/1.jpg", "https://i.postimg.cc/7h2wpsQ2/2.jpg", "https://i.postimg.cc/dQkCsJb8/3.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Меркурий М+", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/2SwbcyWf/image.jpg", 
        description: "Комфортное наполнение. Индивидуальный заказ - полностью фанерный короб! Ткань Лама 81 2ая категория",
        gallery: ["https://i.postimg.cc/2SwbcyWf/image.jpg", "https://i.postimg.cc/xCWcJbwL/1.jpg", "https://i.postimg.cc/pVF9NqjC/2.jpg", 
                  "https://i.postimg.cc/Hs0VnnB7/3.jpg", "https://i.postimg.cc/y8VWZKbp/4.jpg"],
        category: "Диван"
    }
];

const productContainer = document.getElementById('product-container');
const modal = document.createElement('div');
const overlay = document.createElement('div');

modal.className = 'modal';
overlay.className = 'overlay';

document.body.appendChild(modal);
document.body.appendChild(overlay);

// Функция для отображения карточек товаров
function renderProducts() {
    productContainer.innerHTML = products.map((product, index) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Цена: ${product.price}</p>
            <button onclick="showDetails(${index})">Подробнее</button>
        </div>
    `).join('');
}

// Функция для отображения модального окна
function showDetails(index) {
    const product = products[index];
    modal.innerHTML = `
        <button class="close" onclick="closeModal()">&times;</button>
        <div class="modal-content">
            <div class="modal-left">
                <img id="main-image" src="${product.image}" alt="${product.name}">
                <div class="gallery">
                    ${product.gallery.map(image => `
                        <img src="${image}" alt="${product.name}" 
                        onclick="updateMainImage('${image}')">
                    `).join('')}
                </div>
            </div>
            <div class="modal-right">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>Цена:</strong> ${product.price}</p>
                <p><strong>Вы можете позвонить по номеру телефона - Марина:</strong> +79493420947</p>
                <p>Или заполнить форму и отправить её нам на телеграмм, и мы с вами свяжемся.</p>
                <form id="orderForm">
                    <label for="name">Ваше имя:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="phone">Ваш номер телефона:</label>
                    <input type="tel" id="phone" name="phone" required>

                    <label for="time">Удобное время для звонка:</label>
                    <input type="text" id="time" name="time" required>

                    <button type="button" onclick="sendOrder(${index})">Отправить заказ</button>
                </form>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Прокрутка к модальному окну
    modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Функция для обновления основного изображения
function updateMainImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Функция для отправки заказа в Telegram
function sendOrder(index) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;
    const product = products[index]; // Используем индекс из массива products

    if (!name || !phone || !time) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const message = `Заказ:
- Товар: ${product.name}
- Имя: ${name}
- Телефон: ${phone}
- Удобное время для звонка: ${time}`;

    const token = '7973176685:AAF_sOnSxyS4LRy2qOZ7pdwI9OTZkQreBSI'; // Токен бота
    const chatId = '974907531'; // Ваш chatId
    const url = `https://api.telegram.org/bot${token}/sendPhoto`;

    // Если это URL, то отправляем его напрямую
    let imageToSend = product.image;
    if (imageToSend.startsWith('http')) {
        // Если это URL, передаем его напрямую
        sendMessageWithImageURL(imageToSend);
    } else {
        // Если это локальный файл, пытаемся отправить как файл
        sendMessageWithImageFile(imageToSend);
    }

    function sendMessageWithImageURL(imageURL) {
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('caption', message); // Добавляем текстовое сообщение
        formData.append('photo', imageURL); // Добавляем фото по URL

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Telegram API Response:', data); // Логируем ответ от API
            if (data.ok) {
                alert('Ваш заказ отправлен!');
                closeModal();
            } else {
                alert(`Ошибка при отправке заказа: ${data.description}`);
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error.message);
        });
    }

    function sendMessageWithImageFile(imagePath) {
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('caption', message);

        // Здесь предполагается, что изображение доступно через URL
        const imageUrl = "https://yourserver.com/" + imagePath; // Замените на реальный путь
        formData.append('photo', imageUrl); // Отправляем фото через URL

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Telegram API Response:', data); // Логируем ответ от API
            if (data.ok) {
                alert('Ваш заказ отправлен!');
                closeModal();
            } else {
                alert(`Ошибка при отправке заказа: ${data.description}`);
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error.message);
        });
    }
}

// Автоматическая прокрутка товаров
function autoScroll() {
    productContainer.scrollBy({
        left: 500,
        behavior: 'smooth'
    });
    if (Math.ceil(productContainer.scrollLeft + productContainer.clientWidth) >= productContainer.scrollWidth) {
        productContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Запускаем автоматическую прокрутку каждые 5 секунд
setInterval(autoScroll, 5000);

// Отображаем товары при загрузке страницы
renderProducts();

// Функция для открытия модального окна изображения
function openImageModal(imageSrc) {
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';

    imageModal.innerHTML = `
        <div class="image-modal-content">
            <img src="${imageSrc}" alt="Увеличенное изображение">
            <button class="close-image-modal" onclick="closeImageModal()">&times;</button>
        </div>
    `;

    document.body.appendChild(imageModal);
    imageModal.style.display = 'block';
}

// Закрытие модального окна изображения
function closeImageModal() {
    const imageModal = document.querySelector('.image-modal');
    if (imageModal) {
        document.body.removeChild(imageModal);
    }
}
