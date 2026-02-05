const{expect,test}=require('@playwright/test')

test('Home Page',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    const pageTitle= await page.title();
    console.log("Page Title:",pageTitle);
    await expect(page).toHaveTitle('STORE');

    const pageUrl=await page.url();
    console.log("Page URL:",pageUrl);
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await page.close();
    
});
