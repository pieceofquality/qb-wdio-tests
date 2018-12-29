import LoginPage from '../pageobjects/login.page'
import HeaderPage from '../pageobjects/header.page'

describe('Test login', ()=> {
    
    beforeEach(() =>{
        browser.url('/');
    })

    xit('should have recapcha alert', () => {
        HeaderPage.loginBtn.click();
        LoginPage.login("piractvo@gmail.com", "123456");
        expect(LoginPage.recapchaAlert.getText()).to.equal('Подтвердите, что вы не робот');
    });

    xit('should be successful authorization and logout', () => {
        HeaderPage.loginBtn.click();
        LoginPage.login("piractvo@gmail.com", "Pa$$w0rd!");
        expect(HeaderPage.userAccountName.getText()).to.equal('piractvo@gmail.com');
        HeaderPage.logOutBtn.click();
        browser.pause(5000);
        HeaderPage.loginBtn.isDisplayed();
    });

    it('should have alerts for in', () => {
        HeaderPage.loginBtn.click();
        LoginPage.login('piractvo@gm.com', '123456');
        // browser.pause(10000);
        expect(LoginPage.emailAlert.getText()).to.equal('Такой пользователь не найден - зарегистрируйтесь!');
    });

    xit('should have alerts for blank fields', ()=>{
        HeaderPage.loginBtn.click();
        LoginPage.login("", "");
        expect(LoginPage.emailAlert.getText()).to.equal('Необходимо ввести адрес электронной почты.');
        expect(LoginPage.passwordAlert.getText()).to.equal('Необходимо ввести пароль.');
    });

    xit('should have alert for incorrect email', ()=>{
        HeaderPage.loginBtn.click();
        LoginPage.login("test", "");
        expect(LoginPage.emailAlert.getText()).to.equal('Неверный адрес эл. почты');
        expect(LoginPage.passwordAlert.getText()).to.equal('Необходимо ввести пароль.');
    });

    xit('should have alert for simple password', ()=>{
        HeaderPage.loginBtn.click();
        LoginPage.login('', '12345');
        expect(LoginPage.emailAlert.getText()).to.equal('Необходимо ввести адрес электронной почты.');
        expect(LoginPage.passwordAlert.getText()).to.equal('Минимальная длина пароля составляет 6 символов.');
    });
});