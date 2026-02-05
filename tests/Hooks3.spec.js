const{test,expect}=require('@playwright/test')
let page;
test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    await page.locator("//a[@id='login2']").click();
    await page.locator("//input[@id='loginusername']").fill('pavanol');
    await page.locator("//input[@id='loginpassword']").fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
   // expect(await page.locator("//a[@id='logout2']")).toBeVisible();
})

test.afterAll(async()=>{
     await page.locator("//a[@id='logout2']").click();
})
test('Home Page test',async()=>{
   
    
     const count=await page.$$('.hrefch');
      expect(count).toHaveLength(9);
    
   
    await page.waitForTimeout(5000);
})

test('Add Product to cart',async()=>{
    

    await page.locator("//a[text()='Nokia lumia 1520']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();

    })
     //await page.locator("//a[@id='logout2']").click();

})
    