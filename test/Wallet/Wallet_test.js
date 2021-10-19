import loginPage from "../../pageObjects/login/loginPage";
import healper from "../../resource/helpers.js";
import walletPage from "../../pageObjects/wallet/walletPage.js";
import homePage from "../../pageObjects/home/homePage";
var assert = require('assert');

describe('Verify wallet Screen',async()=>{

        beforeEach (async function (){
        await browser.url('/');
        healper.waitforPageload();
        await  loginPage.loginToRelysia(); 
        healper.waitforPageload();

        })
   
    it('Test 1 Verify the wallet screen after user login',async()=>{
        await loginPage.LoginWalletLink.click();
        await expect(browser).toHaveUrlContaining('/app/wallet');
        await walletPage.verifyWalletScreen();

    })
})