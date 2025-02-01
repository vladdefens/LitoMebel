const products = [  
    { 
        name: "Угол Марсель", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/JzMFjYmz/image.jpg", 
        description: "Габариты 255/170 см сп. м. 195/125 см комфортное наполнение механизм дельфин есть короб для белья в комплекте идет столик накладки мдф ткань Канди - Вип Текстиль - 1 категория изготовлен под заказ ",
        gallery: ["https://i.postimg.cc/JzMFjYmz/image.jpg", "https://i.postimg.cc/ZqqDM9Wk/1.jpg", "https://i.postimg.cc/hjzZKH8p/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Кровать детская - Мечта", 
        price: "42 500 руб.", 
        image: "https://i.postimg.cc/tJ5n8DqC/image.jpg", 
        description: "Основание кровати – ламели | Подлокотники ЛДСП + пена | Спинка ЛДСП + пена | Все крепления на болтах | Габариты: 220×100 см | Спальное место: 200×90 см | Высота подлокотников: 70 см (низкая часть) | Высота спинки: 120 см | Толщина подлокотников: 10 см",
        gallery: ["https://i.postimg.cc/tJ5n8DqC/image.jpg", "https://i.postimg.cc/PfzDLfWs/1.jpg", "https://i.postimg.cc/pXsnZ0cs/2.jpg"],
        category: "Кровать"
    },
    { 
        name: "Кровать Сицилия (Короб ЛДСП)", 
        price: "40 000 руб.", 
        image: "https://i.postimg.cc/DypK5srr/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП + файбертекс | Подъемный механизм на газлифтах | Металлическое основание Виафератта ❗️ | Большой короб для белья | На изголовье стразы | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/DypK5srr/image.jpg", "https://i.postimg.cc/nhsfWz26/1.jpg", "https://i.postimg.cc/FH2XX4n1/2.jpg"],
        category: "Кровать"
    },
    { 
        name: "Кровать Сицилия (Короб ДСП)", 
        price: "36 500 руб.", 
        image: "https://i.postimg.cc/DypK5srr/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП + файбертекс | Подъемный механизм на газлифтах | Металлическое основание Виафератта ❗️ | Большой короб для белья | На изголовье стразы | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/DypK5srr/image.jpg", "https://i.postimg.cc/nhsfWz26/1.jpg", "https://i.postimg.cc/FH2XX4n1/2.jpg"],
        category: "Кровать"
    },
    { 
        name: "Кровать Классик (Короб ДСП)", 
        price: "38 500 руб.", 
        image: "https://i.postimg.cc/htV7VSxq/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ДСП с подъемным механизмом на газлифтах | Большой короб для белья | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/htV7VSxq/image.jpg", "https://i.postimg.cc/1zHnYJJC/1.jpg", "https://i.postimg.cc/j5SwVP1s/2.jpg"],
        category: "Кровать"
    },
    { 
        name: "Кровать Классик (Короб ЛДСП)", 
        price: "41 000 руб.", 
        image: "https://i.postimg.cc/htV7VSxq/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП с подъемным механизмом на газлифтах | Большой короб для белья | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/htV7VSxq/image.jpg", "https://i.postimg.cc/1zHnYJJC/1.jpg", "https://i.postimg.cc/j5SwVP1s/2.jpg"],
        category: "Кровать"
    },
    { 
        name: "Угол Шанель П - образный", 
        price: "91 500 руб.", 
        image: "https://i.postimg.cc/KY3bt17N/image.jpg", 
        description: "Индивидуальный размер: габариты 420/170 см, сп. м. 350/160 см, три короба для белья, ниши в подлокотниках, выполнен на фанере, очень качественное и комфортное наполнение, накладки МДФ, банкетки раскладываются вперед (200/70 см), что позволяет удобно ложиться перед телевизором. Ткань - Капелла (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/KY3bt17N/image.jpg", "https://i.postimg.cc/cHqShdXN/1.jpg", "https://i.postimg.cc/bJQjF4BS/2.jpg", "https://i.postimg.cc/prRtNkwG/3.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Колибри", 
        price: "34 200 руб.", 
        image: "https://i.postimg.cc/NfvKFccS/image.jpg", 
        description: "Габариты: 225/105 см, сп. м. 195/145 см, большой короб для белья, комфортное наполнение, накладки МДФ, ткань - Адели (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/NfvKFccS/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Чикаго Ч", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/xdpk1Nf3/image.jpg", 
        description: "Индивидуальный пошив чехла, габариты: 255/90 см, сп. м. 200/160 см, выполнен на фанере, очень комфортное наполнение - Элакс Медиум, ткань - Атмосфера (Союз М), 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/xdpk1Nf3/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Комплект офисный - Ньютон", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/T3gZF9mc/image.jpg", 
        description: "Габарит дивана: 200/90 см, глубина посадочного места 60 см, ширина 175 см. Габариты кресла: 100/185 см, глубина посадочного места 60 см, ширина 80 см. Ткань основная - Монако (1 категория, под заказ), ткань дополнительная - Сиеста (1 категория, под заказ). Комфортное наполнение, индивидуальный заказ.",
        gallery: ["https://i.postimg.cc/T3gZF9mc/image.jpg", "https://i.postimg.cc/GpRZCyxn/1.jpg", "https://i.postimg.cc/nL1Nch3j/2.jpg"],
        category: "Комплект"
    },
    { 
        name: "Угол Шанель Люкс", 
        price: "79 700 руб.", 
        image: "https://i.postimg.cc/6pW3py0n/image.jpg", 
        description: "Габариты: 300/220 см, сп. м. 250/160 см, очень большой и комфортный угол, ниши для хранения вещей, накладки МДФ, два больших короба для белья, выполнен на фанере, большое спальное место, ткань - Браво (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/6pW3py0n/image.jpg", "https://i.postimg.cc/vZ0mgbqj/1.jpg", "https://i.postimg.cc/SsMQv8SF/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол Гермес", 
        price: "86 000 руб.", 
        image: "https://i.postimg.cc/TYmmDLgs/image.jpg", 
        description: "Габариты: 310/225 см, сп. м. 210/160 см, комфортное наполнение, большое спальное место, короб для белья, ткань - Карди (1 категория). Заказ под клиента.",
        gallery: ["https://i.postimg.cc/TYmmDLgs/image.jpg", "https://i.postimg.cc/W1wk5B96/1.jpg", "https://i.postimg.cc/YS2mZdZc/2.jpg", "https://i.postimg.cc/G2HThHbq/3.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Шанель", 
        price: "46 500 руб.", 
        image: "https://i.postimg.cc/J0YX5ZPw/image.jpg", 
        description: "Габариты: 250/115 см, сп. м. 195/160 см, выполнен на фанере, большой короб для белья, комфортное наполнение, ткань - Мадрид (1 категория), накладки МДФ. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/J0YX5ZPw/image.jpg", "https://i.postimg.cc/rsHdrcwM/1.jpg", "https://i.postimg.cc/m2c1GcmD/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Виктория М+ люкс", 
        price: "37 000 руб.", 
        image: "https://i.postimg.cc/xCHLYXfM/image.jpg", 
        description: "Диван Виктория М+ Люкс: габариты 180/100 см, сп. м. 195/160 см, два бельевых короба, выполнен на фанере, прошивка сиденья и подушек, накладки МДФ на подлокотниках, комфортный размер, ткань - Капелла (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/xCHLYXfM/image.jpg", "https://i.postimg.cc/8z5WcKk1/1.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Шанель С", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/jjH8kzXS/image.jpg", 
        description: "Габариты: 260/170 см, сп. м. 205/160 см, комфортное наполнение, удобное спальное место, выполнен на фанере, 2 короба для белья, 2 ниши в подлокотниках, ткань - Нувола, 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/jjH8kzXS/image.jpg", "https://i.postimg.cc/tT9r0YSt/1.jpg", "https://i.postimg.cc/zvB0B41y/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол Меркурий", 
        price: "51 000 руб.", 
        image: "https://i.postimg.cc/1tqBkDPd/image.jpg", 
        description: "Габариты 260х170 см, сп. м. 210х160 см, комфортное наполнение, два короба для белья, выполнен на фанере, две ниши в подлокотниках, ткань Монолит 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/1tqBkDPd/image.jpg", "https://i.postimg.cc/brfgpdww/1.jpg", "https://i.postimg.cc/VsX449Kr/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Лайм", 
        price: "22 500 руб.", 
        image: "https://i.postimg.cc/SxYG2WYx/image.jpg", 
        description: "Габариты 200х90 см, спальное место 200х145 см, большой короб для белья, комфортное наполнение, утяжки и двойная прострочка на сиденье и подушках, ткань Мадрид 1 категория.",
        gallery: ["https://i.postimg.cc/SxYG2WYx/image.jpg", "https://i.postimg.cc/G2dP5V74/1.jpg", "https://i.postimg.cc/zB7wZ760/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Кухонный угол Жардин", 
        price: "32 500 руб.", 
        image: "https://i.postimg.cc/g23Zb468/image.jpg", 
        description: "Габариты 170/140 см, выполнен на фанере, два короба для хранения вещей, ткань Сиеста 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/g23Zb468/image.jpg", "https://i.postimg.cc/MTpMRS3m/1.jpg"],
        category: "Кухонный угол"
    },
    { 
        name: "Диван Софи К", 
        price: "38 900 руб.", 
        image: "https://i.postimg.cc/4yrmrhfW/image.jpg", 
        description: "Габариты: 245x100 см, сп. место: 200x150 см, ткань — Рио (категория 1, под заказ), комфортное наполнение, большой короб для белья, заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/4yrmrhfW/image.jpg", "https://i.postimg.cc/pr2HyW0P/1.jpg", "https://i.postimg.cc/ZYcm2NRn/2.jpg", "https://i.postimg.cc/xT1Q2dJR/3.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Сторис С", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/52HMXkmQ/image.jpg", 
        description: "Габариты: 210x90 см, сп. м. 200x150 см, большой бельевой короб, комфортное наполнение, выполнен на фанере, ткань — Велютто (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/52HMXkmQ/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол модульный Орион К", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/VLVxPWcf/image.jpg", 
        description: "Габариты: 300x180 см, сп. м. 300x135 см, угол модульный, взаимозаменяемый (на фото — диванная часть цельная, можно заказать и раздельную), механизм — пума, ящик для белья, каркас — фанера, ткань — Даллас (1 категория), выполнен под заказ.",
        gallery: ["https://i.postimg.cc/VLVxPWcf/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Шанель мини", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/tghwP0nJ/image.jpg", 
        description: "Габариты: 200x115 см, сп. м. 200x160 см, выполнен на фанере, большой короб для хранения белья, очень комфортное наполнение, подходит для ежедневного сна, ткань — Мадрид (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/tghwP0nJ/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Чикаго С", 
        price: "54 000 руб.", 
        image: "https://i.postimg.cc/KvwHHcn4/image.jpg", 
        description: "Габариты: 255x90 см, сп. м. 200x160 см, выполнен на фанере, очень комфортное наполнение — элакс, ткань Атмосфера (Союз М) — 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/KvwHHcn4/image.jpg", "https://i.postimg.cc/YSwytXDH/1.jpg", "https://i.postimg.cc/MGb3Hygj/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Сторис", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/DZvjXSKp/image.jpg", 
        description: "Габариты: 210x90 см, сп. м. 200x150 см, большой бельевой короб, комфортное наполнение, выполнен на фанере, ткань Сканди (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/DZvjXSKp/image.jpg", "https://i.postimg.cc/xjFxXjpg/1.jpg", "https://i.postimg.cc/15kvKCQq/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол модульный Орион", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/7LVXwqT3/image.jpg", 
        description: "Габариты: 300/180 см, сп. м. 300/135 см, угол модульный, взаимозаменяемый (на фото диванная часть цельная, возможно заказать раздельную), механизм - пума, ящик для белья, каркас - фанера, ткань - Браво, 1 категория. Выполнен под заказчика.",
        gallery: ["https://i.postimg.cc/7LVXwqT3/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол Зафира", 
        price: "44 300 руб.", 
        image: "https://i.postimg.cc/NLhGrvhH/image.jpg", 
        description: "Габариты: 245/150 см, сп. место: 210/150 см. Два бельевых короба, комфортное наполнение. Ткань - Карди 1 категория. Изготовлен под заказчика.",
        gallery: ["https://i.postimg.cc/NLhGrvhH/image.jpg", "https://i.postimg.cc/NGZRxyB1/1.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Валенсия Люкс", 
        price: "37 700 руб.", 
        image: "https://i.postimg.cc/8CY2CBgF/image.jpg", 
        description: "Габариты 225/105, сп. место 195/145. Ткань - Монако, категория - 1. Можно подобрать идентичные цвета в Нуволе. Индивидуальный заказ - мягкие подлокотники, без МДФ накладок.",
        gallery: ["https://i.postimg.cc/8CY2CBgF/image.jpg", "https://i.postimg.cc/FRJ2kdhT/1.jpg", "https://i.postimg.cc/C5T9Gh1S/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Орион К", 
        price: "60 960 руб.", 
        image: "https://i.postimg.cc/HkV3LGY2/image.jpg", 
        description: "Габариты 200/115 см, сп. место 200/135 см. Механизм - пума, выполнен на фанере. Ткань: замша Плутон (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/HkV3LGY2/image.jpg", "https://i.postimg.cc/43c5zzhH/1.jpg", "https://i.postimg.cc/W1C8F9tP/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Шанель Ш", 
        price: "47 300 руб.", 
        image: "https://i.postimg.cc/GpjBw2WS/image.jpg", 
        description: "Габариты: 250/115 см, сп. место: 195/160 см. Выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Плутон (Эгида, аналог) - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/GpjBw2WS/image.jpg", "https://i.postimg.cc/FRW7z6sy/1.jpg", "https://i.postimg.cc/C5Rdq4zW/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Олимп", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/SNZDqQhR/image.jpg", 
        description: "Габариты 320/115 см, сп. место 230/160 см. Наполнение - элакс, большой бельевой короб. Ткань - Искусственная замша Elixir (Союз М) 1 категория.",
        gallery: ["https://i.postimg.cc/SNZDqQhR/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Шанель Мини Б", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/1R7q38fk/image.jpg", 
        description: "Габариты: 200/115 см, сп. место: 200/160 см. Выполнен на фанере, большой короб для хранения белья. Очень комфортное наполнение, подходит для ежедневного сна! Ткань - Мадрид - 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/1R7q38fk/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Гранд", 
        price: "44 000 руб.", 
        image: "https://i.postimg.cc/RCWcf15S/image.jpg", 
        description: "Габариты 210/155 см, сп. место 205/145 см. Оттоманка на газ лифтах, большой короб для белья, механизм раскладки дельфин. Выполнен на фанере, комфортное наполнение. Ткань Мадрид - 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/RCWcf15S/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол модульный Орион Г", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/rwM0hxbt/image.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, возможно заказать раздельную). Механизм - пума, ящик для белья, каркас - фанера, ткань - Даллас (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/rwM0hxbt/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Софи", 
        price: "39 900 руб.", 
        image: "https://i.postimg.cc/8PnB9yRr/image.jpg", 
        description: "Габариты: 245/100 см, сп. место: 200/150 см. Комфортное наполнение, полка с ЛДСП, большой короб для белья. Ткань Мадрид - 1 категория.",
        gallery: ["https://i.postimg.cc/8PnB9yRr/image.jpg", "https://i.postimg.cc/kg0NXBhJ/1.jpg", "https://i.postimg.cc/rp51dMvS/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол модульный Орион С", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/hPF7dH1s/C.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, можно заказать и раздельную). Механизм - пума, ящик для белья, каркас фанера. Ткань Формула (Союз М) - 1 категория. Выполнен под заказчика.",
        gallery: ["https://i.postimg.cc/hPF7dH1s/C.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Рич Б", 
        price: "38 800 руб.", 
        image: "https://i.postimg.cc/FzTg9pw8/image.jpg", 
        description: "Габариты: 215/90 см, сп. место: 200/150 см. Большой бельевой короб, комфортное наполнение. Ткань Тедди (Эгида) - 1 категория. Диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/FzTg9pw8/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Чикаго", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/cHnL1L2S/image.jpg", 
        description: "Габариты: 320/170 см, сп. место: 250/160 см. Выполнен на фанере, состоит из 3 модулей. Очень комфортное наполнение - элакс. Ткань Домиарт Кальвадос - 1 категория. Изготовлен под заказчика.",
        gallery: ["https://i.postimg.cc/cHnL1L2S/image.jpg", "https://i.postimg.cc/y608wW0h/1.jpg", "https://i.postimg.cc/T1j2mHTN/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол модульный Орион Б", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/hP9QbpCB/image.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, можно заказать и раздельную). Механизм - пума, ящик для белья, каркас фанера. Ткань Мадрид - 1 категория (выполнен под заказчика).",
        gallery: ["https://i.postimg.cc/hP9QbpCB/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван малютка Милана - МДФ накладки", 
        price: "35 700 руб.", 
        image: "https://i.postimg.cc/JnJ24fQg/image.jpg", 
        description: "Габариты: 150х115 см, сп. место: 190х118 см. Ткань: Ибица, категория 1 (под заказ). Короб для белья, комфортное спальное место, заказ под клиента.",
        gallery: ["https://i.postimg.cc/JnJ24fQg/image.jpg", "https://i.postimg.cc/wMpbtwfB/1.jpg", "https://i.postimg.cc/PJQV119Q/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Шанель З", 
        price: "46 500 руб.", 
        image: "https://i.postimg.cc/9MW7rTPh/image.jpg", 
        description: "Габариты: 250/115 см, сп. место: 195/160 см. Выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Ламбре (союз м, оригинал) - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/9MW7rTPh/image.jpg", "https://i.postimg.cc/vB369BX6/1.jpg", "https://i.postimg.cc/Y00LxHyD/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Берлин", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/k5w5YHS0/image.jpg", 
        description: "Габариты: 265/170 см, сп. место: 210/160 см. Комфортное наполнение, два короба для белья, изготовлен на фанере. Ткань - веллюто (1 категория). Выполнен под заказ.",
        gallery: ["https://i.postimg.cc/k5w5YHS0/image.jpg", "https://i.postimg.cc/Hxxkqt4V/1.jpg", "https://i.postimg.cc/xC41nbtg/2.jpg", "https://i.postimg.cc/8cfP5PYG/3.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол Универсал на подъемном механизме", 
        price: "47 200 руб.", 
        image: "https://i.postimg.cc/cJ6Jjmc6/image.jpg", 
        description: "Габариты: 230х155 см, спальное место: 195х155 см. Комфортное наполнение, удобное спальное место, два больших короба для белья. Угол взаимозаменяемый. Ткань: Титан Грэй под заказ, ткань 1 категория. Заказ под клиента.",
        gallery: ["https://i.postimg.cc/cJ6Jjmc6/image.jpg", "https://i.postimg.cc/xd7dSzs5/1.jpg", "https://i.postimg.cc/Xq67r06y/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Честер С", 
        price: "32 700 руб.", 
        image: "https://i.postimg.cc/tRBhnrmm/image.jpg", 
        description: "Габариты: 205х90 см, спальное место: 200х145 см. Комфортное наполнение, удобное спальное место, большой короб для белья. Ткань: Бёрн, ткань 1 категория.",
        gallery: ["https://i.postimg.cc/tRBhnrmm/image.jpg", "https://i.postimg.cc/KvVBJ1bP/1.jpg", "https://i.postimg.cc/VL5Xqjxs/2.jpg", "https://i.postimg.cc/zGgWMqD9/3.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Шанель К", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/02xyxxCT/image.jpg", 
        description: "Габариты 2.60*1.70, спальное место 2.05*1.60. Комфортное наполнение, удобное спальное место. Выполнен на фанере, 2 короба для белья, 2 ниши в подлокотниках. Ткань Корако 1 категория.",
        gallery: ["https://i.postimg.cc/02xyxxCT/image.jpg", "https://i.postimg.cc/CLNLxtPz/1.jpg", "https://i.postimg.cc/0yXkpSqv/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Меркурий М+БК", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/nL9d0yNz/image.jpg", 
        description: "Габариты: 245/115 см, сп. место: 195/160 см, большой короб для белья, комфортное наполнение, ткань - Монако - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/nL9d0yNz/image.jpg", "https://i.postimg.cc/8z0KdpK9/1.jpg", "https://i.postimg.cc/fL48FHhv/2.jpg", "https://i.postimg.cc/3RgtHg8Q/3.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Меркурий М+СК", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/j2JNJ2pp/image.jpg", 
        description: "Габариты: 245/115 см, сп. место: 195/160 см, выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Нувола - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/j2JNJ2pp/image.jpg", "https://i.postimg.cc/bwPCpfby/1.jpg", "https://i.postimg.cc/tgS231cJ/2.jpg", "https://i.postimg.cc/JzKq8DMx/3.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Орион П-образный С", 
        price: "125 500 руб.", 
        image: "https://i.postimg.cc/VNVWSxSb/image.jpg", 
        description: "Шикарное и комфортное спальное место + короб для белья. Габариты: 404 * 180, сп. место: 370 * 140. Ткань: Монако (матрас), плюш (каркас), 1-я категория. Ткань доступна к заказу! Также есть возможность выбора похожих оттенков ткани Нувола (1-я категория).",
        gallery: ["https://i.postimg.cc/VNVWSxSb/image.jpg", "https://i.postimg.cc/85fBLZWX/1.jpg", "https://i.postimg.cc/mkx3j7yL/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Интайм New", 
        price: "39 200 руб.", 
        image: "https://i.postimg.cc/dDPWhzx9/New.jpg", 
        description: "Ткань основная Рио - 1-я категория, ткань дополнение - Монако 1-я категория, каркас - фанера, короб для белья, ниши (подлокотники), комфортное наполнение. Габариты: 1.85*1.10, сп. место: 1.60*1.45, глубина посадки (без учёта подушек) - 85 см. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/dDPWhzx9/New.jpg", "https://i.postimg.cc/kM6qtKHV/New1.jpg", "https://i.postimg.cc/zXTNx588/New2.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Орион Б", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/qR9fGDFN/image.jpg", 
        description: "Ткань: Нувола (1 категория), комфортное и большое спальное место. Короб для белья (оттоманка), механизм трансформации - пума. Заказ выполнен под клиента. Габариты: 300/180 см, сп. м. 300/140 см.",
        gallery: ["https://i.postimg.cc/qR9fGDFN/image.jpg", "https://i.postimg.cc/9Qc617LY/1.jpg", "https://i.postimg.cc/7hgRnH7R/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Чикаго", 
        price: "54 000 руб.", 
        image: "https://i.postimg.cc/FR1mpLsB/image.jpg", 
        description: "Габариты: 255/90 см, сп. м. 200/160 см, выполнен на фанере, очень комфортное наполнение, ткань - Гоа (Арбен), 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/FR1mpLsB/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Орион", 
        price: "60 960 руб.", 
        image: "https://i.postimg.cc/VkPFtJq9/image.jpg", 
        description: "Габариты: 200/115 см, сп. м. 200/135 см, механизм - пума, выполнен на фанере, ткань - Даллас (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/VkPFtJq9/image.jpg", "https://i.postimg.cc/3NDg4hWb/1.jpg", "https://i.postimg.cc/mhf77nHZ/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Честер", 
        price: "33 000 руб.", 
        image: "https://i.postimg.cc/tgCv11bS/image.jpg", 
        description: "Габариты: 210/90 см, сп. м. 200/150 см, большой бельевой короб, комфортное наполнение, ткань - Мадрид, 1 категория. Диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/tgCv11bS/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Кресло Монро", 
        price: "28 300 руб.", 
        image: "https://i.postimg.cc/7PTsTrvk/image.jpg", 
        description: "Ткань: Адели шоколад (1 категория), очень мягкое и удобное кресло, комфортное наполнение. Габариты: 120/100 см, глубина посадки 58 см, ширина посадки 50 см. Заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/7PTsTrvk/image.jpg", "https://i.postimg.cc/NfqN6CYr/1.jpg", "https://i.postimg.cc/wTXw05T4/2.jpg"],
        category: "Кресло"
    },
    { 
        name: "Диван Валенсия Люкс М+", 
        price: "40 500 руб.", 
        image: "https://i.postimg.cc/6pBYS78W/image.jpg", 
        description: "Ткань: Тенериф (1 категория), индивидуальный заказ - МДФ накладки (дуб крафт белый), комфортное наполнение, короб для белья, ниши в подлокотниках, заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/6pBYS78W/image.jpg", "https://i.postimg.cc/6Q3zWDVF/1.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Рич", 
        price: "39 000 руб.", 
        image: "https://i.postimg.cc/cJbhrXXC/image.jpg", 
        description: "Габариты: 215/90 см, сп. м. 200/150 см, большой бельевой короб, комфортное наполнение, ткань - Невада (Арбен), 1 категория, диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/cJbhrXXC/image.jpg", "https://i.postimg.cc/nr811M8t/1.jpg", "https://i.postimg.cc/J0b5YmmH/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Офис 2", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/XYNkLTPX/2.jpg", 
        description: "Габариты: 145/85 см, комфортное наполнение, выполнен на фанере, ткань - кожзам (Эгида, акционный), 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/XYNkLTPX/2.jpg", "https://i.postimg.cc/1zfchDsQ/21.jpg", "https://i.postimg.cc/Y9F6jkvD/22.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Шанель", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/c40R1p0T/image.jpg", 
        description: "Габариты: 260/170 см, сп. м. 205/160 см, два бельевых короба + ниши в подлокотниках, выполнен на фанере, очень комфортное наполнение, ткань - Невада (Арбен), 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/c40R1p0T/image.jpg", "https://i.postimg.cc/P5FY4NZF/1.jpg", "https://i.postimg.cc/hGkmkw2L/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Угол модульный Орион П- образный", 
        price: "125 500 руб.", 
        image: "https://i.postimg.cc/d3BTT0w6/image.jpg", 
        description: "Габариты: 404/180 см, сп. м. 370/140 см, выполнен на фанере, механизм - пума, наполнение очень комфортное, ППУ - элакс, силиконизированный, короб для белья, угол взаимозаменяемый, ткань - Далас 1 категория (выполнен под заказчика).",
        gallery: ["https://i.postimg.cc/d3BTT0w6/image.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Софи 2", 
        price: "39 900 руб.", 
        image: "https://i.postimg.cc/RZ3Nvd6X/2.jpg", 
        description: "Комфортное наполнение; короб для белья; ниши в подлокотниках; ткань Карди, 1 категория; заказ под клиента.",
        gallery: ["https://i.postimg.cc/RZ3Nvd6X/2.jpg", "https://i.postimg.cc/XYTXq593/22.jpg", "https://i.postimg.cc/qRG71ZSM/23.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Шанель Мини С", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/MHPpSfzC/image.jpg", 
        description: "Ткань Монако, 1 категория; комфортное наполнение; заказ под клиента.",
        gallery: ["https://i.postimg.cc/MHPpSfzC/image.jpg", "https://i.postimg.cc/Njrf30Sn/1.jpg", "https://i.postimg.cc/yN4YsHz8/2.jpg", "https://i.postimg.cc/bJLzxSSZ/3.jpg", "https://i.postimg.cc/Y2nrjgwV/4.jpg"],
        category: "Диван"
    },
    { 
        name: "Угол Марсель С", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/Xqm6LfjY/image.jpg", 
        description: "Индивидуальный заказ - подлокотники от Мартиники; ткань Корако, 1 категория; комфортное наполнение; ниша в подлокотниках; ниша в угловом сегменте; заказ под клиента.",
        gallery: ["https://i.postimg.cc/Xqm6LfjY/image.jpg", "https://i.postimg.cc/X7BbJzLG/1.jpg", "https://i.postimg.cc/wjhY5RS9/2.jpg"],
        category: "Угол"
    },
    { 
        name: "Диван Классик", 
        price: "55 000 руб.", 
        image: "https://i.postimg.cc/Bv49mQ0H/image.jpg", 
        description: "габариты: 235 / 120 см сп. м. 195 / 160 см большой короб для белья выполнен на фанере комфортное наполнение ткань Даллас  - 1 категория выполнен под заказ .",
        gallery: ["https://i.postimg.cc/Bv49mQ0H/image.jpg", "https://i.postimg.cc/TP08FMdS/1.jpg", "https://i.postimg.cc/tgQPfwSh/2.jpg"],
        category: "Диван"
    },
    { 
        name: "Кресло Шанель", 
        price: "25 000 руб.", 
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
        name: "Диван Зафира",
        price: "34 500 руб.",
        image: "https://i.postimg.cc/5N8FznNy/image.jpg",
        description: "Габариты: 225 / 105 см; сп. м.: 195 / 150 см; большой короб для белья; комфортное наполнение; ткань Монолит, 1 категория.",
        gallery: ["https://i.postimg.cc/5N8FznNy/image.jpg"],
        category: "Диван"
    },
    { 
        name: "Диван Меркурий М+", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/2SwbcyWf/image.jpg", 
        description: "Комфортное наполнение. Индивидуальный заказ - полностью фанерный короб! Ткань Лама 81 1ая категория",
        gallery: ["https://i.postimg.cc/2SwbcyWf/image.jpg", "https://i.postimg.cc/xCWcJbwL/1.jpg", "https://i.postimg.cc/pVF9NqjC/2.jpg", 
                  "https://i.postimg.cc/Hs0VnnB7/3.jpg", "https://i.postimg.cc/y8VWZKbp/4.jpg"],
        category: "Диван"
    }
];

let displayedProducts = [...products]; // Копируем исходный массив товаров
let currentCategory = ''; // пустая строка означает "Все"
let currentMinPrice = null;
let currentMaxPrice = null;
let currentSortOrder = ''; // 'asc' или 'desc'

const productContainer = document.getElementById('product-container');
const modal = document.createElement('div');
const overlay = document.createElement('div');

modal.className = 'modal';
overlay.className = 'overlay';

document.body.appendChild(modal);
document.body.appendChild(overlay);

// Функция для парсинга цены
function parsePrice(priceStr) {
    const numStr = priceStr.replace(/[^\d]/g, '');
    return numStr ? parseInt(numStr) : null;
}

// Функция для отображения карточек товаров
function renderProducts(productsToRender = displayedProducts) {
    displayedProducts = productsToRender; // Сохраняем текущий список
    productContainer.innerHTML = productsToRender.map((product, index) =>
        `<div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Цена: ${product.price}</p>
            <button onclick="showDetails(${index})">Подробнее</button>
        </div>`
    ).join('');
}

// Функция для отображения модального окна
function showDetails(index) {
    const product = displayedProducts[index];
    modal.innerHTML = `
        <button class="close" onclick="closeModal()">&times;</button>
        <div class="modal-content">
            <div class="modal-left">
                <div id="main-image-container">
                    <img id="main-image" src="${product.image}" alt="${product.name}">
                </div>
                <div class="gallery">
                    ${product.gallery.map(item => {
                        const isVideo = item.toLowerCase().endsWith('.mp4');
                        return isVideo
                            ? `<video src="${item}" controls width="100" onclick="updateMainImage('${item}')"></video>`
                            : `<img src="${item}" alt="${product.name}" onclick="updateMainImage('${item}')">`;
                    }).join('')}
                </div>
            </div>
            <div class="modal-right">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>Цена:</strong> ${product.price}</p>
                <p><strong>Телефон для связи:</strong> +79493420947 - Марина. ВНИМАНИЕ: В ЦЕНЫ ТОВАРОВ НА САЙТЕ ВКЛЮЧЕНА СКИДКА 5% ПРИ ЗАКАЗЕ ПО НОМЕРУ ТЕЛЕФОНА НУЖНО СООБЩИТЬ ЧТО ВЫ С САЙТА ЧТОБЫ ПОЛУЧИТЬ СКИДКУ</p>
                <p>Или заполните форму:</p>
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
        </div>`;
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function updateMainImage(itemSrc) {
    const mainImageContainer = document.getElementById('main-image-container');
    const isVideo = itemSrc.toLowerCase().endsWith('.mp4');
    if (isVideo) {
        mainImageContainer.innerHTML = `<video id="main-image" src="${itemSrc}" controls autoplay></video>`;
    } else {
        mainImageContainer.innerHTML = `<img id="main-image" src="${itemSrc}" alt="Main Image">`;
    }
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Функция для отправки заказа в Telegram
function sendOrder(index) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const time = document.getElementById('time').value;
    const product = displayedProducts[index];

    if (!name || !phone || !time) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const message = `Заказ:
- Товар: ${product.name}
- Описание: ${product.description}
- Имя: ${name}
- Телефон: ${phone}
- Удобное время: ${time}`;

    const token = '7973176685:AAF_sOnSxyS4LRy2qOZ7pdwI9OTZkQreBSI';
    const chatId = '974907531';
    const url = `https://api.telegram.org/bot${token}/sendPhoto`;
    let imageToSend = product.image;

    if (imageToSend.startsWith('http')) {
        sendMessageWithImageURL(imageToSend);
    } else {
        sendMessageWithImageFile(imageToSend);
    }

    function sendMessageWithImageURL(imageURL) {
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('caption', message);
        formData.append('photo', imageURL);

        fetch(url, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                console.log('Telegram API Response:', data);
                if (data.ok) {
                    alert('Ваш заказ отправлен!');
                    closeModal();
                } else {
                    alert(`Ошибка: ${data.description}`);
                }
            })
            .catch(error => alert('Ошибка: ' + error.message));
    }

    function sendMessageWithImageFile(imagePath) {
        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('caption', message);
        const imageUrl = "https://yourserver.com/" + imagePath;
        formData.append('photo', imageUrl);

        fetch(url, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                console.log('Telegram API Response:', data);
                if (data.ok) {
                    alert('Ваш заказ отправлен!');
                    closeModal();
                } else {
                    alert(`Ошибка: ${data.description}`);
                }
            })
            .catch(error => alert('Ошибка: ' + error.message));
    }
}

// ---------------- ФИЛЬТР И СОРТИРОВКА ----------------

// Обновление placeholder-ов цен для выбранной категории
function updatePricePlaceholders() {
    const categoryProducts = products.filter(product => {
        return currentCategory === '' ||
               product.category.toLowerCase() === currentCategory.toLowerCase();
    }).filter(product => parsePrice(product.price) !== null);

    if (categoryProducts.length > 0) {
        const prices = categoryProducts.map(product => parsePrice(product.price));
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        document.getElementById('minPrice').placeholder = `От ${min}`;
        document.getElementById('maxPrice').placeholder = `До ${max}`;
    } else {
        document.getElementById('minPrice').placeholder = "От";
        document.getElementById('maxPrice').placeholder = "До";
    }
}

// Применение фильтров и сортировки
function applyFiltersAndSort() {
    let filtered = products.filter(product => {
        if (currentCategory && product.category.toLowerCase() !== currentCategory.toLowerCase()) {
            return false;
        }
        const price = parsePrice(product.price);
        if (price === null) return false;
        if (currentMinPrice !== null && price < currentMinPrice) return false;
        if (currentMaxPrice !== null && price > currentMaxPrice) return false;
        return true;
    });

    if (currentSortOrder === 'asc') {
        filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (currentSortOrder === 'desc') {
        filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    renderProducts(filtered);
}

// Изменение категории
function filterCategory(category) {
    currentCategory = category;
    updatePricePlaceholders();
    applyFiltersAndSort();
}

// Обновление количества товаров на кнопках категорий
function getProductCount(category) {
    if (category === '') return products.length;
    return products.filter(product => product.category.toLowerCase() === category.toLowerCase()).length;
}

function updateCategoryButtons() {
    const categories = ['Все', 'Диван', 'Угол', 'Кресло', 'Кухонный угол', 'Комплект', 'Кровать'];
    categories.forEach(category => {
        const button = document.getElementById(category);
        const count = getProductCount(category === 'Все' ? '' : category);
        button.textContent = `${category} (${count})`;
    });
}

// ---------------- Обработчики событий ----------------

// Фильтр по цене и сортировка – требуется добавить в HTML следующие элементы, например:
/*
<div class="filter">
  <input type="number" id="minPrice" placeholder="От" />
  <input type="number" id="maxPrice" placeholder="До" />
</div>
<div class="sorting">
  <button id="sortAsc">Сортировать по возрастанию</button>
  <button id="sortDesc">Сортировать по убыванию</button>
</div>
*/

document.getElementById('minPrice').addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    currentMinPrice = isNaN(value) ? null : value;
    applyFiltersAndSort();
});

document.getElementById('maxPrice').addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    currentMaxPrice = isNaN(value) ? null : value;
    applyFiltersAndSort();
});

document.getElementById('sortAsc').addEventListener('click', () => {
    currentSortOrder = 'asc';
    applyFiltersAndSort();
});

document.getElementById('sortDesc').addEventListener('click', () => {
    currentSortOrder = 'desc';
    applyFiltersAndSort();
});

// Кнопки категорий
document.querySelectorAll('.categories button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.replace(/\(\d+\)/, '').trim();
        filterCategory(category === 'Все' ? '' : category);
        updateCategoryButtons();
    });
});

// ---------------- Инициализация ----------------

window.onload = () => {
    updateCategoryButtons();
    updatePricePlaceholders();
    renderProducts(products);
};
