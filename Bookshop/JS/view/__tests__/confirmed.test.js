/* eslint-env jest */
import confirmed from '../confirmed';


describe('Confirmed Page Module', ()=> {
    it('should return filled Confirmed page template', function () {
        const testID=5;
        expect(testID).toBeDefined();

        const Expectedview = (testID) => `
  <thead >
    <tr>
      <th scope="col" >Status</th>
      <th scope="col" >About</th>
    </tr>
  </thead>
    <tr>
        <th scope="row">Congrats! Your order confirmed!!</th> 
        <th scope="row">Your OrderID is: ${expect(testID).not.toBeNull()}</th>
    </tr>
`;

        expect(confirmed(testID)).toBe(Expectedview);
    });

});