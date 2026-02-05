const{test,expect}=require('@playwright/test')

test('AssertionTest',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    const logo=await page.locator("//img[@alt='nopCommerce demo store']");
    await expect(logo).toBeVisible();

    const serchBox=await page.locator("//input[@id='small-searchterms']");
    await expect(serchBox).toBeEnabled();

    await page.locator("//input[@id='gender-male']").check();
    const maleRadio=await page.locator("//input[@id='gender-male']");
    await expect(maleRadio).toBeChecked();

    await expect(page.locator("//input[@id='NewsLetterSubscriptions_0__IsActive']")).toBeChecked();

    const registerButton=await page.locator("//button[@id='register-button']");
    await expect(registerButton).toHaveAttribute('type','submit');

    const registerText=await page.locator("//h1");
    //Complete Text
    await expect(registerText).toHaveText("Register");
    //Partial Text
    await expect(registerText).toContainText("Regi");
    const emailInput=await page.locator("//input[@id='Email']");
    await emailInput.fill('nikhil@gmail.com');
    await expect(emailInput).toHaveValue('nikhil@gmail.com');
   // await page.goBack();
    //await page.goto("https://demo.nopcommerce.com/books");
    //await expect(page.locator("//select[@id='products-orderby']//option")).toHaveCount(6);

})

test('Assertion2',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/books");
    //await page.goto("https://demo.nopcommerce.com/books");
    await expect(page.locator("//select[@id='products-orderby']//option")).toHaveCount(6);
})