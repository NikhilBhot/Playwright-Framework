const{test,expect}=require('@playwright/test')

test('Test1',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})


test('Test2',async({page})=>{
    test.slow();
    
    await page.goto('https://www.google.com/');
    await page.waitForURL();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle('Google');
})

test('Test3',async({page})=>{   
    test.slow();
    await page.goto('https://demo.nopcommerce.com');
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
    
})