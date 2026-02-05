const{test,expect}=require("@playwright/test")

test("Locators",async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    //await page.locator("loactor->css/property/xpath");
    //click on login button
    await page.locator('id=login2').click();
    
    //provoide userName
    await page.locator("#loginusername").fill('pavanol');
    //or await page.locator("#loginusername").type("pavanol");
   
    //await page.click('loactor->css/property/xpath')
   // await page.click('id=login2');
    //await page.fill('#loginusername','pavanol');
    //or await page.type('#loginusername','pavanol');

    //provoide password

    await page.fill("//input[@id='loginpassword']","test@123");
    //or await page.type("//input[@id='loginpassword']","test@123");
    //or await page.locator("//input[@id='loginpassword']").type("test@123");
    //or await page.locator("//input[@id='loginpassword']").fill("test@123");

    //click on login button
    await page.click("//button[normalize-space()='Log in']");

    //verify logout linl presence
    const logoutLink=await page.locator("//a[@id='logout2']");
    await expect(logoutLink).toBeVisible();

    await page.close(); 
})