const{test,expect}=require('@playwright/test')

test('Handle Multiselect DropDown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//select[@id='colors']").selectOption(['Red','Blue','Green']);

    //assertion
    //1]check number of options in DD

    const options=await page.locator("//select[@id='colors']//option");
    console.log(await options.count());
    expect(options).toHaveCount(7);

    //2] check number ofoptions in dropdown using JS array
    const option1=await page.$$("//select[@id='colors']//option");
    await expect(option1.length).toBe(7);
   console.log(await option1.length);
    await page.waitForTimeout(5000);

    //Check presence of options in DD
    const content=await page.locator("//select[@id='colors']").textContent();
    await expect(content.includes("Blueeee")).toBeFalsy();
    await expect(content.includes("Blue")).toBeTruthy();
})