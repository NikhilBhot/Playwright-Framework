const{test,expect}=require("@playwright/test")

test("Darg And Drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");
    const source=await page.locator("//div[@id='draggable']");
    const target=await page.locator("//div[@id='droppable']");

    /*
    //Approch 1
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();
    await page.waitForTimeout(5000);

    */

    await source.dragTo(target);
    await expect(target).toHaveText("Dropped!");
    await page.waitForTimeout(5000);

    
    
})