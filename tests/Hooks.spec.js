const{test,expect}=require('@playwright/test')

test.only('Home Page test',async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForSelector("//a[@id='logout2']");
    expect(await page.locator("//a[@id='logout2']")).toBeVisible();
    expect(await page.$$("//a[@class='hrefch']")).toHaveLength(9);
    await page.locator("//a[@id='logout2']").click();
    await page.waitForTimeout(5000);
})

test('Add Product to cart',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.locator("//a[text()='Nokia lumia 1520']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("Prdouct Added");
        await dialog.accept();

    })
     await page.locator("//a[@id='logout2']").click();

})
    