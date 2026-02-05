const{expect,test}=require('@playwright/test')

test('Handle Input Box',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();
    await page.locator("//input[@id='name']").fill("Nikhil");
    //await expect(page.locator())
    await page.locator("//input[@id='email']").fill("bhotnikhil25@gamil.com");
    await page.fill("//input[@id='phone']","12345678900");
})