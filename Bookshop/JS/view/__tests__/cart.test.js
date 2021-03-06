/* eslint-env jest */
import cart from '../cart.js';

describe('Cart Page Module', ()=> {
    it('should return filled Cart page template', function () {

        var json= {
            'books': [{
                'self-development': [
                    {
                        'uniqueID': 'fff111',
                        'url': 'ask-a-manager',
                        'images': 'Pictures/selfd1.jpeg',
                        'name': '«Ask a Manager. Спитай у керівника: як працювати з нетямущими колегами й босами, які крадуть ваш робочий час»',
                        'description': 'За десять років консультацій офісних працівників Елісон Ґрін зрозуміла, що люди уникають незручних розмов, бо просто не знають, що сказати. У цій корисній кожному книжці авторка відповідає на відверті запитання про проблеми, з якими ви можете зіткнутися в роботі. ',
                        'genre': 'Бізнес-психологія',
                        'author': 'Елісон Ґрін',
                        'year': '2019',
                        'price': '199/149',
                        'publisher': 'Віват',
                        'sales': '1'
                    },
                    {
                        'uniqueID': 'fff112',
                        'url': 'clear-mind',
                        'images': 'Pictures/selfd2.png',
                        'name': '«Структуроване мислення. Ясний розум в інформаційному хаосі»',
                        'description': 'Сучасний інформаційний простір щодня перенавантажує нас величезною кількістю даних. За такого ритму життя нам доводиться якомога швидше приймати рішення й реагувати на стрімкі зміни в суспільстві.',
                        'genre': 'Популярна психологія',
                        'author': 'Деніел Левітін',
                        'year': '2020',
                        'price': '525',
                        'publisher': 'Наш Формат',
                        'sales': '0'
                    },
                    {
                        'uniqueID': 'fff113',
                        'url': 'komunikatsiya-vid-nulya',
                        'images': 'Pictures/selfd3.jpg',
                        'name': '«Комунікація від нуля. Есеї для мані»',
                        'description': 'Ця книжка — про комунікацію, але цілком із незвичного ракурсу. Порівнюючи спілкування дорослих і дітей (на прикладі своєї доні), авторка робить несподівані відкриття.',
                        'genre': 'Мотивація, Психологія',
                        'author': 'Марія Титаренко',
                        'year': '2019',
                        'price': '200/100',
                        'publisher': 'Видавництво Старого Лева',
                        'sales': '1'
                    },
                    {
                        'uniqueID': 'fff114',
                        'url': '50-najkraschyh-knyzhok-iz-samorozvytku-v-infografitsi',
                        'images': 'Pictures/selfd4.jpeg',
                        'name': '«50 найкращих книжок із саморозвитку в інфографіці»',
                        'description': 'Обсяг інформації, яку генерують люди, зростає в геометричній прогресії. У пріоритеті у сучасної людини — інформаційні канали, що забезпечують легкість, високу швидкість і ефективність сприйняття.',
                        'genre': 'Популярна психологія',
                        'author': 'Ірина Юреня',
                        'year': '2020',
                        'price': '400/390',
                        'publisher': 'Моноліт-Bizz',
                        'sales': '1'
                    }]
            },
            {
                'motivational': [
                    {
                        'uniqueID': 'fff115',
                        'url': 'prostymy-slovamy',
                        'images': 'Pictures/motiv1.jpeg',
                        'name': '«Простими словами. Як розібратися у своїх емоціях»',
                        'description': 'Якщо ви переживали схоже й не могли втямити, у чому річ — ця книжка для вас. У ній журналіст Марк Лівін і Ілля Полудьонний простими словами розповідають про емоції та почуття.',
                        'genre': 'Популярна психологія, Мотивація',
                        'author': 'Марк Лівін , Ілля Полудьонний',
                        'year': '2020',
                        'price': '140',
                        'publisher': 'Наш Формат',
                        'sales': '0'
                    },
                    {
                        'uniqueID': 'fff116',
                        'url': 'syla-divchat',
                        'images': 'Pictures/motiv2.jpeg',
                        'name': '«Сила дівчат»',
                        'description': '«Сила дівчат: маленькі історії великих вчинків» збірка п’ятдесятьох життєписів видатних українок, до якої увійшли оповіді про Катерину Білокур, Лесю Українку, Ліну Косенко, Ольгу Харлан тощо.',
                        'genre': 'Мотиваційна література',
                        'author': 'КАТЕРИНА БАБКІНА, МАРК ЛІВІН',
                        'year': '2018',
                        'price': '299/250',
                        'publisher': '#книголав',
                        'sales': '1'
                    },
                    {
                        'uniqueID': 'fff117',
                        'url': 'radist-magiya-prostyh-rechej',
                        'images': 'Pictures/motiv3.jpeg',
                        'name': '«Радість. Магія простих речей»',
                        'description': 'Що станеться, якщо додати до інтер’єру кольору? Кав’ярні зі строкатими стінами приваблюватимуть більше відвідувачів, у школах буде приємніше навчатися, а в офісах зросте продуктивність.',
                        'genre': 'Мотиваційна література',
                        'author': 'Інґрід Фетелль Лі',
                        'year': '2020',
                        'price': '210',
                        'publisher': 'Наш Формат',
                        'sales': '0'
                    },
                    {
                        'uniqueID': 'fff118',
                        'url': 'chudovyj-ranok.-yak-ne-prospaty-zhyttya',
                        'images': 'Pictures/motiv4.jpeg',
                        'name': '«Чудовий ранок. Як не проспати життя»',
                        'description': 'Ми звикли ділити людей на дві категорії — «жайворонків» та «сов». Але Гел Елрод переконаний в іншому.',
                        'genre': 'Мотиваційна література',
                        'author': 'Гел Елрод',
                        'year': '2017',
                        'price': '200/175',
                        'publisher': 'Наш Формат',
                        'sales': '1'
                    }]
            },
            {
                'psychological': [
                    {
                        'uniqueID': 'fff119',
                        'url': 'prokrastynaciya',
                        'images': 'Pictures/psych1.jpeg',
                        'name': '«Прокрастинація»',
                        'description': 'Відкладаєте важливі й дрібні справи на завтра, на потім, на останній тиждень перед дедлайном? Тоді ви — справжнісінький прокрастинатор.',
                        'genre': 'Психологія',
                        'author': 'Бурка Джейн Б., Юен Ленора М.',
                        'year': '2018',
                        'price': '350/150',
                        'publisher': 'Видавництво Старого Лева',
                        'sales': '1'
                    },
                    {
                        'uniqueID': 'fff1110',
                        'url': 'prygody-v-orgazmotroni',
                        'images': 'Pictures/psych2.jpeg',
                        'name': '«Пригоди в оргазмотроні»',
                        'description': 'Віденського психоаналітика, сексолога, біолога Вільгельма Райха (який народився в Україні) називають найвпливовішим та найбільш горезвісним мислителем ХХ сторіччя.',
                        'genre': 'Психологія',
                        'author': 'Тернер Крістофер',
                        'year': '2018',
                        'price': '200',
                        'publisher': 'Видавництво Старого Лева',
                        'sales': '0'
                    }
                ]
            }]

        };
        const data=JSON.stringify(json);
        const books_in_cart=1;


        function CartArrayExp(dataObject, books_in_cart) {
            expect(books_in_cart).not.toBeUndefined();
            expect(dataObject).not.toBeUndefined();
            let cart_arr = [];
            expect(cart_arr.length).toEqual(0);
            var how_much = 0;
            expect(how_much).toEqual(0);
            for (let i = 0; i < books_in_cart.length; i++) {

                dataObject.map((catalog) => {

                    catalog[Object.keys(catalog)].map((book) => {
                        expect(catalog.has(Object.keys(catalog))).toEqual(true);
                        if (book.uniqueID == books_in_cart[i]) {
                            expect(book.uniqueID).toEqual(books_in_cart[i]);
                            if (book.sales == 0) {
                                expect(books_in_cart).toEqual(0);
                                const howm = how_much;
                                how_much = how_much + Number(book.price);
                                expect(how_much).toEqual(howm + Number(book.price));
                            } else {
                                const howm = how_much;
                                how_much = how_much + Number(book.price.split('/')[1]);
                                expect(how_much).toEqual(howm + Number(book.price.split('/')[1]));
                            }
                            const len = cart_arr.length;
                            cart_arr.push(book);
                            expect(cart_arr.length).toEqual(len + 1);
                        }
                    });

                });

            }
            return {cart_arr, how_much};
        }

        // expect(cart.CartArray(data, books_in_cart)).toEqual(CartArrayExp(data, books_in_cart));

        function actualPriceExpect (price){
            expect(price).toBeDefined();
            if(expect(price.split('/')[1]).toEqual(price.split('/')[1])) {
                //  return jest.fn(() => true)
                return expect('').toBe('');

            }
            //return jest.fn(() => `${price.split('/')[0]}UAH`)
            return `${price.split('/')[0]}UAH`;

        }
        expect(cart.actualPrice('255/100')).toEqual(actualPriceExpect('255/100'));
        //expect(actualPriceExpect('255/100')).toHaveBeenCalled();

        function noDiscountExpect(price)
        {
            if(expect(price.split('/')[1]).toEqual(price.split('/')[1]))
            {
                return `${price.split('/')[0]}UAH`;
            }
            else
                return ` ${price.split('/')[1]}UAH`;
        }

        expect(cart.noDiscount('255/100')).toEqual(noDiscountExpect('255/100'));

        const viewTest = (data, books_in_cart, {cart_arr, how_much}=CartArrayExp(data, books_in_cart) )=> `
  <thead >
    <tr>
      <th scope="col" >Number</th>
      <th scope="col" >Unique ID</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  ${cart_arr.map((book, index)=>`

    <tr>
        <th scope="row">${index+1}</th> 
        <th scope="row">${book.uniqueID}</th>
        <th scope="row">${book.name}</th>
        <th scope="row">${book.author}</th>
        <th scope="row">${actualPriceExpect(book.price).strike()} ${cart.noDiscount(book.price)}</th>
        <th scope="row"><button type="button" class="btn btn-primary" id="del${book.uniqueID}">Delete</button></th>
    </tr>
      
      
`).join('')
}
      <tr>
        <th scope="row"></th> 
        <th scope="row"></th> 
        <th scope="row"></th> 
        <th scope="row">Price</th> 
        <th scope="row">${how_much}UAH</th>
        <th scope="row"></th> 
    </tr>
`;
        expect(cart.view(data, books_in_cart)).toBe(viewTest(data, books_in_cart));


    });



});