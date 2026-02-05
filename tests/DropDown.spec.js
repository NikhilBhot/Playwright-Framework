const{test,epxect, expect}=require('@playwright/test')

test('Handle Dropdown',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("//select[@id='country']").selectOption("canada");
    //await page.locator("//select[@id='country']").selectOption({label:"India"});
  //  await page.locator("//select[@id='country']").selectOption({index:4});
    await  page.selectOption("//select[@id='country']",'canada');
    await page.waitForTimeout(5000);

    //Assertion
   // 1 check Number of opetions in dd
    const option1=await page.$$("//select[@id='country'] //option");
    console.log(option1.length);
    const option=await page.locator("//select[@id='country'] //option");
    await expect(option1.length).toBe(10);

    const content=await page.locator('#country').textContent();
    console.log(content);
    await expect(content.includes("India")).toBeTruthy();

    const option3=await page.$$('#country option');
    let status=false;
    for(const option4 of option3){
        let value=await option4.textContent();
        if(value.includes('India'));
        {
            status=true;
            break;
        }
        //console.log(await option4.textContent());

    }
    await expect(status).toBeTruthy();
})

