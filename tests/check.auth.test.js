import { expect } from 'chai';

describe('Test login', ()=> {
    beforeEach(() =>{
        browser.url('https://loyalty.pinbonus.com');
    })

    it('should have recapcha alert', () => {
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#email_address').addValue('piractvo@gmail.com');
        $('#password').addValue('12345678');
        $('#qiwiAuthPopupSubmit').click();
        const recapchaAlert = $('.modal_form-field-recapcha.has-error .modal_form-field_error').getText();
        expect(recapchaAlert).to.equal('Подтвердите, что вы не робот');
    });

    it('should have alerts for blank fields', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#qiwiAuthPopupSubmit').click();
        const emailError = $('#email_address-error').getText();
        const passwordError = $('#password-error').getText();
        expect(emailError).to.equal('Необходимо ввести адрес электронной почты.');
        expect(passwordError).to.equal('Необходимо ввести пароль.');
    });

    it('should have alert for incorrect email', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#qiwiAuthPopupSubmit').click();
        $('#email_address').addValue('test');
        const emailError = $('#email_address-error').getText();
        const passwordError = $('#password-error').getText();
        expect(emailError).to.equal('Неверный адрес эл. почты');
        expect(passwordError).to.equal('Необходимо ввести пароль.');
    });

    it('should have alert for simple password', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#password').addValue('12345');
        $('#qiwiAuthPopupSubmit').click();
        const emailError = $('#email_address-error').getText();
        const passwordError = $('#password-error').getText();
        expect(emailError).to.equal('Необходимо ввести адрес электронной почты.');
        expect(passwordError).to.equal('Минимальная длина пароля составляет 6 символов.');
    });
});