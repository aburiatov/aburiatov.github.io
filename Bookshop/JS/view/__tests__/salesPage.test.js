/* eslint-env jest */
import salesPage from '../salesPage';

describe('Sales Page Module', ()=> {
    it('should return filled action page template', function () {
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


        function isSale(dataObject)
        {
            let SalesObject=[];
            dataObject[Object.keys(dataObject)].map((product)=>{

                if (expect(product.sales).toEqual(1))
                {
                    const len=SalesObject.length;

                    expect(product.sales).toEqual(1);
                    SalesObject.push(product);
                    expect(SalesObject.length).toEqual(len+1);
                }});
            expect(SalesObject.length).not.toBeNull();
            return SalesObject;
        }


        function actualPrice (price){
            if(expect(price.split('/')[1]).toEqual(price.split('/')[1])) {
                const ret='';
                expect(ret).toEqual('');
                return ret;
            }
            return `${price.split('/')[0]}UAH`;

        }
        function noDiscount(price)
        {
            if(expect(price.split('/')[1]).toEqual(price.split('/')[1]))
            {
                return `${price.split('/')[0]}UAH`;
            }
            else
                return ` ${price.split('/')[1]}UAH`;
        }

        const expectedResult=`
        <thead>
        <tr>
            <th class="TextHeader ">BookShop "PROЧИТАЙ"</th>
        </tr>
        </thead>
        <tbody>
${data.map((catalogname) => `
                <tr>
                <th scope="row" class="PicSales ">
                <div class=" card mb-3 card-header TextTitle"> ${Object.keys(catalogname)} </div>
${isSale(catalogname).map((blockelement) => `
                    <div class="card border-info mb-3  first-block block-size" style="max-width: 40%;">
                        <div class="card-header "> ${blockelement.author}</div>
                        <div class="card-body">
                            <h4 class="card-title">${blockelement.name}</h4>
                            <img src="${blockelement.images}" alt="${blockelement.url}" />
                        </div>
                        <button type="button" class="btn btn-secondary" id="${blockelement.uniqueID}">Description</button>
                        <button type="button" class="btn btn-secondary" id="${expect(blockelement.uniqueID).toBeDefined()}"" >${actualPrice(blockelement.price).strike()} ${noDiscount(blockelement.price)}</button>
                    </div>
`).join('')}
                    </div>
                </tr>
`).join('')}
</tbody>
`;
        expect(salesPage(data)).toBe(expectedResult);
    });
});