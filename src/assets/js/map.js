ymaps.ready(() => {
    // myMap1.geoObjects.removeAll();
    // Массив со всеми городами, сортированный по алфавиту
    const cities = [{
            "CityID": "2",
            "Name": "Ростов-на-Дону",
            "Name_EN": "Rostov-on-Don"
        },
        {
            "CityID": "3",
            "Name": "Москва",
            "Name_EN": "Moscow"
        },
        {
            "CityID": "4",
            "Name": "Краснодар",
            "Name_EN": "Krasnodar"
        },
        {
            "CityID": "21",
            "Name": "Санкт-Петербург",
            "Name_EN": "St. Petersburg"
        },
        {
            "CityID": "28",
            "Name": "Гамбург (Германия)",
            "Name_EN": "Hamburg"
        },
        {
            "CityID": "38",
            "Name": "Тюмень",
            "Name_EN": "Tyumen"
        },
        {
            "CityID": "39",
            "Name": "Казань",
            "Name_EN": "Kazan"
        },
        {
            "CityID": "40",
            "Name": "Великий Новгород",
            "Name_EN": "Veliky Novgorod"
        },
        {
            "CityID": "41",
            "Name": "Петрозаводск",
            "Name_EN": "Petrozavodsk"
        },
        {
            "CityID": "42",
            "Name": "Выборг",
            "Name_EN": "Vyborg"
        },
        {
            "CityID": "43",
            "Name": "Екатеринбург",
            "Name_EN": "Yekaterinburg"
        },
        {
            "CityID": "44",
            "Name": "Аксай",
            "Name_EN": "Aksay"
        },
        {
            "CityID": "45",
            "Name": "Вологда",
            "Name_EN": "Vologda"
        },
        {
            "CityID": "46",
            "Name": "Солнечногорск",
            "Name_EN": "Solnechnogorsk"
        },
        {
            "CityID": "47",
            "Name": "Набережные Челны",
            "Name_EN": "Naberezhnye Chelny"
        },
        {
            "CityID": "48",
            "Name": "Волгоград",
            "Name_EN": "Volgograd"
        },
        {
            "CityID": "49",
            "Name": "Минеральные воды",
            "Name_EN": "Mineralnye Vody"
        },
        {
            "CityID": "50",
            "Name": "Ярославль",
            "Name_EN": "Yaroslavl"
        },
        {
            "CityID": "51",
            "Name": "Дзержинск",
            "Name_EN": "Dzerzhinsk"
        },
        {
            "CityID": "52",
            "Name": "Рязань",
            "Name_EN": "Ryazan"
        },
        {
            "CityID": "53",
            "Name": "Самара",
            "Name_EN": "Samara"
        },
        {
            "CityID": "54",
            "Name": "Новосибирск",
            "Name_EN": "Novosibirsk"
        },
        {
            "CityID": "55",
            "Name": "Омск",
            "Name_EN": "Omsk"
        },
        {
            "CityID": "56",
            "Name": "Голицино",
            "Name_EN": "Golitsyno"
        },
        {
            "CityID": "57",
            "Name": "Сочи",
            "Name_EN": "Sochi"
        },
        {
            "CityID": "58",
            "Name": "Домодедово",
            "Name_EN": "Domodedovo"
        },
        {
            "CityID": "59",
            "Name": "Люберцы",
            "Name_EN": "Lyubertsy"
        },
        {
            "CityID": "61",
            "Name": "Красноярск",
            "Name_EN": "Krasnoyarsk"
        },
        {
            "CityID": "62",
            "Name": "Нижний Новгород",
            "Name_EN": "Nizhny Novgorod"
        },
        {
            "CityID": "63",
            "Name": "Хабаровск",
            "Name_EN": "Khabarovsk"
        },
        {
            "CityID": "64",
            "Name": "Уфа",
            "Name_EN": "Ufa"
        },
        {
            "CityID": "65",
            "Name": "Белово",
            "Name_EN": "Belovo"
        },
        {
            "CityID": "66",
            "Name": "Братск",
            "Name_EN": "Bratsk"
        },
        {
            "CityID": "68",
            "Name": "Липецк",
            "Name_EN": "Lipetsk"
        },
        {
            "CityID": "69",
            "Name": "Губкин",
            "Name_EN": "Gubkin"
        },
        {
            "CityID": "70",
            "Name": "Чувашия",
            "Name_EN": "Chuvashia"
        },
        {
            "CityID": "71",
            "Name": "Калининград",
            "Name_EN": "Kaliningrad"
        },
        {
            "CityID": "72",
            "Name": "Химки",
            "Name_EN": "Khimki"
        },
        {
            "CityID": "73",
            "Name": "Тверь",
            "Name_EN": "Tver"
        },
        {
            "CityID": "74",
            "Name": "Киров",
            "Name_EN": "Kirov"
        },
        {
            "CityID": "75",
            "Name": "Павловский Посад",
            "Name_EN": "Pavlovsky Posad"
        },
        {
            "CityID": "76",
            "Name": "Сургут",
            "Name_EN": "Surgut"
        },
        {
            "CityID": "77",
            "Name": "Барнаул",
            "Name_EN": "Barnaul"
        },
        {
            "CityID": "78",
            "Name": "Челябинск",
            "Name_EN": "Chelyabinsk"
        },
        {
            "CityID": "79",
            "Name": "Архангельск",
            "Name_EN": "Arkhangelsk"
        },
        {
            "CityID": "80",
            "Name": "Пермь",
            "Name_EN": "Perm"
        },
        {
            "CityID": "81",
            "Name": "Великие Луки",
            "Name_EN": "Velikiye Luki"
        },
        {
            "CityID": "82",
            "Name": "Боровичи",
            "Name_EN": "Borovichi"
        },
        {
            "CityID": "83",
            "Name": "Владивосток",
            "Name_EN": "Vladivostok"
        },
        {
            "CityID": "84",
            "Name": "Оренбург",
            "Name_EN": "Orenburg"
        },
        {
            "CityID": "85",
            "Name": "Орел",
            "Name_EN": "Orel"
        },
        {
            "CityID": "86",
            "Name": "Зеленоград",
            "Name_EN": "Zelenograd"
        },
        {
            "CityID": "88",
            "Name": "Котельники",
            "Name_EN": "Kotelniki"
        },
        {
            "CityID": "89",
            "Name": "Мытищи",
            "Name_EN": "Mytishchi"
        },
        {
            "CityID": "90",
            "Name": "Иркутск",
            "Name_EN": "Irkutsk"
        },
        {
            "CityID": "91",
            "Name": "Артем",
            "Name_EN": "Artyom"
        },
        {
            "CityID": "92",
            "Name": "Киев",
            "Name_EN": "Kiev"
        },
        {
            "CityID": "93",
            "Name": "Одесса",
            "Name_EN": "Odessa"
        },
        {
            "CityID": "94",
            "Name": "Харьков",
            "Name_EN": "Kharkiv"
        },
        {
            "CityID": "95",
            "Name": "Минск",
            "Name_EN": "Minsk"
        },
        {
            "CityID": "96",
            "Name": "Алматы",
            "Name_EN": "Almaty"
        },
        {
            "CityID": "97",
            "Name": "Кишинев",
            "Name_EN": "Chisinau"
        },
        {
            "CityID": "98",
            "Name": "Балашиха",
            "Name_EN": "Balashikha"
        },
        {
            "CityID": "99",
            "Name": "Голицино",
            "Name_EN": "Golitsyno"
        },
        {
            "CityID": "101",
            "Name": "Белгород",
            "Name_EN": "Belgorod"
        },
        {
            "CityID": "102",
            "Name": "Брянск",
            "Name_EN": "Bryansk"
        },
        {
            "CityID": "103",
            "Name": "Кострома",
            "Name_EN": "Kostroma"
        },
        {
            "CityID": "104",
            "Name": "Курск",
            "Name_EN": "Kursk"
        },
        {
            "CityID": "105",
            "Name": "Тула",
            "Name_EN": "Tula"
        },
        {
            "CityID": "106",
            "Name": "Ясногорск",
            "Name_EN": "Yasnogorsk"
        },
        {
            "CityID": "107",
            "Name": "Сыктывкар",
            "Name_EN": "Syktyvkar"
        },
        {
            "CityID": "108",
            "Name": "Черняховск",
            "Name_EN": "Chernyakhovsk"
        },
        {
            "CityID": "109",
            "Name": "Каменск-Шахтинск",
            "Name_EN": "Kamensk-Shakhtinsk"
        },
        {
            "CityID": "110",
            "Name": "Белореченск",
            "Name_EN": "Belorechensk"
        },
        {
            "CityID": "111",
            "Name": "Черкеск",
            "Name_EN": "Cherkessk"
        },
        {
            "CityID": "112",
            "Name": "Волжский",
            "Name_EN": "Volzhsky"
        },
        {
            "CityID": "113",
            "Name": "Саратов",
            "Name_EN": "Saratov"
        },
        {
            "CityID": "114",
            "Name": "Тольятти",
            "Name_EN": "Tolyatti"
        },
        {
            "CityID": "115",
            "Name": "Волжск",
            "Name_EN": "Volzhsk"
        },
        {
            "CityID": "116",
            "Name": "Юрюзань",
            "Name_EN": "Yuryuzan"
        },
        {
            "CityID": "117",
            "Name": "Абакан",
            "Name_EN": "Abakan"
        },
        {
            "CityID": "118",
            "Name": "Бийск",
            "Name_EN": "Biysk"
        },
        {
            "CityID": "119",
            "Name": "Новокузнецк",
            "Name_EN": "Novokuznetsk"
        },
        {
            "CityID": "120",
            "Name": "Комсомольск-на-Амуре",
            "Name_EN": "Komsomolsk-on-Amur"
        },
        {
            "CityID": "121",
            "Name": "Симферополь",
            "Name_EN": "Simferopol"
        },
        {
            "CityID": "122",
            "Name": "Днепропетровск",
            "Name_EN": "Dnipropetrovsk"
        },
        {
            "CityID": "123",
            "Name": "Георгиевск",
            "Name_EN": "Georgiyevsk"
        },
        {
            "CityID": "124",
            "Name": "Чебоксары",
            "Name_EN": "Cheboksary"
        },
        {
            "CityID": "125",
            "Name": "Готсомель",
            "Name_EN": "Gotsomel"
        },
        {
            "CityID": "126",
            "Name": "Николаев",
            "Name_EN": "Nikolaev"
        },
        {
            "CityID": "127",
            "Name": "Лиски",
            "Name_EN": "Liski"
        },
        {
            "CityID": "128",
            "Name": "Пушкин",
            "Name_EN": "Pushkin"
        },
        {
            "CityID": "129",
            "Name": "Сертолово",
            "Name_EN": "Sertolovo"
        },
        {
            "CityID": "130",
            "Name": "Смоленск",
            "Name_EN": "Smolensk"
        },
        {
            "CityID": "131",
            "Name": "Кемерово",
            "Name_EN": "Kemerovo"
        },
        {
            "CityID": "132",
            "Name": "Псков",
            "Name_EN": "Pskov"
        },
        {
            "CityID": "133",
            "Name": "Старый Оскол",
            "Name_EN": "Stariy Oskol"
        },
        {
            "CityID": "134",
            "Name": "Ставрополь",
            "Name_EN": "Stavropol"
        },
        {
            "CityID": "135",
            "Name": "Шушары",
            "Name_EN": "Shushary"
        },
        {
            "CityID": "136",
            "Name": "Березовский",
            "Name_EN": "Berezovsky"
        },
        {
            "CityID": "137",
            "Name": "Горячий Ключ",
            "Name_EN": "Goryachiy Klyuch"
        },
        {
            "CityID": "138",
            "Name": "Воронеж",
            "Name_EN": "Voronezh"
        },
        {
            "CityID": "139",
            "Name": "Ульяновск",
            "Name_EN": "Ulyanovsk"
        },
        {
            "CityID": "140",
            "Name": "Долгопрудный",
            "Name_EN": "Dolgoprudny"
        },
        {
            "CityID": "141",
            "Name": "Кола",
            "Name_EN": "Kola"
        },
        {
            "CityID": "142",
            "Name": "Орехово-Зуево",
            "Name_EN": "Orekhovo-Zuyevo"
        },
        {
            "CityID": "143",
            "Name": "Истра",
            "Name_EN": "Istra"
        },
        {
            "CityID": "144",
            "Name": "Благовещенск",
            "Name_EN": "Blagoveshchensk"
        },
        {
            "CityID": "145",
            "Name": "Пенза",
            "Name_EN": "Penza"
        },
        {
            "CityID": "146",
            "Name": "Улан-Удэ",
            "Name_EN": "Ulan-Ude"
        },
        {
            "CityID": "147",
            "Name": "Курган",
            "Name_EN": "Kurgan"
        },
        {
            "CityID": "148",
            "Name": "Ижевск",
            "Name_EN": "Izhevsk"
        },
        {
            "CityID": "149",
            "Name": "Котлас",
            "Name_EN": "Kotlas"
        },
        {
            "CityID": "150",
            "Name": "Наро-Фоминск",
            "Name_EN": "Naro-Fominsk"
        },
        {
            "CityID": "151",
            "Name": "Кипарисово",
            "Name_EN": "Kiparisovo"
        },
        {
            "CityID": "152",
            "Name": "Елабуга",
            "Name_EN": "Elabuga"
        },
        {
            "CityID": "153",
            "Name": "Волжский",
            "Name_EN": "Volzhsky"
        },
        {
            "CityID": "154",
            "Name": "Новый Уренгой",
            "Name_EN": "New Urengoy"
        },
        {
            "CityID": "155",
            "Name": "Владимир",
            "Name_EN": "Vladimir"
        },
        {
            "CityID": "156",
            "Name": "Магадан",
            "Name_EN": "Magadan"
        },
        {
            "CityID": "157",
            "Name": "Батайск",
            "Name_EN": "Bataysk"
        },
        {
            "CityID": "158",
            "Name": "Калуга",
            "Name_EN": "kaluga"
        },
        {
            "CityID": "159",
            "Name": "Чита",
            "Name_EN": "Chita"
        }
    ].sort(function (a, b) {
        if (a["Name"] < b["Name"]) {
            return -1;
        }
        if (a["Name"] > b["Name"]) {
            return 1;
        }
        return 0;
    })

    // Все типы сервисных центров
    const centerTypes = [{
            "TypeID": "43",
            "Name": "Гарантийные сервисные центры BPW",
            "Name_EN": "BPW guarantee service centers",
            "Icon": "4d63bb77b81728b3224be2cffa6b618e.png"
        },
        {
            "TypeID": "47",
            "Name": "Собственный сервисный центр",
            "Name_EN": "",
            "Icon": "ab9b15095314b90a55ecd6a0400b287f.png"
        },
        {
            "TypeID": "51",
            "Name": "Авторизированные Магазины Wabco",
            "Name_EN": "The authorized Wabco Stores",
            "Icon": "0a4bf8c937c88c46ca90033a8cb6fe87.png"
        },
        {
            "TypeID": "52",
            "Name": "Сервисные центры Wabco с поддержкой гарантии",
            "Name_EN": "Wabco service centers  with the guarantee support",
            "Icon": "0eb6716e7a07eb91257948d25107a042.png"
        },
        {
            "TypeID": "53",
            "Name": "Сервисные центры Wabco без поддержки  гарантии",
            "Name_EN": "Wabco service centers  without guarantee support",
            "Icon": "74309954a9ccade8880818270461e5aa.png"
        },
        {
            "TypeID": "54",
            "Name": "Сервисные центры BPW",
            "Name_EN": "BPW service stations",
            "Icon": "e0dde53eef9073c42cdc5d368fb67df0.png"
        },
        {
            "TypeID": "55",
            "Name": "Сервисные станции SAF",
            "Name_EN": "SAF service stations",
            "Icon": "9ee0d78f931537400d37384a015b2e52.png"
        },
        {
            "TypeID": "56",
            "Name": "Сервисный центр рекомендованный BONUM",
            "Name_EN": "Service center recommended by BONUM",
            "Icon": "bc4fd2810c06ef240dad070869da429a.png"
        }
    ]

    // Массив со всеми сервисами в РФ
    const centres = [{
            "CenterID": "141",
            "Name": "Аксель",
            "CityID": "134",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78652221999'>+7 (8652) 221-999<a> <a href='tel:+78652764276'>+7 (8652) 76-42-76<a>",
            "Link": "",
            "Coords": "45.05424838878607,42.02778373313522",
            "Sort": "0",
            "Name_EN": "Axel",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78652221999'>+7 (8652) 221-999<a> <a href='tel:+78652764276'>+7 (8652) 76-42-76<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "314",
            "Name": "Казань-Шинторг",
            "CityID": "39",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78432737373'>+7 (843) 273 73 73<a>",
            "Link": "https://www.kazan-shintorg.com",
            "Coords": "55.88754215103199,49.22827995079729",
            "Sort": "0",
            "Name_EN": "Kazan-Shintorg",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78432737373'>+7 (843) 273 73 73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "144",
            "Name": "ООО «Великан-Ростов Сервис»",
            "CityID": "2",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78632037798'>+7 (863) 203-77-98<a>",
            "Link": "https://www.maz61.ru",
            "Coords": "47.29683714611313,39.653697877315516",
            "Sort": "0",
            "Name_EN": "LLC Velikan-Rostov Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78632037798'>+7 (863) 203-77-98<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "145",
            "Name": "MAN Центр Екатеринбург  ООО «СпецАвтоЛэнд-Урал»",
            "CityID": "136",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73433786728'>+7 (343) 378-67-28<a>",
            "Link": "https://www.spautoland-ural.ru",
            "Coords": "56.913097, 60.777456",
            "Sort": "0",
            "Name_EN": "MAN Yekaterinburg  LLC Spetsavtolend-Urals Center",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73433786728'>+7 (343) 378-67-28<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "146",
            "Name": "ООО «Импокар-Сервис»",
            "CityID": "77",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +7(913)2-22-80-40'>+79132228040<a>",
            "Link": "https://www.stc22.ru",
            "Coords": "55.65839942195173,52.32465189451212",
            "Sort": "0",
            "Name_EN": "LLC Impokar-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +7(913)2-22-80-40'>+79132228040<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "147",
            "Name": "ООО «ЧелныТракСервис»",
            "CityID": "47",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78552492020'>+7 (8552) 49-20-20<a>",
            "Link": "https://www.chts116.ru",
            "Coords": "55.690184191275655,52.35598131282792",
            "Sort": "0",
            "Name_EN": "LLC Chelny Trak Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78552492020'>+7 (8552) 49-20-20<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "313",
            "Name": "Агат",
            "CityID": "62",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78312597779'>+7 (831) 259-77-79<a>",
            "Link": "https://www.rostov.agat-group.com",
            "Coords": "56.23552056850629,44.02136549999997",
            "Sort": "0",
            "Name_EN": "Agate",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78312597779'>+7 (831) 259-77-79<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "312",
            "Name": "ООО &quot;Камион Сервис&quot;",
            "CityID": "148",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73412916950'>+7 (3412) 916-950<a>",
            "Link": "https://www.furacenter.ru",
            "Coords": "56.88530462302072,53.313579679901345",
            "Sort": "0",
            "Name_EN": "LLC &quot;Kamion Service&quot;",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73412916950'>+7 (3412) 916-950<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "311",
            "Name": "Камазтехобслуживание",
            "CityID": "134",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78652387078'>+7 (865) 238-70-78<a>",
            "Link": "https://www.ktoservice.ru",
            "Coords": "45.07220438347048,41.92863939681651",
            "Sort": "0",
            "Name_EN": "Kamaztekhobsluzhivanie",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78652387078'>+7 (865) 238-70-78<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "310",
            "Name": "СочиТракСервис",
            "CityID": "57",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78622270777'>+7 (862) 227-07-77<a>",
            "Link": "https://www.volvosochi.ru",
            "Coords": "43.6329110715418,39.74540627976222",
            "Sort": "0",
            "Name_EN": "SochiTrackService",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78622270777'>+7 (862) 227-07-77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "152",
            "Name": "ООО «Евротраксервис»",
            "CityID": "50",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78005555236'>+7 (800) 555-52-36<a>",
            "Link": "",
            "Coords": "57.590711, 39.819362",
            "Sort": "0",
            "Name_EN": "LLC Evrotrakservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78005555236'>+7 (800) 555-52-36<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "153",
            "Name": "ООО «СБСВ-КЛЮЧАВТО ЮГ»",
            "CityID": "137",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78615944405'>+7 (86159) 444-05<a>",
            "Link": "https://www.keyauto.ru",
            "Coords": "44.650582, 39.152245",
            "Sort": "0",
            "Name_EN": "LLC SBSV-KLYUCHAVTO YUG",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78615944405'>+7 (86159) 444-05<a>",
            "Official": "0",
            "Map": "0"
        },
        {
            "CenterID": "154",
            "Name": "ООО «СБ «Виктория»",
            "CityID": "43",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73433180017'>+7(343) 318-00-17<a>",
            "Link": "",
            "Coords": "56.806992, 60.633539",
            "Sort": "0",
            "Name_EN": "LLC SB Viktoriya",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73433180017'>+7(343) 318-00-17<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "155",
            "Name": "ООО «Трейлер Сервис»",
            "CityID": "58",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78002503322'>+7 800 250-33-22<a>",
            "Link": "",
            "Coords": "55.281927, 37.854725",
            "Sort": "0",
            "Name_EN": "LLC Treyler Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002503322'>+7 800 250-33-22<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "156",
            "Name": "ИП Лернер Александр",
            "CityID": "138",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74732007373'>+7 (473) 200 73 73<a>",
            "Link": "https://www.trailer-36.ru",
            "Coords": "51.49826349725668,39.5644140226652",
            "Sort": "0",
            "Name_EN": "IP Lerner Alexander",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74732007373'>+7 (473) 200 73 73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "309",
            "Name": "ВолгаКамазАвтосервис",
            "CityID": "48",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78442265122'>+7 (8442) 26-51-22<a>",
            "Link": "https://www.metrotowtrucks.ru",
            "Coords": "48.76346898095893,44.410229873016284",
            "Sort": "0",
            "Name_EN": "VolgaKamazAutoservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78442265122'>+7 8442 26-51-22<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "308",
            "Name": "Нейс ЮГ",
            "CityID": "2",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78633030090'>+7 (863) 303-00-90<a>",
            "Link": "www.man-rostov.ru",
            "Coords": "47.3069,39.6502",
            "Sort": "0",
            "Name_EN": "Neis YUG",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78633030090'>+7 (863) 303-00-90<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "307",
            "Name": "Ферронордик Машины",
            "CityID": "79",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78182635071'>+7 (8182) 63-50-71<a>",
            "Link": "https://www.ferronordic.ru",
            "Coords": "64.444209228074,40.603127051589915",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78182635071'>+7 (8182) 63-50-71<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "306",
            "Name": "Волга Трак Сервис",
            "CityID": "45",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78172510101'>+7 (8172) 51-01-01<a>",
            "Link": "https://www.xn------5cdbciebdhaoh0c2aml8bmc6aejner.xn--p1ai",
            "Coords": "48.77210567304427,44.462815885913834",
            "Sort": "0",
            "Name_EN": "Volga Truck Services",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78172510101'>+7 (8172) 51-01-01<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "304",
            "Name": "АвтоБулл",
            "CityID": "21",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78123257070'>+7 (812) 325-70-70<a>",
            "Link": "https://autobull.ru",
            "Coords": "59.781535, 30.439102",
            "Sort": "0",
            "Name_EN": "AutoBull",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78123257070'>+7 (812) 325-70-70<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "131",
            "Name": "ЯрТракСервис",
            "CityID": "50",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74852672737'>+ 7(4852) 67-27-37<a>",
            "Link": "https://www.ts76.ru",
            "Coords": "57.659120881936744,39.80849287301637",
            "Sort": "0",
            "Name_EN": "Yartrakservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74852672737'>+ 7(4852) 67-27-37<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "132",
            "Name": "ООО «Евросибтрак»",
            "CityID": "55",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73812217715'>+7 (3812) 21-77-15<a>",
            "Link": "https://www.mercedes-omsk.com",
            "Coords": "54.95487448839061,73.27486227976216",
            "Sort": "0",
            "Name_EN": "LLC Evrosibtrak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73812362655'>&lt;a href=&quot;tel:+73812217715&quot;&gt;+7 (3812) 21-77-15&lt;a&gt;<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "133",
            "Name": "ООО «СибТракСкан»",
            "CityID": "54",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833635600'>+7 (383) 363-56-00<a>",
            "Link": "https://www.sibscan.ru",
            "Coords": "54.96648823935097,82.80954421230307",
            "Sort": "0",
            "Name_EN": "LLC Sibtrakskan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833635600'>+7 (383) 363-56-00<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "305",
            "Name": "Рентрак-Сервис",
            "CityID": "21",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78123297329'>+7 (812) 329-73-29<a>",
            "Link": "https://axis-trucks.ru",
            "Coords": "59.90329106420649,30.40103749999996",
            "Sort": "0",
            "Name_EN": "Rentrak Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78123297329'>+7 (812) 329-73-29<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "136",
            "Name": "ООО «Оренбург- СканСервис»",
            "CityID": "84",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73532300086'>+7 (3532) 30 00 86<a>",
            "Link": "https://www.orenscania.ru",
            "Coords": "51.792754635009935,55.15728489881135",
            "Sort": "0",
            "Name_EN": "LLC Orenburg-Skanservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73532300086'>+7 (3532) 30 00 86<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "303",
            "Name": "ЯрТракСервис",
            "CityID": "50",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74852672737'>+ 7(4852) 67-27-37<a>",
            "Link": "https://www.ts76.ru",
            "Coords": "57.659120881936744,39.80849287301637",
            "Sort": "0",
            "Name_EN": "Yartrakservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74852672737'>+ 7(4852) 67-27-37<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "302",
            "Name": "Фирма ПИК",
            "CityID": "138",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +74732204615'>+7 (4732) 20 43 95<a>",
            "Link": "https://www.pik-avto.com",
            "Coords": "51.646892450114194,39.29326827241613",
            "Sort": "0",
            "Name_EN": "Firm PIC",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +74732204615'>+7 (4732) 20 43 95<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "301",
            "Name": "Автоспеццентр",
            "CityID": "155",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74922373369'>+7 (4922) 37-33-69<a>",
            "Link": "https://www.ascmaz.ru",
            "Coords": "56.09716876362076,40.16532449999997",
            "Sort": "0",
            "Name_EN": "Avtospetstsentr",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74922373369'>+7 (4922) 37-33-69<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "300",
            "Name": "КАМАЗ центр",
            "CityID": "101",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74722270641'>+7 (4722) 27-06-41<a>",
            "Link": "https://www.kamazcenter.ru",
            "Coords": "50.618625150876646,36.56282050859822",
            "Sort": "0",
            "Name_EN": "KAMAZ Center",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74722270641'>+7 (4722) 27-06-41<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "299",
            "Name": "Гермес",
            "CityID": "54",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833566165'>+7 (383) 356-61-65<a>",
            "Link": "https://www.germes.biz",
            "Coords": "54.941127480137446,82.8237598214264",
            "Sort": "0",
            "Name_EN": "Hermes",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833566165'>+7 (383) 356-61-65<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "108",
            "Name": "ООО «Кессборер»",
            "CityID": "106",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78005505847'>8 800 550 58 47<a>",
            "Link": "https://www.kaessbohrer.com",
            "Coords": "54.476314464017996,37.69835454099205",
            "Sort": "0",
            "Name_EN": "LLC Kessborer",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78005505847'>8 800 550 58 47<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "109",
            "Name": "ООО «БАВ-Движение»",
            "CityID": "78",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73512689110'>+7(351)268-91-10<a>",
            "Link": "https://www.baw-motion.ru",
            "Coords": "55.15905304231823,61.48830744600179",
            "Sort": "0",
            "Name_EN": "LLC BAV-Dvizheniye",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73512689110'>+7(351)268-91-10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "298",
            "Name": "Уралтехцентр",
            "CityID": "43",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79193695662'>+7 (919) 369-56-62<a>",
            "Link": "https://www.wabco-knorr.ru",
            "Coords": "56.91331544637636,60.77579718717191",
            "Sort": "0",
            "Name_EN": "Uraltechcenter",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79193695662'>+7 (919) 369-56-62<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "111",
            "Name": "ООО «Омегаскан»",
            "CityID": "64",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73472242832'>+ 7(347)224-28-32<a>",
            "Link": "https://www.alfascan.ru",
            "Coords": "54.65757107716651,55.699804182555276",
            "Sort": "0",
            "Name_EN": "LLC Omegaskan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73472242832'>+ 7(347)224-28-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "297",
            "Name": "Грифон",
            "CityID": "2",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78633030077'>+7 (863) 303-00-77<a>",
            "Link": "https://www.grifon.mercedes-benz-partner.rurudesktoptrucks.html",
            "Coords": "47.12004557430816,39.85989299999995",
            "Sort": "0",
            "Name_EN": "Grifon",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78633030077'>+7 (863) 303-00-77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "296",
            "Name": "Кавказ Автосервис",
            "CityID": "49",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78792260513'>+7 (87922) 6-05-13<a>",
            "Link": "https://www.dealer.volvotrucks.rukavkazautoservicehome.html",
            "Coords": "44.18511662112075,43.132127733135206",
            "Sort": "0",
            "Name_EN": "CAUCASUS Auto Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78792260513'>+7 (87922) 6-05-13<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "229",
            "Name": "ООО &quot;БайкалАвтоТрак&quot;",
            "CityID": "146",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78003335015'>8 800 333-50-15<a>",
            "Link": "https://www.baikalautotruck.ru",
            "Coords": "51.83897646209983,107.50484964460189",
            "Sort": "0",
            "Name_EN": "OOO &quot;Baykalavtotrak&quot;",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78003335015'>8 800 333-50-15<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "295",
            "Name": "Компания Альфа",
            "CityID": "47",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +78552778282'>+7 (8552) 77-82-82<a>",
            "Link": "https://www.alfascan.ru",
            "Coords": "55.65846614121952,52.324753818454674",
            "Sort": "0",
            "Name_EN": "Company Alfa",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +78552778282'>+7 (8552) 77-82-82<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "294",
            "Name": "Астон-Сервис",
            "CityID": "80",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +73422501698'>+7 (342) 250-16-98<a>",
            "Link": "https://isuzu-perm.ru",
            "Coords": "58.03509867974697,55.8419335724219",
            "Sort": "0",
            "Name_EN": "Aston Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +73422501698'>+7 (342) 250-16-98<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "293",
            "Name": "Балтранс",
            "CityID": "113",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +78452799994'>+7 (8452) 79-99-94<a>",
            "Link": "https://www.saratovscan.ru",
            "Coords": "51.67804369862938,45.98659199999997",
            "Sort": "0",
            "Name_EN": "Baltrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +78452799994'>+7 (8452) 79-99-94<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "121",
            "Name": "Ферронордик Машины",
            "CityID": "3",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79853002697'>+7 (985) 300 26 97<a>",
            "Link": "https://www.ferronordic.ru",
            "Coords": "55.88151218372237,37.43299323743435",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79853002697'>+7 (985) 300 26 97<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "292",
            "Name": "ВологдаСкан",
            "CityID": "45",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +78172519191'>+7 (8172) 51-91-91<a>",
            "Link": "https://www.vologdascan.ru",
            "Coords": "59.203484404890915,39.824063323417576",
            "Sort": "0",
            "Name_EN": "VologdaSkan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +78172519191'>+7 (8172) 51-91-91<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "291",
            "Name": "НБИ Транспорт Сервис",
            "CityID": "40",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +78162963030'>+7 (8162) 96-30-30<a>",
            "Link": "https://www.nbits.ru",
            "Coords": "58.569694409885685,31.254645236354257",
            "Sort": "0",
            "Name_EN": "NBI Transport Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +78162963030'>+7 (8162) 96-30-30<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "124",
            "Name": "ОАО «ВОЗМ»",
            "CityID": "81",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+77115368768'>+7 (711) 536 87 68<a>",
            "Link": "https://www.steelbear.info",
            "Coords": "56.366045048955144,30.572417432540906",
            "Sort": "0",
            "Name_EN": "JSC VOZM",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+77115368768'>+7 (711) 536 87 68<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "104",
            "Name": "ООО «Альтернатива групп»",
            "CityID": "76",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73462556456'>+7 (3462) 556-456<a>",
            "Link": "https://www.agp-co.ru",
            "Coords": "61.28564515684694,73.39093860372003",
            "Sort": "0",
            "Name_EN": "LLC Alternativa group",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73462556456'>+7 (3462) 556-456<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "290",
            "Name": "РязаньСкан",
            "CityID": "52",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74912500010'>+7 (491) 250 00 10<a>",
            "Link": "https://www.ryazanscan.ru",
            "Coords": "54.600848194496386,39.76816028605265",
            "Sort": "0",
            "Name_EN": "RyazanSkan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74912500010'>+7 (491) 250 00 10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "289",
            "Name": "Легат-Сервис",
            "CityID": "3",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79152970661'>+7 (915) 297-06-61<a>",
            "Link": "https://www.legate-servis.ru",
            "Coords": "55.28216812774678,37.854015054836694",
            "Sort": "0",
            "Name_EN": "Legat-Servis",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79152970661'>+7 (915) 297-06-61<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "288",
            "Name": "Иларавто",
            "CityID": "3",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957856264'>+7 (495) 785-62-64<a>",
            "Link": "https://ilarauto.ru",
            "Coords": "55.56845831511378,35.52792511399537",
            "Sort": "0",
            "Name_EN": "Ilaravto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957856264'>+7 (495) 785-62-64<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "31",
            "Name": "ООО «ИВ-Сервис»",
            "CityID": "21",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<div class='otstup'>тел.: <a href='tel:+78126406464'>+7 (812) 640-64-64<a><div>",
            "Link": "https://www.iv-service.ru",
            "Coords": "59.7641779263552,30.481146510445914",
            "Sort": "0",
            "Name_EN": "LLC IV-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<div class='otstup'>тел.: <a href='tel:+78126406464'>+7 (812) 640-64-64<a><div>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "287",
            "Name": "ООО &quot;Атриум&quot;",
            "CityID": "83",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74232543545'>+7 (423) 254-35-45<a>",
            "Link": "https://www.спецремсервис.рф",
            "Coords": "43.101682933033054,131.89952626900964",
            "Sort": "0",
            "Name_EN": "LLC Atrium",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74232543545'>+7 (423) 254-35-45<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "286",
            "Name": "Транзит",
            "CityID": "66",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73953314577'>+7 (3953) 31 45 77<a>",
            "Link": "56.28100144922924,101.86479981906479",
            "Coords": "",
            "Sort": "0",
            "Name_EN": "Transit",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73953314577'>+7 (3953) 31 45 77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "285",
            "Name": "СибТракЦентр",
            "CityID": "77",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73852223333'>+7 (3852) 22 33 33<a>",
            "Link": "https://www.stc22.ru",
            "Coords": "53.38362055282547,83.77241292394254",
            "Sort": "0",
            "Name_EN": "SibTrakCenter",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73852223333'>+7 (3852) 22 33 33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "35",
            "Name": "ИП Черникова",
            "CityID": "85",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<div class='otstup'>тел.: <a href='tel:+7495980045'>+7 (495) 980-04-56<a><div>",
            "Link": "",
            "Coords": "52.9278267869815,36.02946749999994",
            "Sort": "0",
            "Name_EN": "IP Chernikova",
            "TextShort_EN": "",
            "TextFull_EN": "<div class='otstup'>tel.: <a href='tel:+74959800456'>+7 (495) 980-04-56<a><div>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "284",
            "Name": "Еврофура",
            "CityID": "61",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73912216070'>+7 (391) 221 60 70<a>",
            "Link": "https://eurofura.net",
            "Coords": "56.04585358358321,92.84843187301631",
            "Sort": "0",
            "Name_EN": "Eurofura",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73912216070'>+7 (391) 221 60 70<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "283",
            "Name": "ГринАвто",
            "CityID": "55",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73812729015'>+7 (381) 272 90 15<a>",
            "Link": "",
            "Coords": "54.998598713649166,73.1958221362457",
            "Sort": "0",
            "Name_EN": "GreenAuto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73812729015'>+7 (381) 272 90 15<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "281",
            "Name": "Сириус",
            "CityID": "54",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833632428'>+7 (383) 363 24 28<a>",
            "Link": "",
            "Coords": "54.940813467084126,82.82418629265979",
            "Sort": "0",
            "Name_EN": "Sirius",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833632428'>+7 (383) 363 24 28<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "282",
            "Name": "Тарна",
            "CityID": "54",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833084096'>+7 (383) 308 40 96<a>",
            "Link": "",
            "Coords": "54.96379687200917,82.85258044973752",
            "Sort": "0",
            "Name_EN": "Tarn",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833084096'>+7 (383) 308 40 96<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "280",
            "Name": "ООО «Альтернатива групп»",
            "CityID": "76",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73462224427'>+7 (3462) 22 44 27<a>",
            "Link": "https://www.agp-co.ru",
            "Coords": "61.28564515684694,73.39093860372003",
            "Sort": "0",
            "Name_EN": "LLC Alternativa group",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73462224427'>+7 (3462) 22 44 27<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "41",
            "Name": "ООО «ГлобалТракСеврвис» Выборг",
            "CityID": "42",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78127022632'>+7 (812) 702-26-32<a>",
            "Link": "https://www.gt-man.ru",
            "Coords": "60.750470063068526,28.65294249999999",
            "Sort": "0",
            "Name_EN": "LLC Globaltraksevrvis Vyborg",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78127022632'>+7 (812) 702-26-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "43",
            "Name": "ООО «ГлобалТракСервис» Екатеринбург",
            "CityID": "43",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+ 73432786007'>+ 7 (343) 278-60-07<a>",
            "Link": "https://www.mercedestruck.ru",
            "Coords": "56.736077929686054,60.72523356745909",
            "Sort": "0",
            "Name_EN": "LLC Globaltrakservice Yekaterinburg",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+ 73432786007'>+ 7 (343) 278-60-07<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "44",
            "Name": "ООО «ГлобалТракСервис» Ростов-на-Дону",
            "CityID": "44",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78632001772'>+7 (863) 200-17-72<a>",
            "Link": "https://www.gt-mercedes.ru",
            "Coords": "47.282465459816926,39.83350638426959",
            "Sort": "0",
            "Name_EN": "LLC Globaltrakservice Rostov-on-Don",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78632001772'>+7 (863) 200-17-72<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "279",
            "Name": "Ферронордик Машины",
            "CityID": "154",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79126121429'>+7 (912) 612 14 29<a>",
            "Link": "https://www.ferronordic.ru",
            "Coords": "66.07988625658388,76.59821645215742",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79126121429'>+7 (912) 612 14 29<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "46",
            "Name": "ООО «ВологдаСкан»",
            "CityID": "45",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78172519191'>+7 (8172) 51-91-91<a>",
            "Link": "https://www.vologdascan.ru",
            "Coords": "59.203554565108576,39.8234034999999",
            "Sort": "0",
            "Name_EN": "LLC Vologdaskan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78172519191'>+7 (8172) 51-91-91<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "278",
            "Name": "КурганСкан",
            "CityID": "147",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73522643888'>+7 (3522) 643-888<a>",
            "Link": "https://www.kurganscan.ru",
            "Coords": "55.46403373479791,65.13132869507118",
            "Sort": "0",
            "Name_EN": "KurganScan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73522643888'>+7 (3522) 643-888<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "48",
            "Name": "ООО «Компания Альфа»",
            "CityID": "47",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78552772222'>+7 (8552) 772-222<a>",
            "Link": "https://www.alfascan.ru",
            "Coords": "55.65841306908396,52.32443999999995",
            "Sort": "0",
            "Name_EN": "LLC Company Alpha",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78552772222'>+7 (8552) 772-222<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "49",
            "Name": "ООО «Зубр»",
            "CityID": "48",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79275100809'>+7 (927) 510-08-09<a>",
            "Link": "https://www.sto-zubr.ru",
            "Coords": "48.78026162158332,44.49084988161462",
            "Sort": "0",
            "Name_EN": "LLC Zubr",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79275100809'>+7 (927) 510-08-09<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "276",
            "Name": "Молния",
            "CityID": "78",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73512110005'>+7 (351) 211-00-05<a>",
            "Link": "https://www.man-chel.ru",
            "Coords": "55.002210409352415,61.129718819118494",
            "Sort": "0",
            "Name_EN": "Molniya",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73512110005'>+7 (351) 211-00-05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "51",
            "Name": "ООО «Серпри-Авто»",
            "CityID": "3",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957125654'>+7 (495) 712-56-54<a>",
            "Link": "https://www.serpriavto.ru",
            "Coords": "55.53233508046838,37.57351578406142",
            "Sort": "0",
            "Name_EN": "LLC Serpri-Avto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957125654'>+7 (495) 712-56-54<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "277",
            "Name": "БАВ-движение",
            "CityID": "78",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73512689110'>+7(351)268-91-10<a>",
            "Link": "https://www.baw-motion.ru",
            "Coords": "55.15905304231823,61.48830744600179",
            "Sort": "0",
            "Name_EN": "BAV-Dvizheniye",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73512689110'>+7(351)268-91-10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "275",
            "Name": "Молния",
            "CityID": "78",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73512110005'>+7 (351) 211-00-05<a>",
            "Link": "https://www.man-chel.ru",
            "Coords": "55.002210409352415,61.129718819118494",
            "Sort": "0",
            "Name_EN": "Molniya",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73512110005'>+7 (351) 211-00-05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "274",
            "Name": "ООО &quot;УралЭкоСервисТранс&quot;",
            "CityID": "43",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Link": "https://www.uest.ru",
            "Coords": "56.87293174604755,60.6572366404026",
            "Sort": "0",
            "Name_EN": "LLC UralEcoServiceTrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "273",
            "Name": "ЕкатеринбургСкан",
            "CityID": "43",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73432366145'>+7 343 236-61-45<a>",
            "Link": "https://www.ekaterinburgscan.ru",
            "Coords": "56.872269278392636,60.659220442698775",
            "Sort": "0",
            "Name_EN": "YekaterinburgScan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73432366145'>+7 343 236-61-45<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "272",
            "Name": "КлючАвтоТрак КМВ",
            "CityID": "49",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78792297777'>+7 (87922) 9 77 77<a>",
            "Link": "https://www.dealers.mercedes-benz.rukmv-truck",
            "Coords": "44.21640489763995,43.076238601455664",
            "Sort": "0",
            "Name_EN": "KeyAutoTrack  KMW",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78792297777'>+7 (87922) 9 77 77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "271",
            "Name": "Восток-3",
            "CityID": "112",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78443531313'>+7 (844) 353-13-13<a>",
            "Link": "https://www.vostok-3.ru",
            "Coords": "48.75828900214992,44.8365887625655",
            "Sort": "0",
            "Name_EN": "East-3",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78443531313'>+7 (844) 353-13-13<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "270",
            "Name": "ФургонМастер",
            "CityID": "4",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79284587007'>+7 (928) 458 70 07<a>",
            "Link": "https://www.furgonmaster.ru",
            "Coords": "45.48632559226897,38.662782639260314",
            "Sort": "0",
            "Name_EN": "WagonMaster",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79284587007'>+7 (928) 458 70 07<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "269",
            "Name": "Скания Сервис",
            "CityID": "57",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78622988334'>+7 (8622) 98 83 34<a>",
            "Link": "https://www.scania.com",
            "Coords": "43.45010382239365,39.9178646018523",
            "Sort": "0",
            "Name_EN": "Scania Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78622988334'>+7 (8622) 98 83 34<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "268",
            "Name": "Ростов Трак Сервис",
            "CityID": "2",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78002503322'>+7 (863) 333-36-03<a>",
            "Link": "https://www.dealer.volvotrucks.rurostovtruckservicehome.html",
            "Coords": "47.11054544420193,39.838298813467496",
            "Sort": "0",
            "Name_EN": "Rostov Truck Services",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002503322'>+7 (863) 333-36-03<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "62",
            "Name": "ООО «СТС Сервис»",
            "CityID": "3",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74997530285'>+7 (499) 753-02-85<a>",
            "Link": "https://www.sts-service.ru",
            "Coords": "55.66355308466011,37.89314433068848",
            "Sort": "0",
            "Name_EN": "LLC STS Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74997530285'>+7 (499) 753-02-85<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "267",
            "Name": "Оренбург-СканСервис",
            "CityID": "84",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73532300046'>+7 (353) 230 00 46<a>",
            "Link": "https://www.orenscan.ru",
            "Coords": "51.79281699824222,55.15716488573238",
            "Sort": "0",
            "Name_EN": "Orenburg-ScanService",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73532300046'>+7 (353) 230 00 46<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "266",
            "Name": "Лидер Трак",
            "CityID": "47",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78552449593'>+7 (8552) 44 95 93<a>",
            "Link": "",
            "Coords": "55.67752513149074,52.4658570889549",
            "Sort": "0",
            "Name_EN": "Leader Track",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78552449593'>+7 (8552) 44 95 93<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "265",
            "Name": "Казань-Шинторг",
            "CityID": "64",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78003331700'>+7 (800) 333 17 00<a>",
            "Link": "https://www.kazan-shintorg.com",
            "Coords": "54.67238557340071,55.78360377976215",
            "Sort": "0",
            "Name_EN": "Kazan-Shintorg",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78003331700'>+7 (800) 333 17 00<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "264",
            "Name": "Тиропанефтранс",
            "CityID": "51",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78313278640'>+7 (8313) 27 86 40<a>",
            "Link": "https://www.tnt-nn.ru",
            "Coords": "56.29931124200404,43.591489343585906",
            "Sort": "0",
            "Name_EN": "Tiropaneftrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78313278640'>+7 (8313) 27 86 40<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "263",
            "Name": "Приволжье-ТрансСервис",
            "CityID": "62",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78312808444'>+7 (831) 280 84 44<a>",
            "Link": "https://www.daf-nn.ru",
            "Coords": "56.335458043623824,43.80920108035661",
            "Sort": "0",
            "Name_EN": "Privolzhye-TransServis",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78312808444'>+7 (831) 280 84 44<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "262",
            "Name": "Трак Центр",
            "CityID": "152",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78007001616'>+7 (800) 700 16 16<a>",
            "Link": "https://www.truck-center.ru",
            "Coords": "55.814916, 52.104845",
            "Sort": "0",
            "Name_EN": "Truck Center",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78007001616'>+7 (800) 700 16 16<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "261",
            "Name": "СЭР-Авто",
            "CityID": "39",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78432272703'>+7 (843) 227-27-03<a>",
            "Link": "https://www.ser-auto.ru",
            "Coords": "55.78971673748983,49.104975546627024",
            "Sort": "0",
            "Name_EN": "SIR-Auto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78432272703'>+7 (843) 227-27-03<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "71",
            "Name": "ООО «Трак Центр» Уфа",
            "CityID": "64",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73472936595'>+7 (347) 293-65-95<a>",
            "Link": "https://www.truck-center.ru",
            "Coords": "54.738247074897124,56.28050975233473",
            "Sort": "0",
            "Name_EN": "LLC Trak Centre Ufa",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73472936595'>+7 (347) 293-65-95<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "260",
            "Name": "Дженерал Тракс Груп",
            "CityID": "114",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78482611550'>+7 (8482) 611 550<a>",
            "Link": "https://www.daf-tlt.ru",
            "Coords": "53.516474, 49.591969",
            "Sort": "0",
            "Name_EN": "General Trax Group",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78482611550'>+7 (8482) 611 550<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "259",
            "Name": "Техник КНГ",
            "CityID": "71",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79062186132'>+7 (906) 218-61-32<a>",
            "Link": "",
            "Coords": "54.65050706788674,20.54291677027238",
            "Sort": "0",
            "Name_EN": "Technician KNG",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79062186132'>+7 (906) 218-61-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "75",
            "Name": "ООО «Хабавтоприцеп»",
            "CityID": "63",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74212418202'>+7 (4212) 418-202<a>",
            "Link": "",
            "Coords": "48.46970004452895,135.16956173743426",
            "Sort": "0",
            "Name_EN": "LLC Habavtopritsep",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74212418202'>+7 (4212) 418-202<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "258",
            "Name": "ТехПортАвтоСервис-Петрозаводск",
            "CityID": "107",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78142569888'>+7 (8142) 569 888<a>",
            "Link": "",
            "Coords": "61.80485633254533,34.282799949073784",
            "Sort": "0",
            "Name_EN": "",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78142569888'>+7 (8142) 569 888<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ООО «Техтранс»",
            "CityID": "64",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Link": "https://www.ttufa.com",
            "Coords": "54.68640004663468,55.798221351166674",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "257",
            "Name": "ВологдаСкан",
            "CityID": "45",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78172523030'>+7 (8172) 52 30 30<a>",
            "Link": "https://www.vologdascan.ru",
            "Coords": "59.20348853196654,39.82378169147101",
            "Sort": "0",
            "Name_EN": "VologdaSkan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78172523030'>+7 (8172) 52 30 30<a>",
            "Official": "0",
            "Map": "0"
        },
        {
            "CenterID": "256",
            "Name": "Промтранс",
            "CityID": "40",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79217300027'>+7 (921) 730 00 27<a>",
            "Link": "https://www.promtrans.nov.ru",
            "Coords": "58.56965922015132,31.254610004299142",
            "Sort": "0",
            "Name_EN": "Promtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79217300027'>+7 (921) 730 00 27<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "255",
            "Name": "ТРИА",
            "CityID": "2",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78123050305'>+7 (812) 305 03 05<a>",
            "Link": "https://www.tctria.ru",
            "Coords": "59.667304670257124,30.534743705551946",
            "Sort": "0",
            "Name_EN": "TRIA",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78123050305'>+7 (812) 305 03 05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "82",
            "Name": "ООО «МСервис»",
            "CityID": "61",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73912997477'>+7 (391) 299-74-77<a>",
            "Link": "https://www.24maz.ru",
            "Coords": "56.076993065674614,92.9286697589302",
            "Sort": "0",
            "Name_EN": "LLC Mservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73912997477'>+7 (391) 299-74-77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "254",
            "Name": "Юнайтед Сервис",
            "CityID": "135",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78127405835'>+7 (812) 740 58 35<a>",
            "Link": "https://www.united24service.ru",
            "Coords": "59.81525735600978,30.39851135715887",
            "Sort": "0",
            "Name_EN": "United Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78127405835'>+7 (812) 740 58 35<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "84",
            "Name": "ООО «Липецккомтранс»",
            "CityID": "68",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74742358200'>+7 (4742) 358-200<a>",
            "Link": "www.scanlipetsk.ru",
            "Coords": "52.658046394289045,39.613804846791346",
            "Sort": "0",
            "Name_EN": "LLC Lipetskkomtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74742358200'>+7 (4742) 358-200<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "253",
            "Name": "А.К.Т.",
            "CityID": "21",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78126400064'>+7 (812) 640 00 64<a>",
            "Link": "https://iveco-akt.ru",
            "Coords": "60.1356225774024,30.2123500214958",
            "Sort": "0",
            "Name_EN": "AKT",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78126400064'>+7 (812) 640 00 64<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "86",
            "Name": "ООО «Аргос Скан»",
            "CityID": "69",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74724196316'>+7 (47241) 963-16<a>",
            "Link": "https://www.argosscan.ru",
            "Coords": "51.28763130027099,37.56599897700605",
            "Sort": "0",
            "Name_EN": "LLC Argos Skan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74724196316'>+7 (47241) 963-16<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "252",
            "Name": "МАН-Вектор",
            "CityID": "138",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74732202045'>+7 (473) 220 20 45<a>",
            "Link": "",
            "Coords": "51.64194919576589,39.15975937731546",
            "Sort": "0",
            "Name_EN": "MAN-Vector",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74732202045'>+7 (473) 220 20 45<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "251",
            "Name": "ИП Лернер",
            "CityID": "138",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74732007373'>+7 (473) 200 73 73<a>",
            "Link": "https://www.man-vrn.ru",
            "Coords": "51.49826349725668,39.5644140226652",
            "Sort": "0",
            "Name_EN": "IP Lerner Alexander",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74732007373'>+7 (473) 200 73 73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "250",
            "Name": "Оскол Трак",
            "CityID": "133",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79300873599'>+7 (930) 087-35-99<a>",
            "Link": "",
            "Coords": "51.35076257248698,37.846561999999956",
            "Sort": "0",
            "Name_EN": "Oskol Truck",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79300873599'>+7 (930) 087-35-99<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "91",
            "Name": "ООО «Галеон»",
            "CityID": "54",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833632468'>+7 (383) 363-24-68<a>",
            "Link": "",
            "Coords": "54.941713694615316,82.82248494207474",
            "Sort": "0",
            "Name_EN": "LLC Galeon",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833632468'>+7 (383) 363-24-68<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "249",
            "Name": "Центр-сервис Западный",
            "CityID": "130",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74812250010'>+7 (4812) 25 00 10<a>",
            "Link": "https://www.dealer.volvotrucks.rucentreservicezapadnyihome.html",
            "Coords": "54.84604680686784,31.848180584655726",
            "Sort": "0",
            "Name_EN": "Center-service Western",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74812250010'>+7 (4812) 25 00 10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "93",
            "Name": "ООО «Тверьстроймаш»",
            "CityID": "73",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74822736600'>+7 (4822) 736-600<a>",
            "Link": "https://www.tverstroymash.ru",
            "Coords": "56.83712006785745,35.798295499999924",
            "Sort": "0",
            "Name_EN": "LLC Tverstroymash",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74822736600'>+7 (4822) 736-600<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "248",
            "Name": "ПитСтоп",
            "CityID": "50",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74852670549'>+7 (485) 267-05-49<a>",
            "Link": "https://www.xn--76-6kc6cffeeggh.xn--p1ai#",
            "Coords": "57.59542728916291,39.80062863988115",
            "Sort": "0",
            "Name_EN": "Pit stop",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74852670549'>+7 (485) 267-05-49<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "246",
            "Name": "ТрансМан",
            "CityID": "143",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74959923773'>+7 (495) 992 37 73<a>",
            "Link": "https://www.transman.ru",
            "Coords": "55.92484225979361,36.87999380919265",
            "Sort": "0",
            "Name_EN": "TransMan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74959923773'>+7 (495) 992 37 73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "247",
            "Name": "Атлант-Сервис",
            "CityID": "3",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74996535673'>+7 (499) 653-56-73<a>",
            "Link": "https://www.atlant-service.ru",
            "Coords": "55.49154297791816,37.566918826389305",
            "Sort": "0",
            "Name_EN": "Atlant-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74996535673'>+7 (499) 653-56-73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "245",
            "Name": "Скания Сервис",
            "CityID": "3",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957875001'>+7 (495) 787 50 01<a>",
            "Link": "https://www.scania.com",
            "Coords": "55.606175808063824,37.02202696875193",
            "Sort": "0",
            "Name_EN": "Scania Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957875001'>+7 (495) 787 50 01<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "244",
            "Name": "Серпри Авто",
            "CityID": "3",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957125654'>+7 (495) 712 56 54<a>",
            "Link": "https://serpriavto.ru",
            "Coords": "55.53232443172492,37.5736056380634",
            "Sort": "0",
            "Name_EN": "Surprise Auto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957125654'>+7 (495) 712 56 54<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "243",
            "Name": "Иларавто",
            "CityID": "3",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957852000'>+7 (495) 785-20-00<a>",
            "Link": "https://ilarauto.ru",
            "Coords": "55.56845831511378,35.52792511399537",
            "Sort": "0",
            "Name_EN": "Ilaravto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957852000'>+7 (495) 785-20-00<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "157",
            "Name": "ООО «Ульяновск-Скан»",
            "CityID": "139",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78422371064'> +7(8422) 37-10-64<a>",
            "Link": "https://www.ulyanscan.ru",
            "Coords": "54.360627, 48.646351",
            "Sort": "0",
            "Name_EN": "LLC Ulyanovsk-Skan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78422371064'> +7(8422) 37-10-64<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "158",
            "Name": "ООО Север-Скан АВТО",
            "CityID": "3",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74959940882'> +7 (495) 994-08-82<a>",
            "Link": "https://www.severscan.ru",
            "Coords": "56.074905, 37.136056",
            "Sort": "0",
            "Name_EN": "LLC Sever-Skan AVTO",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74959940882'> +7 (495) 994-08-82<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "159",
            "Name": "ООО «Сервис-Транс»",
            "CityID": "45",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78172539310'>+7 (8172) 539-310<a>",
            "Link": "https://www.str-volvo.ru",
            "Coords": "59.19621603360435,39.803626911045086",
            "Sort": "0",
            "Name_EN": "LLC Service-Trans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78172539310'>+7 (8172) 539-310<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "160",
            "Name": "ООО «Даф Сервис Москва»",
            "CityID": "140",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74959211114'> +7 (495) 921-11-14<a>",
            "Link": "https://www.vh-daf.ru",
            "Coords": "55.971149,37.471488",
            "Sort": "0",
            "Name_EN": "LLC Daf Service Moskva",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74959211114'> +7 (495) 921-11-14<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "162",
            "Name": "ООО «ТехПортАвтоСервис-Мурманск»",
            "CityID": "141",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78152210810'>+7(8152) 210-810<a>",
            "Link": "https://www.volvo.tpas.ru",
            "Coords": "68.888116, 33.070023",
            "Sort": "0",
            "Name_EN": "LLC Tekhportavtoservice-Murmansk",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78152210810'>+7(8152) 210-810<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "163",
            "Name": "ТракСервис",
            "CityID": "3",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956496499'> +7(495)649-649-9<a>",
            "Link": "",
            "Coords": "55.59938459422453, 37.74740150000001",
            "Sort": "0",
            "Name_EN": "Trakservis",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956496499'> +7(495)649-649-9<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "164",
            "Name": "ТракСервис",
            "CityID": "3",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956496499'>+7(495)649-649-9<a>",
            "Link": "",
            "Coords": "55.5738720041364, 37.633338000000016",
            "Sort": "0",
            "Name_EN": "Trakservis",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956496499'>+7(495)649-649-9<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "165",
            "Name": "Европарт",
            "CityID": "3",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74955003585'>+7(495) 500 3585<a>",
            "Link": "",
            "Coords": "55.57480050410018, 37.617334500000005",
            "Sort": "0",
            "Name_EN": "Evropart",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74955003585'>+7 (495) 500 3585<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "166",
            "Name": "Техпоставка",
            "CityID": "3",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74954243277'>+7(495) 424-3277<a>",
            "Link": "",
            "Coords": "55.62674127773333, 37.47190150000001",
            "Sort": "0",
            "Name_EN": "Tehpostavka",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74954243277'>+7(495) 424-3277<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "167",
            "Name": "Глобал Трак Сервис",
            "CityID": "86",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957396201'>+7 (495) 739-62-01<a>",
            "Link": "",
            "Coords": "56.00988927619406, 37.16415649999994",
            "Sort": "0",
            "Name_EN": "Global Truck Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957396201'>+7 (495) 739-62-01<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "168",
            "Name": "Компания ПРАМО",
            "CityID": "86",
            "TypeID": "51",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957396202'>+7 (495) 739 6202<a>",
            "Link": "",
            "Coords": "56.004745776200735, 37.18683049999995",
            "Sort": "0",
            "Name_EN": "Company PRAMO",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957396202'>+7 (495) 739 6202<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "169",
            "Name": "ООО &quot;ИЛАРАВТО&quot;",
            "CityID": "3",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957852010'>+7 (495) 785-20-10<a>",
            "Link": "https://www.iarauto.ru",
            "Coords": "55.914590199558965,37.58945220999526",
            "Sort": "0",
            "Name_EN": "LLC ILARAVTO",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957852010'>+7 (495) 785-20-10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "170",
            "Name": "Серпри-Авто М",
            "CityID": "3",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74959712182'>+7 (495) 971-2182<a>",
            "Link": "https://serpriavto.ru",
            "Coords": "55.532370278069386, 37.57343849999997",
            "Sort": "0",
            "Name_EN": "Serpri-Auto M",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74959712182'>+7 (495) 971-2182<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "171",
            "Name": "Сварз",
            "CityID": "3",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74992680066'>+7 (499) 268-00-66<a>",
            "Link": "",
            "Coords": "55.78849977707697, 37.69206049999994",
            "Sort": "0",
            "Name_EN": "SVARZ",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74992680066'>+7 (499) 268-00-66<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "172",
            "Name": "Глобал Трак Сервис",
            "CityID": "86",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957396201'>+7 (495) 739-62-01<a>",
            "Link": "https://gt-service.ru",
            "Coords": "56.00988927619406, 37.16415649999994",
            "Sort": "0",
            "Name_EN": "Global Truck Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957396201'>+7 (495) 739-62-01<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "173",
            "Name": "Восток Трак Сервис",
            "CityID": "59",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74952255575'>+7 (495) 225 5575<a>",
            "Link": "https://www.v-trucks.ruabout",
            "Coords": "55.66471527752928, 37.89172949999997",
            "Sort": "0",
            "Name_EN": "East Truck Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74952255575'>+7 (495) 225 5575<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "174",
            "Name": "Трак-Сервис Беседы",
            "CityID": "3",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956602912'>+7 (495) 660-29-12<a>",
            "Link": "https://www.truck-service.net",
            "Coords": "55.60679424739535, 37.79200699999996",
            "Sort": "0",
            "Name_EN": "Truck Service Conversations",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956602912'>+7 (495) 660-29-12<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "175",
            "Name": "МЗ ТОНАР",
            "CityID": "142",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74964148703'>+7 (4964) 14-87-03<a>",
            "Link": "https://www.tonar.info",
            "Coords": "55.705706277356086, 39.11285449999998",
            "Sort": "0",
            "Name_EN": "MZ TONAR",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74964148703'>+7 (4964) 14-87-03<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "176",
            "Name": "РУМОС-Комтранс",
            "CityID": "73",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74822589058'>+7(4822) 58-90-58<a>",
            "Link": "https://www.rumos-comtrans.ru",
            "Coords": "56.790092037350526, 35.90534299999994",
            "Sort": "0",
            "Name_EN": "RUMOS-Comtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74822589058'>+7(4822) 58-90-58<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "177",
            "Name": "Парнасавтокомплекс",
            "CityID": "21",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78124490589'>+7 (812) 449 05 89<a>",
            "Link": "https://www.pac-sto.ru",
            "Coords": "60.07178875720769, 30.376333499999987",
            "Sort": "0",
            "Name_EN": "Parnasavtokompleks",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78124490589'>+7 (812) 449 05 89<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "178",
            "Name": "Питер Бас Центр ",
            "CityID": "21",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78123310903'>+7 (812) 331-09-03<a>",
            "Link": "https://www.piterbus.com",
            "Coords": "60.06718225722266, 30.339718500000014",
            "Sort": "0",
            "Name_EN": "Peter Bass Center",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78123310903'>+7 (812) 331-09-03<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "179",
            "Name": "ИВ-Сервис",
            "CityID": "21",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78126406464'>+7 (812) 640-64-64<a>",
            "Link": "",
            "Coords": "59.76433175877799, 30.480861499999946",
            "Sort": "0",
            "Name_EN": "IV-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78126406464'>+7 (812) 640-64-64<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "180",
            "Name": "ИП Себейкин",
            "CityID": "71",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74012732009'>+7 (4012) 73-20-09<a>",
            "Link": "",
            "Coords": "54.65390128131722, 20.541092500000026",
            "Sort": "0",
            "Name_EN": "SP Sebeykin",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74012732009'>+7 (4012) 73-20-09<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "181",
            "Name": "Тиропанефтранс",
            "CityID": "51",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78313278650'>+7 (8313) 27-86-50<a>",
            "Link": "https://www.tnt-nn.ru",
            "Coords": "56.29934127498494, 43.59131550000001",
            "Sort": "0",
            "Name_EN": "Tiropaneftrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78313278650'>+7 (8313) 27-86-50<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "182",
            "Name": "НБИ Транспорт Сервис (Промтранс)",
            "CityID": "40",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78162940837'>+7 (8162) 940 837<a>",
            "Link": "",
            "Coords": "58.569597264844816, 31.25458049999997",
            "Sort": "0",
            "Name_EN": "NBI Transport Service (Promtrans)",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78162940837'>+7 (8162) 940 837<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "183",
            "Name": "Самара-Скан-Сервис",
            "CityID": "53",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78462787022'>+7 (846) 278 70 22<a>",
            "Link": "https://www.scania-center.ru",
            "Coords": "53.304291285842, 50.29261249999996",
            "Sort": "0",
            "Name_EN": "Samara-Scan-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78462787022'>+7 (846) 278 70 22<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "184",
            "Name": "КАВКАЗ Автосервис",
            "CityID": "134",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79624400207'>+7 (962) 440-02-07<a>",
            "Link": "https://www.kasmw.ru",
            "Coords": "44.185242299480144, 43.13208749999996",
            "Sort": "0",
            "Name_EN": "CAUCASUS Auto Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79624400207'>+7 (962) 440-02-07<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "185",
            "Name": "ИП Кирьянов А.А. Е.",
            "CityID": "43",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79193695662'>+7 (919) 369 5662<a>",
            "Link": "",
            "Coords": "56.86123477265159, 60.66860299999999",
            "Sort": "0",
            "Name_EN": "IP Kiryanov AA E",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79193695662'>+7 (919) 369 5662<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "186",
            "Name": "Коммерческий транспорт",
            "CityID": "78",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73517724496'>+7 (351) 772-44-96<a>",
            "Link": "",
            "Coords": "55.172835279465964, 61.478721499999985",
            "Sort": "0",
            "Name_EN": "Commercial",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73517724496'>+7 (351) 772-44-96<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "187",
            "Name": "Гермес",
            "CityID": "54",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+7383356-61-49'>+7 (383) 356-61-49<a>",
            "Link": "",
            "Coords": "54.94079928026665, 82.82404949999999",
            "Sort": "0",
            "Name_EN": "Hermes",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+7383356-61-49'>+7 (383) 356-61-49<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "188",
            "Name": "ЕВРОФУРА",
            "CityID": "61",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+739122216070'>+7 (3912) 221-60-70<a>",
            "Link": "https://eurofura.net",
            "Coords": "56.04585577602644, 92.8483764999999",
            "Sort": "0",
            "Name_EN": "Eurowaggon",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+739122216070'>+7 (3912) 221-60-70<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "189",
            "Name": "ИП Щербин",
            "CityID": "91",
            "TypeID": "52",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79146864092'>+7 (914) 686-40-92<a>",
            "Link": "",
            "Coords": "43.345881299199476, 132.13123650000006",
            "Sort": "0",
            "Name_EN": "SP Shcherbin",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79146864092'>+7 (914) 686-40-92<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "190",
            "Name": "ААА ТракСервис",
            "CityID": "3",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74955140558'>+7 (495) 514-05-58<a>",
            "Link": "https://www.man-ts.ru",
            "Coords": "55.833657276886214, 37.40290199999999",
            "Sort": "0",
            "Name_EN": "AAA Trakservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74955140558'>+7 (495) 514-05-58<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "191",
            "Name": "Техцентры VOLVO",
            "CityID": "3",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956601923'>+7 (495) 660-19-23<a>",
            "Link": "",
            "Coords": "55.9109217765483, 37.53903250000001",
            "Sort": "0",
            "Name_EN": "VOLVO technical centers",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956601923'>+7 (495) 660-19-23<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "192",
            "Name": "Кваттро-Сервис",
            "CityID": "3",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957753883'>+7 (495) 775-38-83<a>",
            "Link": "",
            "Coords": "55.72655277727303, 38.009327500000005",
            "Sort": "0",
            "Name_EN": "Kvattro-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957753883'>+7 (495) 775-38-83<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "193",
            "Name": "ТрансМан",
            "CityID": "143",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74959923773'>+7 (495) 992 37 73<a>",
            "Link": "https://www.transman.ru",
            "Coords": "55.92479427651213, 36.8800555",
            "Sort": "0",
            "Name_EN": "Transman",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74959923773'>+7 (495) 992 37 73<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "194",
            "Name": "Интертранссервис",
            "CityID": "3",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74955496690'>+7(495) 549 66 90<a>",
            "Link": "https://www.intertransservice.ru",
            "Coords": "55.55392810152981, 37.776874999999976",
            "Sort": "0",
            "Name_EN": "Intertransservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74955496690'>+7(495) 549 66 90<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "195",
            "Name": "СТС Трак Сервис",
            "CityID": "59",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74997530285'>+7(499) 753-02-85<a>",
            "Link": "https://www.ststruckservice.promportal.su",
            "Coords": "55.66359827751771, 37.8930585",
            "Sort": "0",
            "Name_EN": "STS Track Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74997530285'>+7(499) 753-02-85<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "196",
            "Name": "Ферронордик Машины",
            "CityID": "75",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956004333'>+7 (495) 600-43-33<a>",
            "Link": "https://www.ferronordic.ru",
            "Coords": "55.8413870688986,38.6514345",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956004333'>+7 (495) 600-43-33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "197",
            "Name": "Трак-Посад",
            "CityID": "75",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957758305'>+7 (495) 775-83-05<a>",
            "Link": "",
            "Coords": "55.84888752963922, 38.656195499999946",
            "Sort": "0",
            "Name_EN": "Trak-Posad",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957758305'>+7 (495) 775-83-05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "198",
            "Name": "Полярная Звезда",
            "CityID": "46",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956428646'>+7 (495) 642 8646<a>",
            "Link": "",
            "Coords": "56.17031977551352, 37.00195649999993",
            "Sort": "0",
            "Name_EN": "Pole star",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956428646'>+7 (495) 642 8646<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "199",
            "Name": "Полярная звезда",
            "CityID": "46",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74956428646'>+7(495)642-86-46<a>",
            "Link": "https://www.polar-star.ru",
            "Coords": "56.20197752294501,36.95447199999994",
            "Sort": "0",
            "Name_EN": "Polar Star",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74956428646'>+7(495)642-86-46<a>",
            "Official": "1",
            "Map": "1"
        },
        {
            "CenterID": "202",
            "Name": "Грузовой Автоцентр",
            "CityID": "50",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:pismaag@mail.ru'>pismaag@mail.ru<a>",
            "Link": "www.gras76.ru",
            "Coords": "57.6587, 39.8128",
            "Sort": "0",
            "Name_EN": "Cargo Сarcenter",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:pismaag@mail.ru'>pismaag@mail.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "203",
            "Name": "ИВ-Сервис",
            "CityID": "21",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:iveco@iv-service.ru'>iveco@iv-service.ru<a>",
            "Link": "www.iv-service.ru",
            "Coords": "59.7643, 30.4809",
            "Sort": "0",
            "Name_EN": "IB-Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:iveco@iv-service.ru'>iveco@iv-service.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "206",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "39",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:sto-kazan@truck-center.ru'>sto-kazan@truck-center.ru<a>",
            "Link": "www.truck-center.ru",
            "Coords": "55.7917,49.1309",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:sto-kazan@truck-center.ru'>sto-kazan@truck-center.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "205",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "40",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "sto-vnovgorod@truck-center.ru",
            "Link": "www.truck-service.ru",
            "Coords": "58.5711, 31.2625",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "sto-vnovgorod@truck-center.ru",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "207",
            "Name": "Авто Флот",
            "CityID": "80",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73422501105'>+7 (342) 250 11 05<a>",
            "Link": "www.man59.ru",
            "Coords": "58.0355, 55.8402",
            "Sort": "0",
            "Name_EN": "Auto Flot",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73422501105'>+7 (342) 250 11 05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "208",
            "Name": "Нейс ЮГ",
            "CityID": "2",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79282273372'>+7(928)227-33-72<a>",
            "Link": "www.man-rostov.ru",
            "Coords": "47.3069,39.6502",
            "Sort": "0",
            "Name_EN": "Neis YUG",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79282273372'>+7(928)227-33-72<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "209",
            "Name": "Грифон",
            "CityID": "2",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78633030777'>+7 (863) 303-00-77<a>",
            "Link": "https://www.grifon.mercedes-benz-partner.rurudesktoptrucks.html",
            "Coords": "47.12004557430816,39.85989299999995",
            "Sort": "0",
            "Name_EN": "Grifon",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78633030777'>+7 (863) 303-00-77<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "210",
            "Name": "Ферронордик Машины",
            "CityID": "4",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78612001530'>+7 (861) 200-15-30<a>",
            "Link": "https://www.ferronordic.ru",
            "Coords": "44.9513, 39.1132",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78612001530'>+7 (861) 200-15-30<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "211",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "4",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "sto-krasnodar@truck-center.ru",
            "Link": "www.truck-center.ru",
            "Coords": "45.0295, 39.1300",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "sto-krasnodar@truck-center.ru",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "212",
            "Name": "Кавказ Автосервис",
            "CityID": "49",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78007001616'>+7 800 700 16 16<a>",
            "Link": "https://www.dealer.volvotrucks.rukavkazautoservice",
            "Coords": "44.1852, 43.1321",
            "Sort": "0",
            "Name_EN": "Kavkaz Autoservice",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78007001616'>+7 800 700 16 16<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "213",
            "Name": "ООО &quot;УралЭкоСервисТранс&quot;",
            "CityID": "43",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Link": "https://www.uest.ru",
            "Coords": "56.87293174604755,60.6572366404026",
            "Sort": "0",
            "Name_EN": "LLC UralEcoServiceTrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "214",
            "Name": "Коммерческий Транспорт",
            "CityID": "78",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73517724496'>+7 (351) 772-44-96<a>",
            "Link": "www.kom-trans.ru",
            "Coords": "55.1090, 61.4082",
            "Sort": "0",
            "Name_EN": "Commercial carrier",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73517724496'>+7 (351) 772-44-96<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "215",
            "Name": "ТЭК Аврора",
            "CityID": "55",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "il.auto@mail.ru",
            "Link": "www.trucks.mercedes-benz.ru",
            "Coords": "54.9984,73.4735",
            "Sort": "0",
            "Name_EN": "TEK Avrora",
            "TextShort_EN": "",
            "TextFull_EN": "il.auto@mail.ru",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "216",
            "Name": "Восток Сервис Класс",
            "CityID": "61",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:vsk-daf@mail.ru'>vsk-daf@mail.ru<a>",
            "Link": "www.daf-krasnoyarsk.ru",
            "Coords": "56.0501, 92.8360",
            "Sort": "0",
            "Name_EN": "Vostok Service Klass",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:vsk-daf@mail.ru'>vsk-daf@mail.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "217",
            "Name": "Сиб Трак Центр",
            "CityID": "77",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:lochkov@impocar.ru'>lochkov@impocar.ru<a>",
            "Link": "www.stc22.ru",
            "Coords": "53.3836,83.7723",
            "Sort": "0",
            "Name_EN": "Sib Truck Centr",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:lochkov@impocar.ru'>lochkov@impocar.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "218",
            "Name": "Транзит",
            "CityID": "65",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73845297413'>+7(38452) 9-74-13<a>",
            "Link": "",
            "Coords": "54.4370, 86.4133",
            "Sort": "0",
            "Name_EN": "Tranzit",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73845297413'>+7(38452) 9-74-13<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "219",
            "Name": "Ферронордик Машины",
            "CityID": "63",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74212400710'>+7 (4212) 40 07 10<a>",
            "Link": "www.ferronordic.ru",
            "Coords": "48.5588,135.0675",
            "Sort": "0",
            "Name_EN": "Ferronordik Mashiny",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74212400710'>+7 (4212) 40 07 10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "220",
            "Name": "Прим Трак",
            "CityID": "91",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74232790297'>+7 (423) 279-02-97<a>",
            "Link": "https://www.primtruck.ru",
            "Coords": "43.32719615828367,132.08254224603266",
            "Sort": "0",
            "Name_EN": "Prim Truck",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74232790297'>+7 (423) 279-02-97<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "221",
            "Name": "Трак Сервис",
            "CityID": "144",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74162386003'>+7(4162)38-60-03<a>",
            "Link": "",
            "Coords": "50.2851,127.5150",
            "Sort": "0",
            "Name_EN": "Truck Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74162386003'>+7(4162)38-60-03<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "222",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "38",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "sto-tyumen@truck-center.ru",
            "Link": "www.truck-center.ru",
            "Coords": "57.1530,65.5343",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "sto-tyumen@truck-center.ru",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "223",
            "Name": "Рязань Скан",
            "CityID": "52",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74912500010'>+7 (491) 250 00 10<a>",
            "Link": "https://www.ryazanscan.ru",
            "Coords": "54.600801708325335,39.768282110450734",
            "Sort": "0",
            "Name_EN": "Ryazan Scan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74912500010'>+7 (491) 250 00 10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "224",
            "Name": "ТрейдТрак и Сервис",
            "CityID": "21",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='mailto:infonews@iveco-ptc.spb.ru'>infonews@iveco-ptc.spb.ru<a>",
            "Link": "www.iveco-ptc.spb.ru",
            "Coords": "59.8096, 30.1266",
            "Sort": "0",
            "Name_EN": "Treydtrak and Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='mailto:infonews@iveco-ptc.spb.ru'>infonews@iveco-ptc.spb.ru<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "225",
            "Name": "Самара Скан Сервис",
            "CityID": "53",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78462787022'>+7 (846) 278-70-22<a>",
            "Link": "https://center-scan.ru/company/contacts/",
            "Coords": "53.22323575138796,50.19193796627046",
            "Sort": "0",
            "Name_EN": "Samara Skan Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78462787022'>+7 (846) 278-70-22<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "226",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "145",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "sto-penza@truck-center.ru",
            "Link": "www.truck-center.ru",
            "Coords": "53.2345, 45.0136",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "sto-penza@truck-center.ru",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "227",
            "Name": "Альфа Скан",
            "CityID": "47",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78552778282'>+7(855)277-82-82<a>",
            "Link": "www.alfascan.ru",
            "Coords": "55.6584, 52.3244",
            "Sort": "0",
            "Name_EN": "Alfa Scan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78552778282'>+7(855)277-82-82<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "228",
            "Name": "Авто Трак",
            "CityID": "54",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "",
            "Link": "",
            "Coords": "54.9666, 82.8093",
            "Sort": "0",
            "Name_EN": "Auto Truck",
            "TextShort_EN": "",
            "TextFull_EN": "",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ООО &quot;Оскол Трак&quot;",
            "CityID": "133",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+747254444321'>+7 (4725) 444-321<a>",
            "Link": "https://www.oskol-man.ru",
            "Coords": "51.35066179757539,37.84662637301632",
            "Sort": "0",
            "Name_EN": "LLC Oskol Trak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+747254444321'>+7 (4725) 444-321<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "231",
            "Name": "ООО &quot;Большие детали&quot;",
            "CityID": "55",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78003334969'>8 800 333 49 69<a>",
            "Link": "https://www.trucksto.ru",
            "Coords": "54.86999041349907,73.29020301356115",
            "Sort": "0",
            "Name_EN": "LLC &quot;Big Details&quot;",
            "TextShort_EN": "",
            "TextFull_EN": "&lt;a href=&quot;tel:+78003334969&quot;&gt;8 800 333 49 69&lt;a&gt;",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "232",
            "Name": "КурганСкан",
            "CityID": "147",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73522643888'>+7 (3522) 643-888<a>",
            "Link": "https://www.kurganscan.ru",
            "Coords": "55.46403373479791,65.13132869507118",
            "Sort": "0",
            "Name_EN": "KurganScan",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73522643888'>+7 (3522) 643-888<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "233",
            "Name": "СибТрансКолд",
            "CityID": "54",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78005000798'>8 800 500 07 98<a>",
            "Link": "https://www.stcold.ru",
            "Coords": "54.94920398640123,82.91263235581971",
            "Sort": "0",
            "Name_EN": "SibTransKold",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78005000798'>8 800 500 07 98<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "234",
            "Name": "ООО &quot;Камион Сервис&quot;",
            "CityID": "148",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73412916950'>+7 (3412) 916-950<a>",
            "Link": "https://www.furacenter.ru",
            "Coords": "56.88530462302072,53.313579679901345",
            "Sort": "0",
            "Name_EN": "LLC &quot;Kamion Service&quot;",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73412916950'>+7 (3412) 916-950<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "235",
            "Name": "ЗАО &quot;Новтрак&quot;",
            "CityID": "40",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79602000118'>+7 (960) 200-01-18<a>",
            "Link": "https://www.meusburger-ru.ru",
            "Coords": "58.575852441784875,31.25824469080731",
            "Sort": "0",
            "Name_EN": "CJSC Novtrak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79602000118'>+7 (960) 200-01-18<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "236",
            "Name": "ИП Елезов",
            "CityID": "149",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79009143232'>+7 (900) 914-32-32<a>",
            "Link": "",
            "Coords": "61.25692861144853,46.66881446197123",
            "Sort": "0",
            "Name_EN": "PE Yelezov",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79009143232'>+7 (900) 914-32-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "237",
            "Name": "МБ Вологда",
            "CityID": "45",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79212385605'>+7 (921) 238-56-05<a>",
            "Link": "https://www.mercedes35.ru",
            "Coords": "59.22900107871349,39.93050386375424",
            "Sort": "0",
            "Name_EN": "MB Vologda",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79212385605'>+7 (921) 238-56-05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "238",
            "Name": "ООО &quot;Нара Авто Транс&quot;",
            "CityID": "150",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957413232'>+7 (495) 741-32-32<a>",
            "Link": "https://www.naraavto.ru",
            "Coords": "55.3765410048734,36.69044439451219",
            "Sort": "0",
            "Name_EN": "LLC Nara Avto Trans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957413232'>+7 (495) 741-32-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "239",
            "Name": "ООО &quot;Бомонд&quot;",
            "CityID": "66",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79149117320'>+7 (914) 911-73-20<a>",
            "Link": "https://www.sto-bomond.ru",
            "Coords": "56.126026089209134,101.54601703650717",
            "Sort": "0",
            "Name_EN": "LLC Bomond",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79149117320'>+7 (914) 911-73-20<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "240",
            "Name": "Губкин-Трак",
            "CityID": "69",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79192256666'>+7 (919) 225-66-66<a>",
            "Link": "",
            "Coords": "51.30588954513002,37.62053615920153",
            "Sort": "0",
            "Name_EN": "Gubkin-Trak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79192256666'>+7 (919) 225-66-66<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "241",
            "Name": "ООО &quot;Атриум&quot;",
            "CityID": "151",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74232543545'>+7 (423) 254-35-45<a>",
            "Link": "https://www.спецремсервис.рф",
            "Coords": "43.473547466087794,131.92648139057027",
            "Sort": "0",
            "Name_EN": "LLC Atrium",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74232543545'>+7 (423) 254-35-45<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "242",
            "Name": "Эланд",
            "CityID": "90",
            "TypeID": "54",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73952553310'>+7 (3952) 55-33-10<a>",
            "Link": "https://www.scaneland.ru",
            "Coords": "52.34928131803304,104.14261984565859",
            "Sort": "0",
            "Name_EN": "Eland",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73952553310'>+7 (3952) 55-33-10<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "315",
            "Name": "Техцентр",
            "CityID": "74",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78332787732'>+7 (8332) 78-77-32<a>",
            "Link": "https://www.xn----dtbhaqltlodod0bo.xn--p1ai",
            "Coords": "58.58028712423885,49.60497559752274",
            "Sort": "0",
            "Name_EN": "technical center",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78332787732'>+7 (8332) 78-77-32<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "316",
            "Name": "ГК Перспектива",
            "CityID": "53",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78462792208'>+7 (846) 279-22-08<a>",
            "Link": "https://www.gk-perspektiva.ru",
            "Coords": "53.19350663279503,50.29220909755325",
            "Sort": "0",
            "Name_EN": "GK Perspective",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78462792208'>+7 (846) 279-22-08<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "317",
            "Name": "ООО &quot;УралЭкоСервисТранс&quot;",
            "CityID": "43",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Link": "https://www.uest.ru",
            "Coords": "56.87293174604755,60.6572366404026",
            "Sort": "0",
            "Name_EN": "LLC UralEcoServiceTrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73433452533'>+7 (343) 345-25-33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "318",
            "Name": "АлтАвто",
            "CityID": "77",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel: +78007002235'>+7 800 700-22-35<a>",
            "Link": "https://www.man-altay.ru",
            "Coords": "53.348497499913734,83.60426413128272",
            "Sort": "0",
            "Name_EN": "Allauto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel: +78007002235'>+7 800 700-22-35<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "319",
            "Name": "ТРАК ЦЕНТР",
            "CityID": "38",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78007001616'>+7 (800) 700-16-16<a>",
            "Link": "https://www.truck-center.ru",
            "Coords": "57.1530,65.5343",
            "Sort": "0",
            "Name_EN": "TRUCK CENTER",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78007001616'>+7 (800) 700-16-16<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "320",
            "Name": "ООО «Евросибтрак»",
            "CityID": "55",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73812282233'>+7 (3812) 28-22-33<a>",
            "Link": "https://www.eurosib55.ru",
            "Coords": "54.95487448839061,73.27486227976216",
            "Sort": "0",
            "Name_EN": "LLC Evrosibtrak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73812282233'>+7 (3812) 28-22-33<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "321",
            "Name": "КАД",
            "CityID": "131",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73842452066'>+7 (3842) 45-20-66<a>",
            "Link": "",
            "Coords": "55.325982652663555,86.05770498487074",
            "Sort": "0",
            "Name_EN": "KAD",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73842452066'>+7 (3842) 45-20-66<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "322",
            "Name": "Казтехобслуживание",
            "CityID": "63",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74212333243'>+7 (4212) 33-32-43<a>",
            "Link": "https://www.ktoservice.ru",
            "Coords": "48.52667542994868,135.06192922883605",
            "Sort": "0",
            "Name_EN": "KazTechnoService",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74212333243'>+7 (4212) 33-32-43<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "323",
            "Name": "Торгмонтаж-Плюс",
            "CityID": "156",
            "TypeID": "53",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74132645030'>+7 (4132) 64-50-30<a>",
            "Link": "https://www.omnicomm-magadan.ru",
            "Coords": "59.56775367404539,150.80852308399196",
            "Sort": "0",
            "Name_EN": "Torgmontazh-Plus",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74132645030'>+7 (4132) 64-50-30<a>",
            "Official": "0",
            "Map": "1"
        },
        // {
        //     "CenterID": "324",
        //     "Name": "ООО &quot;МСервис&quot;",
        //     "CityID": "61",
        //     "TypeID": "56",
        //     "Promo": "",
        //     "TextShort": "",
        //     "TextFull": "<a href='tel:+73912997477'>+7 (391) 299-74-77<a>",
        //     "Link": "",
        //     "Coords": "56.077031, 92.932657",
        //     "Sort": "0",
        //     "Name_EN": "LLC &quot;MServis&quot;",
        //     "TextShort_EN": "",
        //     "TextFull_EN": "<a href='tel:+73912997477'>+7 (391) 299-74-77<a>",
        //     "Official": "0",
        //     "Map": "1"
        // },
        {
            "CenterID": "325",
            "Name": "ООО &quot;ГРИНАВТО&quot;",
            "CityID": "55",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73812729020'>8 (3812) 72-90-20<a>",
            "Link": "https://daf55.ru/kontakty",
            "Coords": "55.001132, 73.189663",
            "Sort": "0",
            "Name_EN": "LLC &quot;GRINAVTO&quot;",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73812729020'>8 (3812) 72-90-20<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "328",
            "Name": "ООО «Транзит-Дон-Авто»",
            "CityID": "157",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78633226500'>8 (863) 322-65-00<a>",
            "Link": "https://www.tr-don-auto.ru",
            "Coords": "47.127452, 39.720591",
            "Sort": "0",
            "Name_EN": "LLC Tranzit-Don-Avto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78633226500'>8 (863) 322-65-00<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "327",
            "Name": "ООО «Транзит-Дон-Авто»",
            "CityID": "157",
            "TypeID": "55",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78633226500'>8 (863) 322-65-00<a>",
            "Link": "https://www.tr-don-auto.ru",
            "Coords": "47.127452, 39.720591",
            "Sort": "0",
            "Name_EN": "LLC Tranzit-Don-Avto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78633226500'>8 (863) 322-65-00<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "328",
            "Name": "ООО «Серпри-Авто»",
            "CityID": "3",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74957125654'>+7 (495) 712-56-54<a>",
            "Link": "https://www.serpriavto.ru",
            "Coords": "55.53233508046838,37.57351578406142",
            "Sort": "0",
            "Name_EN": "LLC Serpri-Avto",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+74957125654'>+7 (495) 712-56-54<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "329",
            "Name": "Легат-Сервис",
            "CityID": "3",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79152970661'>+7 (915) 297-06-61<a>",
            "Link": "https://www.legate-servis.ru",
            "Coords": "55.28216812774678,37.854015054836694",
            "Sort": "0",
            "Name_EN": "Legat-Servis",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+79152970661'>+7 (915) 297-06-61<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "330",
            "Name": "ТД Спецавтотехника",
            "CityID": "3",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79265202234'>+7 (926) 520-22-34<a>",
            "Link": "https://www.sat93.ru/kontakti.php",
            "Coords": "55.518571, 36.976867",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "330",
            "Name": "СфераТехАвто",
            "CityID": "3",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+79671027670'>+7 (967) 102-76-70<a>",
            "Link": "http://sferatehavto.ru/contacts/",
            "Coords": "55.456566, 37.569342",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "330",
            "Name": "ТракМоторс",
            "CityID": "50",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+74852594141'>+7 (4852) 59-41-41<a>",
            "Link": "https://truck-motors.su/kontakty.html",
            "Coords": "57.593624, 39.811995",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "330",
            "Name": "СТО Баранка",
            "CityID": "50",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('+7 (4852) 59-42-22')}'>+7 (4852) 59-42-22<a>`,
            "Link": "https://truck-motors.su/kontakty.html",
            "Coords": "57.593624, 39.811995",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "330",
            "Name": "СТО Баранка",
            "CityID": "50",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (4852) 59-42-22')}'>+7 (4852) 59-42-22<a>`,
            "Link": "https://truck-motors.su/kontakty.html",
            "Coords": "57.593624, 39.811995",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ООО &quot;Оскол Трак&quot;",
            "CityID": "133",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+747254444321'>+7 (4725) 444-321<a>",
            "Link": "https://www.oskol-man.ru",
            "Coords": "51.35066179757539,37.84662637301632",
            "Sort": "0",
            "Name_EN": "LLC Oskol Trak",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+747254444321'>+7 (4725) 444-321<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ЦентрСервисЮг",
            "CityID": "138",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (473) 207-2-207')}'>+7 (473) 207-2-207<a>`,
            "Link": "https://www.vrn-truck.ru/kontakty/",
            "Coords": "51.933639, 39.219781",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "Боровичи Трак Сервис",
            "CityID": "62",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (921) 204-47-00')}'>+7 (921) 204-47-00<a>`,
            "Link": "https://www.vrn-truck.ru/kontakty/",
            "Coords": "58.353978, 33.902518",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "РемГрузАвто",
            "CityID": "52",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (920) 978-27-36')}'>+7 (920) 978-27-36<a>`,
            "Link": "https://remgruzavto.ru/contact",
            "Coords": "54.581954, 39.756946",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "БайкалАвтоТрак",
            "CityID": "158",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (800) 333 50 15')}'>+7 800 333 50 15<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/kaluga-contacts.html",
            "Coords": "54.469332, 36.232801",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "Автопорт96",
            "CityID": "136",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (343) 312-81-55')}'>+7 (343) 312-81-55<a>`,
            "Link": "https://avtoport96.ru/kontaktyi",
            "Coords": "56.933572, 60.785564",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "МАН Центр",
            "CityID": "78",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (351) 211-00-05')}'>+7 (351) 211-00-05<a>`,
            "Link": "https://www.man-chel.ru/contact/",
            "Coords": "55.002124, 61.129097",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ПневмоТехСервис",
            "CityID": "76",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (922) 400-71-04')}'>+7 (922) 400-71-04<a>`,
            "Link": "https://xn--b1aahbatyfmfskeh0c.xn--p1ai/contacts.html/",
            "Coords": "61.292214, 73.323988",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ЕвроАзия",
            "CityID": "38",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3452) 22-12-22')}'>+7 (3452) 22-12-22<a>`,
            "Link": "https://eazia.ru/pages/kontakti/",
            "Coords": "57.155733, 65.470071",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ИП Рыбалкин С.В.",
            "CityID": "78",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (922)737-05-40')}'>+7 (922)737-05-40<a>`,
            "Link": "https://eazia.ru/pages/kontakti/",
            "Coords": "55.072649, 61.328020",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ИП Шестухин Д.С.",
            "CityID": "126",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (921) 708-28-31')}'>+7 (921) 708-28-31<a>`,
            "Link": "https://eazia.ru/pages/kontakti/",
            "Coords": "68.888168, 33.069824",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "Ас-Магистраль-Сервис",
            "CityID": "21",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (812) 425-64-50')}'>+7 (812) 425-64-50<a>`,
            "Link": "https://www.as-ms.ru/contacts/",
            "Coords": "59.667403, 30.534752",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "230",
            "Name": "ТПАС-Петрозаводск",
            "CityID": "41",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (8142) 56-96-01')}'>+7 (8142) 56-96-01<a>`,
            "Link": "http://www.tpas.ru/",
            "Coords": "59.667403, 30.534752",
            "Sort": "0",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "225",
            "Name": "Самара Скан Сервис",
            "CityID": "53",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78462787022'>+7 (846) 278-70-22<a>",
            "Link": "https://center-scan.ru/company/contacts/",
            "Coords": "53.22323575138796,50.19193796627046",
            "Sort": "0",
            "Name_EN": "Samara Skan Service",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78462787022'>+7 (846) 278-70-22<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "267",
            "Name": "Оренбург-СканСервис",
            "CityID": "84",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3532)300-082')}'>+7 (3532)300-082<a>`,
            "Link": "https://www.orenscan.ru",
            "Coords": "51.79281699824222,55.15716488573238",
            "Sort": "0",
            "Name_EN": "Orenburg-ScanService",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73532300046'>+7 (353) 230 00 46<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "207",
            "Name": "Авто Флот",
            "CityID": "80",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (342) 250-11-05')}'>+7 (342) 250-11-05<a>`,
            "Link": "https://man-perm.ru/contact/contacts",
            "Coords": "58.0355, 55.8402",
            "Sort": "0",
            "Name_EN": "Auto Flot",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73422501105'>+7 (342) 250 11 05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "207",
            "Name": "ГК Автоиндустрия",
            "CityID": "47",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (917) 490-39-00')}'>+7 (917) 490-39-00<a>`,
            "Link": "http://www.autoindustria.ru/page6.html",
            "Coords": "55.686707, 52.278750",
            "Sort": "0",
            "Name_EN": "Auto Flot",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73422501105'>+7 (342) 250 11 05<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ООО «Техтранс»",
            "CityID": "64",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Link": "https://www.ttufa.com",
            "Coords": "54.68640004663468,55.798221351166674",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ТахографТракСервис",
            "CityID": "48",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8(988) 018-27-28')}'>+7 (988) 018-27-28<a>`,
            "Link": "https://tts34.ru/",
            "Coords": "48.842416, 44.554291",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "282",
            "Name": "Тарна",
            "CityID": "54",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73833084096'>+7 (383) 308 40 96<a>",
            "Link": "",
            "Coords": "54.96379687200917,82.85258044973752",
            "Sort": "0",
            "Name_EN": "Tarn",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73833084096'>+7 (383) 308 40 96<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "М-Тракс",
            "CityID": "55",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3812) 356 455')}'>+7 (3812) 356 455<a>`,
            "Link": "http://omskservice.ru/#top",
            "Coords": "55.014262, 73.157503",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Тарна",
            "CityID": "55",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3812) 58-58-85')}'>+7 (3812) 58-58-85<a>`,
            "Link": "",
            "Coords": "54.993293, 73.473351",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "СД-Лидер",
            "CityID": "61",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8(923) 668-46-56')}'>+7 (923) 668-46-56<a>`,
            "Link": "",
            "Coords": "56.004378, 93.052222",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ТрансОпт",
            "CityID": "77",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3852) 47-85-26')}'>+7 (3852) 47-85-26<a>`,
            "Link": "",
            "Coords": "53.323427, 83.638112",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "218",
            "Name": "Транзит",
            "CityID": "65",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": "<a href='tel:+73845297413'>+7(38452) 9-74-13<a>",
            "Link": "",
            "Coords": "54.4370, 86.4133",
            "Sort": "0",
            "Name_EN": "Tranzit",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+73845297413'>+7(38452) 9-74-13<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Дальнобойщик",
            "CityID": "117",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3852) 47-85-26')}'>+7 (3902) 26‒15‒25<a>`,
            "Link": "",
            "Coords": "53.323427, 83.638112",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ИП Лапин Вадим Сергеевич",
            "CityID": "66",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (983) 446-79-60')}'>+7 (983) 446-79-60<a>`,
            "Link": "",
            "Coords": "56.132494, 101.542856",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "БайкалАвто Трак",
            "CityID": "159",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (800) 333 50 15')}'>+7 (800) 333 50 15<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/chita-contacts.html",
            "Coords": "52.102279, 113.350554",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "БайкалАвто Трак",
            "CityID": "66",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (800) 333 50 15')}'>+7 (800) 333 50 15<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/bratsk-contacts.html",
            "Coords": "56.131809, 101.516388",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "ИП Агошков С.Ю.",
            "CityID": "144",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (914) 390‒72‒83')}'>+7 (914) 390‒72‒83<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/bratsk-contacts.html",
            "Coords": "50.339775, 127.504392",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Транзит",
            "CityID": "144",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (909) 514-82-26')}'>+7 (909) 514-82-26<a>`,
            "Link": "http://tranzit-belovo.su/contacts/",
            "Coords": "50.325336, 127.535968",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Форс-Авто",
            "CityID": "83",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (423) 200-06-21	')}'>+7 (423) 200-06-21	<a>`,
            "Link": "http://forsauto.com/contact-information/",
            "Coords": "43.168753, 131.934991",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "БайкалАвтоТрак",
            "CityID": "156",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (800) 333-50‒15')}'>+7 (800) 333-50‒15<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/magadan-contacts.html",
            "Coords": "59.555536, 150.842057",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Амурский ремонтно-технический центр",
            "CityID": "144",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8(914) 558-20-44')}'>+7 (914) 558-20-44<a>`,
            "Link": "https://amrtc.ru/kontakty",
            "Coords": "50.282876, 127.419259",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "БайкалАвтоТрак",
            "CityID": "146",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8 (3012) 22-43-01')}'>+7 (3012) 22-43-01<a>`,
            "Link": "https://www.dealer.volvotrucks.ru/baikalautotruck/ru-ru/contacts/ulan-ude-contacts.html",
            "Coords": "51.838983, 107.504381",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
        {
            "CenterID": "77",
            "Name": "Автоцентр Таврида",
            "CityID": "121",
            "TypeID": "56",
            "Promo": "",
            "TextShort": "",
            "TextFull": `<a href='tel:+${formatTelforHref('8(978) 122-49-26')}'>+7 (978) 122-49-26<a>`,
            "Link": "http://kamaz82.ru/kontakty.html",
            "Coords": "44.973105, 34.149491",
            "Sort": "0",
            "Name_EN": "LLC Tekhtrans",
            "TextShort_EN": "",
            "TextFull_EN": "<a href='tel:+78002509702'>8 800 250 97 02<a>",
            "Official": "0",
            "Map": "1"
        },
    ]


    const btn = document.getElementById('findService');
    const citySelectEl = document.getElementById('citySelect');
    const typeOfStationSelect = document.getElementById('stationSelect');
    const contactsDiv = document.querySelector('.map-wrapper__services-list');

    fillServiceSelects(cities, centerTypes)

    btn.onclick = () => {
        myMap1.geoObjects.removeAll();

        if (citySelectEl.value !== 'false') {
            const chosenCity = citySelectEl.value
            const chosenCenterType = typeOfStationSelect.value
            printChosenCity(chosenCity, chosenCenterType)
        } else {
            init()
        }
    }

    function formatTelforHref(tel) {
        return tel
            .replaceAll('-', '')
            .replaceAll(' ', '')
            .replace('(', '')
            .replace(')', '')
            .replace('8', '7')
    }

    function fillServiceSelects(citiesArray, centerTypesArray) {

        citiesArray.forEach(city => {
            citySelectEl.insertAdjacentHTML('beforeend', `
            <option value="${city.CityID}">${city.Name}</option>
        `)
        });

        centerTypesArray.forEach(center => {
            typeOfStationSelect.insertAdjacentHTML('beforeend', `
            <option value="${center.TypeID}">${center.Name}</option>
        `)
        });
    }

    function printChosenCity(city, centerType) {
        const centersOfChosenCity = []
        const centersOfChosenType = []
        let centersToPrint = []
        contactsDiv.innerHTML = ''

        centres.forEach(center => {
            if (center.CityID == city) {
                centersOfChosenCity.push(center)
            }
        })

        if (!centersOfChosenCity.length) {
            contactsDiv.innerHTML = printServiceInfo()
            return;
        }


        if (centerType !== "false") {
            centersToPrint = centersOfChosenCity.filter(center => center.TypeID === centerType)
        } else {
            centersToPrint = [...centersOfChosenCity]
        }

        if (centersToPrint.length) {
            centersToPrint.forEach(centerToPrint => {
                let centerType = centerTypes.find(center => center.TypeID === centerToPrint.TypeID)
                let icon = centerType["Icon"]
                let centerName = centerType["Name"]
                contactsDiv.insertAdjacentHTML('beforeend', printServiceInfo(centerToPrint))
                createPlacemark(centerToPrint, icon, centerName)
            })
        } else {
            contactsDiv.innerHTML = printServiceInfo()
        }

    }

    function createPlacemark(center, thumb, centerTypeName) {
        myMap1.geoObjects.add(new ymaps.Placemark(center["Coords"].split(','), {
            content: `${center["Name"]}`,
            balloonContent: `<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/${thumb}" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>${center["Name"]}</b><br>${centerTypeName}<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=141">подробная информация о центре</a></div></td></tr></table>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: `/assets/img/centres-type/${thumb}`,
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        }));
    }

    function printServiceInfo(center = false) {

        if (!center) {
            return `<h5 class="map-wrapper__service-name">В указанном городе нет станций выбранного типа.</h5>`;
        }

        const phoneIcon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12Z"
            fill="#2E2E2E" />
        </svg>`;
        const siteIcon = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
            fill="#333333" />
        </svg>`;

        const $siteEl = center["Link"] ? `<li class="d-flex" id="serviceLink"><div style="min-width:18px;display:inline-block;">${siteIcon}</div><a href="${center['Link']}" target="_blank">
        ${center["Link"]}</a></li>` : ""

        return `
        <h5 class="map-wrapper__service-name">${center["Name"]}</h5>
        <ul class="p-0 map-wrapper__service-contacts">
            <li class="d-flex" id="servicePhone"><div style="min-width:18px;display:inline-block;">${phoneIcon}</div>${center["TextFull"]}</li>
            ${$siteEl}
        </ul>
    `
    }

    // Карта с абсолютно всеми сервисами
    function init() {
        // myMap1 = new ymaps.Map("serviceMap1", {
        //     center: [60.12833253, 82.72110322],
        //     zoom: 3,
        //     controls: ['zoomControl', 'typeSelector', 'fullscreenControl']

        // }, {
        //     searchControlProvider: 'yandex#search'
        // });








        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark0 = new ymaps.Placemark([45.05424838878607, 42.02778373313522], {
            content: 'Аксель',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Аксель (Ставрополь)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=141">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark0);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark1 = new ymaps.Placemark([55.88754215103199, 49.22827995079729], {
            content: 'Казань-Шинторг',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Казань-Шинторг (Казань)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=314">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark1);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark2 = new ymaps.Placemark([47.29683714611313, 39.653697877315516], {
            content: 'ООО «Великан-Ростов Сервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Великан-Ростов Сервис» (Ростов-на-Дону)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=144">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark2);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark3 = new ymaps.Placemark([56.913097, 60.777456], {
            content: 'MAN Центр Екатеринбург / ООО «СпецАвтоЛэнд-Урал»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>MAN Центр Екатеринбург / ООО «СпецАвтоЛэнд-Урал» (Березовский)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=145">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark3);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark4 = new ymaps.Placemark([55.65839942195173, 52.32465189451212], {
            content: 'ООО «Импокар-Сервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Импокар-Сервис» (Барнаул)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=146">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark4);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark5 = new ymaps.Placemark([55.690184191275655, 52.35598131282792], {
            content: 'ООО «ЧелныТракСервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ЧелныТракСервис» (Набережные Челны)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=147">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark5);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark6 = new ymaps.Placemark([56.23552056850629, 44.02136549999997], {
            content: 'Агат',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Агат (Нижний Новгород)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=313">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark6);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark7 = new ymaps.Placemark([56.88530462302072, 53.313579679901345], {
            content: 'ООО &quot;Камион Сервис&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Камион Сервис&quot; (Ижевск)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=312">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark7);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark8 = new ymaps.Placemark([45.07220438347048, 41.92863939681651], {
            content: 'Камазтехобслуживание',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Камазтехобслуживание (Ставрополь)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=311">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark8);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark9 = new ymaps.Placemark([43.6329110715418, 39.74540627976222], {
            content: 'СочиТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>СочиТракСервис (Сочи)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=310">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark9);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark10 = new ymaps.Placemark([57.590711, 39.819362], {
            content: 'ООО «Евротраксервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Евротраксервис» (Ярославль)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=152">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark10);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark12 = new ymaps.Placemark([56.806992, 60.633539], {
            content: 'ООО «СБ «Виктория»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «СБ «Виктория» (Екатеринбург)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=154">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark12);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark13 = new ymaps.Placemark([55.281927, 37.854725], {
            content: 'ООО «Трейлер Сервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Трейлер Сервис» (Домодедово)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=155">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark13);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark14 = new ymaps.Placemark([51.49826349725668, 39.5644140226652], {
            content: 'ИП Лернер Александр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Лернер Александр (Воронеж)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=156">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark14);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark15 = new ymaps.Placemark([48.76346898095893, 44.410229873016284], {
            content: 'ВолгаКамазАвтосервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ВолгаКамазАвтосервис (Волгоград)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=309">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark15);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark16 = new ymaps.Placemark([47.3069, 39.6502], {
            content: 'Нейс ЮГ',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Нейс ЮГ (Ростов-на-Дону)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=308">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark16);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark17 = new ymaps.Placemark([64.444209228074, 40.603127051589915], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Архангельск)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=307">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark17);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark18 = new ymaps.Placemark([48.77210567304427, 44.462815885913834], {
            content: 'Волга Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Волга Трак Сервис (Вологда)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=306">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark18);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark19 = new ymaps.Placemark([59.781535, 30.439102], {
            content: 'АвтоБулл',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>АвтоБулл (Санкт-Петербург)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=304">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark19);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark20 = new ymaps.Placemark([57.659120881936744, 39.80849287301637], {
            content: 'ЯрТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ЯрТракСервис (Ярославль)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=131">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark20);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark21 = new ymaps.Placemark([54.95487448839061, 73.27486227976216], {
            content: 'ООО «Евросибтрак»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Евросибтрак» (Омск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=132">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark21);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark22 = new ymaps.Placemark([54.96648823935097, 82.80954421230307], {
            content: 'ООО «СибТракСкан»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «СибТракСкан» (Новосибирск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=133">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark22);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark23 = new ymaps.Placemark([59.90329106420649, 30.40103749999996], {
            content: 'Рентрак-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Рентрак-Сервис (Санкт-Петербург)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=305">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark23);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark24 = new ymaps.Placemark([51.792754635009935, 55.15728489881135], {
            content: 'ООО «Оренбург- СканСервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Оренбург- СканСервис» (Оренбург)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=136">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark24);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark25 = new ymaps.Placemark([57.659120881936744, 39.80849287301637], {
            content: 'ЯрТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ЯрТракСервис (Ярославль)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=303">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark25);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark26 = new ymaps.Placemark([51.646892450114194, 39.29326827241613], {
            content: 'Фирма ПИК',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Фирма ПИК (Воронеж)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=302">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark26);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark27 = new ymaps.Placemark([56.09716876362076, 40.16532449999997], {
            content: 'Автоспеццентр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Автоспеццентр (Владимир)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=301">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark27);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark28 = new ymaps.Placemark([50.618625150876646, 36.56282050859822], {
            content: 'КАМАЗ центр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КАМАЗ центр (Белгород)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=300">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark28);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark29 = new ymaps.Placemark([54.941127480137446, 82.8237598214264], {
            content: 'Гермес',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Гермес (Новосибирск)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=299">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark29);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark30 = new ymaps.Placemark([54.476314464017996, 37.69835454099205], {
            content: 'ООО «Кессборер»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Кессборер» (Ясногорск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=108">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark30);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark31 = new ymaps.Placemark([55.15905304231823, 61.48830744600179], {
            content: 'ООО «БАВ-Движение»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «БАВ-Движение» (Челябинск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=109">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark31);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark32 = new ymaps.Placemark([56.91331544637636, 60.77579718717191], {
            content: 'Уралтехцентр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Уралтехцентр (Екатеринбург)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=298">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark32);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark33 = new ymaps.Placemark([54.65757107716651, 55.699804182555276], {
            content: 'ООО «Омегаскан»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Омегаскан» (Уфа)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=111">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark33);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark34 = new ymaps.Placemark([47.12004557430816, 39.85989299999995], {
            content: 'Грифон',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Грифон (Ростов-на-Дону)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=297">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark34);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark35 = new ymaps.Placemark([44.18511662112075, 43.132127733135206], {
            content: 'Кавказ Автосервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Кавказ Автосервис (Минеральные воды)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=296">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark35);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark36 = new ymaps.Placemark([51.83897646209983, 107.50484964460189], {
            content: 'ООО &quot;БайкалАвтоТрак&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;БайкалАвтоТрак&quot; (Улан-Удэ)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=229">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark36);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark37 = new ymaps.Placemark([55.65846614121952, 52.324753818454674], {
            content: 'Компания Альфа',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Компания Альфа (Набережные Челны)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=295">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark37);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark38 = new ymaps.Placemark([58.03509867974697, 55.8419335724219], {
            content: 'Астон-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Астон-Сервис (Пермь)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=294">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark38);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark39 = new ymaps.Placemark([51.67804369862938, 45.98659199999997], {
            content: 'Балтранс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Балтранс (Саратов)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=293">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark39);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark40 = new ymaps.Placemark([55.88151218372237, 37.43299323743435], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Москва)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=121">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark40);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark41 = new ymaps.Placemark([59.203484404890915, 39.824063323417576], {
            content: 'ВологдаСкан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ВологдаСкан (Вологда)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=292">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark41);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark42 = new ymaps.Placemark([58.569694409885685, 31.254645236354257], {
            content: 'НБИ Транспорт Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>НБИ Транспорт Сервис (Великий Новгород)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=291">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark42);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark43 = new ymaps.Placemark([56.366045048955144, 30.572417432540906], {
            content: 'ОАО «ВОЗМ»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ОАО «ВОЗМ» (Великие Луки)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=124">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark43);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark44 = new ymaps.Placemark([61.28564515684694, 73.39093860372003], {
            content: 'ООО «Альтернатива групп»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Альтернатива групп» (Сургут)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=104">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark44);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark45 = new ymaps.Placemark([54.600848194496386, 39.76816028605265], {
            content: 'РязаньСкан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>РязаньСкан (Рязань)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=290">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark45);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark46 = new ymaps.Placemark([55.28216812774678, 37.854015054836694], {
            content: 'Легат-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Легат-Сервис (Москва)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=289">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark46);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark47 = new ymaps.Placemark([55.56845831511378, 35.52792511399537], {
            content: 'Иларавто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Иларавто (Москва)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=288">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark47);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark48 = new ymaps.Placemark([59.7641779263552, 30.481146510445914], {
            content: 'ООО «ИВ-Сервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ИВ-Сервис» (Санкт-Петербург)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=31">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark48);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark49 = new ymaps.Placemark([43.101682933033054, 131.89952626900964], {
            content: 'ООО &quot;Атриум&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Атриум&quot; (Владивосток)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=287">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark49);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark50 = new ymaps.Placemark([], {
            content: 'Транзит',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Транзит (Братск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=286">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark50);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark51 = new ymaps.Placemark([53.38362055282547, 83.77241292394254], {
            content: 'СибТракЦентр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>СибТракЦентр (Барнаул)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=285">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark51);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark52 = new ymaps.Placemark([52.9278267869815, 36.02946749999994], {
            content: 'ИП Черникова',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Черникова (Орел)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=35">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark52);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark53 = new ymaps.Placemark([56.04585358358321, 92.84843187301631], {
            content: 'Еврофура',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Еврофура (Красноярск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=284">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark53);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark54 = new ymaps.Placemark([54.998598713649166, 73.1958221362457], {
            content: 'ГринАвто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ГринАвто (Омск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=283">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark54);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark55 = new ymaps.Placemark([54.940813467084126, 82.82418629265979], {
            content: 'Сириус',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Сириус (Новосибирск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=281">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark55);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark56 = new ymaps.Placemark([54.96379687200917, 82.85258044973752], {
            content: 'Тарна',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Тарна (Новосибирск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=282">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark56);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark57 = new ymaps.Placemark([61.28564515684694, 73.39093860372003], {
            content: 'ООО «Альтернатива групп»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Альтернатива групп» (Сургут)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=280">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark57);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark58 = new ymaps.Placemark([60.750470063068526, 28.65294249999999], {
            content: 'ООО «ГлобалТракСеврвис» Выборг',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ГлобалТракСеврвис» Выборг (Выборг)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=41">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark58);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark59 = new ymaps.Placemark([56.736077929686054, 60.72523356745909], {
            content: 'ООО «ГлобалТракСервис» Екатеринбург',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ГлобалТракСервис» Екатеринбург (Екатеринбург)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=43">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark59);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark60 = new ymaps.Placemark([47.282465459816926, 39.83350638426959], {
            content: 'ООО «ГлобалТракСервис» Ростов-на-Дону',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ГлобалТракСервис» Ростов-на-Дону (Аксай)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=44">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark60);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark61 = new ymaps.Placemark(["66.07988625658388", "76.59821645215742"], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Новый Уренгой)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=279">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark61);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark62 = new ymaps.Placemark([59.203554565108576, 39.8234034999999], {
            content: 'ООО «ВологдаСкан»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ВологдаСкан» (Вологда)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=46">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark62);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark63 = new ymaps.Placemark([55.46403373479791, 65.13132869507118], {
            content: 'КурганСкан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КурганСкан (Курган)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=278">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark63);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark64 = new ymaps.Placemark([55.65841306908396, 52.32443999999995], {
            content: 'ООО «Компания Альфа»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Компания Альфа» (Набережные Челны)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=48">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark64);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark65 = new ymaps.Placemark([48.78026162158332, 44.49084988161462], {
            content: 'ООО «Зубр»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Зубр» (Волгоград)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=49">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark65);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark66 = new ymaps.Placemark([55.002210409352415, 61.129718819118494], {
            content: 'Молния',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Молния (Челябинск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=276">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark66);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark67 = new ymaps.Placemark([55.53233508046838, 37.57351578406142], {
            content: 'ООО «Серпри-Авто»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Серпри-Авто» (Москва)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=51">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark67);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark68 = new ymaps.Placemark([55.15905304231823, 61.48830744600179], {
            content: 'БАВ-движение',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>БАВ-движение (Челябинск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=277">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark68);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark69 = new ymaps.Placemark([55.002210409352415, 61.129718819118494], {
            content: 'Молния',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Молния (Челябинск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=275">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark69);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark70 = new ymaps.Placemark([56.87293174604755, 60.6572366404026], {
            content: 'ООО &quot;УралЭкоСервисТранс&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;УралЭкоСервисТранс&quot; (Екатеринбург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=274">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark70);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark71 = new ymaps.Placemark([56.872269278392636, 60.659220442698775], {
            content: 'ЕкатеринбургСкан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ЕкатеринбургСкан (Екатеринбург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=273">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark71);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark72 = new ymaps.Placemark([44.21640489763995, 43.076238601455664], {
            content: 'КлючАвтоТрак КМВ',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КлючАвтоТрак КМВ (Минеральные воды)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=272">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark72);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark73 = new ymaps.Placemark([48.75828900214992, 44.8365887625655], {
            content: 'Восток-3',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Восток-3 (Волжский)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=271">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark73);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark74 = new ymaps.Placemark([45.48632559226897, 38.662782639260314], {
            content: 'ФургонМастер',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ФургонМастер (Краснодар)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=270">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark74);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark75 = new ymaps.Placemark([43.45010382239365, 39.9178646018523], {
            content: 'Скания Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Скания Сервис (Сочи)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=269">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark75);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark76 = new ymaps.Placemark([47.11054544420193, 39.838298813467496], {
            content: 'Ростов Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ростов Трак Сервис (Ростов-на-Дону)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=268">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark76);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark77 = new ymaps.Placemark([55.66355308466011, 37.89314433068848], {
            content: 'ООО «СТС Сервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «СТС Сервис» (Москва)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=62">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark77);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark78 = new ymaps.Placemark([51.79281699824222, 55.15716488573238], {
            content: 'Оренбург-СканСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Оренбург-СканСервис (Оренбург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=267">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark78);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark79 = new ymaps.Placemark([55.67752513149074, 52.4658570889549], {
            content: 'Лидер Трак',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Лидер Трак (Набережные Челны)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=266">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark79);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark80 = new ymaps.Placemark([54.67238557340071, 55.78360377976215], {
            content: 'Казань-Шинторг',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Казань-Шинторг (Уфа)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=265">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark80);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark81 = new ymaps.Placemark([56.29931124200404, 43.591489343585906], {
            content: 'Тиропанефтранс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Тиропанефтранс (Дзержинск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=264">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark81);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark82 = new ymaps.Placemark([56.335458043623824, 43.80920108035661], {
            content: 'Приволжье-ТрансСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Приволжье-ТрансСервис (Нижний Новгород)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=263">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark82);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark83 = new ymaps.Placemark([55.814916, 52.104845], {
            content: 'Трак Центр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Трак Центр (Елабуга)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=262">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark83);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark84 = new ymaps.Placemark([55.78971673748983, 49.104975546627024], {
            content: 'СЭР-Авто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>СЭР-Авто (Казань)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=261">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark84);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark85 = new ymaps.Placemark([54.738247074897124, 56.28050975233473], {
            content: 'ООО «Трак Центр» Уфа',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Трак Центр» Уфа (Уфа)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=71">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark85);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark86 = new ymaps.Placemark([53.516474, 49.591969], {
            content: 'Дженерал Тракс Груп',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Дженерал Тракс Груп (Тольятти)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=260">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark86);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark87 = new ymaps.Placemark([54.65050706788674, 20.54291677027238], {
            content: 'Техник КНГ',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Техник КНГ (Калининград)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=259">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark87);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark88 = new ymaps.Placemark([48.46970004452895, 135.16956173743426], {
            content: 'ООО «Хабавтоприцеп»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Хабавтоприцеп» (Хабаровск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=75">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark88);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark89 = new ymaps.Placemark([61.80485633254533, 34.282799949073784], {
            content: 'ТехПортАвтоСервис-Петрозаводск',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТехПортАвтоСервис-Петрозаводск (Петрозаводск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=258">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark89);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark90 = new ymaps.Placemark([54.68640004663468, 55.798221351166674], {
            content: 'ООО «Техтранс»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Техтранс» (Уфа)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=77">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark90);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark92 = new ymaps.Placemark([58.56965922015132, 31.254610004299142], {
            content: 'Промтранс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Промтранс (Великий Новгород)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=256">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark92);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark93 = new ymaps.Placemark([59.667304670257124, 30.534743705551946], {
            content: 'ТРИА',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРИА (Ростов-на-Дону)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=255">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark93);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark94 = new ymaps.Placemark([56.076993065674614, 92.9286697589302], {
            content: 'ООО «МСервис»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «МСервис» (Красноярск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=82">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark94);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark95 = new ymaps.Placemark([59.81525735600978, 30.39851135715887], {
            content: 'Юнайтед Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Юнайтед Сервис (Шушары)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=254">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark95);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark96 = new ymaps.Placemark([52.658046394289045, 39.613804846791346], {
            content: 'ООО «Липецккомтранс»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Липецккомтранс» (Липецк)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=84">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark96);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark97 = new ymaps.Placemark([60.1356225774024, 30.2123500214958], {
            content: 'А.К.Т.',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>А.К.Т. (Санкт-Петербург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=253">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark97);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark98 = new ymaps.Placemark([51.28763130027099, 37.56599897700605], {
            content: 'ООО «Аргос Скан»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Аргос Скан» (Губкин)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=86">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark98);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark99 = new ymaps.Placemark([51.64194919576589, 39.15975937731546], {
            content: 'МАН-Вектор',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>МАН-Вектор (Воронеж)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=252">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark99);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark100 = new ymaps.Placemark([51.49826349725668, 39.5644140226652], {
            content: 'ИП Лернер',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Лернер (Воронеж)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=251">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark100);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark101 = new ymaps.Placemark([51.35076257248698, 37.846561999999956], {
            content: 'Оскол Трак',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Оскол Трак (Старый Оскол)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=250">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark101);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark102 = new ymaps.Placemark([54.941713694615316, 82.82248494207474], {
            content: 'ООО «Галеон»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Галеон» (Новосибирск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=91">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark102);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark103 = new ymaps.Placemark([54.84604680686784, 31.848180584655726], {
            content: 'Центр-сервис Западный',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Центр-сервис Западный (Смоленск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=249">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark103);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark104 = new ymaps.Placemark([56.83712006785745, 35.798295499999924], {
            content: 'ООО «Тверьстроймаш»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Тверьстроймаш» (Тверь)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=93">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark104);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark105 = new ymaps.Placemark([57.59542728916291, 39.80062863988115], {
            content: 'ПитСтоп',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ПитСтоп (Ярославль)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=248">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark105);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark106 = new ymaps.Placemark([55.92484225979361, 36.87999380919265], {
            content: 'ТрансМан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТрансМан (Истра)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=246">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark106);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark107 = new ymaps.Placemark([55.49154297791816, 37.566918826389305], {
            content: 'Атлант-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Атлант-Сервис (Москва)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=247">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark107);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark108 = new ymaps.Placemark([55.606175808063824, 37.02202696875193], {
            content: 'Скания Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Скания Сервис (Москва)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=245">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark108);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark109 = new ymaps.Placemark([55.53232443172492, 37.5736056380634], {
            content: 'Серпри Авто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Серпри Авто (Москва)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=244">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark109);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark110 = new ymaps.Placemark([55.56845831511378, 35.52792511399537], {
            content: 'Иларавто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Иларавто (Москва)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=243">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark110);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark111 = new ymaps.Placemark([54.360627, 48.646351], {
            content: 'ООО «Ульяновск-Скан»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Ульяновск-Скан» (Ульяновск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=157">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark111);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark112 = new ymaps.Placemark([56.074905, 37.136056], {
            content: 'ООО Север-Скан АВТО',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО Север-Скан АВТО (Москва)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=158">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark112);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark113 = new ymaps.Placemark([59.19621603360435, 39.803626911045086], {
            content: 'ООО «Сервис-Транс»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Сервис-Транс» (Вологда)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=159">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark113);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark114 = new ymaps.Placemark([55.971149, 37.471488], {
            content: 'ООО «Даф Сервис Москва»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Даф Сервис Москва» (Долгопрудный)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=160">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark114);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark115 = new ymaps.Placemark([68.888116, 33.070023], {
            content: 'ООО «ТехПортАвтоСервис-Мурманск»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «ТехПортАвтоСервис-Мурманск» (Кола)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=162">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark115);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark116 = new ymaps.Placemark([55.59938459422453, 37.74740150000001], {
            content: 'ТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТракСервис (Москва)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=163">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark116);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark117 = new ymaps.Placemark([55.5738720041364, 37.633338000000016], {
            content: 'ТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТракСервис (Москва)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=164">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark117);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark118 = new ymaps.Placemark([55.57480050410018, 37.617334500000005], {
            content: 'Европарт',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Европарт (Москва)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=165">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark118);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark119 = new ymaps.Placemark([55.62674127773333, 37.47190150000001], {
            content: 'Техпоставка',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Техпоставка (Москва)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=166">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark119);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark120 = new ymaps.Placemark([56.00988927619406, 37.16415649999994], {
            content: 'Глобал Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Глобал Трак Сервис (Зеленоград)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=167">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark120);





        //Авторизированные Магазины Wabco
        //   /assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png


        myPlacemark121 = new ymaps.Placemark([56.004745776200735, 37.18683049999995], {
            content: 'Компания ПРАМО',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Компания ПРАМО (Зеленоград)</b><br>Авторизированные Магазины Wabco<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=168">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0a4bf8c937c88c46ca90033a8cb6fe87.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark121);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark122 = new ymaps.Placemark([55.914590199558965, 37.58945220999526], {
            content: 'ООО &quot;ИЛАРАВТО&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;ИЛАРАВТО&quot; (Москва)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=169">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark122);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark123 = new ymaps.Placemark([55.532370278069386, 37.57343849999997], {
            content: 'Серпри-Авто М',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Серпри-Авто М (Москва)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=170">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark123);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark124 = new ymaps.Placemark([55.78849977707697, 37.69206049999994], {
            content: 'Сварз',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Сварз (Москва)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=171">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark124);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark125 = new ymaps.Placemark([56.00988927619406, 37.16415649999994], {
            content: 'Глобал Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Глобал Трак Сервис (Зеленоград)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=172">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark125);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark126 = new ymaps.Placemark([55.66471527752928, 37.89172949999997], {
            content: 'Восток Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Восток Трак Сервис (Люберцы)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=173">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark126);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark127 = new ymaps.Placemark([55.60679424739535, 37.79200699999996], {
            content: 'Трак-Сервис Беседы',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Трак-Сервис Беседы (Москва)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=174">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark127);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark128 = new ymaps.Placemark([55.705706277356086, 39.11285449999998], {
            content: 'МЗ ТОНАР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>МЗ ТОНАР (Орехово-Зуево)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=175">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark128);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark129 = new ymaps.Placemark([56.790092037350526, 35.90534299999994], {
            content: 'РУМОС-Комтранс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>РУМОС-Комтранс (Тверь)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=176">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark129);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark130 = new ymaps.Placemark([60.07178875720769, 30.376333499999987], {
            content: 'Парнасавтокомплекс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Парнасавтокомплекс (Санкт-Петербург)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=177">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark130);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark131 = new ymaps.Placemark([60.06718225722266, 30.339718500000014], {
            content: 'Питер Бас Центр&nbsp;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Питер Бас Центр&nbsp; (Санкт-Петербург)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=178">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark131);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark132 = new ymaps.Placemark([59.76433175877799, 30.480861499999946], {
            content: 'ИВ-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИВ-Сервис (Санкт-Петербург)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=179">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark132);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark133 = new ymaps.Placemark([54.65390128131722, 20.541092500000026], {
            content: 'ИП Себейкин',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Себейкин (Калининград)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=180">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark133);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark134 = new ymaps.Placemark([56.29934127498494, 43.59131550000001], {
            content: 'Тиропанефтранс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Тиропанефтранс (Дзержинск)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=181">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark134);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark135 = new ymaps.Placemark([58.569597264844816, 31.25458049999997], {
            content: 'НБИ Транспорт Сервис (Промтранс)',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>НБИ Транспорт Сервис (Промтранс) (Великий Новгород)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=182">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark135);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark136 = new ymaps.Placemark([53.304291285842, 50.29261249999996], {
            content: 'Самара-Скан-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Самара-Скан-Сервис (Самара)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=183">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark136);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark137 = new ymaps.Placemark([44.185242299480144, 43.13208749999996], {
            content: 'КАВКАЗ Автосервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КАВКАЗ Автосервис (Ставрополь)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=184">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark137);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark138 = new ymaps.Placemark([56.86123477265159, 60.66860299999999], {
            content: 'ИП Кирьянов А.А. Е.',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Кирьянов А.А. Е. (Екатеринбург)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=185">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark138);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark139 = new ymaps.Placemark([55.172835279465964, 61.478721499999985], {
            content: 'Коммерческий транспорт',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Коммерческий транспорт (Челябинск)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=186">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark139);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark140 = new ymaps.Placemark([54.94079928026665, 82.82404949999999], {
            content: 'Гермес',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Гермес (Новосибирск)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=187">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark140);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark141 = new ymaps.Placemark([56.04585577602644, 92.8483764999999], {
            content: 'ЕВРОФУРА',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ЕВРОФУРА (Красноярск)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=188">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark141);





        //Сервисные центры Wabco с поддержкой гарантии
        //   /assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png


        myPlacemark142 = new ymaps.Placemark([43.345881299199476, 132.13123650000006], {
            content: 'ИП Щербин',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Щербин (Артем)</b><br>Сервисные центры Wabco с поддержкой гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=189">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/0eb6716e7a07eb91257948d25107a042.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark142);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark143 = new ymaps.Placemark([55.833657276886214, 37.40290199999999], {
            content: 'ААА ТракСервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ААА ТракСервис (Москва)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=190">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark143);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark144 = new ymaps.Placemark([55.9109217765483, 37.53903250000001], {
            content: 'Техцентры VOLVO',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Техцентры VOLVO (Москва)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=191">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark144);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark145 = new ymaps.Placemark([55.72655277727303, 38.009327500000005], {
            content: 'Кваттро-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Кваттро-Сервис (Москва)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=192">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark145);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark146 = new ymaps.Placemark([55.92479427651213, 36.8800555], {
            content: 'ТрансМан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТрансМан (Истра)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=193">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark146);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark147 = new ymaps.Placemark([55.55392810152981, 37.776874999999976], {
            content: 'Интертранссервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Интертранссервис (Москва)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=194">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark147);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark148 = new ymaps.Placemark([55.66359827751771, 37.8930585], {
            content: 'СТС Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>СТС Трак Сервис (Люберцы)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=195">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark148);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark149 = new ymaps.Placemark([55.8413870688986, 38.6514345], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Павловский Посад)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=196">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark149);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark150 = new ymaps.Placemark([55.84888752963922, 38.656195499999946], {
            content: 'Трак-Посад',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Трак-Посад (Павловский Посад)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=197">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark150);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark151 = new ymaps.Placemark([56.17031977551352, 37.00195649999993], {
            content: 'Полярная Звезда',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Полярная Звезда (Солнечногорск)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=198">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark151);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark152 = new ymaps.Placemark([56.20197752294501, 36.95447199999994], {
            content: 'Полярная звезда',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Полярная звезда (Солнечногорск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=199">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark152);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark153 = new ymaps.Placemark([57.6587, 39.8128], {
            content: 'Грузовой Автоцентр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Грузовой Автоцентр (Ярославль)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=202">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark153);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark154 = new ymaps.Placemark([59.7643, 30.4809], {
            content: 'ИВ-Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИВ-Сервис (Санкт-Петербург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=203">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark154);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark155 = new ymaps.Placemark([55.7917, 49.1309], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Казань)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=206">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark155);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark156 = new ymaps.Placemark([58.5711, 31.2625], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Великий Новгород)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=205">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark156);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark157 = new ymaps.Placemark([58.0355, 55.8402], {
            content: 'Авто Флот',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Авто Флот (Пермь)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=207">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark157);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark158 = new ymaps.Placemark([47.3069, 39.6502], {
            content: 'Нейс ЮГ',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Нейс ЮГ (Ростов-на-Дону)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=208">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark158);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark159 = new ymaps.Placemark([47.12004557430816, 39.85989299999995], {
            content: 'Грифон',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Грифон (Ростов-на-Дону)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=209">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark159);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark160 = new ymaps.Placemark([44.9513, 39.1132], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Краснодар)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=210">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark160);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark161 = new ymaps.Placemark([45.0295, 39.1300], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Краснодар)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=211">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark161);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark162 = new ymaps.Placemark([44.1852, 43.1321], {
            content: 'Кавказ Автосервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Кавказ Автосервис (Минеральные воды)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=212">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark162);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark163 = new ymaps.Placemark([56.87293174604755, 60.6572366404026], {
            content: 'ООО &quot;УралЭкоСервисТранс&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;УралЭкоСервисТранс&quot; (Екатеринбург)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=213">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark163);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark164 = new ymaps.Placemark([55.1090, 61.4082], {
            content: 'Коммерческий Транспорт',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Коммерческий Транспорт (Челябинск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=214">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark164);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark165 = new ymaps.Placemark([54.9984, 73.4735], {
            content: 'ТЭК Аврора',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТЭК Аврора (Омск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=215">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark165);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark166 = new ymaps.Placemark([56.0501, 92.8360], {
            content: 'Восток Сервис Класс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Восток Сервис Класс (Красноярск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=216">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark166);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark167 = new ymaps.Placemark([53.3836, 83.7723], {
            content: 'Сиб Трак Центр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Сиб Трак Центр (Барнаул)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=217">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark167);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark168 = new ymaps.Placemark([54.4370, 86.4133], {
            content: 'Транзит',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Транзит (Белово)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=218">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark168);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark169 = new ymaps.Placemark([48.5588, 135.0675], {
            content: 'Ферронордик Машины',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Ферронордик Машины (Хабаровск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=219">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark169);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark170 = new ymaps.Placemark([43.32719615828367, 132.08254224603266], {
            content: 'Прим Трак',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Прим Трак (Артем)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=220">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark170);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark171 = new ymaps.Placemark([50.2851, 127.5150], {
            content: 'Трак Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Трак Сервис (Благовещенск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=221">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark171);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark172 = new ymaps.Placemark([57.1530, 65.5343], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Тюмень)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=222">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark172);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark173 = new ymaps.Placemark([54.600801708325335, 39.768282110450734], {
            content: 'Рязань Скан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Рязань Скан (Рязань)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=223">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark173);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark174 = new ymaps.Placemark([59.8096, 30.1266], {
            content: 'ТрейдТрак и Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТрейдТрак и Сервис (Санкт-Петербург)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=224">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark174);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark175 = new ymaps.Placemark([53.22323575138796, 50.19193796627046], {
            content: 'Самара Скан Сервис',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Самара Скан Сервис (Самара)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=225">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark175);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark176 = new ymaps.Placemark([53.2345, 45.0136], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Пенза)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=226">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark176);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark177 = new ymaps.Placemark([55.6584, 52.3244], {
            content: 'Альфа Скан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Альфа Скан (Набережные Челны)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=227">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark177);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark178 = new ymaps.Placemark([54.9666, 82.8093], {
            content: 'Авто Трак',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Авто Трак (Новосибирск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=228">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark178);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark179 = new ymaps.Placemark([51.35066179757539, 37.84662637301632], {
            content: 'ООО &quot;Оскол Трак&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Оскол Трак&quot; (Старый Оскол)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=230">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark179);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark180 = new ymaps.Placemark([54.86999041349907, 73.29020301356115], {
            content: 'ООО &quot;Большие детали&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Большие детали&quot; (Омск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=231">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark180);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark181 = new ymaps.Placemark([55.46403373479791, 65.13132869507118], {
            content: 'КурганСкан',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КурганСкан (Курган)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=232">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark181);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark182 = new ymaps.Placemark([54.94920398640123, 82.91263235581971], {
            content: 'СибТрансКолд',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>СибТрансКолд (Новосибирск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=233">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark182);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark183 = new ymaps.Placemark([56.88530462302072, 53.313579679901345], {
            content: 'ООО &quot;Камион Сервис&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Камион Сервис&quot; (Ижевск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=234">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark183);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark184 = new ymaps.Placemark([58.575852441784875, 31.25824469080731], {
            content: 'ЗАО &quot;Новтрак&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ЗАО &quot;Новтрак&quot; (Великий Новгород)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=235">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark184);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark185 = new ymaps.Placemark([61.25692861144853, 46.66881446197123], {
            content: 'ИП Елезов',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ИП Елезов (Котлас)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=236">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark185);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark186 = new ymaps.Placemark([59.22900107871349, 39.93050386375424], {
            content: 'МБ Вологда',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>МБ Вологда (Вологда)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=237">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark186);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark187 = new ymaps.Placemark([55.3765410048734, 36.69044439451219], {
            content: 'ООО &quot;Нара Авто Транс&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Нара Авто Транс&quot; (Наро-Фоминск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=238">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark187);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark188 = new ymaps.Placemark([56.126026089209134, 101.54601703650717], {
            content: 'ООО &quot;Бомонд&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Бомонд&quot; (Братск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=239">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark188);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark189 = new ymaps.Placemark([51.30588954513002, 37.62053615920153], {
            content: 'Губкин-Трак',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Губкин-Трак (Губкин)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=240">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark189);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark190 = new ymaps.Placemark([43.473547466087794, 131.92648139057027], {
            content: 'ООО &quot;Атриум&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;Атриум&quot; (Кипарисово)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=241">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark190);





        //Сервисные центры BPW
        //   /assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png


        myPlacemark191 = new ymaps.Placemark([52.34928131803304, 104.14261984565859], {
            content: 'Эланд',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Эланд (Иркутск)</b><br>Сервисные центры BPW<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=242">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/e0dde53eef9073c42cdc5d368fb67df0.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark191);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark192 = new ymaps.Placemark([58.58028712423885, 49.60497559752274], {
            content: 'Техцентр',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Техцентр (Киров)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=315">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark192);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark193 = new ymaps.Placemark([53.19350663279503, 50.29220909755325], {
            content: 'ГК Перспектива',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ГК Перспектива (Самара)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=316">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark193);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark194 = new ymaps.Placemark([56.87293174604755, 60.6572366404026], {
            content: 'ООО &quot;УралЭкоСервисТранс&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;УралЭкоСервисТранс&quot; (Екатеринбург)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=317">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark194);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark195 = new ymaps.Placemark([53.348497499913734, 83.60426413128272], {
            content: 'АлтАвто',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>АлтАвто (Барнаул)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=318">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark195);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark196 = new ymaps.Placemark([57.1530, 65.5343], {
            content: 'ТРАК ЦЕНТР',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ТРАК ЦЕНТР (Тюмень)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=319">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark196);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark197 = new ymaps.Placemark([54.95487448839061, 73.27486227976216], {
            content: 'ООО «Евросибтрак»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Евросибтрак» (Омск)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=320">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark197);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark198 = new ymaps.Placemark([55.325982652663555, 86.05770498487074], {
            content: 'КАД',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>КАД (Кемерово)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=321">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark198);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark199 = new ymaps.Placemark([48.52667542994868, 135.06192922883605], {
            content: 'Казтехобслуживание',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Казтехобслуживание (Хабаровск)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=322">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark199);





        //Сервисные центры Wabco без поддержки  гарантии
        //   /assets/img/centres-type/74309954a9ccade8880818270461e5aa.png


        myPlacemark200 = new ymaps.Placemark([59.56775367404539, 150.80852308399196], {
            content: 'Торгмонтаж-Плюс',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>Торгмонтаж-Плюс (Магадан)</b><br>Сервисные центры Wabco без поддержки  гарантии<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=323">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/74309954a9ccade8880818270461e5aa.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark200);





        //Сервисный центр рекомендованный BONUM
        //   /assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png


        // myPlacemark201 = new ymaps.Placemark([56.077031, 92.932657], {
        //     content: 'ООО &quot;МСервис&quot;',
        //     balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;МСервис&quot; (Красноярск)</b><br>Сервисный центр рекомендованный BONUM<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=324">подробная информация о центре</a></div></td></tr></table>'
        // }, {
        //     iconLayout: 'default#image',
        //     iconImageHref: '/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png',
        //     iconImageSize: [30, 48],
        //     iconImageOffset: [-15, -48],

        // });
        // myMap1.geoObjects.add(myPlacemark201);





        //Сервисный центр рекомендованный BONUM
        //   /assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png


        myPlacemark202 = new ymaps.Placemark([55.001132, 73.189663], {
            content: 'ООО &quot;ГРИНАВТО&quot;',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО &quot;ГРИНАВТО&quot; (Омск)</b><br>Сервисный центр рекомендованный BONUM<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=325">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark202);





        //Сервисный центр рекомендованный BONUM
        //   /assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png


        myPlacemark203 = new ymaps.Placemark([47.127452, 39.720591], {
            content: 'ООО «Транзит-Дон-Авто»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Транзит-Дон-Авто» (Батайск)</b><br>Сервисный центр рекомендованный BONUM<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=328">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/bc4fd2810c06ef240dad070869da429a.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark203);





        //Сервисные станции SAF
        //   /assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png


        myPlacemark204 = new ymaps.Placemark([47.127452, 39.720591], {
            content: 'ООО «Транзит-Дон-Авто»',
            balloonContent: '<table border="0" style="padding:10px" cellpadding="0" cellspacing="0"><tr><td style="padding-right:5px;" valign="top" align="left"><img src="/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png" height="48" border="0"></td></tr><tr><td valign="top"  style="padding-left:5px;padding-right:5px; font-size:14px;font-family:Tahoma;color:black;" valign="top"><b>ООО «Транзит-Дон-Авто» (Батайск)</b><br>Сервисные станции SAF<br><br><div class="town_diver town_diver_more"><a class="d-none" href="/centres/?CenterID=327">подробная информация о центре</a></div></td></tr></table>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/assets/img/centres-type/9ee0d78f931537400d37384a015b2e52.png',
            iconImageSize: [30, 48],
            iconImageOffset: [-15, -48],

        });
        myMap1.geoObjects.add(myPlacemark204);



    }

});