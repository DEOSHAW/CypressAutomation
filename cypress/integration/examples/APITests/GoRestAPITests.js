describe("GoRest API Tests",()=>{


    it("Create User",()=>{


        cy.request({

            method: "POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
               
              authorization:"Bearer 520d7d23911742a12c291eff0f802f8a1958561234ccf53144c597d4f9b02d06"
            },
            body:{
                
                  "name": "Ayush",
                   "gender": "Male",
                   "email": "test"+(Math.floor(Math.random(1000)*1000))+"@gmail.com",
                   "status": "active"
                  }
        }).then((response)=>{

            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('gender','male');
            cy.log(response.body.email);

        })

    })



})


