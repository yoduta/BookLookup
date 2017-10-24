function Booklookup (AmazonServices){
    this.AmazonServices = AmazonServices

    this.result = (ispn) => {
        let Result = this.AmazonServices(ispn)
        return Result
    }
}




test('Booklookup',()=>{
    const AmazonServices = jest.fn('abcd1234')
    .mockReturnValue ({name:'Photoshop CS7',cover:'photoshop.com',ispn:'abcd1234'})
    let app = new Booklookup (AmazonServices)
    let ispn = 'abcd1234'
    let value = app.result(ispn)

expect(value).toEqual({name:'Photoshop CS7',cover:'photoshop.com',ispn:'abcd1234'})
expect(AmazonServices).toHaveBeenCalled()
expect(AmazonServices).toHaveBeenCalledWith(ispn)
expect(value.name).toBe("Photoshop CS7")
expect(value).toHaveProperty("cover")
expect(value.cover).toBe("photoshop.com")
expect(value.ispn).toBe('abcd1234')
expect(value.ispn).toHaveLength(8)




})