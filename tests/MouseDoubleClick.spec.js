const{test,expect}=require("@playwright/test")

test("Mouse Double Click Action",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.locator("//button[text()='Copy Text']").dblclick();
    expect(await page.locator("//input[@id='field2']")).toHaveValue("Hello World!");
    await page.waitForTimeout(5000);
})

