const{test,expect}=require('@playwright/test')

test('Handle Radio Button',async({page})=>{
    await page.goto("http://testautomationpractice.blogspot.com/")

    const maleRadioButton=await page.locator("//input[@id='male']");
    await expect(maleRadioButton).not.toBeChecked();
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();
    await page.waitForTimeout(5000);

    const femaleRadioButton=await page.locator("//input[@id='female']");
    await expect(femaleRadioButton).not.toBeChecked();
    const result=await femaleRadioButton.isChecked();
    console.log(result);
    await expect(result).toBeFalsy();
   // await maleRadioButton.uncheck();
    //await page.waitForTimeout(5000);
})