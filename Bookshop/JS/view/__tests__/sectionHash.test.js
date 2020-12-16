/* eslint-env jest */
import SectionHash from '../sectionHash';

describe('Sales Page Module', ()=> {
    it('should return filled action page template', function () {

        const uniqueID='fff123';
        // const data={"books": [{
        //         "self-development": [
        //             {
        //                 uniqueID: "fff111",
        //                 url: "ask-a-manager",
        //                 images: "Pictures/selfd1.jpeg",
        //                 name: "«Ask a Manager. Спитай у керівника: як працювати з нетямущими колегами й босами, які крадуть ваш робочий час»",
        //                 description: "За десять років консультацій офісних працівників Елісон Ґрін зрозуміла, що люди уникають незручних розмов, бо просто не знають, що сказати. У цій корисній кожному книжці авторка відповідає на відверті запитання про проблеми, з якими ви можете зіткнутися в роботі. ",
        //                 genre: "Бізнес-психологія",
        //                 author: "Елісон Ґрін",
        //                 year: "2019",
        //                 price: "199/149",
        //                 publisher: "Віват",
        //                 sales: "1"
        //             }]}]};
        const blockelement={
            author:'author',
            name: 'name',
            images:'image',
            url: 'url',
            uniqueID: 'fff152',
            price:'555/405',
            sales: 1
        };
        const catalog=[blockelement];
        const data=[{catalog}];

        const Sh= new SectionHash();
        const {hash, section }=Sh.getCurrentSectionHash(uniqueID, data);
        expect(hash).toBeDefined();
        expect(section).toBeDefined();
    });
});
