const{test,expect,chromium}=require('@playwright/test')

test('Handle Pages/Windows',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const page=await context.newPage();
    const page1=await context.newPage();

    const allPages=context.pages();
    console.log(allPages.length);


    await page.goto("https://www.demoblaze.com/index.html");
    console.log(await page.title());
    await expect(page).toHaveTitle('STORE');

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(await page1.title());
    await expect(page1).toHaveTitle('OrangeHRM');


})

test.only('Handle Multiple Pages/widows',async()=>{
    test.setTimeout(15000);
        const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

    const pagePromise=context.waitForEvent('page')
    await page.locator("a[href='http://www.orangehrm.com']").click();

    const newPage=await pagePromise;
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
})