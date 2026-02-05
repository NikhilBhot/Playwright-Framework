const{test,expect}=require('@playwright/test')

test("Handle Hidden Dropdown",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();


    await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();
    await page.waitForTimeout(5000);
})