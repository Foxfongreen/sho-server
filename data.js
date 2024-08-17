const list = document.querySelector("ul")


const convObject = {"100440269":{
    "structure_props":{"SvoystvoTip":{"name":"Тип","value":null},
    "SvoystvoPodkategoriya":{"name":"Подкатегория","value":"Конвектори електронне керування"},
    "SvoystvoOtdel":{"name":"Подразделение","value":"Климат Київ"},
    "SvoystvoKategoriya":{"name":"Категория","value":"Обігрівачі побутові"}},

    "common_properties":{"Naimenovanie":{"name":"Наименование","value":"RB3-1500EU"},
    "Articul":{"name":"Артикул","value":"0105010519-100440269"},
    "NaimenovanieBrend":{"name":"Бренд","value":"Roda"}},

    "description":{"name":"Описание","value":"Встановлення на стіну та на підлогу з комплектом опор. Автоматичне підтримання заданої температури. ТЕН з алюмінієвим оребренням. Ступінь захисту – IP24. II клас захисту від ураження електричним струмом. Захист від перегрівання. Захист при перекиданні. Електронний термостат: LCD дисплей, режими «Антизамерзання», «Економ», «Комфорт», «Програмування» (тижневий таймер), детектор відкритого вікна."},
    
    "remains":{},
    
    "category_props":{},

    "prices":{"VR":{"name":"Валюта РРЦ","value":"USD"},
    "R":{"name":"PPЦ","value":133},
    "VD":{"name":"Валюта оптовая","value":"USD"},
    "D":{"name":"Оптовая цена","value":81.5},
    "M":{"name":"МИЦ","value":2999},
    "VM":{"name":"Валюта МИЦ","value":"грн."}}
}}



const power =  parseInt(convObject["100440269"]["common_properties"]["Naimenovanie"]["value"].split(" ").find((item)=>{
return item.includes("EU")
}).split("-")[1])/1000;

const markup = `<li id="" class="good-list-item">
                            <img
                                class="goods-img"
                                width="300"
                                height="300"
                                src="./images/Fjord-cond.jpg"
                                alt="конвектор RODA"
                            />
                            <div class="item-info-wrapper">
                                <h2 class="title-model">
                                    Конвектор електричний ${convObject["100440269"]["common_properties"]["NaimenovanieBrend"]["value"]} ${convObject["100440269"]["common_properties"]["Naimenovanie"]["value"]}
                                </h2>
                                 <p class="min-tec-spec">
                                    Потужність обогріву,  ${power}кВт
                                </p>
                            </div>
                            <div class="buttons-wrapper">
                                <button class="item-button to-cart">ДО КОШИКА</button>
                            </div>
                    </li>`

                    // `<li id=${item.id} class="good-list-item">
                    //         <img
                    //             class="goods-img"
                    //             width="300"
                    //             height="300"
                    //             src="./images/Fjord-cond.jpg"
                    //             alt="конндиціонер Bergen Fjord"
                    //         />
                    //         <div class="item-info-wrapper">
                    //             <h2 class="title-model">
                    //                 Інверторний кондиціонер <span class="title-model-name">${item.name}</span>
                    //             </h2>
                    //             <p class="min-tec-spec">
                    //                 Холодовиробництво, кВт ${item.specifications.coolingCapacity}  
                    //             </p>
                    //              <p class="min-tec-spec">
                    //                 Потужність обогріву, кВт ${item.specifications.heatingCapacity}
                    //             </p>
                    //             <p class="price">${item.price}₴</p>
                    //         </div>
                    //         <div class="buttons-wrapper">
                    //             <button class="item-button to-cart">ДО КОШИКА</button>
                    //             <a href = "./index${item.btiIdx}.html" class="item-button detail">ДЕТАЛЬНІШЕ</a>
                    //         </div>
                    //     </li>`;

list.innerHTML = markup