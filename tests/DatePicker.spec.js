const{test,expect}=require("@playwright/test")


test('Date Picker',async({page})=>{
    await page.goto("http://testautomationpractice.blogspot.com/");

    //await page.locator("//input[@id='datepicker']").fill("03/05/2027");
    const year='2027';
    const month='March';
    const date='4';

    await page.locator("//input[@id='datepicker']").click();
    while(true){
        const currentMonth=await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent();
        if(currentMonth==month && currentYear ==year){

            break;
        }
        else{
            await page.locator("//a[@title='Next']").click();
        }
    }

    const allDates=await page.$$("//a[@class='ui-state-default']");
    /*
    for(const dt of allDates){
        //console.log(await dt.textContent());
        //console.log(await dt);
        if(await dt.textContent()==date){
            //await page.locator("//a[@class='ui-state-default']").click();
            await dt.click();
            break;
        }
    }
    const selectedDate=await page.locator("//input[@id='datepicker']").textContent();
    console.log(selectedDate);
   // console.log(await page.locator("//input[@id='datepicker']").textContent());
    */

   //date selection
   await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();
    await page.waitForTimeout(5000);
})





/*
test("Date Picker",async({page})=>{
    const month='May';
    const year=2027;
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='datepicker']").click();
    const currentyear=await page.locator("//span[@class='ui-datepicker-year']").textContent();
    const dateCurrent=await page.locator("//div[@class='ui-datepicker-title']").textContent();
    console.log(dateCurrent);
    console.log(currentyear);
    do{
        if(year>currentyear){
        
            await page.locator("//a[@data-handler='next']").click();          
    }
    }
    while(currentyear==year);
    
    await page.waitForTimeout(5000);

})

*/