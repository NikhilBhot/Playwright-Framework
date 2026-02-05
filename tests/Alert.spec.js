const{test,expect}=require('@playwright/test');
const { openAsBlob } = require('node:fs');

test('Alert With Ok',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");

    //Enable Alert Handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator("//button[@id='alertBtn']").click();

})

test('Confirmation Alert Box',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");
    const conformationAlert=await page.locator("//button[@id='confirmBtn']");
    
    page.on('dialog',async dialog=>{
        await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    })
    await conformationAlert.scrollIntoViewIfNeeded();
    await conformationAlert.click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);

})

test.only('Promt Alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/#");

    await page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Nikhil");
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Nikhil! How are you today?");
})