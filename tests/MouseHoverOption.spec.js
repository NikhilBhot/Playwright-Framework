const{test,expect}=require('@playwright/test')

test('Mouse Hover Action',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const pointMe=await page.locator("//button[@class='dropbtn']");
    const mobiles=await page.locator("//div[@class='dropdown-content'] //a[text()='Mobiles']");

    //mouseHover

    await pointMe.hover();
    await mobiles.hover();
    await page.waitForTimeout(5000);
    await mobiles.click();
    await page.waitForTimeout(5000);
})