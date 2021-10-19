import homePage from "../../pageObjects/home/homePage.js";
import healper from "../../resource/helpers.js"

describe('Verify Home Page Test cases',async()=>{
    
    beforeEach (async function (){
        await browser.url('/');
        healper.waitforPageload();
                         
       })
    
    it('Test 1:- Verify The home Page UI and Links',async()=>{
        await  homePage.verifyHomePage();
    })

    it('Test 2:- Verify The User SignUp',async()=>{
        await  homePage.SignuptoRelysia();
    })
})