const{test,expect}=require('@playwright/test')

test('Recorederd Video',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    await expect(page.locator("//a[@id='logout2']")).toBeVisible();
})