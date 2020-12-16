/* eslint-env jest */
import TemplateProcessor from '../templateProcessor';
describe ('TemplateProcessor', ()=> {
    beforeAll(() =>{
        document.body.innerHTML='<div id="showtable"></div>';
    });

    it('should render view', ()=>{
        const data= '<div>our view</div>';
        const templateProcessor = new TemplateProcessor();
        expect(document.body.innerHTML).toEqual('<div id="showtable"></div>');
        templateProcessor.render(data);
        expect(document.body.innerHTML).toEqual('<div id="showtable"><div>our view</div></div>');
    });

});
