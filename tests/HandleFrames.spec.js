const{test,expect}=require('@playwright/test')

test('Handle Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    //total frames

    const allFrames=await page.frames();
    console.log("Number Of Frmes:",allFrames.length);

    //Approch 1 using name or url
    //const var =await  page.frame(name)
    const frame_1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    await frame_1.locator("//input[@name='mytext1']").fill("Nikhil");
    await expect(frame_1.locator("//input[@name='mytext1']")).toHaveValue("Nikhil");
    
})