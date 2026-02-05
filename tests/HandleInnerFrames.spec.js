const{test,expect}=require('@playwright/test');
const { waitForDebugger } = require('node:inspector');

test('Handle InnerFrame',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame_3=await page.frame( {url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    await frame_3.locator("//input[@name='mytext3']").fill("Nikhil");

    //nested Frames
    const childFrames=await frame_3.childFrames();
    await page.waitForLoadState();
    
    await childFrames[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']").check()
    await expect(childFrames[0].locator("//div[@id='i6']//div[@class='AB7Lab Id5V1']")).toBeChecked();
    //await page.waitForTimeout(5000);
    //await frame_3.waitForTimeout(5000);
})