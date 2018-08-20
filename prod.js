const data = [{ "productID": 3184, "name": "Благовония Бутанские / Zim-poe / 19-02425", "in_stock": 9, "Price": 340, "description": "\"Zim\" означает здоровый сон. эти благовония помогают создать уют и спокойный сон после рабочего дня. Благословение природы. ", "production": "India", "option_value": "Белый", "option_Ru": "Цвет", "option_En": "color", "rozName": "test", "smallPic": "a02425_small.jpg", "bigPic": "a02425_big.jpeg" }, { "productID": 3184, "name": "Благовония Бутанские / Zim-poe / 19-02425", "in_stock": 9, "Price": 340, "description": "\"Zim\" означает здоровый сон. эти благовония помогают создать уют и спокойный сон после рабочего дня. Благословение природы. ", "production": "India", "option_value": "Палки", "option_Ru": "Материал", "option_En": "material", "rozName": "test", "smallPic": "a02425_small.jpg", "bigPic": "a02425_big.jpeg" }, { "productID": 3184, "name": "Благовония Бутанские / Zim-poe / 19-02425", "in_stock": 9, "Price": 340, "description": "\"Zim\" означает здоровый сон. эти благовония помогают создать уют и спокойный сон после рабочего дня. Благословение природы. ", "production": "India", "option_value": "23х4х4 см", "option_Ru": "Размер", "option_En": "size", "rozName": "test", "smallPic": "a02425_small.jpg", "bigPic": "a02425_big.jpeg" }, { "productID": 3184, "name": "Благовония Бутанские / Zim-poe / 19-02425", "in_stock": 9, "Price": 340, "description": "\"Zim\" означает здоровый сон. эти благовония помогают создать уют и спокойный сон после рабочего дня. Благословение природы. ", "production": "India", "option_value": "Благовония", "option_Ru": "Тип", "option_En": "type", "rozName": "test", "smallPic": "a02425_small.jpg", "bigPic": "a02425_big.jpeg" }, { "productID": 3185, "name": "Благовония Бутанские / Zim-poe / 19-02426", "in_stock": 10, "Price": 320, "description": "Благовония Бутанские / Zim-poe  19-02426", "production": "India", "option_value": "23х4,5х4,5 см", "option_Ru": "Размер", "option_En": "size", "rozName": "test", "smallPic": "a02426_small.jpg", "bigPic": "a02426_big.jpeg" }, { "productID": 3186, "name": "Благовония Бутанские / Riwo Sangcho / 19-325", "in_stock": 8, "Price": 325, "description": "Привлекают хорошую энергию для стремления и процветания в делах и проектах. Содержат лучшие фрукты, злаки, цветы лекарственных трав, минералы и пряности.", "production": "India", "option_value": "23х4,5х4,5 см", "option_Ru": "Размер", "option_En": "size", "rozName": "test", "smallPic": "a02427_small.jpg", "bigPic": "a02427_big.jpeg" }, { "productID": 3187, "name": "Благовония Бутанские / Purification / 19-291", "in_stock": 9, "Price": 290, "description": "Бутанское благовоние Очищающие - благовоние Удачи (Purification). Содержат целебные растения, злаки, специи, порошки минералов, цветы и порошки, освященные буддистскими монахами, интенсивно практикующими очищающие мантры. Их возжигание успокаивает ум, очищает пространство от негативных энергий, притягивает светлые энергии, приносящие мир и удачу. \r\n", "production": "India", "option_value": "Серые", "option_Ru": "Цвет", "option_En": "color", "rozName": "test", "smallPic": "a02428_small.jpg", "bigPic": "a02428_big.jpeg" }, { "productID": 3187, "name": "Благовония Бутанские / Purification / 19-291", "in_stock": 9, "Price": 290, "description": "Бутанское благовоние Очищающие - благовоние Удачи (Purification). Содержат целебные растения, злаки, специи, порошки минералов, цветы и порошки, освященные буддистскими монахами, интенсивно практикующими очищающие мантры. Их возжигание успокаивает ум, очищает пространство от негативных энергий, притягивает светлые энергии, приносящие мир и удачу. \r\n", "production": "India", "option_value": "Палки", "option_Ru": "Материал", "option_En": "material", "rozName": "test", "smallPic": "a02428_small.jpg", "bigPic": "a02428_big.jpeg" }, { "productID": 3187, "name": "Благовония Бутанские / Purification / 19-291", "in_stock": 9, "Price": 290, "description": "Бутанское благовоние Очищающие - благовоние Удачи (Purification). Содержат целебные растения, злаки, специи, порошки минералов, цветы и порошки, освященные буддистскими монахами, интенсивно практикующими очищающие мантры. Их возжигание успокаивает ум, очищает пространство от негативных энергий, притягивает светлые энергии, приносящие мир и удачу. \r\n", "production": "India", "option_value": "23х4х4 см", "option_Ru": "Размер", "option_En": "size", "rozName": "test", "smallPic": "a02428_small.jpg", "bigPic": "a02428_big.jpeg" }]
let newdata = [];
for (let [index, value] of data.entries()) {
    if (index == 0) {
        newdata.push({
            name: value.name,
            id: value.productID,
            rozetka: value.rozName,
            pic: {
                small: value.smallPic,
                large: value.bigPic
            },
            options: {
                [value.option_En]: value.option_value
            }
        })
    } else {
        let lastElem = newdata[newdata.length - 1]
        if (lastElem.product === value.productID) {
            lastElem.options = Object.assign(lastElem.options, {
                [value.option_En]: value.option_value
            })
        } else {
            newdata.push({
                name: value.name,
                id: value.productID,
                rozetka: value.rozName,
                pic: {
                    small: value.smallPic,
                    large: value.bigPic
                },
                options: {
                    [value.option_En]: value.option_value
                }
            })
        }
    }
}
console.log(newdata)
