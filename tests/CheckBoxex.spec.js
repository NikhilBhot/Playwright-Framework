const{expect,test}=require('@playwright/test')

test('Handle Check Box',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //single check box

    await expect(page.locator("//input[@id='monday']")).not.toBeChecked();
    await page.locator("//input[@id='monday']").check();
    await expect(page.locator("//input[@id='monday']")).toBeChecked();
    const result=await page.locator("//input[@id='monday']").isChecked();
    await expect(result).toBeTruthy();

   //  await expect(page.locator("//input[@id='monday']")).not.toBeChecked()

    //Multiple CheckBox

    const checkBoxesLoactor=["//input[@id='monday']",
                        "//input[@id='tuesday']"
    ];

    for(const checkbox of checkBoxesLoactor){
        await page.locator(checkbox).check();
    }

    for(const checkbox of checkBoxesLoactor){
        if(await page.locator(checkbox).isChecked()){
            await page.locator(checkbox).uncheck();
        }
    }
    await page.waitForTimeout(5000);
})