exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink='#login2';
        this.usernameInput="//input[@id='loginusername']";
        this.passwordinput='#loginpassword'
        this.loginButton="//button[normalize-space()='Log in']"
    }
    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/");
    }

    async login(username,password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}