const{test,expect}=require("@playwright/test")

test('Keyboard Actions',async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
    const textArea1=await page.locator("//textarea[@name='text1']");
    const textArea2=await page.locator("//textarea[@name='text2']");
    await textArea1.fill("Welcome");
    
    //ctrl+A Select The text
    await page.keyboard.press('Control+A');

    //ctrl+c
    await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    //ctrl+V
    await page.keyboard.press('Control+v');


    await page.waitForTimeout(5000);
})