const products = [  
    { 
        name: "Угол Марсель (столик в комплекте)", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/JzMFjYmz/image.jpg", 
        description: "Габариты 255/170 см сп. м. 195/125 см комфортное наполнение механизм дельфин есть короб для белья в комплекте идет столик накладки мдф ткань Канди - Вип Текстиль - 1 категория изготовлен под заказ ",
        gallery: ["https://i.postimg.cc/JzMFjYmz/image.jpg", "https://i.postimg.cc/ZqqDM9Wk/1.jpg", "https://i.postimg.cc/hjzZKH8p/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Челси", 
        price: "49 000 руб.", 
        image: "https://i.postimg.cc/0N3dT6s3/image.jpg", 
        description: "Габарит 240/160 см, сп. м. 200/145 см, механизм - дельфин, большой короб для белья, ткань Капелла (1 категория).",
        gallery: ["https://i.postimg.cc/0N3dT6s3/image.jpg", "https://i.postimg.cc/4d9bsJ43/1.jpg",
                 "https://i.postimg.cc/sxCP2t14/2.jpg", "https://i.postimg.cc/FzbykDL5/3.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Мартиника", 
        price: "53 000 руб.", 
        image: "https://i.postimg.cc/rph5SDss/image.jpg", 
        description: "Габариты 250х185 см, сп. место 205х145 см, комфортное наполнение, короб для белья, большое спальное место, ткань Адели Хейзл - 1 категория.",
        gallery: ["https://i.postimg.cc/rph5SDss/image.jpg", "https://i.postimg.cc/KzwLHCny/1.jpg", "https://i.postimg.cc/FFk0Ls4F/2.jpg",
                 "https://i.postimg.cc/6qZRJz04/3.jpg", "https://i.postimg.cc/L6dLBK9t/4.jpg", "https://i.postimg.cc/MpqBN7jX/5.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол кухонный Люкс", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/T3DjvdtH/image.jpg", 
        description: "Габариты 224х164 см, сп. место 188х125 см, качественное наполнение, есть короб для кухонных принадлежностей, комфортное спальное место, механизм трансформации - дельфин, выполнен на фанере, ткань Ибица - 1 категория.",
        gallery: ["https://i.postimg.cc/T3DjvdtH/image.jpg", "https://i.postimg.cc/65DRcsBV/1.jpg", "https://i.postimg.cc/P5YDF6qg/2.jpg",
                 "https://i.postimg.cc/VNwtyjrd/3.jpg", "https://i.postimg.cc/tgzx9YWD/4.jpg", "https://i.postimg.cc/B6Q1b4C3/5.jpg"],
        category: "Кухонные углы"
    },
    { 
        name: "Кресло Классик", 
        price: "32 500 руб.", 
        image: "https://i.postimg.cc/BvwJ5304/image.jpg", 
        description: "Габариты кресла 115х125 см, комфортное наполнение, ткань Монолит - 1 категория.",
        gallery: ["https://i.postimg.cc/BvwJ5304/image.jpg"],
        category: "Кресла"
    },
    { 
        name: "Угол Классик", 
        price: "66 000 руб.", 
        image: "https://i.postimg.cc/cCtyBtcc/image.jpg", 
        description: "Габариты угла 255х170 см, сп. м. 200х160 см, большой короб для белья, выполнен на фанере, комфортное наполнение, ткань Монолит - 1 категория.",
        gallery: ["https://i.postimg.cc/cCtyBtcc/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Калифорния", 
        price: "111 000 руб.", 
        image: "https://i.postimg.cc/bJb90ztt/image.jpg", 
        description: "Габариты 350/250 см, сп. м. 300/160 см, комфортное наполнение, пружинный блок, выполнен на фанере, большой короб для белья, ткань Даллас - 1 категория.",
        gallery: ["https://i.postimg.cc/bJb90ztt/image.jpg", "https://i.postimg.cc/kGmFfkQh/1.jpg", "https://i.postimg.cc/J7NQGzmw/2.jpg",
                 "https://i.postimg.cc/jdR4NYdD/3.jpg", "https://i.postimg.cc/5NpqSK6n/4.jpg", "https://i.postimg.cc/VkVq3S9t/5.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Жардин", 
        price: "44 000 руб.", 
        image: "https://i.postimg.cc/FR2nmWjj/image.jpg", 
        description: "Пружинный блок, габариты 225х155 см, сп. место 200х150 см, комфортное наполнение, короб для белья, независимый пружинный блок + ламели, ткань Корако - 1 категория.",
        gallery: ["https://i.postimg.cc/FR2nmWjj/image.jpg", "https://i.postimg.cc/rsxZp1J7/1.jpg", "https://i.postimg.cc/kMbpwCmw/2.jpg", "https://i.postimg.cc/CLp6Q2M0/3.jpg",
                 "https://i.postimg.cc/L6k0KVh1/4.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Рич", 
        price: "51 000 руб.", 
        image: "https://i.postimg.cc/L418Vc7V/image.jpg", 
        description: "Габариты 350/170 см, сп. м. 300/170 см, ткань Формула (Союз М) - 1 категория.",
        gallery: ["https://i.postimg.cc/L418Vc7V/image.jpg", "https://i.postimg.cc/gkycCvGX/1.jpg", "https://i.postimg.cc/P52XxTpd/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Атлантик", 
        price: "45 000 руб.", 
        image: "https://i.postimg.cc/bJqhP5gK/image.jpg", 
        description: "Габариты 237х115 см, сп. место 185х150 см, два больших короба для белья, оттоманка на газлифтах, комфортное наполнение, выполнен на фанере, + ниши в подлокотниках, ткань Даллас - 1 категория.",
        gallery: ["https://i.postimg.cc/bJqhP5gK/image.jpg", "https://i.postimg.cc/4dwTx1Fn/1.jpg", "https://i.postimg.cc/gjJbX6fs/2.jpg", "https://i.postimg.cc/hv5W9tnB/3.jpg",
                 "https://i.postimg.cc/zXy1qKwX/4.jpg", "https://i.postimg.cc/J4SC00K3/5.jpg", "https://i.postimg.cc/43gCv0Dm/6.jpg", "https://i.postimg.cc/tgtKB5bD/7.jpg"],
        category: "Углы"
    },
    { 
        name: "Кресло Эскобар", 
        price: "30 000 руб.", 
        image: "https://i.postimg.cc/gjMtfStq/image.jpg", 
        description: "Габариты 65/70 см, ширина сиденья 52 см, глубина сиденья 57 см, ткань Лама - 1 категория.",
        gallery: ["https://i.postimg.cc/gjMtfStq/image.jpg", "https://i.postimg.cc/h4MYzv4z/1.jpg", "https://i.postimg.cc/fTLrxskH/2.jpg"],
        category: "Кресла"
    },
    { 
        name: "Угол Монро", 
        price: "91 500 руб.", 
        image: "https://i.postimg.cc/rp5vsLwf/image.jpg", 
        description: "Ткань - кожзам Лира (Вип Текстиль) - 1 категория.",
        gallery: ["https://i.postimg.cc/rp5vsLwf/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Меркурий М+", 
        price: "55 500 руб.", 
        image: "https://i.postimg.cc/2jd8JPdF/image.jpg", 
        description: "Габариты 260х170 см, сп. м. 210/160 см, комфортное наполнение, два короба для белья, выполнены на фанере, ткань Нувола - 1 категория.",
        gallery: ["https://i.postimg.cc/2jd8JPdF/image.jpg", "https://i.postimg.cc/zXJX100m/1.jpg", "https://i.postimg.cc/jdZqqPFD/2.jpg",
                 "https://i.postimg.cc/RZhSWhkX/3.jpg"],
        category: "Углы"
    },
    { 
        name: "Кресло Орион", 
        price: "31 000 руб.", 
        image: "https://i.postimg.cc/gcRJG9GT/image.jpg", 
        description: "Габариты кресла 100/115 см, очень комфортное наполнение, ткань шенил Ниагара (Аметист) - 1 категория.",
        gallery: ["https://i.postimg.cc/gcRJG9GT/image.jpg"],
        category: "Кресла"
    },
    { 
        name: "Кресло Меркурий М+", 
        price: "25 000 руб.", 
        image: "https://i.postimg.cc/HxFVBddQ/image.jpg", 
        description: "Габариты кресла 108х65 см, ткань Нувола 💎 - 1 категория.",
        gallery: ["https://i.postimg.cc/HxFVBddQ/image.jpg"],
        category: "Кресла"
    },
    { 
        name: "Кресло Марсель", 
        price: "22 000 руб.", 
        image: "https://i.postimg.cc/1XSvnx2K/image.jpg", 
        description: "Габариты кресла 116х90 см, комфортное наполнение, ткань Карди - 1 категория.",
        gallery: ["https://i.postimg.cc/1XSvnx2K/image.jpg", "https://i.postimg.cc/Pfb3GxvV/1.jpg", "https://i.postimg.cc/tC2BTM5h/2.jpg"],
        category: "Кресла"
    },
    { 
        name: "Кресло Версаль", 
        price: "22 000 руб.", 
        image: "https://i.postimg.cc/MK2S5v2s/image.jpg", 
        description: "Габариты кресла 100х100 см, ткань Корако 💎 - 1 категория.",
        gallery: ["https://i.postimg.cc/MK2S5v2s/image.jpg"],
        category: "Кресла"
    },
    { 
        name: "Диван Санди 3", 
        price: "36 500 руб.", 
        image: "https://i.postimg.cc/KzNYPD3D/3.jpg", 
        description: "Габариты 220/90 см, очень комфортная посадка, модель отлично подходит для кафе, офисов, зала ожидания в банке или парикмахерской, мойки и т. д., ткань - Пегас Блек (ВипТекстиль) - 1 категория.",
        gallery: ["https://i.postimg.cc/KzNYPD3D/3.jpg", "https://i.postimg.cc/gjtk5cDw/31.jpg", "https://i.postimg.cc/Y2d9j8Hp/32.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Санди 2", 
        price: "26 500 руб.", 
        image: "https://i.postimg.cc/BQhK946B/2.jpg", 
        description: "Габариты 140/90 см, очень комфортное наполнение, идеально подходит для зала ожидания офисов, банков, салонов красоты, ткань - замша Плутон - 1 категория.",
        gallery: ["https://i.postimg.cc/BQhK946B/2.jpg", "https://i.postimg.cc/QdHWjwKG/21.jpg", "https://i.postimg.cc/jSmn2cyW/22.jpg", "https://i.postimg.cc/R0t6HtTg/23.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Универсал", 
        price: "40 000 руб.", 
        image: "https://i.postimg.cc/J7N0mmTB/image.jpg", 
        description: "Габариты 225х105 см, сп. место 195х150 см, комфортное наполнение, большой короб для белья, большое спальное место, ткань Лама - 1 категория.",
        gallery: ["https://i.postimg.cc/J7N0mmTB/image.jpg", "https://i.postimg.cc/c4TJghGx/1.jpg", "https://i.postimg.cc/P5x5mDdm/2.jpg", "https://i.postimg.cc/3xcJ9wwz/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Токио Люкс", 
        price: "31 000 руб.", 
        image: "https://i.postimg.cc/SKnjpM5y/image.jpg", 
        description: "Габариты 200/90 см, сп. м. 200/145 см, большой бельевой короб, комфортное наполнение, утяжки и двойная прострочка, ткань Формула (Союз М) - 1 категория.",
        gallery: ["https://i.postimg.cc/SKnjpM5y/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Тедди", 
        price: "64 000 руб.", 
        image: "https://i.postimg.cc/T3CWxG3c/image.jpg", 
        description: "Габариты 280х140 см, сп. м. 190х185 см, выполнен на фанере, очень комфортное наполнение, большое спальное место, ткань Лама - 1 категория.",
        gallery: ["https://i.postimg.cc/T3CWxG3c/image.jpg", "https://i.postimg.cc/QMCKxPBZ/1.jpg", "https://i.postimg.cc/SszXcM7Z/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Сити", 
        price: "50 000 руб.", 
        image: "https://i.postimg.cc/4Npzrrc8/image.jpg", 
        description: "Габариты 245/115 см, сп. м. 195/160 см, выполнен на фанере, большой короб для белья, комфортное наполнение, ткань Мадрид - 1 категория.",
        gallery: ["https://i.postimg.cc/4Npzrrc8/image.jpg", "https://i.postimg.cc/htg9gpbK/1.jpg", "https://i.postimg.cc/SxrcKCDC/2.jpg", "https://i.postimg.cc/TP3g514S/3.jpg",
                 "https://i.postimg.cc/VNZMq1yN/4.jpg", "https://i.postimg.cc/TwybQSGJ/5.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Поло", 
        price: "46 500 руб.", 
        image: "https://i.postimg.cc/13Zf12Hz/image.jpg", 
        description: "Габариты 245/105 см, сп. м. 195/155 см, комфортное наполнение, пружинный блок, большой короб для белья, ткань Зизи - Эгида (1 категория) - очень мягкая и приятная.",
        gallery: ["https://i.postimg.cc/13Zf12Hz/image.jpg", "https://i.postimg.cc/kgFDJs1v/1.jpg", "https://i.postimg.cc/9fm0r9s5/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Монро", 
        price: "62 500 руб.", 
        image: "https://i.postimg.cc/fTVxRGmj/image.jpg", 
        description: "Габариты 230х110 см, сп. место 140х190 см, комфортное наполнение, механизм - французская раскладушка, ткань Нувола - 1 категория.",
        gallery: ["https://i.postimg.cc/fTVxRGmj/image.jpg", "https://i.postimg.cc/GmYGkvM4/1.jpg", "https://i.postimg.cc/1zQ6M4TJ/2.jpg", "https://i.postimg.cc/5tSzrbW1/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Миллениум", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/7YhNTG8z/image.jpg", 
        description: "Механизм раскладки - дельфин, габариты 250×95 см, сп. м. 195×135 см, глубина посадочного места 70 см, ткань Капелла 34 - 1 категория.",
        gallery: ["https://i.postimg.cc/7YhNTG8z/image.jpg", "https://i.postimg.cc/HsN90Ydh/1.jpg", "https://i.postimg.cc/MpjbdCGK/2.jpg", "https://i.postimg.cc/9f5PSL4P/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Меркурий люкс", 
        price: "46 000 руб.", 
        image: "https://i.postimg.cc/QNp2nzHm/image.jpg", 
        description: "Пружинный блок. Габариты 245х115 см, сп. место 196х160 см, ткань Нувола - 1 категория, большой короб для белья, комфортное наполнение, подлокотники с нишами.",
        gallery: ["https://i.postimg.cc/QNp2nzHm/image.jpg", "https://i.postimg.cc/YqM5cxFH/1.jpg", "https://i.postimg.cc/4x3jyNw2/2.jpg", "https://i.postimg.cc/CKBtCP3j/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Мелодия", 
        price: "31 500 руб.", 
        image: "https://i.postimg.cc/6Q8sj5v4/image.jpg", 
        description: "Габариты 200/75 см, сп. м. 200/140 см, выполнен на фанере + ЛДСП, комфортное наполнение, два ящика для хранения вещей, ткань Мадрид - 1 категория.",
        gallery: ["https://i.postimg.cc/6Q8sj5v4/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Лайм  люкс", 
        price: "24 000 руб.", 
        image: "https://i.postimg.cc/3rv8r9W0/image.jpg", 
        description: "Диван Лайм Люкс, габариты 200х90 см, спальное место 200х145 см, большой короб для белья, комфортное наполнение, утяжки и двойная прострочка на сиденье и подушках, ткань Даллас - 1 категория.",
        gallery: ["https://i.postimg.cc/3rv8r9W0/image.jpg", "https://i.postimg.cc/bNfzZb2C/1.jpg", "https://i.postimg.cc/YqNtY96p/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Жардин", 
        price: "36 500 руб.", 
        image: "https://i.postimg.cc/Mpmn4Bh9/image.jpg", 
        description: "Габариты 225/100 см, сп. м. 200/145 см, комфортное наполнение, большой короб для белья, изготовлен под заказ, ткань Сканди - 1 категория.",
        gallery: ["https://i.postimg.cc/Mpmn4Bh9/image.jpg", "https://i.postimg.cc/q7BNdRr4/1.jpg", "https://i.postimg.cc/GpMH3C3Y/2.jpg", 
                 "https://i.postimg.cc/1tf4fj4d/3.jpg", "https://i.postimg.cc/LXw5f318/4.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Делфи", 
        price: "31 000 руб.", 
        image: "https://i.postimg.cc/x8pksVhn/image.jpg", 
        description: "Габариты 200/105 см, сп. м. 200/145 см, большой бельевой короб, комфортное наполнение, ткань Адели - 1 категория.",
        gallery: ["https://i.postimg.cc/x8pksVhn/image.jpg", "https://i.postimg.cc/05VJ57QF/1.jpg", "https://i.postimg.cc/xTqNXqNC/2.jpg", 
                 "https://i.postimg.cc/L67YLRjV/3.jpg", "https://i.postimg.cc/2SZqxJwN/4.jpg", "https://i.postimg.cc/Gpn4gQ78/5.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Виктория М+", 
        price: "37 000 руб.", 
        image: "https://i.postimg.cc/RFy5GPd2/image.jpg", 
        description: "Габариты 155/110 см, спальное место 195/140 см, ткань Софт (1 категория). Большое спальное место, короба для хранения (индивидуальный заказ - фанерное дно ящика), механизм трансформации - перекидной матрас, комфортное наполнение.",
        gallery: ["https://i.postimg.cc/RFy5GPd2/image.jpg", "https://i.postimg.cc/7hzvRgQh/1.jpg", "https://i.postimg.cc/02g1wBbw/2.jpg", 
                  "https://i.postimg.cc/Gmd0MTP3/3.jpg", "https://i.postimg.cc/pLZw3Vkf/4.jpg"],
        category: "Диваны"
    },
    { 
        name: "Комплект Версаль Диван + 2 кресла", 
        price: "72 500 руб.", 
        image: "https://i.postimg.cc/9MS1sKvt/2.jpg", 
        description: "Габариты дивана 230х110 см, сп. место 195х140 см, габариты кресла 100х100 см, ткань - Корако 💎, 1 категория (под заказ), комфортное наполнение, механизм раскладки дельфин, МДФ накладки, кресло глухое.",
        gallery: ["https://i.postimg.cc/9MS1sKvt/2.jpg", "https://i.postimg.cc/pVhsKVF0/2-1.jpg", "https://i.postimg.cc/mgRVxQ6q/2-2.jpg", "https://i.postimg.cc/3xB13dsw/2-3.jpg"],
        category: "Комплекты"
    },
    { 
        name: "Диван Версаль", 
        price: "36 500 руб.", 
        image: "https://i.postimg.cc/4xTcqBqk/image.jpg", 
        description: "Габариты 230х110 см, сп. место 195х140 см, ткань - Сиеста 💎, 1 категория, комфортное наполнение, механизм раскладки дельфин, МДФ накладки.",
        gallery: ["https://i.postimg.cc/4xTcqBqk/image.jpg", "https://i.postimg.cc/FHgS40Xf/1.jpg", "https://i.postimg.cc/50jQLGYv/2.jpg", 
                  "https://i.postimg.cc/hvdJ3d0t/3.jpg", "https://i.postimg.cc/mhWcxgdN/4.jpg", "https://i.postimg.cc/WphHS6Qw/5.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Валенсия", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/NFpnSKGZ/image.jpg", 
        description: "Ткань Рэми (1 категория), габариты 225/105 см, сп. м. 195/145 см, комфортное наполнение, + короб для белья.",
        gallery: ["https://i.postimg.cc/NFpnSKGZ/image.jpg", "https://i.postimg.cc/jdSmN4ZT/1.jpg", "https://i.postimg.cc/GhgNjT5y/2.jpg", "https://i.postimg.cc/cLVbpyZ1/3.jpg", "https://i.postimg.cc/ydKrNmkw/4.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Апрель", 
        price: "40 000 руб.", 
        image: "https://i.postimg.cc/C5ztyFZ1/image.jpg", 
        description: "Габариты 215х90 см, сп. м. 195х140 см, 🔝 большой короб для хранения белья, комфортное наполнение, подлокотники - дерево Бук (есть также вариант с МДФ подлокотниками), ткань Вип Текстиль - Колибри - 1 категория 💎.",
        gallery: ["https://i.postimg.cc/C5ztyFZ1/image.jpg", "https://i.postimg.cc/HWhRw7K7/1.jpg", "https://i.postimg.cc/jdn9ZS03/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Алекс", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/T3F3Bwpy/image.jpg", 
        description: "Габариты 195х105 см, сп. м. 195х160 см, 👍 два бельевых короба выполнены на фанере, комфортное наполнение, большое спальное место, ткань Корако - 1 категория.",
        gallery: ["https://i.postimg.cc/T3F3Bwpy/image.jpg", "https://i.postimg.cc/9f9Q2h7L/1.jpg", "https://i.postimg.cc/cHN44b70/2.jpg", "https://i.postimg.cc/cHM1KBTY/3.jpg", "https://i.postimg.cc/QC88cKnz/4.jpg"],
        category: "Диваны"
    },
    { 
        name: "Кровать детская - Мечта", 
        price: "42 500 руб.", 
        image: "https://i.postimg.cc/tJ5n8DqC/image.jpg", 
        description: "Основание кровати – ламели | Подлокотники ЛДСП + пена | Спинка ЛДСП + пена | Все крепления на болтах | Габариты: 220×100 см | Спальное место: 200×90 см | Высота подлокотников: 70 см (низкая часть) | Высота спинки: 120 см | Толщина подлокотников: 10 см",
        gallery: ["https://i.postimg.cc/tJ5n8DqC/image.jpg", "https://i.postimg.cc/PfzDLfWs/1.jpg", "https://i.postimg.cc/pXsnZ0cs/2.jpg"],
        category: "Кровати"
    },
    { 
        name: "Кровать Сицилия (Короб ЛДСП)", 
        price: "40 000 руб.", 
        image: "https://i.postimg.cc/DypK5srr/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП + файбертекс | Подъемный механизм на газлифтах | Металлическое основание Виафератта ❗️ | Большой короб для белья | На изголовье стразы | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/DypK5srr/image.jpg", "https://i.postimg.cc/nhsfWz26/1.jpg", "https://i.postimg.cc/FH2XX4n1/2.jpg"],
        category: "Кровати"
    },
    { 
        name: "Кровать Сицилия (Короб ДСП)", 
        price: "36 500 руб.", 
        image: "https://i.postimg.cc/DypK5srr/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП + файбертекс | Подъемный механизм на газлифтах | Металлическое основание Виафератта ❗️ | Большой короб для белья | На изголовье стразы | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/DypK5srr/image.jpg", "https://i.postimg.cc/nhsfWz26/1.jpg", "https://i.postimg.cc/FH2XX4n1/2.jpg"],
        category: "Кровати"
    },
    { 
        name: "Кровать Классик (Короб ДСП)", 
        price: "38 500 руб.", 
        image: "https://i.postimg.cc/htV7VSxq/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ДСП с подъемным механизмом на газлифтах | Большой короб для белья | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/htV7VSxq/image.jpg", "https://i.postimg.cc/1zHnYJJC/1.jpg", "https://i.postimg.cc/j5SwVP1s/2.jpg"],
        category: "Кровати"
    },
    { 
        name: "Кровать Классик (Короб ЛДСП)", 
        price: "41 000 руб.", 
        image: "https://i.postimg.cc/htV7VSxq/image.jpg", 
        description: "Габариты: 220×168 см | Спальное место: 200×160 см | Короб ЛДСП с подъемным механизмом на газлифтах | Большой короб для белья | Ткань Мадрид (1 категория)",
        gallery: ["https://i.postimg.cc/htV7VSxq/image.jpg", "https://i.postimg.cc/1zHnYJJC/1.jpg", "https://i.postimg.cc/j5SwVP1s/2.jpg"],
        category: "Кровати"
    },
    { 
        name: "Угол Шанель П - образный", 
        price: "91 500 руб.", 
        image: "https://i.postimg.cc/KY3bt17N/image.jpg", 
        description: "Индивидуальный размер: габариты 420/170 см, сп. м. 350/160 см, три короба для белья, ниши в подлокотниках, выполнен на фанере, очень качественное и комфортное наполнение, накладки МДФ, банкетки раскладываются вперед (200/70 см), что позволяет удобно ложиться перед телевизором. Ткань - Капелла (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/KY3bt17N/image.jpg", "https://i.postimg.cc/cHqShdXN/1.jpg", "https://i.postimg.cc/bJQjF4BS/2.jpg", "https://i.postimg.cc/prRtNkwG/3.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Колибри", 
        price: "34 200 руб.", 
        image: "https://i.postimg.cc/NfvKFccS/image.jpg", 
        description: "Габариты: 225/105 см, сп. м. 195/145 см, большой короб для белья, комфортное наполнение, накладки МДФ, ткань - Адели (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/NfvKFccS/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Чикаго Ч", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/xdpk1Nf3/image.jpg", 
        description: "Индивидуальный пошив чехла, габариты: 255/90 см, сп. м. 200/160 см, выполнен на фанере, очень комфортное наполнение - Элакс Медиум, ткань - Атмосфера (Союз М), 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/xdpk1Nf3/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Комплект офисный - Ньютон", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/T3gZF9mc/image.jpg", 
        description: "Габарит дивана: 200/90 см, глубина посадочного места 60 см, ширина 175 см. Габариты кресла: 100/185 см, глубина посадочного места 60 см, ширина 80 см. Ткань основная - Монако (1 категория, под заказ), ткань дополнительная - Сиеста (1 категория, под заказ). Комфортное наполнение, индивидуальный заказ.",
        gallery: ["https://i.postimg.cc/T3gZF9mc/image.jpg", "https://i.postimg.cc/GpRZCyxn/1.jpg", "https://i.postimg.cc/nL1Nch3j/2.jpg"],
        category: "Комплекты"
    },
    { 
        name: "Угол Шанель Люкс", 
        price: "79 700 руб.", 
        image: "https://i.postimg.cc/6pW3py0n/image.jpg", 
        description: "Габариты: 300/220 см, сп. м. 250/160 см, очень большой и комфортный угол, ниши для хранения вещей, накладки МДФ, два больших короба для белья, выполнен на фанере, большое спальное место, ткань - Браво (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/6pW3py0n/image.jpg", "https://i.postimg.cc/vZ0mgbqj/1.jpg", "https://i.postimg.cc/SsMQv8SF/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Гермес", 
        price: "86 000 руб.", 
        image: "https://i.postimg.cc/TYmmDLgs/image.jpg", 
        description: "Габариты: 310/225 см, сп. м. 210/160 см, комфортное наполнение, большое спальное место, короб для белья, ткань - Карди (1 категория). Заказ под клиента.",
        gallery: ["https://i.postimg.cc/TYmmDLgs/image.jpg", "https://i.postimg.cc/W1wk5B96/1.jpg", "https://i.postimg.cc/YS2mZdZc/2.jpg", "https://i.postimg.cc/G2HThHbq/3.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Шанель", 
        price: "46 500 руб.", 
        image: "https://i.postimg.cc/J0YX5ZPw/image.jpg", 
        description: "Габариты: 250/115 см, сп. м. 195/160 см, выполнен на фанере, большой короб для белья, комфортное наполнение, ткань - Мадрид (1 категория), накладки МДФ. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/J0YX5ZPw/image.jpg", "https://i.postimg.cc/rsHdrcwM/1.jpg", "https://i.postimg.cc/m2c1GcmD/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Виктория М+ люкс", 
        price: "37 000 руб.", 
        image: "https://i.postimg.cc/xCHLYXfM/image.jpg", 
        description: "Диван Виктория М+ Люкс: габариты 180/100 см, сп. м. 195/160 см, два бельевых короба, выполнен на фанере, прошивка сиденья и подушек, накладки МДФ на подлокотниках, комфортный размер, ткань - Капелла (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/xCHLYXfM/image.jpg", "https://i.postimg.cc/8z5WcKk1/1.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Шанель С", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/jjH8kzXS/image.jpg", 
        description: "Габариты: 260/170 см, сп. м. 205/160 см, комфортное наполнение, удобное спальное место, выполнен на фанере, 2 короба для белья, 2 ниши в подлокотниках, ткань - Нувола, 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/jjH8kzXS/image.jpg", "https://i.postimg.cc/tT9r0YSt/1.jpg", "https://i.postimg.cc/zvB0B41y/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Меркурий", 
        price: "51 000 руб.", 
        image: "https://i.postimg.cc/1tqBkDPd/image.jpg", 
        description: "Габариты 260х170 см, сп. м. 210х160 см, комфортное наполнение, два короба для белья, выполнен на фанере, две ниши в подлокотниках, ткань Монолит 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/1tqBkDPd/image.jpg", "https://i.postimg.cc/brfgpdww/1.jpg", "https://i.postimg.cc/VsX449Kr/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Лайм", 
        price: "22 500 руб.", 
        image: "https://i.postimg.cc/SxYG2WYx/image.jpg", 
        description: "Габариты 200х90 см, спальное место 200х145 см, большой короб для белья, комфортное наполнение, утяжки и двойная прострочка на сиденье и подушках, ткань Мадрид 1 категория.",
        gallery: ["https://i.postimg.cc/SxYG2WYx/image.jpg", "https://i.postimg.cc/G2dP5V74/1.jpg", "https://i.postimg.cc/zB7wZ760/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Кухонный угол Жардин", 
        price: "32 500 руб.", 
        image: "https://i.postimg.cc/g23Zb468/image.jpg", 
        description: "Габариты 170/140 см, выполнен на фанере, два короба для хранения вещей, ткань Сиеста 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/g23Zb468/image.jpg", "https://i.postimg.cc/MTpMRS3m/1.jpg"],
        category: "Кухонные углы"
    },
    { 
        name: "Диван Софи К", 
        price: "38 900 руб.", 
        image: "https://i.postimg.cc/4yrmrhfW/image.jpg", 
        description: "Габариты: 245x100 см, сп. место: 200x150 см, ткань — Рио (категория 1, под заказ), комфортное наполнение, большой короб для белья, заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/4yrmrhfW/image.jpg", "https://i.postimg.cc/pr2HyW0P/1.jpg", "https://i.postimg.cc/ZYcm2NRn/2.jpg", "https://i.postimg.cc/xT1Q2dJR/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Сторис С", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/52HMXkmQ/image.jpg", 
        description: "Габариты: 210x90 см, сп. м. 200x150 см, большой бельевой короб, комфортное наполнение, выполнен на фанере, ткань — Велютто (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/52HMXkmQ/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол модульный Орион К", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/VLVxPWcf/image.jpg", 
        description: "Габариты: 300x180 см, сп. м. 300x135 см, угол модульный, взаимозаменяемый (на фото — диванная часть цельная, можно заказать и раздельную), механизм — пума, ящик для белья, каркас — фанера, ткань — Даллас (1 категория), выполнен под заказ.",
        gallery: ["https://i.postimg.cc/VLVxPWcf/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Шанель мини", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/tghwP0nJ/image.jpg", 
        description: "Габариты: 200x115 см, сп. м. 200x160 см, выполнен на фанере, большой короб для хранения белья, очень комфортное наполнение, подходит для ежедневного сна, ткань — Мадрид (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/tghwP0nJ/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Чикаго С", 
        price: "54 000 руб.", 
        image: "https://i.postimg.cc/KvwHHcn4/image.jpg", 
        description: "Габариты: 255x90 см, сп. м. 200x160 см, выполнен на фанере, очень комфортное наполнение — элакс, ткань Атмосфера (Союз М) — 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/KvwHHcn4/image.jpg", "https://i.postimg.cc/YSwytXDH/1.jpg", "https://i.postimg.cc/MGb3Hygj/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Сторис", 
        price: "47 000 руб.", 
        image: "https://i.postimg.cc/DZvjXSKp/image.jpg", 
        description: "Габариты: 210x90 см, сп. м. 200x150 см, большой бельевой короб, комфортное наполнение, выполнен на фанере, ткань Сканди (1 категория), изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/DZvjXSKp/image.jpg", "https://i.postimg.cc/xjFxXjpg/1.jpg", "https://i.postimg.cc/15kvKCQq/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол модульный Орион", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/7LVXwqT3/image.jpg", 
        description: "Габариты: 300/180 см, сп. м. 300/135 см, угол модульный, взаимозаменяемый (на фото диванная часть цельная, возможно заказать раздельную), механизм - пума, ящик для белья, каркас - фанера, ткань - Браво, 1 категория. Выполнен под заказчика.",
        gallery: ["https://i.postimg.cc/7LVXwqT3/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Зафира", 
        price: "44 300 руб.", 
        image: "https://i.postimg.cc/NLhGrvhH/image.jpg", 
        description: "Габариты: 245/150 см, сп. место: 210/150 см. Два бельевых короба, комфортное наполнение. Ткань - Карди 1 категория. Изготовлен под заказчика.",
        gallery: ["https://i.postimg.cc/NLhGrvhH/image.jpg", "https://i.postimg.cc/NGZRxyB1/1.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Валенсия Люкс", 
        price: "37 700 руб.", 
        image: "https://i.postimg.cc/8CY2CBgF/image.jpg", 
        description: "Габариты 225/105, сп. место 195/145. Ткань - Монако, категория - 1. Можно подобрать идентичные цвета в Нуволе. Индивидуальный заказ - мягкие подлокотники, без МДФ накладок.",
        gallery: ["https://i.postimg.cc/8CY2CBgF/image.jpg", "https://i.postimg.cc/FRJ2kdhT/1.jpg", "https://i.postimg.cc/C5T9Gh1S/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Орион К", 
        price: "60 960 руб.", 
        image: "https://i.postimg.cc/HkV3LGY2/image.jpg", 
        description: "Габариты 200/115 см, сп. место 200/135 см. Механизм - пума, выполнен на фанере. Ткань: замша Плутон (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/HkV3LGY2/image.jpg", "https://i.postimg.cc/43c5zzhH/1.jpg", "https://i.postimg.cc/W1C8F9tP/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Шанель Ш", 
        price: "47 300 руб.", 
        image: "https://i.postimg.cc/GpjBw2WS/image.jpg", 
        description: "Габариты: 250/115 см, сп. место: 195/160 см. Выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Плутон (Эгида, аналог) - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/GpjBw2WS/image.jpg", "https://i.postimg.cc/FRW7z6sy/1.jpg", "https://i.postimg.cc/C5Rdq4zW/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Олимп", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/SNZDqQhR/image.jpg", 
        description: "Габариты 320/115 см, сп. место 230/160 см. Наполнение - элакс, большой бельевой короб. Ткань - Искусственная замша Elixir (Союз М) 1 категория.",
        gallery: ["https://i.postimg.cc/SNZDqQhR/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Шанель Мини Б", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/1R7q38fk/image.jpg", 
        description: "Габариты: 200/115 см, сп. место: 200/160 см. Выполнен на фанере, большой короб для хранения белья. Очень комфортное наполнение, подходит для ежедневного сна! Ткань - Мадрид - 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/1R7q38fk/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Гранд", 
        price: "44 000 руб.", 
        image: "https://i.postimg.cc/RCWcf15S/image.jpg", 
        description: "Габариты 210/155 см, сп. место 205/145 см. Оттоманка на газ лифтах, большой короб для белья, механизм раскладки дельфин. Выполнен на фанере, комфортное наполнение. Ткань Мадрид - 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/RCWcf15S/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол модульный Орион Г", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/rwM0hxbt/image.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, возможно заказать раздельную). Механизм - пума, ящик для белья, каркас - фанера, ткань - Даллас (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/rwM0hxbt/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Софи", 
        price: "39 900 руб.", 
        image: "https://i.postimg.cc/8PnB9yRr/image.jpg", 
        description: "Габариты: 245/100 см, сп. место: 200/150 см. Комфортное наполнение, полка с ЛДСП, большой короб для белья. Ткань Мадрид - 1 категория.",
        gallery: ["https://i.postimg.cc/8PnB9yRr/image.jpg", "https://i.postimg.cc/kg0NXBhJ/1.jpg", "https://i.postimg.cc/rp51dMvS/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол модульный Орион С", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/hPF7dH1s/C.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, можно заказать и раздельную). Механизм - пума, ящик для белья, каркас фанера. Ткань Формула (Союз М) - 1 категория. Выполнен под заказчика.",
        gallery: ["https://i.postimg.cc/hPF7dH1s/C.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Рич Б", 
        price: "38 800 руб.", 
        image: "https://i.postimg.cc/FzTg9pw8/image.jpg", 
        description: "Габариты: 215/90 см, сп. место: 200/150 см. Большой бельевой короб, комфортное наполнение. Ткань Тедди (Эгида) - 1 категория. Диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/FzTg9pw8/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Чикаго", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/cHnL1L2S/image.jpg", 
        description: "Габариты: 320/170 см, сп. место: 250/160 см. Выполнен на фанере, состоит из 3 модулей. Очень комфортное наполнение - элакс. Ткань Домиарт Кальвадос - 1 категория. Изготовлен под заказчика.",
        gallery: ["https://i.postimg.cc/cHnL1L2S/image.jpg", "https://i.postimg.cc/y608wW0h/1.jpg", "https://i.postimg.cc/T1j2mHTN/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол модульный Орион Б", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/hP9QbpCB/image.jpg", 
        description: "Габариты: 300/180 см, сп. место: 300/135 см. Угол модульный, взаимозаменяемый (на фото - диванная часть цельная, можно заказать и раздельную). Механизм - пума, ящик для белья, каркас фанера. Ткань Мадрид - 1 категория (выполнен под заказчика).",
        gallery: ["https://i.postimg.cc/hP9QbpCB/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван малютка Милана - МДФ накладки", 
        price: "35 700 руб.", 
        image: "https://i.postimg.cc/JnJ24fQg/image.jpg", 
        description: "Габариты: 150х115 см, сп. место: 190х118 см. Ткань: Ибица, категория 1 (под заказ). Короб для белья, комфортное спальное место, заказ под клиента.",
        gallery: ["https://i.postimg.cc/JnJ24fQg/image.jpg", "https://i.postimg.cc/wMpbtwfB/1.jpg", "https://i.postimg.cc/PJQV119Q/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Шанель З", 
        price: "46 500 руб.", 
        image: "https://i.postimg.cc/9MW7rTPh/image.jpg", 
        description: "Габариты: 250/115 см, сп. место: 195/160 см. Выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Ламбре (союз м, оригинал) - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/9MW7rTPh/image.jpg", "https://i.postimg.cc/vB369BX6/1.jpg", "https://i.postimg.cc/Y00LxHyD/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Берлин", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/k5w5YHS0/image.jpg", 
        description: "Габариты: 265/170 см, сп. место: 210/160 см. Комфортное наполнение, два короба для белья, изготовлен на фанере. Ткань - веллюто (1 категория). Выполнен под заказ.",
        gallery: ["https://i.postimg.cc/k5w5YHS0/image.jpg", "https://i.postimg.cc/Hxxkqt4V/1.jpg", "https://i.postimg.cc/xC41nbtg/2.jpg", "https://i.postimg.cc/8cfP5PYG/3.jpg"],
        category: "Углы"
    },
    { 
        name: "Угол Универсал на подъемном механизме", 
        price: "47 200 руб.", 
        image: "https://i.postimg.cc/cJ6Jjmc6/image.jpg", 
        description: "Габариты: 230х155 см, спальное место: 195х155 см. Комфортное наполнение, удобное спальное место, два больших короба для белья. Угол взаимозаменяемый. Ткань: Титан Грэй под заказ, ткань 1 категория. Заказ под клиента.",
        gallery: ["https://i.postimg.cc/cJ6Jjmc6/image.jpg", "https://i.postimg.cc/xd7dSzs5/1.jpg", "https://i.postimg.cc/Xq67r06y/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Честер С", 
        price: "32 700 руб.", 
        image: "https://i.postimg.cc/tRBhnrmm/image.jpg", 
        description: "Габариты: 205х90 см, спальное место: 200х145 см. Комфортное наполнение, удобное спальное место, большой короб для белья. Ткань: Бёрн, ткань 1 категория.",
        gallery: ["https://i.postimg.cc/tRBhnrmm/image.jpg", "https://i.postimg.cc/KvVBJ1bP/1.jpg", "https://i.postimg.cc/VL5Xqjxs/2.jpg", "https://i.postimg.cc/zGgWMqD9/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Шанель К", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/02xyxxCT/image.jpg", 
        description: "Габариты 2.60*1.70, спальное место 2.05*1.60. Комфортное наполнение, удобное спальное место. Выполнен на фанере, 2 короба для белья, 2 ниши в подлокотниках. Ткань Корако 1 категория.",
        gallery: ["https://i.postimg.cc/02xyxxCT/image.jpg", "https://i.postimg.cc/CLNLxtPz/1.jpg", "https://i.postimg.cc/0yXkpSqv/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Меркурий М+БК", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/nL9d0yNz/image.jpg", 
        description: "Габариты: 245/115 см, сп. место: 195/160 см, большой короб для белья, комфортное наполнение, ткань - Монако - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/nL9d0yNz/image.jpg", "https://i.postimg.cc/8z0KdpK9/1.jpg", "https://i.postimg.cc/fL48FHhv/2.jpg", "https://i.postimg.cc/3RgtHg8Q/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Меркурий М+СК", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/j2JNJ2pp/image.jpg", 
        description: "Габариты: 245/115 см, сп. место: 195/160 см, выполнен на фанере, большой короб для белья, комфортное наполнение. Ткань - Нувола - 1 категория. Диван изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/j2JNJ2pp/image.jpg", "https://i.postimg.cc/bwPCpfby/1.jpg", "https://i.postimg.cc/tgS231cJ/2.jpg", "https://i.postimg.cc/JzKq8DMx/3.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Орион П-образный С", 
        price: "125 500 руб.", 
        image: "https://i.postimg.cc/VNVWSxSb/image.jpg", 
        description: "Шикарное и комфортное спальное место + короб для белья. Габариты: 404 * 180, сп. место: 370 * 140. Ткань: Монако (матрас), плюш (каркас), 1-я категория. Ткань доступна к заказу! Также есть возможность выбора похожих оттенков ткани Нувола (1-я категория).",
        gallery: ["https://i.postimg.cc/VNVWSxSb/image.jpg", "https://i.postimg.cc/85fBLZWX/1.jpg", "https://i.postimg.cc/mkx3j7yL/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Интайм New", 
        price: "39 200 руб.", 
        image: "https://i.postimg.cc/dDPWhzx9/New.jpg", 
        description: "Ткань основная Рио - 1-я категория, ткань дополнение - Монако 1-я категория, каркас - фанера, короб для белья, ниши (подлокотники), комфортное наполнение. Габариты: 1.85*1.10, сп. место: 1.60*1.45, глубина посадки (без учёта подушек) - 85 см. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/dDPWhzx9/New.jpg", "https://i.postimg.cc/kM6qtKHV/New1.jpg", "https://i.postimg.cc/zXTNx588/New2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Орион Б", 
        price: "87 000 руб.", 
        image: "https://i.postimg.cc/qR9fGDFN/image.jpg", 
        description: "Ткань: Нувола (1 категория), комфортное и большое спальное место. Короб для белья (оттоманка), механизм трансформации - пума. Заказ выполнен под клиента. Габариты: 300/180 см, сп. м. 300/140 см.",
        gallery: ["https://i.postimg.cc/qR9fGDFN/image.jpg", "https://i.postimg.cc/9Qc617LY/1.jpg", "https://i.postimg.cc/7hgRnH7R/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Чикаго", 
        price: "54 000 руб.", 
        image: "https://i.postimg.cc/FR1mpLsB/image.jpg", 
        description: "Габариты: 255/90 см, сп. м. 200/160 см, выполнен на фанере, очень комфортное наполнение, ткань - Гоа (Арбен), 1 категория. Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/FR1mpLsB/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Орион", 
        price: "60 960 руб.", 
        image: "https://i.postimg.cc/VkPFtJq9/image.jpg", 
        description: "Габариты: 200/115 см, сп. м. 200/135 см, механизм - пума, выполнен на фанере, ткань - Даллас (1 категория). Изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/VkPFtJq9/image.jpg", "https://i.postimg.cc/3NDg4hWb/1.jpg", "https://i.postimg.cc/mhf77nHZ/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Честер", 
        price: "33 000 руб.", 
        image: "https://i.postimg.cc/tgCv11bS/image.jpg", 
        description: "Габариты: 210/90 см, сп. м. 200/150 см, большой бельевой короб, комфортное наполнение, ткань - Мадрид, 1 категория. Диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/tgCv11bS/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Кресло Монро", 
        price: "28 300 руб.", 
        image: "https://i.postimg.cc/7PTsTrvk/image.jpg", 
        description: "Ткань: Адели шоколад (1 категория), очень мягкое и удобное кресло, комфортное наполнение. Габариты: 120/100 см, глубина посадки 58 см, ширина посадки 50 см. Заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/7PTsTrvk/image.jpg", "https://i.postimg.cc/NfqN6CYr/1.jpg", "https://i.postimg.cc/wTXw05T4/2.jpg"],
        category: "Кресла"
    },
    { 
        name: "Диван Валенсия Люкс М+", 
        price: "40 500 руб.", 
        image: "https://i.postimg.cc/6pBYS78W/image.jpg", 
        description: "Ткань: Тенериф (1 категория), индивидуальный заказ - МДФ накладки (дуб крафт белый), комфортное наполнение, короб для белья, ниши в подлокотниках, заказ выполнен под клиента.",
        gallery: ["https://i.postimg.cc/6pBYS78W/image.jpg", "https://i.postimg.cc/6Q3zWDVF/1.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Рич", 
        price: "39 000 руб.", 
        image: "https://i.postimg.cc/cJbhrXXC/image.jpg", 
        description: "Габариты: 215/90 см, сп. м. 200/150 см, большой бельевой короб, комфортное наполнение, ткань - Невада (Арбен), 1 категория, диван выполнен под заказ.",
        gallery: ["https://i.postimg.cc/cJbhrXXC/image.jpg", "https://i.postimg.cc/nr811M8t/1.jpg", "https://i.postimg.cc/J0b5YmmH/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Офис 2", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/XYNkLTPX/2.jpg", 
        description: "Габариты: 145/85 см, комфортное наполнение, выполнен на фанере, ткань - кожзам (Эгида, акционный), 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/XYNkLTPX/2.jpg", "https://i.postimg.cc/1zfchDsQ/21.jpg", "https://i.postimg.cc/Y9F6jkvD/22.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Шанель", 
        price: "57 200 руб.", 
        image: "https://i.postimg.cc/c40R1p0T/image.jpg", 
        description: "Габариты: 260/170 см, сп. м. 205/160 см, два бельевых короба + ниши в подлокотниках, выполнен на фанере, очень комфортное наполнение, ткань - Невада (Арбен), 1 категория, изготовлен под заказ.",
        gallery: ["https://i.postimg.cc/c40R1p0T/image.jpg", "https://i.postimg.cc/P5FY4NZF/1.jpg", "https://i.postimg.cc/hGkmkw2L/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Фараон 3", 
        price: "75 700 руб.", 
        image: "https://i.postimg.cc/1XtjWyXY/3.jpg", 
        description: "Габариты 180/95 см, механизм трансформации - французская раскладушка с матрасом, сп. м. 195/130 см, выполнен на фанере, комфортное наполнение, ткань Маборо (Эгида, аналог) - 1 категория.",
        gallery: ["https://i.postimg.cc/1XtjWyXY/3.jpg", "https://i.postimg.cc/05W3zKHg/31.jpg", "https://i.postimg.cc/PrC7YfBC/32.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Фараон 2", 
        price: "56 200 руб.", 
        image: "https://i.postimg.cc/pXSg65DQ/2.jpg", 
        description: "Габариты 180х95 см, без спального места, ткань Сенсей - 1 категория, комфортное наполнение.",
        gallery: ["https://i.postimg.cc/pXSg65DQ/2.jpg", "https://i.postimg.cc/vZ6pF8zJ/21.jpg", "https://i.postimg.cc/QMGvXLYH/22.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол модульный Орион П- образный", 
        price: "125 500 руб.", 
        image: "https://i.postimg.cc/d3BTT0w6/image.jpg", 
        description: "Габариты: 404/180 см, сп. м. 370/140 см, выполнен на фанере, механизм - пума, наполнение очень комфортное, ППУ - элакс, силиконизированный, короб для белья, угол взаимозаменяемый, ткань - Далас 1 категория (выполнен под заказчика).",
        gallery: ["https://i.postimg.cc/d3BTT0w6/image.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Софи 2", 
        price: "39 900 руб.", 
        image: "https://i.postimg.cc/RZ3Nvd6X/2.jpg", 
        description: "Комфортное наполнение; короб для белья; ниши в подлокотниках; ткань Карди, 1 категория; заказ под клиента.",
        gallery: ["https://i.postimg.cc/RZ3Nvd6X/2.jpg", "https://i.postimg.cc/XYTXq593/22.jpg", "https://i.postimg.cc/qRG71ZSM/23.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Шанель Мини С", 
        price: "36 000 руб.", 
        image: "https://i.postimg.cc/MHPpSfzC/image.jpg", 
        description: "Ткань Монако, 1 категория; комфортное наполнение; заказ под клиента.",
        gallery: ["https://i.postimg.cc/MHPpSfzC/image.jpg", "https://i.postimg.cc/Njrf30Sn/1.jpg", "https://i.postimg.cc/yN4YsHz8/2.jpg", "https://i.postimg.cc/bJLzxSSZ/3.jpg", "https://i.postimg.cc/Y2nrjgwV/4.jpg"],
        category: "Диваны"
    },
    { 
        name: "Угол Марсель С", 
        price: "57 000 руб.", 
        image: "https://i.postimg.cc/Xqm6LfjY/image.jpg", 
        description: "Индивидуальный заказ - подлокотники от Мартиники; ткань Корако, 1 категория; комфортное наполнение; ниша в подлокотниках; ниша в угловом сегменте; заказ под клиента.",
        gallery: ["https://i.postimg.cc/Xqm6LfjY/image.jpg", "https://i.postimg.cc/X7BbJzLG/1.jpg", "https://i.postimg.cc/wjhY5RS9/2.jpg"],
        category: "Углы"
    },
    { 
        name: "Диван Классик", 
        price: "55 000 руб.", 
        image: "https://i.postimg.cc/Bv49mQ0H/image.jpg", 
        description: "габариты: 235 / 120 см сп. м. 195 / 160 см большой короб для белья выполнен на фанере комфортное наполнение ткань Даллас  - 1 категория выполнен под заказ .",
        gallery: ["https://i.postimg.cc/Bv49mQ0H/image.jpg", "https://i.postimg.cc/TP08FMdS/1.jpg", "https://i.postimg.cc/tgQPfwSh/2.jpg"],
        category: "Диваны"
    },
    { 
        name: "Кресло Шанель", 
        price: "25 000 руб.", 
        image: "https://i.postimg.cc/9fC0yhgN/image.jpg", 
        description: "габариты 100/105 см Комфортное наполнение , короб для хранения вещей выполнен на фанере наладки мдф ткань Мадрид - 1 категория изготовлен под заказ ",
        gallery: ["https://i.postimg.cc/9fC0yhgN/image.jpg", "https://i.postimg.cc/hjGG30BL/1.jpg", "https://i.postimg.cc/GtWhtwsK/2.jpg"],
        category: "Кресла"
    },
    { 
        name: "Угол Лофт", 
        price: "??? руб.", 
        image: "https://i.postimg.cc/ncmh5z6P/image.jpg", 
        description: "Каркас - фанера 2 короба для белья. Пуф Сундук в комплекте,не только для хранения Ваших вещей, но и может быть продолжением спального места. Габариты 2,50*1, 70 Сп м 2.00*1.70 Высота от пола 45 Ширина угловой спинки 21 Глубина посадки диванной части (без учёта подушек) - 88 Габарит пуфа 90*50",
        gallery: ["https://i.postimg.cc/ncmh5z6P/image.jpg", "https://i.postimg.cc/B6tqCQTN/1.jpg", "https://i.postimg.cc/7h2wpsQ2/2.jpg", "https://i.postimg.cc/dQkCsJb8/3.jpg"],
        category: "Углы"
    },
    {
        name: "Диван Зафира",
        price: "34 500 руб.",
        image: "https://i.postimg.cc/5N8FznNy/image.jpg",
        description: "Габариты: 225 / 105 см; сп. м.: 195 / 150 см; большой короб для белья; комфортное наполнение; ткань Монолит, 1 категория.",
        gallery: ["https://i.postimg.cc/5N8FznNy/image.jpg"],
        category: "Диваны"
    },
    { 
        name: "Диван Меркурий М+", 
        price: "45 700 руб.", 
        image: "https://i.postimg.cc/2SwbcyWf/image.jpg", 
        description: "Комфортное наполнение. Индивидуальный заказ - полностью фанерный короб! Ткань Лама 81 1ая категория",
        gallery: ["https://i.postimg.cc/2SwbcyWf/image.jpg", "https://i.postimg.cc/xCWcJbwL/1.jpg", "https://i.postimg.cc/pVF9NqjC/2.jpg", 
                  "https://i.postimg.cc/Hs0VnnB7/3.jpg", "https://i.postimg.cc/y8VWZKbp/4.jpg"],
        category: "Диваны"
    }
];

let displayedProducts = [...products]; // Копируем исходный массив товаров
let currentCategory = ''; // пустая строка означает "Все"
let currentMinPrice = null;
let currentMaxPrice = null;
let currentSortOrder = ''; // 'asc' или 'desc'
let currentSearchQuery = '';

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
                <p><strong>Телефон для связи:</strong> +79493420947 - Марина.</p>
                <p class="warning-message">
                ВНИМАНИЕ: В ЦЕНЫ ТОВАРОВ НА САЙТЕ ВКЛЮЧЕНА СКИДКА 5% ПРИ ЗАКАЗЕ ПО НОМЕРУ ТЕЛЕФОНА.  
                НУЖНО СООБЩИТЬ, ЧТО ВЫ С САЙТА, ЧТОБЫ ПОЛУЧИТЬ СКИДКУ.
                </p>
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
        // Фильтр по категории
        if (currentCategory && product.category.toLowerCase() !== currentCategory.toLowerCase()) {
            return false;
        }
        // Фильтр по цене
        const price = parsePrice(product.price);
        if (price === null) return false;
        if (currentMinPrice !== null && price < currentMinPrice) return false;
        if (currentMaxPrice !== null && price > currentMaxPrice) return false;
        // Фильтр по поисковому запросу
        if (currentSearchQuery && !product.name.toLowerCase().includes(currentSearchQuery)) {
            return false;
        }
        return true;
    });

    // Сортировка результатов
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
    const categories = ['Все', 'Диваны', 'Углы', 'Кресла', 'Кухонные углы', 'Комплекты', 'Кровати'];
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
// Поиск товаров
function searchProducts() {
    currentSearchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    applyFiltersAndSort();
}
