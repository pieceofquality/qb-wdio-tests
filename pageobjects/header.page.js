import Page from "./page";

class HeaderPage extends Page {
    get userAccountName(){return $('#qw-nav .user_account-name')};
    get logOutBtn(){return $('#logoutLink')};
    get loginBtn() {return $('[data-target="#qiwiAuthPopup"]');}  
}

export default new HeaderPage();