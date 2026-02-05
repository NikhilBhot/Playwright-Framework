const{test,epxect}=require('@playwright/test');
const { openAsBlob } = require('node:fs');

test('Page ScreenShot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    //await page.waitForLoadState('networkidle');
    //await page.screenshot({path:'Home.png'});
    await page.screenshot({ path: 'F:/YoutubePlaywright/tests/Screenshot/'+Date.now()+'HomePage.png'});
})

test('Full Page Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
 await page.screenshot({ path: 'F:/YoutubePlaywright/tests/Screenshot/'+Date.now()+'FullPage.png',fullPage:true});
})

test('Elements Screenshot',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
   // await page.waitForSelector("//a[normalize-space()='Desktops']");
    await page.locator("//div[@id='tbodyid']//div[1]//div[1]//div[1]").screenshot({path:'F:/YoutubePlaywright/tests/Screenshot/'+Date.now()+'Element.png'});
})