import loginPage from "../../pageObjects/login/loginPage";
import healper from "../../resource/helpers.js";
var assert = require('assert');

describe("Login Page Test Cases ",async()=>{
   
    beforeEach (async function (){
        await browser.url('/');
        healper.waitforPageload();
                         
       })
    
    it('Verify User is able to login to Relyisa Web app ',async()=>{
       try {
       
        await  loginPage.loginToRelysia(); 
       
    } catch (error) {
        console.log("Error:-"+error);
        assert.fail(); 
       }
        
    })
})