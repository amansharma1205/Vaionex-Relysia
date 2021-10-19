import homePage from "../home/homePage.js";
import data from "../../resource/login/login_Resource.js";
class loginPage {
    get SignInBetaSecret() { return $("//input[@class='custom-input_input__MR5uq' and  @placeholder='Beta Secret']");}
    get SignInEmail() { return $("//input[@type='email' and  @placeholder='Email']");}
    get SignInPassword() { return $("//input[@type='password' and  @placeholder='Password']");}
    get SignInRememberMeCheckbox() { return $("//input[@id='remember' and @type='checkbox']");}
    get SignInForgotPassword() { return $("//a[@href='/' and @text()='Forgot password?']");}
    get SignInButton() { return $("//button[@type='submit']/span[.='Login']");}
    get profileIcon() {return $("//div[@class='user-dropdown_info__3cHs4 user-dropdown_light__1nyts']");}
    get LoginWalletLink() { return $("//nav/a[@href='/app/wallet']");}
    get LoginSucessMSG() { return $("//div[@role='alert']/div[.='User Logged in Successfully']");}
    
    
    
    async loginToRelysia(){
       
        await homePage.homeSignInLink.waitForDisplayed();
        await homePage.homeSignInLink.click();
        await this.SignInBetaSecret.waitForDisplayed();
        await this.setValue(this.SignInBetaSecret,data.devServer_credencials.BetaSecret)
        await this.setValue(this.SignInEmail,data.devServer_credencials.email)
        await this.setValue(this.SignInPassword,data.devServer_credencials.password)
        await this.SignInButton.click();
        await this.profileIcon.waitForDisplayed({timeout: 60000});
        await expect(browser).toHaveUrlContaining('/app/wallet');
        this.LoginSucessMSG.waitForDisplayed();
        this.LoginSucessMSG.click();
     
    }

    async setValue(object,value){
       await object.waitForDisplayed();
       await object.clearValue();
       return await object.setValue(value);
    }
    
    
    

} export default new loginPage() 