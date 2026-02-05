const{test,expect}=require('@playwright/test')

test('Mouse Right Click Actions',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rightClickButton=await page.locator("//span[@class='context-menu-one btn btn-neutral']");
    await rightClickButton.click({button:'right'});
    await page.waitForTimeout(5000);
})