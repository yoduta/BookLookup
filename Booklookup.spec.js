test('Booklookup',()=>{
    const AmazonServices = jest.fn('abcd1234')
    .mockReturnValue ({name:'Photoshop',cover:'photoshop.com',ispn:'abcd1234'})
    let app = new Booklookup (AmazonServices)
    let ispn = 'abcd1234'
    let value = app.result(ispn)
    





})