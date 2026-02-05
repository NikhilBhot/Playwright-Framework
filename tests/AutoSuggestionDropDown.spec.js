const{test,epxect}=require('@playwright/test')

test('Auto Suggestion DropDown',async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Home");
    const home=await page.$$("//div[@class='s-suggestion-container']");
    for(let options of home){
        const result=await options.textContent(); 
        console.log(await result);
        if(result.includes('home decoration items for living room')){
            await options.click();
        }
        
    }
    await page.waitForTimeout(5000);
})

