const{expect,test}=require("@playwright/test")

test('Loacate Multiple Element',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    const links=await page.$$('a');
    for(const link of links){
        console.log(await link.textContent());
    }

    const products=await page.$$("//div[@id='tbodyid']//div//h4/a");
    for(const product of products){
        console.log(await product.textContent());
    }
})