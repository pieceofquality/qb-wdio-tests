import Page from "./page";

class LoginPage extends Page {
 
    get email () { return $('#email_address'); }
    get password () { return $('#password'); }
    get submitBtn () { return $('#qiwiAuthPopupSubmit'); }
    get emailAlert () {return $('#email_address-error'); }
    get recapchaAlert() {return $('.modal_form-field-recapcha.has-error .modal_form-field_error'); }
    get passwordAlert() {return $('#password-error');}
    


    login (email, password) {
        this.email.addValue(email);
        this.password.addValue(password);
        this.submitBtn.click();
    }
}

export default new LoginPage();