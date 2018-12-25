const assert = require('assert');

describe('Test login', ()=> {
    beforeEach(() =>{
        browser.url('https://loyalty.pinbonus.com');
    })

    it('should have recapcha alert', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#email_address').addValue('piractvo@gmail.com');
        $('#password').addValue('12345678');
        $('#qiwiAuthPopupSubmit').click();
        assert.strictEqual($('.modal_form-field-recapcha.has-error .modal_form-field_error').getText(), 'Подтвердите, что вы не робот')
    });

    it('should have alerts for blank fields', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#qiwiAuthPopupSubmit').click();
        assert.strictEqual($('#email_address-error').getText(), 'Необходимо ввести адрес электронной почты.');
        assert.strictEqual($('#password-error').getText(), 'Необходимо ввести пароль.');
    });

    it('should have alert for incorrect email', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#qiwiAuthPopupSubmit').click();
        $('#email_address').addValue('test');
        assert.strictEqual($('#email_address-error').getText(), 'Неверный адрес эл. почты');
        assert.strictEqual($('#password-error').getText(), 'Необходимо ввести пароль.')
    });

    it('should have alert for simple password', ()=>{
        $('[data-target="#qiwiAuthPopup"]').click();
        $('#password').addValue('12345');
        $('#qiwiAuthPopupSubmit').click();
        assert.strictEqual($('#email_address-error').getText(), 'Необходимо ввести адрес электронной почты.');
        assert.strictEqual($('#password-error').getText(), 'Минимальная длина пароля составляет 6 символов.');
    });

});