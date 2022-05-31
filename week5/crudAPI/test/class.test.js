const chai = require('chai')
const chaihttp = require('chai-http')

chai.use(chaihttp)

const {expect, request} = chai

const host = `127.0.0.1:4000`

describe('API TESTS FROM', ()=> {

    //to pass to pass 
    it('should fetch all products', async ()=> {
    const res = await request(host).get("/api/all")
      .set("content-type", "application/json")

      expect(res).to.have.status(200)
      
      
    }).timeout(20000)

    //pass to pass
    it('Response should contain actual product data', async ()=> {
        const res = await request(host).get("/api/all")
          .set("content-type", "application/json")
    
          expect(res.text).to.exist
          
        }).timeout(20000)

        // Fail to Pass 
    it('it should not fetch product data if endpoint is wrongly spelt', async ()=> {
            const res = await request(host).get("/api/all/get")
            .set("content-type", "application/json")
        
            expect(res).to.have.status(404)
              
        }).timeout(20000)

        it("It should POST a new User", async () => {
            const res = await request(host)
                .post("/api/user")
                .send({
                  fullName: "John",
                  email: 'prospeyyr@gmail.com',
                  password: "jakande"
                 });
        
              expect(res).to.have.status(201);
              
            }).timeout(20000);
})