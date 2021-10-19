var assert = require('assert');

class wallet_page{

get walletIcon() { return $("//div[@class='sidebarCardContainerGrid'][1]");}  
get walletZapierIcon() { return $("//div[@class='sidebarCardContainerGrid grayscale'][1]");}
get walletSettingsIcon() { return $("//div[@class='sidebarCardContainerGrid'][2]");}
get walletMintIcon() { return $("//div[@class='sidebarCardContainerGrid'][3]");}
get walletManageIcon() { return $("//div[@class='sidebarCardContainerGrid'][4]");}
get walletSocialIcon() { return $("//div[@class='sidebarCardContainerGrid grayscale'][2]");}
get walletConnectIcon() { return $("//div[@class='sidebarCardContainerGrid grayscale'][3]");}
get walletInfraStructureIcon() { return $("//div[@class='sidebarCardContainerGrid grayscale'][4]/div[@class='sidebarCardText']");}

//#Wallet 
get walletHeaderText() { return $("//h2[.='Wallet']");}
get walletWalletNameText() { return $("//h1[.='default']");}
get walletDepositeBTN() { return $("//div[.='Deposit']");}
get walletWithdraweBTN() { return $("//div[.='Withdraw']");}
get walletAddWalletBTN() { return $(".walletSvg > svg > path:nth-of-type(1)");}

get walletDepositeCloseBTN() { return $("//div[@role='dialog']//span[@class='MuiButton-label']");}
get walletWithdrawBackBTN() { return $("//button[@class='MuiButtonBase-root MuiIconButton-root']");}


//#Settings
get SettingUpdateProfileBTN() { return $("//button[@value='0']");}
get SettingUpdateEmailBTN() { return $("//button[@value='1']");}
get SettingUpdatePasswordBTN() { return $("//button[@value='2']");}
get SettingUpdatePhoneBTN() { return $("//button[@value='3']");}
get SettingWalletBTN() { return $("//button[@value='4']");}
get SettingDeleteAccountBTN() { return $("//button[@value='5']");}

//#Mint
get MintNFTBTN() { return $("//div[@id='vertical-tabpanel-0']/div/div/div/div/div[1]");}
get MintTokenBTN() { return $("//div[@id='vertical-tabpanel-0']/div/div/div/div/div[2]");}



    async verifyWalletScreen(){

        try {
            
        
          await this.walletIcon.waitForDisplayed();
          await this.walletIcon.click();
          await this.walletDepositeBTN.waitForDisplayed();
          await this.walletDepositeBTN.click();
          await this.walletDepositeCloseBTN.waitForDisplayed();
          await this.walletDepositeCloseBTN.click();
          await this.walletWithdraweBTN.click();
          await this.walletWithdrawBackBTN.waitForDisplayed();
          await this.walletWithdrawBackBTN.waitForClickable();
          await this.walletWithdrawBackBTN.click();

          await this.walletZapierIcon.click();

          await this.walletSettingsIcon.click();
          await this.SettingUpdateProfileBTN.waitForDisplayed();
          await this.SettingUpdateProfileBTN.click();
          await this.SettingUpdateEmailBTN.click();
          await this.SettingUpdatePasswordBTN.click();
          await this.SettingUpdatePhoneBTN.click();
          await  this.SettingWalletBTN.click();
          await this.SettingDeleteAccountBTN.click();

          await  this.walletMintIcon.waitForDisplayed();
          await  this.walletMintIcon.click();
          await  this.MintNFTBTN.waitForDisplayed();
          await  this.MintTokenBTN.waitForDisplayed();

          await this.walletManageIcon.waitForDisplayed();
          await  this.walletManageIcon.click();
          
          await this.walletSocialIcon.waitForDisplayed();
          await  this.walletSocialIcon.click();

          await  this.walletConnectIcon.waitForDisplayed();
          await  this.walletConnectIcon.click();

          await  this.walletInfraStructureIcon.waitForDisplayed();
          await  this.walletInfraStructureIcon.click();

        } catch (error) {
            console.log("Error:-"+error);
            assert.fail(); 
        }

    }



















}export default new wallet_page();