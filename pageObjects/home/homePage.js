var assert = require('assert');
import helpers from '../../resource/helpers';
class homePage_objects{
    get homeLink() { return $("//a[@href='/' and text()='Home']");}  
    get homeDocsLink() { return $("//a[@href='/docs' and text()='Docs']");} 
    get homeDemoLink() { return $("//a[@href='/demo' and text()='Demo']");} 
    get homeSignInLink() { return $("//a[@href='/auth/login' and text()='Sign In']");}
    get homeSignUpLink() { return $("//a[@href='/auth/register']");}
    get homeRelysiaLogoLink(){return $("//a[@href='/']//span[@class='logo_text__jR9ak']");}

    get homeFooterProduct(){return $("//h4[@class='title_base__2jph3 title_h4__1iKK3' and text()='PRODUCT']");}
    get homeFooterWallet(){return $("//a[@href='/app/wallet']");}
    get homeFooterDocumentation(){return $("//a[@href='/docs' and text()='Documentation']");}
    get homeFooterGameDemo(){return $("//a[@href='/demo' and text()='Game Demo']");}
    get homeFooterRelysiaSDK(){return $("//a[@href='https://docs.relysia.com/' and text()='Relysia SDK']");}
    
    
    get homeFooterCOMPANY(){return $("//h4[@class='title_base__2jph3 title_h4__1iKK3' and text()='COMPANY']");}
    get homeFooterAbout(){return $("//a[@href='https://vaionex.com/applications' and text()='About']");}
    get homeFooterCareers(){return $("//a[@href='https://vaionex.com/jobs' and text()='Careers']");}
    get homeFooterBlog(){return $("//a[@href='/blog' and text()='Blog']");}
    get homeFooterContact(){return $("//a[@href='/contact' and text()='Contact']");}

    get homeFooterSUPPORT(){return $("//h4[@class='title_base__2jph3 title_h4__1iKK3' and text()='SUPPORT']");}
    get homeFooterSupportCenter(){return $("//a[@href='/' and text()='Support Center']");}
    get homeFooterSupportHelpDesk(){return $("//a[@href='/' and text()='Help Desk']");}
    get homeFooterFAQ(){return $("//a[@href='/faq' and text()='FAQ']");}
    get homeFooterTernCondi(){return $("//a[@href='/about' and text()='Terms & Conditions']");}


    ///# SignUp 
    get homeSignUpHeader(){return $("//h3[@class='title_base__2jph3 title_h3__8OtNk']");}
    get SignUpBetaSecret(){return $("//input[@type='password' and  @placeholder='Beta Secret']");}
    get SignUpEmail(){return $("//input[@type='text' and  @placeholder='E-mail']");}
    get SignUpDisplayName(){return $("//input[@type='text' and  @placeholder='Display Name']");}
    get SignUpPassword(){return $("//input[@type='password' and  @placeholder='Password']");}
    get SignUpButton(){return $("//div[@id='__next']/div[1]//form/div[5]/button");}
    get SignUpAlreadyAccount(){return $("//div[@class='flex justify-evenly mt-1 text-center w-full']");}
    get profileIcon() {return $("//div[@class='user-dropdown_info__3cHs4 user-dropdown_light__1nyts']")}


    async verifyHomePage(){
        try {
            await this.homeLink.waitForDisplayed();
            await this.homeDocsLink.waitForDisplayed();
            await this.homeDemoLink.waitForDisplayed();
            await this.homeSignInLink.waitForDisplayed();
            await this.homeSignUpLink.waitForDisplayed();
            await this.homeRelysiaLogoLink.waitForDisplayed();

            await this.homeFooterProduct.scrollIntoView();
            await this.homeFooterWallet.waitForDisplayed();
            await this.homeFooterDocumentation.waitForDisplayed();
            await this.homeFooterGameDemo.waitForDisplayed();
            await this.homeFooterRelysiaSDK.waitForDisplayed();
            await this.homeFooterProduct.waitForDisplayed();

            await this.homeFooterCOMPANY.waitForDisplayed();
            await this.homeFooterAbout.waitForDisplayed();
            await this.homeFooterCareers.waitForDisplayed();
            await this.homeFooterBlog.waitForDisplayed();
            await this.homeFooterContact.waitForDisplayed();

            await this.homeFooterSUPPORT.waitForDisplayed();
            await this.homeFooterSupportCenter.waitForDisplayed();
            await this.homeFooterSupportHelpDesk.waitForDisplayed();
            await this.homeFooterFAQ.waitForDisplayed();
            await this.homeFooterTernCondi.waitForDisplayed();

            
        } catch (error) {
            console.log("Error:-"+error);
            assert.fail();
            
        }
    }
    
    async SignuptoRelysia(){
        try {
           
            await this.homeSignUpLink.click();
            await expect(browser).toHaveUrlContaining('/auth/register');
            await helpers.setValue(this.SignUpBetaSecret,'Vaionex!42');
            await helpers.setValue(this.SignUpEmail,helpers.randomEmailGenerator());
            await helpers.setValue(this.SignUpDisplayName,'Aman');
            await helpers.setValue(this.SignUpPassword,'Pass1234');
            await this.SignUpButton.click();
            await expect(browser).toHaveUrlContaining('/app/wallet');
            await this.profileIcon.waitForDisplayed();
           
        } catch (error) {
            console.log("Error:-"+error);
            assert.fail();
            
        }



        }
}export default new homePage_objects() 


