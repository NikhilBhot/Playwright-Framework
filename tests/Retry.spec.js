const{test,expect}=require('@playwright/test')
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
test('test',async({page})=>{
    test.setTimeout(10000);
    //without Pom
    /*
    await page.goto("https://www.demoblaze.com/");
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    */
    
    //1]Login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("pavanol","test@123");

    

    //2]Home
    const home=new HomePage(page);
    await home.addProductToCart("Samsung galaxy s6");
    
    await home.gotoCart();
    await page.waitForTimeout(2000);
    

    //3]cart
    const cart=new CartPage(page);
    const status=await cart.checkTheProductInCart("Samsung galaxy s6");
    console.log(await status);
    expect(await status).toBe(true);
    

})