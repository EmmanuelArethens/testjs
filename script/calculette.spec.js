describe('class calculette', () => {
    let calculette;
    
    beforeEach(() => {
        calculette = new calculatrice();
    });

    it('should calcul', () => {
        expect(calculette.calcul(2,2, '+')).toBe(4);
    });

});