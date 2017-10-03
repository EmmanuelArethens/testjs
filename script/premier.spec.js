it('should be true', () => {
expect(true).toBe(true);
});


describe('funtion additionner', () =>{
it('should add 2 to 2', () => {
    let resultat = additionner(2,2);
    expect(resultat).toBe(4);
})
});

describe('funtion additionner', () =>{
    it('should add -2 to -2', () => {
        let resultat = additionner(-2,-2);
        expect(resultat).toBe(-4);
    })
    });



